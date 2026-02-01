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

// Average upgrade costs by current rating (realistic UK estimates)
const UPGRADE_COSTS: Record<string, number> = {
  'D': 5500,   // D to C average
  'E': 8500,   // E to C average
  'F': 12000,  // F to C average
  'G': 18000,  // G to C average
};

// Age band categories for grouping
const AGE_BAND_CATEGORIES: Record<string, string[]> = {
  'Victorian (pre-1900)': ['England and Wales: before 1900', 'before 1900'],
  'Edwardian (1900-1918)': ['England and Wales: 1900-1929', '1900-1929'],
  '1919-1944': ['England and Wales: 1930-1949', '1930-1949'],
  '1945-1964': ['England and Wales: 1950-1966', '1950-1966'],
  '1965-1982': ['England and Wales: 1967-1975', 'England and Wales: 1976-1982', '1967-1975', '1976-1982'],
  '1983-1995': ['England and Wales: 1983-1990', 'England and Wales: 1991-1995', '1983-1990', '1991-1995'],
  '1996-2006': ['England and Wales: 1996-2002', 'England and Wales: 2003-2006', '1996-2002', '2003-2006'],
  '2007-2012': ['England and Wales: 2007-2011', 'England and Wales: 2012 onwards', '2007-2011', '2007 onwards'],
  '2012+': ['England and Wales: 2012 onwards', '2012 onwards'],
};

const EPC_RATINGS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] as const;

interface RatingDistribution {
  rating: string;
  count: number;
  percentage: number;
}

interface SegmentAnalysis {
  name: string;
  count: number;
  belowCCount: number;
  belowCPercentage: number;
  averageEfficiency: number;
  estimatedUpgradeCost: number;
}

interface CityAnalysis {
  city: string;
  localAuthority: string;
  totalRecords: number;
  averageEfficiency: number;
  belowCPercentage: number;
  belowCCount: number;
  distribution: RatingDistribution[];
  estimatedTotalUpgradeCost: number;
  byPropertyType: SegmentAnalysis[];
  byBuiltForm: SegmentAnalysis[];
  byAgeBand: SegmentAnalysis[];
  worstSegment: { name: string; percentage: number; type: string };
}

interface EPCRecord {
  'current-energy-rating': string;
  'current-energy-efficiency': string;
  'property-type': string;
  'built-form': string;
  'construction-age-band': string;
}

