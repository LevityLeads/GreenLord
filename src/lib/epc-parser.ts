// EPC PDF Parser - Extracts data from UK EPC certificate PDFs
// UK EPCs follow a standardized format which we can parse
// This module should only be used client-side

import type { EPCRating, PropertyType } from './types';
import type {
  ConstructionAgeBand,
  WallTypeNoted,
  WallInsulationNoted,
  RoofInsulationNoted,
  FloorInsulationNoted,
  GlazingTypeNoted,
  MainHeatingSystem,
  HeatingControls,
  HotWaterSystem,
  EPCRecommendation,
  EPCAnalyserInputs,
} from './epc-analysis';

// Dynamic import for PDF.js to avoid SSR issues
let pdfjsLib: typeof import('pdfjs-dist') | null = null;

async function getPdfJs() {
  if (typeof window === 'undefined') {
    throw new Error('PDF parsing is only available in the browser');
  }

  if (!pdfjsLib) {
    pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }

  return pdfjsLib;
}

export interface EPCParseResult {
  success: boolean;
  data: Partial<EPCAnalyserInputs>;
  confidence: 'high' | 'medium' | 'low';
  warnings: string[];
  rawText?: string;
}

// Extract text from PDF
async function extractTextFromPDF(file: File): Promise<string> {
  const pdfjs = await getPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

  let fullText = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item: unknown) => (item as { str: string }).str)
      .join(' ');
    fullText += pageText + '\n';
  }

  return fullText;
}

// Parse EPC rating from text
function parseRating(text: string): { rating: EPCRating; score: number } | null {
  // Look for current energy rating patterns
  // EPCs show "Current energy efficiency rating" followed by a letter and number

  // Pattern: "Current energy efficiency rating X (XX)"
  const ratingPattern = /current\s+energy\s+(?:efficiency\s+)?rating[:\s]+([A-G])\s*\(?(\d{1,3})\)?/i;
  const match = text.match(ratingPattern);

  if (match) {
    return {
      rating: match[1].toUpperCase() as EPCRating,
      score: parseInt(match[2], 10),
    };
  }

  // Alternative pattern: just look for "Rating: D (55)" style
  const altPattern = /rating[:\s]+([A-G])\s*\(?\s*(\d{1,3})\s*\)?/i;
  const altMatch = text.match(altPattern);

  if (altMatch) {
    return {
      rating: altMatch[1].toUpperCase() as EPCRating,
      score: parseInt(altMatch[2], 10),
    };
  }

  // Look for score in the EPC band diagram area
  const scorePattern = /(\d{1,3})\s*\|\s*([A-G])/i;
  const scoreMatch = text.match(scorePattern);

  if (scoreMatch) {
    return {
      rating: scoreMatch[2].toUpperCase() as EPCRating,
      score: parseInt(scoreMatch[1], 10),
    };
  }

  return null;
}

// Parse construction age
function parseConstructionAge(text: string): ConstructionAgeBand | null {
  const lowerText = text.toLowerCase();

  // Look for explicit age mentions
  if (/(?:built|constructed|date)\s*:?\s*(?:before\s+)?1919|victorian|edwardian/i.test(text)) {
    return 'pre-1919';
  }
  if (/(?:built|constructed)\s*:?\s*19(?:19|2\d)|1920s|1930s|inter\s*-?\s*war/i.test(text)) {
    return '1919-1944';
  }
  if (/(?:built|constructed)\s*:?\s*19(?:4\d|5\d|6[0-4])|1940s|1950s|post\s*-?\s*war/i.test(text)) {
    return '1945-1964';
  }
  if (/(?:built|constructed)\s*:?\s*19(?:6[5-9]|7\d)|1960s|1970s/i.test(text)) {
    return '1965-1979';
  }
  if (/(?:built|constructed)\s*:?\s*19(?:8\d|9[01])|1980s/i.test(text)) {
    return '1980-1991';
  }
  if (/(?:built|constructed)\s*:?\s*19(?:9[2-9])|200[0-6]|1990s|2000s/i.test(text)) {
    return '1992-2006';
  }
  if (/(?:built|constructed)\s*:?\s*20(?:0[7-9]|[1-2]\d)|2007|2010s|2020s/i.test(text)) {
    return '2007-present';
  }

  // Look for age band references
  if (lowerText.includes('england and wales before 1900') || lowerText.includes('pre-1919')) {
    return 'pre-1919';
  }

  return null;
}

