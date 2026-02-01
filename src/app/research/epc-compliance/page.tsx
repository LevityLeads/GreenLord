'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Building2, MapPin, RefreshCw, AlertCircle, TrendingDown } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

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

interface ApiResponse {
  success: boolean;
  data: CityAnalysis[];
  summary: {
    totalCities: number;
    totalRecords: number;
    averageBelowC: number;
  };
  generatedAt: string;
  error?: string;
}

const EPC_COLORS: Record<string, string> = {
  A: 'bg-green-600',
  B: 'bg-green-500',
  C: 'bg-yellow-400',
  D: 'bg-orange-400',
  E: 'bg-orange-500',
  F: 'bg-red-500',
  G: 'bg-red-700',
};

function RatingBar({ distribution }: { distribution: RatingDistribution[] }) {
  return (
    <div className="flex h-6 rounded overflow-hidden">
      {distribution.map((item) => (
        <div
          key={item.rating}
          className={`${EPC_COLORS[item.rating]} relative group`}
          style={{ width: `${item.percentage}%` }}
          title={`${item.rating}: ${item.percentage}%`}
        >
          {item.percentage > 8 && (
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
              {item.rating}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function CityCard({ city }: { city: CityAnalysis }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary-600" />
            {city.city}
          </CardTitle>
          <span className="text-2xl font-bold text-red-600">
            {city.belowCPercentage}%
          </span>
        </div>
        <p className="text-sm text-neutral-500">below EPC C</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-600">Rating distribution</span>
              <span className="text-neutral-500">{city.totalRecords.toLocaleString()} properties</span>
            </div>
            <RatingBar distribution={city.distribution} />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-neutral-500">Avg. efficiency score</span>
              <p className="font-semibold">{city.averageEfficiency}/100</p>
            </div>
            <div>
              <span className="text-neutral-500">Compliance gap</span>
              <p className="font-semibold text-red-600">
                ~{Math.round(city.totalRecords * city.belowCPercentage / 100).toLocaleString()} properties
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide details' : 'Show breakdown'}
          </Button>

          {expanded && (
            <div className="pt-4 border-t space-y-4">
              {Object.keys(city.byPropertyType).length > 0 && (
                <div>
                  <h4 className="font-medium text-sm mb-2">By Property Type</h4>
                  <div className="space-y-1">
                    {Object.entries(city.byPropertyType)
                      .sort((a, b) => b[1].belowCPercentage - a[1].belowCPercentage)
                      .slice(0, 5)
                      .map(([type, data]) => (
                        <div key={type} className="flex justify-between text-sm">
                          <span className="text-neutral-600">{type}</span>
                          <span className="font-medium">{data.belowCPercentage}% below C</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {Object.keys(city.byBuiltForm).length > 0 && (
                <div>
                  <h4 className="font-medium text-sm mb-2">By Built Form</h4>
                  <div className="space-y-1">
                    {Object.entries(city.byBuiltForm)
                      .sort((a, b) => b[1].belowCPercentage - a[1].belowCPercentage)
                      .slice(0, 5)
                      .map(([form, data]) => (
                        <div key={form} className="flex justify-between text-sm">
                          <span className="text-neutral-600">{form}</span>
                          <span className="font-medium">{data.belowCPercentage}% below C</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function EPCComplianceResearchPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/epc-research');
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch data');
      }

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeader
        title="State of Landlord EPC Compliance"
        subtitle="Original research analysing EPC data across major UK cities. Updated from the official EPC register."
        breadcrumbs={[
          { name: 'Research', url: `${SITE_CONFIG.url}/research` },
          { name: 'EPC Compliance', url: `${SITE_CONFIG.url}/research/epc-compliance` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Original data analysis
          </span>
          <span className="flex items-center gap-1">
            <Building2 className="h-4 w-4" />
            10 major cities
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container size="lg">
          {/* Summary Stats */}
          {data?.summary && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-600">{data.summary.averageBelowC}%</p>
                    <p className="text-neutral-600 mt-1">Average below EPC C</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600">{data.summary.totalRecords.toLocaleString()}</p>
                    <p className="text-neutral-600 mt-1">Properties analysed</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-600">{data.summary.totalCities}</p>
                    <p className="text-neutral-600 mt-1">Cities covered</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Key Finding */}
          {data?.data && data.data.length > 0 && (
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <TrendingDown className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-red-800">Key Finding</h3>
                    <p className="text-red-700 mt-1">
                      {data.data[0].city} has the highest non-compliance rate at {data.data[0].belowCPercentage}%
                      of properties below EPC C. This represents approximately{' '}
                      {Math.round(data.data[0].totalRecords * data.data[0].belowCPercentage / 100).toLocaleString()}{' '}
                      properties requiring upgrades before the 2030 deadline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto text-primary-600" />
              <p className="mt-4 text-neutral-600">Fetching EPC data from the register...</p>
              <p className="text-sm text-neutral-500">This may take a minute as we analyse 10 cities</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800">Error fetching data</h3>
                    <p className="text-red-700 mt-1">{error}</p>
                    <Button onClick={fetchData} className="mt-4" size="sm">
                      Try again
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* City Results */}
          {data?.data && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary-800">City-by-City Analysis</h2>
                <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh data
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {data.data.map((city) => (
                  <CityCard key={city.localAuthority} city={city} />
                ))}
              </div>

              {/* Methodology Note */}
              <div className="mt-8 p-4 bg-neutral-50 rounded-lg text-sm text-neutral-600">
                <h3 className="font-semibold text-neutral-800 mb-2">Methodology</h3>
                <p>
                  Data sourced from the official EPC register via the Open Data Communities API.
                  Analysis includes up to 5,000 most recent certificates per local authority.
                  &quot;Below C&quot; includes ratings D, E, F, and G.
                </p>
                {data.generatedAt && (
                  <p className="mt-2 text-neutral-500">
                    Generated: {new Date(data.generatedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
