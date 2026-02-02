#!/bin/bash
# Download all AI-generated images from tempfile.aiquickdraw.com
# Run with: bash scripts/download-images.sh

OUTPUT_DIR="public/images/generated"
mkdir -p "$OUTPUT_DIR"

echo "Downloading AI-generated images to $OUTPUT_DIR..."
echo ""

# Array of image names and URLs
declare -A IMAGES=(
  # Homepage
  ["homepage-hero-landlord"]="https://tempfile.aiquickdraw.com/images/1769942554802-5d2i0o98mo.png"
  ["homepage-author-headshot"]="https://tempfile.aiquickdraw.com/images/1769942961546-j0bwssimda.png"
  # Victorian Terrace
  ["victorian-terrace-hero"]="https://tempfile.aiquickdraw.com/images/1769944122029-p06bvmyl29i.png"
  ["victorian-terrace-wall-cross-section"]="https://tempfile.aiquickdraw.com/images/1769944216679-a3py4vbht1v.png"
  ["victorian-terrace-epc-comparison"]="https://tempfile.aiquickdraw.com/images/1769944271283-wa2f971qojq.png"
  # 1930s Semi
  ["1930s-semi-exterior"]="https://tempfile.aiquickdraw.com/images/1769944346395-ibpefqhvfoi.png"
  ["1930s-semi-cavity-wall-insulation"]="https://tempfile.aiquickdraw.com/images/1769944344996-lt4i7w42w1.png"
  ["1930s-semi-epc-journey-infographic"]="https://tempfile.aiquickdraw.com/images/1769944343582-3yulef0r65q.png"
  # 1950s House
  ["1950s-house-exterior"]="https://tempfile.aiquickdraw.com/images/1769944599959-ciooudwnfks.png"
  ["1950s-house-wall-measurement"]="https://tempfile.aiquickdraw.com/images/1769944609611-gs0n1illbo4.png"
  ["1950s-house-wall-comparison"]="https://tempfile.aiquickdraw.com/images/1769944634147-05ryol0u2637.png"
  ["1950s-house-epc-comparison"]="https://tempfile.aiquickdraw.com/images/1769944611791-6kpluzvj78.png"
  # 1960s-1970s House
  ["1960s-1970s-house-exterior"]="https://tempfile.aiquickdraw.com/images/1769944514815-8tx6xsubia.png"
  ["1960s-1970s-house-cavity-wall-cross-section"]="https://tempfile.aiquickdraw.com/images/1769944522238-1gvq0rz8l8f.png"
  ["1960s-1970s-house-epc-comparison"]="https://tempfile.aiquickdraw.com/workers/nano/image_1769944522151_rr7qdn.png"
  # 1980s-1990s House
  ["1980s-1990s-house-exterior"]="https://tempfile.aiquickdraw.com/images/1769945043609-serf76irk1g.png"
  # Purpose-Built Flat
  ["purpose-built-flat-exterior"]="https://tempfile.aiquickdraw.com/images/1769944403098-h34keghqu8e.png"
  ["purpose-built-flat-secondary-glazing"]="https://tempfile.aiquickdraw.com/images/1769944434617-w3xx1y4c2zl.png"
  ["purpose-built-flat-improvement-options"]="https://tempfile.aiquickdraw.com/images/1769944429692-4vqn0icbwpu.png"
  # Converted Flat
  ["converted-flat-exterior"]="https://tempfile.aiquickdraw.com/images/1769944820192-5idt42p20sx.png"
  ["converted-flat-cross-section"]="https://tempfile.aiquickdraw.com/images/1769944828309-52za3sowogj.png"
  ["converted-flat-epc-comparison"]="https://tempfile.aiquickdraw.com/workers/nano/image_1769944828985_xbcu5p.png"
  # Edwardian House
  ["edwardian-house-exterior"]="https://tempfile.aiquickdraw.com/images/1769944905515-omr2pzy222.png"
  ["edwardian-house-cross-section"]="https://tempfile.aiquickdraw.com/images/1769944910099-7j6u1sk8fb.png"
  # HMO
  ["hmo-property-exterior"]="https://tempfile.aiquickdraw.com/images/1769945101139-ynzg67jcypc.png"
  # Pre-1919 Semi
  ["pre-1919-semi-exterior"]="https://tempfile.aiquickdraw.com/images/1769945246620-gsx8bxp4wn5.png"
  ["pre-1919-semi-heat-loss-comparison"]="https://tempfile.aiquickdraw.com/images/1769946700667-0ki7j51rniy.png"
  # Regulations
  ["epc-c-2030-deadline-hero"]="https://tempfile.aiquickdraw.com/images/1769891326570-tj86ghplq88.png"
  ["mees-guide-hero"]="https://tempfile.aiquickdraw.com/images/1769943507149-rqvdvnex33a.png"
  ["cost-cap-exemptions-hero"]="https://tempfile.aiquickdraw.com/images/1769943593623-6zfju3dhq9h.png"
  ["rdsap-10-changes-hero"]="https://tempfile.aiquickdraw.com/images/1769943974277-aqhy63hxxaw.png"
  ["warm-homes-plan-hero"]="https://tempfile.aiquickdraw.com/images/1769944042610-2hqitht3fad.png"
  # Costs & Funding
  ["costs-overview-hero"]="https://tempfile.aiquickdraw.com/images/1769945057843-6eb0e53nw1.png"
  ["costs-property-types-comparison"]="https://tempfile.aiquickdraw.com/workers/nano/image_1769945022284_11lylx.png"
  ["costs-effective-improvements"]="https://tempfile.aiquickdraw.com/images/1769945058732-uv3yruswqte.png"
  ["cheapest-improvements-hero"]="https://tempfile.aiquickdraw.com/images/1769941580751-jinvre718g.png"
  ["d-to-c-upgrade-hero"]="https://tempfile.aiquickdraw.com/images/1769945139806-k66k9qxcwkd.png"
  ["d-to-c-upgrade-journey"]="https://tempfile.aiquickdraw.com/images/1769945038061-0zchfar01xo8.png"
  ["d-to-c-upgrade-loft-insulation"]="https://tempfile.aiquickdraw.com/workers/nano/image_1769945032728_t01rd2.png"
  ["e-to-c-upgrade-hero"]="https://tempfile.aiquickdraw.com/images/1769945059511-qw92rrnkmi.png"
  ["eco4-landlords-hero"]="https://tempfile.aiquickdraw.com/images/1769945059750-ou3eno9v2qk.png"
  ["boiler-upgrade-scheme-hero"]="https://tempfile.aiquickdraw.com/images/1769945079381-xbz6u4hjpt.png"
  ["warm-homes-local-grant-hero"]="https://tempfile.aiquickdraw.com/images/1769945079136-xaikysr0td.png"
  # Tools
  ["cost-calculator-hero"]="https://tempfile.aiquickdraw.com/images/1769946907582-w69g69uc95j.png"
  ["cost-calculator-planning"]="https://tempfile.aiquickdraw.com/images/1769946909780-rxty2pvcoei.png"
  ["exemption-checker-hero"]="https://tempfile.aiquickdraw.com/workers/nano/image_1769946911277_6rx9hf.png"
)

SUCCESS=0
FAILED=0

for name in "${!IMAGES[@]}"; do
  url="${IMAGES[$name]}"
  output_file="$OUTPUT_DIR/${name}.png"

  if curl -sS -o "$output_file" "$url" 2>/dev/null; then
    # Check if file is actually an image (not empty or error page)
    if [ -s "$output_file" ]; then
      echo "✓ $name"
      ((SUCCESS++))
    else
      echo "✗ $name (empty file)"
      rm -f "$output_file"
      ((FAILED++))
    fi
  else
    echo "✗ $name (download failed)"
    ((FAILED++))
  fi
done

echo ""
echo "--- Summary ---"
echo "Downloaded: $SUCCESS"
echo "Failed: $FAILED"
echo ""
echo "Images saved to: $OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "1. Update src/lib/default-images.ts to use local paths"
echo "2. git add public/images/generated/"
echo "3. git commit -m 'feat: Add permanent image storage'"
echo "4. git push"
