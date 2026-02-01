#!/usr/bin/env python3
"""
EPC Data Analysis Script for Green Landlord
Fetches and analyzes EPC data from the Open Data Communities API.

Usage:
    python epc_analysis.py [--local-authority LA_CODE] [--property-type TYPE]

Examples:
    python epc_analysis.py --local-authority E08000003  # Manchester
    python epc_analysis.py --property-type "House"
    python epc_analysis.py  # Run full analysis across major cities
"""

import os
import sys
import base64
import argparse
from datetime import datetime
from io import StringIO

import requests
import pandas as pd
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# API Configuration
API_BASE_URL = "https://epc.opendatacommunities.org/api/v1"
EPC_API_EMAIL = os.getenv("EPC_API_EMAIL")
EPC_API_KEY = os.getenv("EPC_API_KEY")

# Major cities for analysis (Local Authority codes)
MAJOR_CITIES = {
    "E08000003": "Manchester",
    "E08000025": "Birmingham",
    "E08000035": "Leeds",
    "E06000023": "Bristol",
    "E08000012": "Liverpool",
    "E08000019": "Sheffield",
    "E08000021": "Newcastle",
    "E06000018": "Nottingham",
    "E09000012": "Hackney",
    "E08000016": "Leicester",
}

# Property types for analysis
PROPERTY_TYPES = [
    "House",
    "Flat",
    "Maisonette",
    "Bungalow",
]

# Built forms for detailed analysis
BUILT_FORMS = [
    "Detached",
    "Semi-Detached",
    "Mid-Terrace",
    "End-Terrace",
    "Enclosed Mid-Terrace",
    "Enclosed End-Terrace",
]

# EPC ratings
EPC_RATINGS = ["A", "B", "C", "D", "E", "F", "G"]


def get_auth_header():
    """Generate the Basic Auth header for API requests."""
    if not EPC_API_EMAIL or not EPC_API_KEY:
        raise ValueError(
            "EPC_API_EMAIL and EPC_API_KEY must be set in environment variables.\n"
            "Copy .env.example to .env and fill in your credentials."
        )

    credentials = f"{EPC_API_EMAIL}:{EPC_API_KEY}"
    encoded = base64.b64encode(credentials.encode()).decode()
    return {"Authorization": f"Basic {encoded}", "Accept": "text/csv"}


def fetch_epc_data(params: dict, max_results: int = 5000) -> pd.DataFrame:
    """
    Fetch EPC data from the API with given parameters.

    Args:
        params: Query parameters (e.g., local-authority, property-type)
        max_results: Maximum number of results to fetch (API limit is 5000 per request)

    Returns:
        DataFrame with EPC data
    """
    headers = get_auth_header()
    params["size"] = min(max_results, 5000)

    url = f"{API_BASE_URL}/domestic/search"

    print(f"  Fetching data with params: {params}")

    try:
        response = requests.get(url, headers=headers, params=params, timeout=60)
        response.raise_for_status()

        # Parse CSV response
        df = pd.read_csv(StringIO(response.text))
        print(f"  Retrieved {len(df)} records")
        return df

    except requests.exceptions.RequestException as e:
        print(f"  Error fetching data: {e}")
        return pd.DataFrame()


def analyze_ratings_distribution(df: pd.DataFrame) -> dict:
    """Analyze the distribution of EPC ratings in the dataset."""
    if df.empty or "current-energy-rating" not in df.columns:
        return {}

    total = len(df)
    distribution = df["current-energy-rating"].value_counts()

    result = {
        "total_properties": total,
        "distribution": {},
        "below_c_count": 0,
        "below_c_percentage": 0,
    }

    below_c = 0
    for rating in EPC_RATINGS:
        count = distribution.get(rating, 0)
        percentage = (count / total * 100) if total > 0 else 0
        result["distribution"][rating] = {
            "count": int(count),
            "percentage": round(percentage, 1)
        }
        if rating in ["D", "E", "F", "G"]:
            below_c += count

    result["below_c_count"] = int(below_c)
    result["below_c_percentage"] = round((below_c / total * 100) if total > 0 else 0, 1)

    return result


