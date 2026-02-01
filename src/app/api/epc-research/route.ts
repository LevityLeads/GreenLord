import { NextRequest, NextResponse } from 'next/server';

// EPC API Configuration
const API_BASE_URL = 'https://epc.opendatacommunities.org/api/v1';

// Major cities for analysis
const MAJOR_CITIES: Record<string, string> = {
  'E08000003': 'Manchester',
  'E08000025': 'Birmingham',
  'E08000035': 'Leeds',
  'E06000023': 'Bristol',
  'E08000012': 'Liverpool',
  'E08000019': 'Sheffield',
  'E08000021': 'Newcastle',
  'E06000018': 'Nottingham',
  'E09000012': 'Hackney',
  'E08000016': 'Leicester',
};

const EPC_RATINGS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] as const;

interface RatingDistribution {
  rating: string;
  count: number;
  percentage: number;
}

interface CityAnalysis {
  city: string;
  localAuthority: string;
  totalRecords: number;
  averageEfficiency: number;
  belowCPercentage: number;
  distribution: RatingDistribution[];
  byPropertyType: Record<string, { count: number; belowCPercentage: number }>;
  byBuiltForm: Record<string, { count: number; belowCPercentage: number }>;
}

interface EPCRecord {
  'current-energy-rating': string;
  'current-energy-efficiency': string;
  'property-type': string;
  'built-form': string;
  'construction-age-band': string;
}

function getAuthHeader(): Record<string, string> {
  const email = process.env.EPC_API_EMAIL;
  const apiKey = process.env.EPC_API_KEY;

  if (!email || !apiKey) {
    throw new Error('EPC_API_EMAIL and EPC_API_KEY must be set');
  }

  const credentials = Buffer.from(`${email}:${apiKey}`).toString('base64');
  return {
    'Authorization': `Basic ${credentials}`,
    'Accept': 'text/csv',
  };
}

function parseCSV(csvText: string): EPCRecord[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  const records: EPCRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const record: Record<string, string> = {};
    headers.forEach((header, index) => {
      record[header] = values[index]?.trim() || '';
    });
    records.push(record as unknown as EPCRecord);
  }

  return records;
}

async function fetchEPCData(localAuthority: string): Promise<EPCRecord[]> {
  const headers = getAuthHeader();
  const url = `${API_BASE_URL}/domestic/search?local-authority=${localAuthority}&size=5000`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const csvText = await response.text();
  return parseCSV(csvText);
}

function analyzeRatings(records: EPCRecord[]): {
  distribution: RatingDistribution[];
  belowCPercentage: number;
  averageEfficiency: number;
} {
  const total = records.length;
  if (total === 0) {
    return { distribution: [], belowCPercentage: 0, averageEfficiency: 0 };
  }

  const counts: Record<string, number> = {};
  EPC_RATINGS.forEach(r => counts[r] = 0);

  let efficiencySum = 0;
  let efficiencyCount = 0;

  records.forEach(record => {
    const rating = record['current-energy-rating'];
    if (rating && counts[rating] !== undefined) {
      counts[rating]++;
    }

    const efficiency = parseInt(record['current-energy-efficiency'], 10);
    if (!isNaN(efficiency)) {
      efficiencySum += efficiency;
      efficiencyCount++;
    }
  });

  const distribution = EPC_RATINGS.map(rating => ({
    rating,
    count: counts[rating],
    percentage: Math.round((counts[rating] / total) * 1000) / 10,
  }));

  const belowC = counts['D'] + counts['E'] + counts['F'] + counts['G'];
  const belowCPercentage = Math.round((belowC / total) * 1000) / 10;
  const averageEfficiency = efficiencyCount > 0
    ? Math.round(efficiencySum / efficiencyCount)
    : 0;

  return { distribution, belowCPercentage, averageEfficiency };
}

function analyzeByField(
  records: EPCRecord[],
  field: keyof EPCRecord
): Record<string, { count: number; belowCPercentage: number }> {
  const groups: Record<string, EPCRecord[]> = {};

  records.forEach(record => {
    const value = record[field];
    if (value) {
      if (!groups[value]) groups[value] = [];
      groups[value].push(record);
    }
  });

  const result: Record<string, { count: number; belowCPercentage: number }> = {};

  Object.entries(groups).forEach(([key, groupRecords]) => {
    if (groupRecords.length >= 10) {
      const analysis = analyzeRatings(groupRecords);
      result[key] = {
        count: groupRecords.length,
        belowCPercentage: analysis.belowCPercentage,
      };
    }
  });

  return result;
}

async function analyzeSingleCity(localAuthority: string, cityName: string): Promise<CityAnalysis | null> {
  try {
    const records = await fetchEPCData(localAuthority);

    if (records.length === 0) {
      return null;
    }

    const ratings = analyzeRatings(records);

    return {
      city: cityName,
      localAuthority,
      totalRecords: records.length,
      averageEfficiency: ratings.averageEfficiency,
      belowCPercentage: ratings.belowCPercentage,
      distribution: ratings.distribution,
      byPropertyType: analyzeByField(records, 'property-type'),
      byBuiltForm: analyzeByField(records, 'built-form'),
    };
  } catch (error) {
    console.error(`Error analyzing ${cityName}:`, error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check for API credentials
    if (!process.env.EPC_API_EMAIL || !process.env.EPC_API_KEY) {
      return NextResponse.json(
        { error: 'EPC API credentials not configured' },
        { status: 500 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const city = searchParams.get('city');

    // If specific city requested
    if (city && MAJOR_CITIES[city]) {
      const result = await analyzeSingleCity(city, MAJOR_CITIES[city]);

      if (!result) {
        return NextResponse.json(
          { error: 'Failed to fetch data for city' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        data: result,
        generatedAt: new Date().toISOString(),
      });
    }

    // Otherwise, analyze all cities
    const results: CityAnalysis[] = [];

    for (const [laCode, cityName] of Object.entries(MAJOR_CITIES)) {
      const result = await analyzeSingleCity(laCode, cityName);
      if (result) {
        results.push(result);
      }
    }

    // Sort by worst compliance
    results.sort((a, b) => b.belowCPercentage - a.belowCPercentage);

    return NextResponse.json({
      success: true,
      data: results,
      summary: {
        totalCities: results.length,
        totalRecords: results.reduce((sum, r) => sum + r.totalRecords, 0),
        averageBelowC: Math.round(
          results.reduce((sum, r) => sum + r.belowCPercentage, 0) / results.length * 10
        ) / 10,
      },
      generatedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error('EPC Research API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
