'use client';

import type { CalculatorResults, CalculatorInputs } from './types';
import { formatCurrency, getPropertyTypeName, getRegionName } from './utils';

/**
 * PDF Export Utility for GreenLord Calculator Results
 * Generates a professional PDF report from calculator results
 */

interface PDFExportOptions {
  results: CalculatorResults;
  inputs: CalculatorInputs;
  filename?: string;
}

/**
 * Generate HTML content for the PDF report
 */
function generateReportHTML(results: CalculatorResults, inputs: CalculatorInputs): string {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const meetsRequirement = ['A', 'B', 'C'].includes(results.estimatedFinalRating);

  const topRecommendations = results.recommendations.slice(0, 8);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 11pt;
          line-height: 1.5;
          color: #1a1a1a;
          padding: 40px;
        }
        .header {
          border-bottom: 3px solid #003366;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24pt;
          font-weight: bold;
          color: #003366;
        }
        .logo span {
          color: #17b2b2;
        }
        .report-title {
          font-size: 20pt;
          color: #003366;
          margin-top: 10px;
        }
        .report-date {
          color: #666;
          font-size: 10pt;
          margin-top: 5px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 14pt;
          color: #003366;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 8px;
          margin-bottom: 15px;
        }
        .property-details {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 25px;
        }
        .property-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .property-item {
          display: flex;
          justify-content: space-between;
        }
        .property-label {
          color: #666;
        }
        .property-value {
          font-weight: 600;
          color: #1a1a1a;
        }
        .cost-summary {
          background: linear-gradient(135deg, #003366 0%, #004488 100%);
          color: white;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
        }
        .cost-summary h3 {
          font-size: 12pt;
          opacity: 0.9;
          margin-bottom: 5px;
        }
        .cost-amount {
          font-size: 28pt;
          font-weight: bold;
        }
        .cost-range {
          font-size: 10pt;
          opacity: 0.8;
          margin-top: 5px;
        }
        .rating-box {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 15px;
        }
        .rating-item {
          text-align: center;
        }
        .rating-badge {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20pt;
          font-weight: bold;
          color: white;
        }
        .rating-label {
          font-size: 9pt;
          margin-top: 5px;
          opacity: 0.8;
        }
        .arrow {
          font-size: 24pt;
        }
        .epc-a { background: #008054; }
        .epc-b { background: #19b459; }
        .epc-c { background: #8dce46; color: #1a1a1a; }
        .epc-d { background: #ffd500; color: #1a1a1a; }
        .epc-e { background: #fcaa65; color: #1a1a1a; }
        .epc-f { background: #ef8023; }
        .epc-g { background: #e9153b; }
        .status-banner {
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 25px;
        }
        .status-success {
          background: #dcfce7;
          border-left: 4px solid #22c55e;
        }
        .status-warning {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
        }
        .status-title {
          font-weight: 600;
          margin-bottom: 5px;
        }
        .recommendations-table {
          width: 100%;
          border-collapse: collapse;
        }
        .recommendations-table th {
          background: #003366;
          color: white;
          padding: 12px 15px;
          text-align: left;
          font-size: 10pt;
        }
        .recommendations-table td {
          padding: 12px 15px;
          border-bottom: 1px solid #e5e5e5;
          vertical-align: top;
        }
        .recommendations-table tr:nth-child(even) {
          background: #f8f9fa;
        }
        .improvement-name {
          font-weight: 600;
          color: #003366;
        }
        .improvement-desc {
          font-size: 9pt;
          color: #666;
          margin-top: 4px;
        }
        .priority-badge {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 8pt;
          font-weight: 600;
        }
        .priority-high {
          background: #dcfce7;
          color: #166534;
        }
        .priority-medium {
          background: #fef3c7;
          color: #92400e;
        }
        .priority-low {
          background: #e5e5e5;
          color: #525252;
        }
        .next-steps {
          background: #f0f9ff;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 25px;
        }
        .next-steps h3 {
          color: #003366;
          margin-bottom: 15px;
        }
        .next-steps ol {
          padding-left: 20px;
        }
        .next-steps li {
          margin-bottom: 10px;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #e5e5e5;
          font-size: 9pt;
          color: #666;
        }
        .disclaimer {
          background: #fff7ed;
          border-left: 4px solid #f59e0b;
          padding: 15px;
          margin: 20px 0;
          font-size: 9pt;
        }
        @media print {
          body { padding: 20px; }
          .section { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Green<span>Lord</span></div>
        <div class="report-title">EPC Upgrade Cost Estimate Report</div>
        <div class="report-date">Generated on ${currentDate}</div>
      </div>

      <div class="property-details">
        <div class="section-title">Property Details</div>
        <div class="property-grid">
          <div class="property-item">
            <span class="property-label">Property Type:</span>
            <span class="property-value">${getPropertyTypeName(inputs.propertyType)}</span>
          </div>
          <div class="property-item">
            <span class="property-label">Bedrooms:</span>
            <span class="property-value">${inputs.bedrooms}</span>
          </div>
          <div class="property-item">
            <span class="property-label">Region:</span>
            <span class="property-value">${getRegionName(inputs.region)}</span>
          </div>
          <div class="property-item">
            <span class="property-label">Current EPC Rating:</span>
            <span class="property-value">${inputs.currentRating === 'unknown' ? 'Not specified' : inputs.currentRating}</span>
          </div>
          <div class="property-item">
            <span class="property-label">Wall Construction:</span>
            <span class="property-value">${inputs.wallConstruction === 'solid' ? 'Solid walls' : inputs.wallConstruction === 'cavity' ? 'Cavity walls' : inputs.wallConstruction === 'mixed' ? 'Mixed' : 'Unknown'}</span>
          </div>
          <div class="property-item">
            <span class="property-label">Heating System:</span>
            <span class="property-value">${inputs.heatingSystem === 'gas-boiler' ? 'Gas boiler' : inputs.heatingSystem === 'electric' ? 'Electric heating' : inputs.heatingSystem === 'oil-boiler' ? 'Oil boiler' : inputs.heatingSystem === 'heat-pump' ? 'Heat pump' : 'Other'}</span>
          </div>
        </div>
      </div>

      <div class="cost-summary">
        <h3>Estimated Total Investment</h3>
        <div class="cost-amount">${formatCurrency(results.totalCostMid)}</div>
        <div class="cost-range">Range: ${formatCurrency(results.totalCostLow)} - ${formatCurrency(results.totalCostHigh)}</div>

        <div class="rating-box">
          <div class="rating-item">
            <div class="rating-badge epc-${inputs.currentRating === 'unknown' ? 'd' : inputs.currentRating.toLowerCase()}">${inputs.currentRating === 'unknown' ? '?' : inputs.currentRating}</div>
            <div class="rating-label">Current</div>
          </div>
          <div class="arrow">→</div>
          <div class="rating-item">
            <div class="rating-badge epc-${results.estimatedFinalRating.toLowerCase()}">${results.estimatedFinalRating}</div>
            <div class="rating-label">Projected</div>
          </div>
        </div>
      </div>

      <div class="status-banner ${meetsRequirement ? 'status-success' : 'status-warning'}">
        <div class="status-title">${meetsRequirement ? '✓ Projected to Meet 2030 Requirements' : '⚠ Additional Work May Be Needed'}</div>
        <div>${meetsRequirement
          ? 'With the recommended improvements, your property could achieve EPC ' + results.estimatedFinalRating + ', meeting the October 2030 deadline requirements.'
          : results.costCapExemptionLikely
            ? 'The cost of improvements exceeds the £10,000 cost cap. You may qualify for a cost cap exemption.'
            : 'The estimated improvements may not fully reach EPC C. Consider consulting with an energy assessor.'
        }</div>
      </div>

      <div class="section">
        <div class="section-title">Recommended Improvements</div>
        <table class="recommendations-table">
          <thead>
            <tr>
              <th style="width: 35%">Improvement</th>
              <th style="width: 20%">Estimated Cost</th>
              <th style="width: 15%">EPC Points</th>
              <th style="width: 15%">Cost/Point</th>
              <th style="width: 15%">Priority</th>
            </tr>
          </thead>
          <tbody>
            ${topRecommendations.map((rec, index) => {
              const midCost = (rec.estimatedCostLow + rec.estimatedCostHigh) / 2;
              return `
              <tr>
                <td>
                  <div class="improvement-name">${index + 1}. ${rec.name}</div>
                  <div class="improvement-desc">${rec.description}</div>
                </td>
                <td>${formatCurrency(rec.estimatedCostLow)} - ${formatCurrency(rec.estimatedCostHigh)}</td>
                <td>+${rec.estimatedEPCPoints} points</td>
                <td>${formatCurrency(Math.round(rec.costPerPoint))}/point</td>
                <td>
                  <span class="priority-badge ${midCost < 500 ? 'priority-high' : midCost < 2000 ? 'priority-medium' : 'priority-low'}">
                    ${midCost < 500 ? 'Quick Win' : midCost < 2000 ? 'Good Value' : 'Major Work'}
                  </span>
                </td>
              </tr>
            `;}).join('')}
          </tbody>
        </table>
        ${results.recommendations.length > 8 ? `<p style="margin-top: 10px; font-size: 9pt; color: #666;">+ ${results.recommendations.length - 8} additional improvements available. Visit greenLord.co.uk for the complete list.</p>` : ''}
      </div>

      <div class="next-steps">
        <h3>Recommended Next Steps</h3>
        <ol>
          <li><strong>Get a professional EPC assessment</strong> - An accredited assessor can provide an accurate current rating and identify the most impactful improvements.</li>
          <li><strong>Obtain multiple quotes</strong> - Get at least 3 quotes from certified installers. Ensure they are MCS certified for renewable energy installations.</li>
          <li><strong>Check available funding</strong> - Explore the Boiler Upgrade Scheme (up to £7,500 for heat pumps), ECO4 scheme, and local authority grants.</li>
          <li><strong>Plan your timeline</strong> - The 2030 deadline allows time for planning. Start with quick wins and schedule major works around tenancy changes.</li>
        </ol>
      </div>

      <div class="disclaimer">
        <strong>Important Notice:</strong> These are estimates only. Actual costs will vary based on property condition, access, and contractor availability. A professional EPC assessment is required for accurate recommendations. Prices based on January 2026 data.
      </div>

      <div class="footer">
        <p><strong>GreenLord</strong> - UK Landlord EPC Compliance Platform</p>
        <p>This report is for informational purposes only and does not constitute professional advice. For the latest information and interactive tools, visit www.greenlord.co.uk</p>
        <p style="margin-top: 10px;">Report ID: ${Date.now().toString(36).toUpperCase()} | Generated: ${currentDate}</p>
      </div>
    </body>
    </html>
  `;
}

/**
 * Export calculator results as a PDF
 */
export async function exportResultsToPDF({ results, inputs, filename }: PDFExportOptions): Promise<void> {
  // Dynamically import html2pdf to avoid SSR issues
  const html2pdf = (await import('html2pdf.js')).default;

  const html = generateReportHTML(results, inputs);

  // Create a temporary container
  const container = document.createElement('div');
  container.innerHTML = html;
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '0';
  document.body.appendChild(container);

  const options = {
    margin: 10,
    filename: filename || `GreenLord-EPC-Report-${Date.now()}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: {
      unit: 'mm' as const,
      format: 'a4' as const,
      orientation: 'portrait' as const,
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] as const },
  };

  try {
    await html2pdf().set(options).from(container).save();
  } finally {
    // Clean up
    document.body.removeChild(container);
  }
}

/**
 * Generate a shareable link with encoded results (placeholder for future implementation)
 */
export function generateShareableLink(results: CalculatorResults, inputs: CalculatorInputs): string {
  const data = {
    r: results.estimatedFinalRating,
    c: results.totalCostMid,
    p: inputs.propertyType,
    b: inputs.bedrooms,
  };
  const encoded = btoa(JSON.stringify(data));
  return `${window.location.origin}/tools/cost-calculator?share=${encoded}`;
}