def analyze_by_property_age(df: pd.DataFrame) -> dict:
    """Analyze EPC ratings by property construction age."""
    if df.empty or "construction-age-band" not in df.columns:
        return {}

    age_analysis = {}

    for age_band in df["construction-age-band"].dropna().unique():
        subset = df[df["construction-age-band"] == age_band]
        if len(subset) >= 10:  # Only include if we have enough data
            ratings = analyze_ratings_distribution(subset)
            if ratings:
                age_analysis[age_band] = {
                    "count": ratings["total_properties"],
                    "below_c_percentage": ratings["below_c_percentage"],
                    "distribution": ratings["distribution"]
                }

    return age_analysis


def analyze_by_property_type(df: pd.DataFrame) -> dict:
    """Analyze EPC ratings by property type."""
    if df.empty or "property-type" not in df.columns:
        return {}

    type_analysis = {}

    for prop_type in df["property-type"].dropna().unique():
        subset = df[df["property-type"] == prop_type]
        if len(subset) >= 10:
            ratings = analyze_ratings_distribution(subset)
            if ratings:
                type_analysis[prop_type] = {
                    "count": ratings["total_properties"],
                    "below_c_percentage": ratings["below_c_percentage"],
                    "distribution": ratings["distribution"]
                }

    return type_analysis


def analyze_by_built_form(df: pd.DataFrame) -> dict:
    """Analyze EPC ratings by built form (detached, terrace, etc.)."""
    if df.empty or "built-form" not in df.columns:
        return {}

    form_analysis = {}

    for built_form in df["built-form"].dropna().unique():
        subset = df[df["built-form"] == built_form]
        if len(subset) >= 10:
            ratings = analyze_ratings_distribution(subset)
            if ratings:
                form_analysis[built_form] = {
                    "count": ratings["total_properties"],
                    "below_c_percentage": ratings["below_c_percentage"],
                }

    return form_analysis


def get_average_energy_efficiency(df: pd.DataFrame) -> float:
    """Calculate average energy efficiency score."""
    if df.empty or "current-energy-efficiency" not in df.columns:
        return 0

    return round(df["current-energy-efficiency"].mean(), 1)


def run_city_analysis() -> dict:
    """Run analysis across all major cities."""
    print("\n=== Analyzing Major UK Cities ===\n")

    results = {}

    for la_code, city_name in MAJOR_CITIES.items():
        print(f"\nAnalyzing {city_name}...")

        df = fetch_epc_data({"local-authority": la_code})

        if df.empty:
            print(f"  No data for {city_name}")
            continue

        results[city_name] = {
            "local_authority": la_code,
            "total_records": len(df),
            "average_efficiency": get_average_energy_efficiency(df),
            "ratings": analyze_ratings_distribution(df),
            "by_property_type": analyze_by_property_type(df),
            "by_built_form": analyze_by_built_form(df),
            "by_age": analyze_by_property_age(df),
        }

    return results


def run_property_type_analysis() -> dict:
    """Run analysis by property type across all data."""
    print("\n=== Analyzing by Property Type ===\n")

    results = {}

    for prop_type in PROPERTY_TYPES:
        print(f"\nAnalyzing {prop_type}s...")

        df = fetch_epc_data({"property-type": prop_type})

        if df.empty:
            continue

        results[prop_type] = {
            "total_records": len(df),
            "average_efficiency": get_average_energy_efficiency(df),
            "ratings": analyze_ratings_distribution(df),
            "by_built_form": analyze_by_built_form(df),
        }

    return results


