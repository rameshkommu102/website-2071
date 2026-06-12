import imgCfo from "@/assets/case-studies/cfo-intelligence-suite.png";
import imgProcurement from "@/assets/case-studies/procurement-logistics-intelligence.png";
import imgAnimalNutrition from "@/assets/case-studies/sap-analytics-animal-nutrition.png";
import imgFertis from "@/assets/case-studies/fertis-sap-decision-intelligence.png";
import imgFinSights from "@/assets/case-studies/finsights-multi-cloud-cost.png";
import imgPharma from "@/assets/case-studies/enterprise-analytics-pharma.png";
import imgUnilever from "@/assets/case-studies/supply-chain-unilever.png";
import imgDbmsc from "@/assets/case-studies/dbmsc-steels-data-automation.png";

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  industry: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cfo-intelligence-suite",
    tag: "Case Study",
    title: "CFO Intelligence Suite for Pharma Glass Manufacturing",
    desc: "Real-time SAP S/4HANA RISE financial visibility in a unified Power BI command center.",
    industry: "Pharma",
    image: imgCfo,
  },
  {
    slug: "procurement-logistics-intelligence",
    tag: "Case Study",
    title: "Procurement & Logistics Intelligence, Reimagined",
    desc: "End-to-end insights across procurement and logistics on a unified SAP-driven data layer.",
    industry: "Logistics",
    image: imgProcurement,
  },
  {
    slug: "sap-analytics-animal-nutrition",
    tag: "Case Study",
    title: "SAP Analytics for Animal Nutrition Leader",
    desc: "Unified view of sales, inventory, and finance across SAP ECC, BW, and Power BI.",
    industry: "Agriculture",
    image: imgAnimalNutrition,
  },
  {
    slug: "fertis-sap-decision-intelligence",
    tag: "Case Study",
    title: "From SAP Data to Decision Intelligence",
    desc: "Real-time reporting layer replacing fragmented Excel MIS with Power BI.",
    industry: "Agriculture",
    image: imgFertis,
  },
  {
    slug: "finsights-multi-cloud-cost",
    tag: "Case Study",
    title: "FinSights: Multi-Cloud Cost Intelligence Platform",
    desc: "Unified visibility across AWS, Azure, and GCP spend in real time.",
    industry: "Finance",
    image: imgFinSights,
  },
  {
    slug: "enterprise-analytics-pharma",
    tag: "Case Study",
    title: "Enterprise Analytics for Pharma Operations",
    desc: "Unified visibility across procurement, sales, finance, and inventory performance.",
    industry: "Pharma",
    image: imgPharma,
  },
  {
    slug: "supply-chain-unilever",
    tag: "Case Study",
    title: "Supply Chain Intelligence for Global FMCG Operations",
    desc: "End-to-end visibility across finance, costing, logistics, and pricing on SAP S/4HANA.",
    industry: "Manufacturing",
    image: imgUnilever,
  },
  {
    slug: "dbmsc-steels-data-automation",
    tag: "Case Study",
    title: "SAP-to-SQL Data Automation for Steel Manufacturing Operations",
    desc: "End-to-end data pipeline from SAP S/4HANA to Azure SQL — 19 automated reports, zero manual effort.",
    industry: "Manufacturing",
    image: imgDbmsc,
  },
];

export const getCaseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