interface NationalLeaderboard {
  propertyTypes: SegmentAnalysis[];
  builtForms: SegmentAnalysis[];
  ageBands: SegmentAnalysis[];
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

function calculateUpgradeCost(records: EPCRecord[]): number {
  let totalCost = 0;
  records.forEach(record => {
    const rating = record['current-energy-rating'];
    if (UPGRADE_COSTS[rating]) {
      totalCost += UPGRADE_COSTS[rating];
    }
  });
  return totalCost;
}

function analyzeRatings(records: EPCRecord[]): {
  distribution: RatingDistribution[];
  belowCPercentage: number;
  belowCCount: number;
  averageEfficiency: number;
  estimatedUpgradeCost: number;
} {
  const total = records.length;
  if (total === 0) {
    return { distribution: [], belowCPercentage: 0, belowCCount: 0, averageEfficiency: 0, estimatedUpgradeCost: 0 };
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

  const belowCCount = counts['D'] + counts['E'] + counts['F'] + counts['G'];
  const belowCPercentage = Math.round((belowCCount / total) * 1000) / 10;
  const averageEfficiency = efficiencyCount > 0
    ? Math.round(efficiencySum / efficiencyCount)
    : 0;

  const estimatedUpgradeCost = calculateUpgradeCost(records);

  return { distribution, belowCPercentage, belowCCount, averageEfficiency, estimatedUpgradeCost };
}

function categorizeAgeBand(ageBand: string): string | null {
  for (const [category, patterns] of Object.entries(AGE_BAND_CATEGORIES)) {
    if (patterns.some(pattern => ageBand.toLowerCase().includes(pattern.toLowerCase()))) {
      return category;
    }
  }
  // Try to match partial patterns
  if (ageBand.includes('before 1900') || ageBand.includes('pre-1900')) return 'Victorian (pre-1900)';
  if (ageBand.includes('1900') || ageBand.includes('1910') || ageBand.includes('1920')) return 'Edwardian (1900-1918)';
  return null;
}

function analyzeByFieldEnhanced(
  records: EPCRecord[],
  field: keyof EPCRecord,
  useAgeBandCategories: boolean = false
): SegmentAnalysis[] {
  const groups: Record<string, EPCRecord[]> = {};

  records.forEach(record => {
    let value = record[field];

    if (useAgeBandCategories && field === 'construction-age-band') {
      const category = categorizeAgeBand(value);
      if (category) {
        value = category;
      } else {
        return; // Skip unknown age bands
      }
    }

    if (value) {
      if (!groups[value]) groups[value] = [];
      groups[value].push(record);
    }
  });

  const results: SegmentAnalysis[] = [];

  Object.entries(groups).forEach(([key, groupRecords]) => {
    if (groupRecords.length >= 10) {
      const analysis = analyzeRatings(groupRecords);
      results.push({
        name: key,
        count: groupRecords.length,
        belowCCount: analysis.belowCCount,
        belowCPercentage: analysis.belowCPercentage,
        averageEfficiency: analysis.averageEfficiency,
        estimatedUpgradeCost: analysis.estimatedUpgradeCost,
      });
    }
  });

  // Sort by worst compliance
  results.sort((a, b) => b.belowCPercentage - a.belowCPercentage);

  return results;
}

function findWorstSegment(city: CityAnalysis): { name: string; percentage: number; type: string } {
  let worst = { name: 'N/A', percentage: 0, type: 'unknown' };

  city.byPropertyType.forEach(segment => {
    if (segment.belowCPercentage > worst.percentage && segment.count >= 50) {
      worst = { name: segment.name, percentage: segment.belowCPercentage, type: 'property type' };
    }
  });

  city.byAgeBand.forEach(segment => {
    if (segment.belowCPercentage > worst.percentage && segment.count >= 50) {
      worst = { name: segment.name, percentage: segment.belowCPercentage, type: 'age band' };
    }
  });

  city.byBuiltForm.forEach(segment => {
    if (segment.belowCPercentage > worst.percentage && segment.count >= 50) {
      worst = { name: segment.name, percentage: segment.belowCPercentage, type: 'built form' };
    }
  });

  return worst;
}

async function analyzeSingleCity(localAuthority: string, cityName: string): Promise<CityAnalysis | null> {
  try {
    const records = await fetchEPCData(localAuthority);

    if (records.length === 0) {
      return null;
    }

    const ratings = analyzeRatings(records);
    const byPropertyType = analyzeByFieldEnhanced(records, 'property-type');
    const byBuiltForm = analyzeByFieldEnhanced(records, 'built-form');
    const byAgeBand = analyzeByFieldEnhanced(records, 'construction-age-band', true);

    const cityAnalysis: CityAnalysis = {
      city: cityName,
      localAuthority,
      totalRecords: records.length,
      averageEfficiency: ratings.averageEfficiency,
      belowCPercentage: ratings.belowCPercentage,
      belowCCount: ratings.belowCCount,
      distribution: ratings.distribution,
      estimatedTotalUpgradeCost: ratings.estimatedUpgradeCost,
      byPropertyType,
      byBuiltForm,
      byAgeBand,
      worstSegment: { name: 'N/A', percentage: 0, type: 'unknown' },
    };

    cityAnalysis.worstSegment = findWorstSegment(cityAnalysis);

    return cityAnalysis;
  } catch (error) {
    console.error(`Error analyzing ${cityName}:`, error);
    return null;
  }
}

function aggregateNationalLeaderboard(cities: CityAnalysis[]): NationalLeaderboard {
  const propertyTypeMap: Record<string, { records: number; belowC: number; efficiency: number[]; cost: number }> = {};
  const builtFormMap: Record<string, { records: number; belowC: number; efficiency: number[]; cost: number }> = {};
  const ageBandMap: Record<string, { records: number; belowC: number; efficiency: number[]; cost: number }> = {};

  cities.forEach(city => {
    city.byPropertyType.forEach(segment => {
      if (!propertyTypeMap[segment.name]) {
        propertyTypeMap[segment.name] = { records: 0, belowC: 0, efficiency: [], cost: 0 };
      }
      propertyTypeMap[segment.name].records += segment.count;
      propertyTypeMap[segment.name].belowC += segment.belowCCount;
      propertyTypeMap[segment.name].efficiency.push(segment.averageEfficiency);
      propertyTypeMap[segment.name].cost += segment.estimatedUpgradeCost;
    });

    city.byBuiltForm.forEach(segment => {
      if (!builtFormMap[segment.name]) {
        builtFormMap[segment.name] = { records: 0, belowC: 0, efficiency: [], cost: 0 };
      }
      builtFormMap[segment.name].records += segment.count;
      builtFormMap[segment.name].belowC += segment.belowCCount;
      builtFormMap[segment.name].efficiency.push(segment.averageEfficiency);
      builtFormMap[segment.name].cost += segment.estimatedUpgradeCost;
    });

    city.byAgeBand.forEach(segment => {
      if (!ageBandMap[segment.name]) {
        ageBandMap[segment.name] = { records: 0, belowC: 0, efficiency: [], cost: 0 };
      }
      ageBandMap[segment.name].records += segment.count;
      ageBandMap[segment.name].belowC += segment.belowCCount;
      ageBandMap[segment.name].efficiency.push(segment.averageEfficiency);
      ageBandMap[segment.name].cost += segment.estimatedUpgradeCost;
    });
  });

  const toSegmentArray = (map: Record<string, { records: number; belowC: number; efficiency: number[]; cost: number }>): SegmentAnalysis[] => {
    return Object.entries(map)
      .filter(([, data]) => data.records >= 100) // Only include segments with enough data
      .map(([name, data]) => ({
        name,
        count: data.records,
        belowCCount: data.belowC,
        belowCPercentage: Math.round((data.belowC / data.records) * 1000) / 10,
        averageEfficiency: Math.round(data.efficiency.reduce((a, b) => a + b, 0) / data.efficiency.length),
        estimatedUpgradeCost: data.cost,
      }))
      .sort((a, b) => b.belowCPercentage - a.belowCPercentage);
  };

  return {
    propertyTypes: toSegmentArray(propertyTypeMap),
    builtForms: toSegmentArray(builtFormMap),
    ageBands: toSegmentArray(ageBandMap),
  };
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

    // Aggregate national leaderboard
    const nationalLeaderboard = aggregateNationalLeaderboard(results);

    // Calculate totals
    const totalRecords = results.reduce((sum, r) => sum + r.totalRecords, 0);
    const totalBelowC = results.reduce((sum, r) => sum + r.belowCCount, 0);
    const totalUpgradeCost = results.reduce((sum, r) => sum + r.estimatedTotalUpgradeCost, 0);

    // Find the single worst segment across all data
    let overallWorstSegment = { name: 'N/A', percentage: 0, type: 'unknown', city: '' };
    results.forEach(city => {
      if (city.worstSegment.percentage > overallWorstSegment.percentage) {
        overallWorstSegment = { ...city.worstSegment, city: city.city };
      }
    });

    return NextResponse.json({
      success: true,
      data: results,
      summary: {
        totalCities: results.length,
        totalRecords,
        totalBelowC,
        averageBelowC: Math.round((totalBelowC / totalRecords) * 1000) / 10,
        totalEstimatedUpgradeCost: totalUpgradeCost,
        averageUpgradeCostPerProperty: Math.round(totalUpgradeCost / totalBelowC),
        propertiesPerDayToMeetDeadline: Math.round(totalBelowC / (4 * 365)), // ~4 years to 2030
        overallWorstSegment,
      },
      nationalLeaderboard,
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