// Parse property type
function parsePropertyType(text: string): PropertyType | null {
  const lowerText = text.toLowerCase();

  if (lowerText.includes('mid-terrace') || lowerText.includes('mid terrace')) {
    if (lowerText.includes('victorian') || lowerText.includes('pre-1919')) {
      return 'victorian-terrace';
    }
  }

  if (lowerText.includes('end-terrace') || lowerText.includes('end terrace')) {
    return 'victorian-terrace'; // Close enough
  }

  if (lowerText.includes('semi-detached') || lowerText.includes('semi detached')) {
    if (lowerText.includes('1930') || lowerText.includes('inter-war') || lowerText.includes('interwar')) {
      return '1930s-semi';
    }
    return '1930s-semi'; // Default semi to 1930s as most common
  }

  if (lowerText.includes('purpose-built flat') || lowerText.includes('purpose built flat')) {
    return 'purpose-built-flat';
  }

  if (lowerText.includes('converted flat')) {
    return 'converted-flat';
  }

  if (lowerText.includes('flat') || lowerText.includes('apartment') || lowerText.includes('maisonette')) {
    return 'purpose-built-flat';
  }

  if (lowerText.includes('detached')) {
    return '1930s-semi'; // Use as reasonable default
  }

  if (lowerText.includes('terrace') || lowerText.includes('terraced')) {
    return 'victorian-terrace';
  }

  if (lowerText.includes('house')) {
    // Try to infer from age
    if (lowerText.includes('1960') || lowerText.includes('1970')) {
      return '1950s-1960s';
    }
    if (lowerText.includes('1980') || lowerText.includes('1990')) {
      return '1970s-1980s';
    }
  }

  return null;
}

