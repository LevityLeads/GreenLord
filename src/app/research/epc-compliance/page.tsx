'use client';

import { useState, useEffect } from 'react';
import {
  BarChart3,
  Building2,
  MapPin,
  RefreshCw,
  AlertCircle,
  TrendingDown,
  PoundSterling,
  Clock,
  Home,
  Calendar,
  AlertTriangle,
  Trophy,
  Download,
  Share2,
} from 'lucide-react';
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

interface NationalLeaderboard {
  propertyTypes: SegmentAnalysis[];
  builtForms: SegmentAnalysis[];
  ageBands: SegmentAnalysis[];
}

interface ApiResponse {
  success: boolean;
  data: CityAnalysis[];
  summary: {
    totalCities: number;
    totalRecords: number;
    totalBelowC: number;
    averageBelowC: number;
    totalEstimatedUpgradeCost: number;
    averageUpgradeCostPerProperty: number;
    propertiesPerDayToMeetDeadline: number;
    overallWorstSegment: { name: string; percentage: number; type: string; city: string };
  };
  nationalLeaderboard: NationalLeaderboard;
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

function formatCurrency(amount: number): string {
  if (amount >= 1000000000) {
    return `£${(amount / 1000000000).toFixed(1)}B`;
  }
  if (amount >= 1000000) {
    return `£${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `£${(amount / 1000).toFixed(0)}K`;
  }
  return `£${amount.toLocaleString()}`;
}

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

function StatCard({
  value,
  label,
  icon: Icon,
  color = 'primary',
  subtext,
}: {
  value: string | number;
  label: string;
  icon: React.ElementType;
  color?: 'primary' | 'red' | 'amber' | 'green';
  subtext?: string;
}) {
  const colorClasses = {
    primary: 'text-primary-600',
    red: 'text-red-600',
    amber: 'text-amber-600',
    green: 'text-green-600',
  };

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className={`text-3xl md:text-4xl font-bold ${colorClasses[color]}`}>{value}</p>
            <p className="text-neutral-600 mt-1 text-sm md:text-base">{label}</p>
            {subtext && <p className="text-neutral-400 text-xs mt-1">{subtext}</p>}
          </div>
          <Icon className={`h-8 w-8 ${colorClasses[color]} opacity-20`} />
        </div>
      </CardContent>
    </Card>
  );
}

function LeaderboardTable({
  title,
  icon: Icon,
  data,
  showCost = false,
}: {
  title: string;
  icon: React.ElementType;
  data: SegmentAnalysis[];
  showCost?: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5 text-primary-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.slice(0, 5).map((segment, index) => (
            <div key={segment.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0
                      ? 'bg-red-100 text-red-700'
                      : index === 1
                        ? 'bg-orange-100 text-orange-700'
                        : index === 2
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-sm">{segment.name}</p>
                  <p className="text-xs text-neutral-500">
                    {segment.count.toLocaleString()} properties
                    {showCost && ` · ${formatCurrency(segment.estimatedUpgradeCost)} upgrade cost`}
                  </p>
                </div>
              </div>
              <span className="font-bold text-red-600">{segment.belowCPercentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CityCard({ city, rank }: { city: CityAnalysis; rank: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={rank === 1 ? 'ring-2 ring-red-300' : ''}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {rank <= 3 && (
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  rank === 1
                    ? 'bg-red-100 text-red-700'
                    : rank === 2
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-amber-100 text-amber-700'
                }`}
              >
                {rank}
              </span>
            )}
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-600" />
              {city.city}
            </CardTitle>
          </div>
          <span className="text-2xl font-bold text-red-600">{city.belowCPercentage}%</span>
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
              <span className="text-neutral-500">Properties at risk</span>
              <p className="font-semibold text-red-600">{city.belowCCount.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-neutral-500">Est. upgrade cost</span>
              <p className="font-semibold text-amber-600">{formatCurrency(city.estimatedTotalUpgradeCost)}</p>
            </div>
          </div>

          {city.worstSegment.percentage > 0 && (
            <div className="bg-red-50 rounded-lg p-3 text-sm">
              <p className="text-red-800">
                <span className="font-semibold">Worst performing:</span> {city.worstSegment.name} (
                {city.worstSegment.percentage}% below C)
              </p>
            </div>
          )}

          <Button variant="outline" size="sm" className="w-full" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Hide details' : 'Show breakdown'}
          </Button>

          {expanded && (
            <div className="pt-4 border-t space-y-4">
              {city.byAgeBand.length > 0 && (
                <div>
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> By Age Band
                  </h4>
                  <div className="space-y-1">
                    {city.byAgeBand.slice(0, 5).map((segment) => (
                      <div key={segment.name} className="flex justify-between text-sm">
                        <span className="text-neutral-600">{segment.name}</span>
                        <span className="font-medium text-red-600">{segment.belowCPercentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {city.byPropertyType.length > 0 && (
                <div>
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Home className="h-4 w-4" /> By Property Type
                  </h4>
                  <div className="space-y-1">
                    {city.byPropertyType.slice(0, 5).map((segment) => (
                      <div key={segment.name} className="flex justify-between text-sm">
                        <span className="text-neutral-600">{segment.name}</span>
                        <span className="font-medium text-red-600">{segment.belowCPercentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {city.byBuiltForm.length > 0 && (
                <div>
                  <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                    <Building2 className="h-4 w-4" /> By Built Form
                  </h4>
                  <div className="space-y-1">
                    {city.byBuiltForm.slice(0, 5).map((segment) => (
                      <div key={segment.name} className="flex justify-between text-sm">
                        <span className="text-neutral-600">{segment.name}</span>
                        <span className="font-medium text-red-600">{segment.belowCPercentage}%</span>
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

function ShareableStatCard({
  headline,
  value,
  subtext,
  source,
}: {
  headline: string;
  value: string;
  subtext: string;
  source: string;
}) {
  return (
    <div className="bg-gradient-to-br from-primary-800 to-primary-900 text-white rounded-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
      <div className="relative">
        <p className="text-primary-200 text-sm font-medium">{headline}</p>
        <p className="text-4xl md:text-5xl font-bold mt-2">{value}</p>
        <p className="text-primary-200 mt-2">{subtext}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary-700">
          <span className="text-xs text-primary-300">{source}</span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Share">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Download">
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EPCComplianceResearchPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'cities' | 'leaderboard'>('cities');

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

  // Find Victorian data from leaderboard
  const victorianData = data?.nationalLeaderboard?.ageBands?.find((a) =>
    a.name.toLowerCase().includes('victorian')
  );

  return (
    <>
      <PageHeader
        title="State of Landlord EPC Compliance"
        subtitle="Original research analysing EPC data across major UK cities. Live data from the official EPC register."
        breadcrumbs={[
          { name: 'Research', url: `${SITE_CONFIG.url}/research` },
          { name: 'EPC Compliance', url: `${SITE_CONFIG.url}/research/epc-compliance` },
        ]}
      >
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            Live data analysis
          </span>
          <span className="flex items-center gap-1">
            <Building2 className="h-4 w-4" />
            {data?.summary?.totalRecords?.toLocaleString() || '50,000+'} properties
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            10 major cities
          </span>
        </div>
      </PageHeader>

      <Section background="white" padding="lg">
        <Container size="lg">
          {/* Loading State */}
          {loading && !data && (
            <div className="text-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto text-primary-600" />
              <p className="mt-4 text-neutral-600">Fetching live EPC data from the register...</p>
              <p className="text-sm text-neutral-500">Analysing 50,000+ properties across 10 cities</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Card className="border-red-200 bg-red-50 mb-8">
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

          {data?.summary && (
            <>
              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <StatCard
                  value={`${data.summary.averageBelowC}%`}
                  label="Below EPC C"
                  icon={TrendingDown}
                  color="red"
                  subtext="avg across all cities"
                />
                <StatCard
                  value={data.summary.totalBelowC.toLocaleString()}
                  label="Properties at Risk"
                  icon={AlertTriangle}
                  color="amber"
                  subtext="need upgrades by 2030"
                />
                <StatCard
                  value={formatCurrency(data.summary.totalEstimatedUpgradeCost)}
                  label="Total Upgrade Cost"
                  icon={PoundSterling}
                  color="amber"
                  subtext={`~${formatCurrency(data.summary.averageUpgradeCostPerProperty)} per property`}
                />
                <StatCard
                  value={data.summary.propertiesPerDayToMeetDeadline.toString()}
                  label="Upgrades Needed/Day"
                  icon={Clock}
                  color="red"
                  subtext="to meet 2030 deadline"
                />
              </div>

              {/* Shareable Key Findings */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ShareableStatCard
                  headline="COMPLIANCE CRISIS"
                  value={`${data.summary.totalBelowC.toLocaleString()}`}
                  subtext="rental properties will be illegal to let by 2030 without upgrades"
                  source="GreenLord EPC Research · Live Data"
                />
                {victorianData && (
                  <ShareableStatCard
                    headline="VICTORIAN PROPERTIES"
                    value={`${victorianData.belowCPercentage}%`}
                    subtext={`of Victorian properties (${victorianData.count.toLocaleString()} analysed) fail to meet EPC C`}
                    source="GreenLord EPC Research · Live Data"
                  />
                )}
              </div>

              {/* Key Finding Alert */}
              {data.summary.overallWorstSegment && data.summary.overallWorstSegment.percentage > 0 && (
                <Card className="mb-8 border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg text-red-800">Worst Performing Segment</h3>
                        <p className="text-red-700 mt-1">
                          <span className="font-semibold">{data.summary.overallWorstSegment.name}</span> in{' '}
                          {data.summary.overallWorstSegment.city} has{' '}
                          <span className="font-semibold">{data.summary.overallWorstSegment.percentage}%</span> of
                          properties below EPC C — the highest non-compliance rate in our analysis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6">
                <Button
                  variant={activeTab === 'cities' ? 'primary' : 'outline'}
                  onClick={() => setActiveTab('cities')}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  City Analysis
                </Button>
                <Button
                  variant={activeTab === 'leaderboard' ? 'primary' : 'outline'}
                  onClick={() => setActiveTab('leaderboard')}
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  National Leaderboards
                </Button>
                <div className="flex-1" />
                <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>

              {/* City Results Tab */}
              {activeTab === 'cities' && (
                <>
                  <h2 className="text-2xl font-bold text-primary-800 mb-6">City-by-City Analysis</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.data.map((city, index) => (
                      <CityCard key={city.localAuthority} city={city} rank={index + 1} />
                    ))}
                  </div>
                </>
              )}

              {/* Leaderboard Tab */}
              {activeTab === 'leaderboard' && data.nationalLeaderboard && (
                <>
                  <h2 className="text-2xl font-bold text-primary-800 mb-6">
                    Which Properties Are Most at Risk?
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    National rankings based on {data.summary.totalRecords.toLocaleString()} properties analysed
                    across {data.summary.totalCities} cities. Ranked by percentage below EPC C.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <LeaderboardTable
                      title="By Age Band"
                      icon={Calendar}
                      data={data.nationalLeaderboard.ageBands}
                      showCost
                    />
                    <LeaderboardTable
                      title="By Property Type"
                      icon={Home}
                      data={data.nationalLeaderboard.propertyTypes}
                      showCost
                    />
                    <LeaderboardTable
                      title="By Built Form"
                      icon={Building2}
                      data={data.nationalLeaderboard.builtForms}
                      showCost
                    />
                  </div>

                  {/* Victorian Terrace Deep Dive */}
                  {victorianData && (
                    <Card className="mt-8 border-amber-200 bg-amber-50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-amber-800">
                          <Home className="h-5 w-5" />
                          Victorian Property Crisis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <p className="text-4xl font-bold text-amber-700">{victorianData.belowCPercentage}%</p>
                            <p className="text-amber-800">below EPC C</p>
                          </div>
                          <div>
                            <p className="text-4xl font-bold text-amber-700">
                              {victorianData.belowCCount.toLocaleString()}
                            </p>
                            <p className="text-amber-800">properties at risk</p>
                          </div>
                          <div>
                            <p className="text-4xl font-bold text-amber-700">
                              {formatCurrency(victorianData.estimatedUpgradeCost)}
                            </p>
                            <p className="text-amber-800">estimated upgrade cost</p>
                          </div>
                        </div>
                        <p className="mt-4 text-amber-700">
                          Victorian properties (built before 1900) face the highest compliance challenge. Solid
                          walls, single glazing, and outdated heating systems make achieving EPC C significantly
                          more expensive than newer properties.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}

              {/* Methodology Note */}
              <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-800 mb-2">Methodology & Data Sources</h3>
                <div className="text-sm text-neutral-600 space-y-2">
                  <p>
                    Data sourced live from the official EPC register via the Open Data Communities API. Analysis
                    includes up to 5,000 most recent certificates per local authority.
                  </p>
                  <p>
                    <strong>Cost estimates</strong> based on industry averages: D→C (£5,500), E→C (£8,500), F→C
                    (£12,000), G→C (£18,000). Actual costs vary by property.
                  </p>
                  <p>
                    <strong>&quot;Below C&quot;</strong> includes ratings D, E, F, and G — properties that will not
                    meet the proposed 2030 minimum standard for rental properties.
                  </p>
                </div>
                {data.generatedAt && (
                  <p className="mt-4 text-xs text-neutral-500">
                    Data generated: {new Date(data.generatedAt).toLocaleString()} · Refresh for latest data
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