def format_insights(city_results: dict, type_results: dict) -> str:
    """Format analysis results as readable insights."""
    lines = []
    lines.append("=" * 60)
    lines.append("EPC DATA ANALYSIS - KEY INSIGHTS")
    lines.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    lines.append("=" * 60)

    # City comparison
    if city_results:
        lines.append("\n## CITY COMPARISON - % of Properties Below EPC C\n")

        city_stats = []
        for city, data in city_results.items():
            if "ratings" in data and data["ratings"]:
                city_stats.append({
                    "city": city,
                    "below_c": data["ratings"]["below_c_percentage"],
                    "total": data["total_records"],
                    "avg_efficiency": data["average_efficiency"]
                })

        # Sort by worst compliance
        city_stats.sort(key=lambda x: x["below_c"], reverse=True)

        for stat in city_stats:
            lines.append(f"  {stat['city']:15} {stat['below_c']:5.1f}% below C  "
                        f"(avg score: {stat['avg_efficiency']}, n={stat['total']:,})")

    # Property type comparison
    if type_results:
        lines.append("\n## PROPERTY TYPE COMPARISON\n")

        for prop_type, data in type_results.items():
            if "ratings" in data and data["ratings"]:
                lines.append(f"  {prop_type:12} {data['ratings']['below_c_percentage']:5.1f}% below C  "
                            f"(avg score: {data['average_efficiency']})")

    # Victorian terrace spotlight (if data available)
    lines.append("\n## KEY FINDING: Victorian Terraces\n")

    victorian_data = []
    for city, data in city_results.items():
        if "by_age" in data:
            for age_band, age_data in data["by_age"].items():
                if "1900" in str(age_band) or "1899" in str(age_band) or "before 1900" in str(age_band).lower():
                    victorian_data.append({
                        "city": city,
                        "age_band": age_band,
                        "below_c": age_data["below_c_percentage"],
                        "count": age_data["count"]
                    })

    if victorian_data:
        victorian_data.sort(key=lambda x: x["below_c"], reverse=True)
        for v in victorian_data[:5]:
            lines.append(f"  {v['city']:15} {v['below_c']:5.1f}% below C  "
                        f"({v['age_band']}, n={v['count']})")
    else:
        lines.append("  (No Victorian-era data found in sample)")

    lines.append("\n" + "=" * 60)
    lines.append("Note: Data limited to 5,000 records per query (API limit)")
    lines.append("For full analysis, use bulk downloads")
    lines.append("=" * 60)

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Analyze EPC data from Open Data Communities API")
    parser.add_argument("--local-authority", "-la", help="Local authority code (e.g., E08000003 for Manchester)")
    parser.add_argument("--property-type", "-pt", help="Property type (House, Flat, Maisonette, Bungalow)")
    parser.add_argument("--full-analysis", "-f", action="store_true", help="Run full analysis across cities and property types")
    parser.add_argument("--output", "-o", help="Output file path (default: print to stdout)")

    args = parser.parse_args()

    print("=" * 60)
    print("EPC Data Analysis for Green Landlord")
    print("=" * 60)

    city_results = {}
    type_results = {}

    if args.local_authority:
        # Single local authority analysis
        city_name = MAJOR_CITIES.get(args.local_authority, args.local_authority)
        print(f"\nAnalyzing {city_name}...")
        df = fetch_epc_data({"local-authority": args.local_authority})

        if not df.empty:
            city_results[city_name] = {
                "total_records": len(df),
                "average_efficiency": get_average_energy_efficiency(df),
                "ratings": analyze_ratings_distribution(df),
                "by_property_type": analyze_by_property_type(df),
                "by_built_form": analyze_by_built_form(df),
                "by_age": analyze_by_property_age(df),
            }

    elif args.property_type:
        # Single property type analysis
        print(f"\nAnalyzing {args.property_type}...")
        df = fetch_epc_data({"property-type": args.property_type})

        if not df.empty:
            type_results[args.property_type] = {
                "total_records": len(df),
                "average_efficiency": get_average_energy_efficiency(df),
                "ratings": analyze_ratings_distribution(df),
                "by_built_form": analyze_by_built_form(df),
            }

    else:
        # Default: run full analysis
        print("\nRunning full analysis (this may take a few minutes)...")
        city_results = run_city_analysis()
        type_results = run_property_type_analysis()

    # Format and output results
    insights = format_insights(city_results, type_results)

    if args.output:
        with open(args.output, "w") as f:
            f.write(insights)
        print(f"\nResults saved to: {args.output}")
    else:
        print("\n" + insights)


if __name__ == "__main__":
    main()