// Parse wall type
function parseWallType(text: string): { type: WallTypeNoted; insulation: WallInsulationNoted } | null {
  const lowerText = text.toLowerCase();

  // Look for wall section in EPC
  const wallSection = lowerText.match(/wall[s]?\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  let wallType: WallTypeNoted = 'unknown';
  let insulation: WallInsulationNoted = 'unknown';

  // Determine wall type
  if (wallSection.includes('solid') && !wallSection.includes('cavity')) {
    wallType = 'solid';
  } else if (wallSection.includes('cavity')) {
    if (wallSection.includes('filled') || wallSection.includes('insulated')) {
      wallType = 'cavity-filled';
    } else if (wallSection.includes('unfilled') || wallSection.includes('no insulation')) {
      wallType = 'cavity-unfilled';
    } else {
      wallType = 'cavity-unfilled'; // Assume unfilled if not specified
    }
  }

  // Determine insulation level
  if (wallSection.includes('no insulation') || wallSection.includes('uninsulated')) {
    insulation = 'none';
  } else if (wallSection.includes('partial') || wallSection.includes('some insulation')) {
    insulation = 'partial';
  } else if (wallSection.includes('insulated') || wallSection.includes('with insulation') || wallSection.includes('filled')) {
    insulation = 'full';
  }

  if (wallType === 'unknown' && insulation === 'unknown') {
    return null;
  }

  return { type: wallType, insulation };
}

// Parse roof insulation
function parseRoofInsulation(text: string): RoofInsulationNoted | null {
  const lowerText = text.toLowerCase();

  // Look for loft/roof section
  const roofSection = lowerText.match(/(?:loft|roof)\s*(?:insulation)?\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  // Check for depth measurements
  const depthMatch = roofSection.match(/(\d+)\s*mm/i);
  if (depthMatch) {
    const depth = parseInt(depthMatch[1], 10);
    if (depth >= 270) return '270mm-plus';
    if (depth >= 200) return '200-270mm';
    if (depth >= 100) return '100-199mm';
    return 'under-100mm';
  }

  // Check for descriptive terms
  if (roofSection.includes('no insulation') || roofSection.includes('none')) {
    return 'none';
  }
  if (roofSection.includes('270') || roofSection.includes('300') || roofSection.includes('adequate')) {
    return '270mm-plus';
  }
  if (roofSection.includes('limited') || roofSection.includes('less than 100')) {
    return 'under-100mm';
  }

  return null;
}

// Parse glazing type
function parseGlazing(text: string): GlazingTypeNoted | null {
  const lowerText = text.toLowerCase();

  // Look for windows/glazing section
  const windowSection = lowerText.match(/(?:window|glazing)\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  if (windowSection.includes('triple')) {
    return 'triple';
  }
  if (windowSection.includes('single')) {
    if (windowSection.includes('double') || windowSection.includes('mixed')) {
      return 'mixed';
    }
    return 'single';
  }
  if (windowSection.includes('double')) {
    // Try to determine age of double glazing
    if (windowSection.includes('2002') || windowSection.includes('2003') ||
        windowSection.includes('2004') || windowSection.includes('recent') ||
        windowSection.includes('new') || windowSection.includes('modern')) {
      return 'double-post-2002';
    }
    if (windowSection.includes('old') || windowSection.includes('original') ||
        windowSection.includes('1990') || windowSection.includes('1980')) {
      return 'double-pre-2002';
    }
    return 'double-post-2002'; // Default to more common modern
  }

  return null;
}

// Parse heating system
function parseHeating(text: string): { system: MainHeatingSystem; controls: HeatingControls } | null {
  const lowerText = text.toLowerCase();

  // Look for heating section
  const heatingSection = lowerText.match(/(?:main\s+)?heating\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  let system: MainHeatingSystem = 'gas-boiler'; // Most common default
  let controls: HeatingControls = 'programmer-thermostat';

  // Determine heating system
  if (heatingSection.includes('heat pump') || heatingSection.includes('ashp') || heatingSection.includes('gshp')) {
    system = 'heat-pump';
  } else if (heatingSection.includes('electric') || heatingSection.includes('storage heater')) {
    system = 'electric';
  } else if (heatingSection.includes('oil')) {
    system = 'oil-boiler';
  } else if (heatingSection.includes('gas') || heatingSection.includes('boiler') || heatingSection.includes('combi')) {
    system = 'gas-boiler';
  }

  // Determine controls
  const controlsSection = lowerText.match(/(?:heating\s+)?control[s]?\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  if (controlsSection.includes('smart') || controlsSection.includes('nest') || controlsSection.includes('hive')) {
    controls = 'smart';
  } else if (controlsSection.includes('trv') || controlsSection.includes('thermostatic radiator')) {
    controls = 'programmer-trvs';
  } else if (controlsSection.includes('thermostat') || controlsSection.includes('room stat')) {
    controls = 'programmer-thermostat';
  } else if (controlsSection.includes('programmer') || controlsSection.includes('timer')) {
    controls = 'programmer';
  } else if (controlsSection.includes('no control') || controlsSection.includes('none')) {
    controls = 'none';
  }

  return { system, controls };
}

// Parse hot water
function parseHotWater(text: string): HotWaterSystem | null {
  const lowerText = text.toLowerCase();

  const hotWaterSection = lowerText.match(/hot\s+water\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  if (hotWaterSection.includes('heat pump')) {
    return 'heat-pump';
  }
  if (hotWaterSection.includes('immersion') || hotWaterSection.includes('electric')) {
    return 'electric-immersion';
  }
  if (hotWaterSection.includes('boiler') || hotWaterSection.includes('from main') || hotWaterSection.includes('combi')) {
    return 'from-boiler';
  }

  return null;
}

// Parse recommendations
function parseRecommendations(text: string): EPCRecommendation[] {
  const lowerText = text.toLowerCase();
  const recommendations: EPCRecommendation[] = [];

  // Map common recommendation phrases to our recommendation types
  const recommendationPatterns: [RegExp, EPCRecommendation][] = [
    [/(?:increase|add|top.up)\s+loft\s+insulation/i, 'loft-insulation'],
    [/loft\s+insulation/i, 'loft-insulation'],
    [/cavity\s+wall\s+insulation/i, 'cavity-wall-insulation'],
    [/(?:solid|external|internal)\s+wall\s+insulation/i, 'solid-wall-insulation'],
    [/floor\s+insulation/i, 'floor-insulation'],
    [/(?:double|triple|secondary)\s+glaz/i, 'glazing'],
    [/(?:new|replace|upgrade)\s+(?:the\s+)?boiler/i, 'new-boiler'],
    [/condensing\s+boiler/i, 'new-boiler'],
    [/(?:heating|boiler)\s+control/i, 'heating-controls'],
    [/(?:trv|thermostatic\s+radiator)/i, 'heating-controls'],
    [/solar\s+(?:pv|panel|photovoltaic)/i, 'solar-panels'],
    [/(?:low.energy|led)\s+light/i, 'low-energy-lighting'],
    [/(?:hot\s+water|cylinder)\s+(?:jacket|insulation)/i, 'hot-water-cylinder-insulation'],
    [/draught.?proof/i, 'draught-proofing'],
  ];

  for (const [pattern, recommendation] of recommendationPatterns) {
    if (pattern.test(lowerText) && !recommendations.includes(recommendation)) {
      recommendations.push(recommendation);
    }
  }

  return recommendations;
}

// Parse floor insulation
function parseFloorInsulation(text: string): FloorInsulationNoted | null {
  const lowerText = text.toLowerCase();

  const floorSection = lowerText.match(/floor\s*:?\s*([^.]+)/i)?.[1] || lowerText;

  if (floorSection.includes('suspended') || floorSection.includes('timber')) {
    return 'suspended';
  }
  if (floorSection.includes('insulated') || floorSection.includes('with insulation')) {
    return 'insulated';
  }
  if (floorSection.includes('no insulation') || floorSection.includes('uninsulated') || floorSection.includes('solid')) {
    return 'none';
  }

  return null;
}

// Main parsing function
export async function parseEPCDocument(file: File): Promise<EPCParseResult> {
  const warnings: string[] = [];

  try {
    const text = await extractTextFromPDF(file);

    // Parse all fields
    const ratingData = parseRating(text);
    const constructionAge = parseConstructionAge(text);
    const propertyType = parsePropertyType(text);
    const wallData = parseWallType(text);
    const roofInsulation = parseRoofInsulation(text);
    const floorInsulation = parseFloorInsulation(text);
    const glazingType = parseGlazing(text);
    const heatingData = parseHeating(text);
    const hotWater = parseHotWater(text);
    const recommendations = parseRecommendations(text);

    // Build result
    const data: Partial<EPCAnalyserInputs> = {
      recommendations,
    };

    // Add parsed fields with warnings for missing ones
    if (ratingData) {
      data.currentRating = ratingData.rating;
      data.currentScore = ratingData.score;
    } else {
      warnings.push('Could not extract EPC rating - please enter manually');
    }

    if (constructionAge) {
      data.constructionAge = constructionAge;
    } else {
      warnings.push('Could not determine construction age - please select manually');
    }

    if (propertyType) {
      data.propertyType = propertyType;
    } else {
      warnings.push('Could not determine property type - please select manually');
    }

    if (wallData) {
      data.wallType = wallData.type;
      data.wallInsulation = wallData.insulation;
    } else {
      warnings.push('Could not extract wall details - please enter manually');
    }

    if (roofInsulation) {
      data.roofInsulation = roofInsulation;
    } else {
      warnings.push('Could not extract roof insulation depth - please select manually');
    }

    if (floorInsulation) {
      data.floorInsulation = floorInsulation;
    } else {
      warnings.push('Could not extract floor insulation status - please select manually');
    }

    if (glazingType) {
      data.glazingType = glazingType;
    } else {
      warnings.push('Could not extract glazing type - please select manually');
    }

    if (heatingData) {
      data.heatingSystem = heatingData.system;
      data.heatingControls = heatingData.controls;
    } else {
      warnings.push('Could not extract heating details - please enter manually');
    }

    if (hotWater) {
      data.hotWater = hotWater;
    } else {
      warnings.push('Could not extract hot water system - please select manually');
    }

    if (recommendations.length === 0) {
      warnings.push('No recommendations found - please select from the list');
    }

    // Calculate confidence
    const totalFields = 10; // rating, score, age, type, wall type, wall ins, roof, floor, glazing, heating
    const parsedFields = [
      ratingData,
      constructionAge,
      propertyType,
      wallData,
      roofInsulation,
      floorInsulation,
      glazingType,
      heatingData,
      hotWater,
    ].filter(Boolean).length;

    let confidence: 'high' | 'medium' | 'low';
    if (parsedFields >= 8) {
      confidence = 'high';
    } else if (parsedFields >= 5) {
      confidence = 'medium';
    } else {
      confidence = 'low';
    }

    return {
      success: true,
      data,
      confidence,
      warnings,
      rawText: text,
    };

  } catch (error) {
    console.error('Error parsing EPC:', error);
    return {
      success: false,
      data: {},
      confidence: 'low',
      warnings: ['Failed to parse PDF - please enter details manually'],
    };
  }
}

// Validate file is a PDF
export function isValidEPCFile(file: File): boolean {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
}
