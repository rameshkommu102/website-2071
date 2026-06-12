import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import iconDigitalTransformation from "@/assets/icon-digital-transformation.png";
import iconCostOptimisation from "@/assets/icon-cost-optimisation.png";
import iconBigData from "@/assets/icon-big-data.png";
import iconDigitalTwin from "@/assets/icon-digital-twin.png";
import iconAiMl from "@/assets/icon-ai-ml.png";
import iconQualityAssurance from "@/assets/icon-quality-assurance.png";
import iconSupplyChain from "@/assets/icon-supply-chain.png";
import iconProcessAutomation from "@/assets/icon-process-automation.png";

type Card = {
  icon: string;
  number: string;
  title: string;
  desc: string;
  footer: string;
  glow: string;
};

const cards: Card[] = [
  {
    icon: iconDigitalTransformation,
    number: "01",
    title: "Transform Digitally",
    desc: "Modernize Legacy Systems And Build Connected Digital Ecosystems For Future-Ready Operations.",
    footer: "Scalable Digital Transformation Strategies",
    glow: "#3B82F633",
  },
  {
    icon: iconCostOptimisation,
    number: "02",
    title: "Optimize With Intelligence",
    desc: "Reduce Operational Costs Using Automation, Analytics, And Performance-Driven Decision Systems.",
    footer: "Cost Efficiency Powered By Data",
    glow: "#A855F733",
  },
  {
    icon: iconBigData,
    number: "03",
    title: "Unlock Data Insights",
    desc: "Convert Enterprise Data Into Actionable Intelligence With Real-Time Analytics And Forecasting.",
    footer: "Advanced Big Data & Analytics Systems",
    glow: "#10B98133",
  },
  {
    icon: iconDigitalTwin,
    number: "04",
    title: "Build Connected Operations",
    desc: "Create Smart Industrial Environments With Digital Twin Technology And IIOT Infrastructure.",
    footer: "Real-Time Monitoring & Simulation Systems",
    glow: "#06B6D433",
  },
  {
    icon: iconAiMl,
    number: "05",
    title: "Scale With AI",
    desc: "Deploy AI And Machine Learning Models That Automate Decisions And Improve Business Accuracy.",
    footer: "Predictive AI-Powered Automation",
    glow: "#F9731633",
  },
  {
    icon: iconQualityAssurance,
    number: "06",
    title: "Ensure Product Quality",
    desc: "Strengthen Reliability With Continuous Testing, Monitoring, And Enterprise-Grade Quality Assurance.",
    footer: "Precision-Driven Quality Control",
    glow: "#F43F5E33",
  },
  {
    icon: iconSupplyChain,
    number: "07",
    title: "Streamline Supply Chains",
    desc: "Improve Financial Visibility And Operational Flow Across Procurement And Logistics Networks.",
    footer: "Smarter Supply Chain Finance Solutions",
    glow: "#84CC1633",
  },
  {
    icon: iconProcessAutomation,
    number: "08",
    title: "Automate Processes",
    desc: "Eliminate Repetitive Workflows With Intelligent Process Automation And Integrated Systems.",
    footer: "End-To-End Workflow Automation",
    glow: "#EAB30833",
  },
];

const WhatWeDeliverSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 sm:py-14 relative overflow-hidden" style={{ background: "#010203" }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="clipReveal" duration={1}>
          <div className="relative mb-10 sm:mb-14">
            {/* Eyebrow - left aligned */}
            <div className="mb-6 sm:mb-8 flex justify-start">
              <div className="inline-block">
                <p
                  className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Capabilities
                </p>
                <div className="w-[60%] h-[2px] bg-white" />
              </div>
            </div>

            {/* Title + arrows row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 text-center">
                <h2
                  className="text-[26px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[43px] 2xl:text-[51px] mb-4 leading-[1.1]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, color: "#ffffff" }}
                >
                  We Help You See Further.
                </h2>
                <p
                  className="text-[13px] sm:text-[15px] xl:text-[15px] 2xl:text-[17px] max-w-[640px] xl:max-w-[780px] mx-auto leading-relaxed"
                  style={{ color: "#ffffff" }}
                >
                  Bridging what is with what can be — across every layer of your industrial enterprise.
                </p>
              </div>

              {/* Arrows */}
              <div className="hidden sm:flex gap-2 shrink-0 self-end">
                <button
                  aria-label="Previous"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canPrev}
                  className="w-10 h-10 flex items-center justify-center rounded-md transition-colors"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    color: canPrev ? "#FFFFFF" : "#555555",
                    cursor: canPrev ? "pointer" : "not-allowed",
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => scrollByCard(1)}
                  disabled={!canNext}
                  className="w-10 h-10 flex items-center justify-center rounded-md transition-colors"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    color: canNext ? "#FFFFFF" : "#555555",
                    cursor: canNext ? "pointer" : "not-allowed",
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="flex sm:hidden justify-end gap-2 mt-4">
              <button
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="w-9 h-9 flex items-center justify-center rounded-md"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  color: canPrev ? "#FFFFFF" : "#555555",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="w-9 h-9 flex items-center justify-center rounded-md"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  color: canNext ? "#FFFFFF" : "#555555",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-20 z-20 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to right, #010203 0%, rgba(1,2,3,0.85) 40%, rgba(1,2,3,0) 100%)",
              opacity: canPrev ? 1 : 0,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-20 z-20 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to left, #010203 0%, rgba(1,2,3,0.85) 40%, rgba(1,2,3,0) 100%)",
              opacity: canNext ? 1 : 0,
            }}
          />
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 snap-x scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {cards.map((card) => (
            <div
              key={card.number}
              data-card
              className="group snap-start shrink-0 w-[280px] sm:w-[300px] lg:w-[248px] relative overflow-hidden rounded-lg transition-all duration-500 ease-out"
              style={{
                background: "#0F0F0A",
                minHeight: 280,
              }}
            >
              {/* Glow blob - smoothly travels from top-right to bottom-left on hover */}
              <div
                aria-hidden
                className={`absolute pointer-events-none deliver-glow-${card.number}`}
                style={{
                  width: "120%",
                  height: "70%",
                  background: card.glow,
                  filter: "blur(70px)",
                  borderRadius: "50%",
                  opacity: 0.7,
                  top: "-30%",
                  left: "20%",
                  transition: "top 900ms ease-in-out, left 900ms ease-in-out",
                }}
              />
              <style>{`
                .group:hover .deliver-glow-${card.number} {
                  top: 60% !important;
                  left: -40% !important;
                }
              `}</style>

              <div className="relative z-10 p-4 flex flex-col h-full" style={{ minHeight: 280 }}>
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: card.glow.replace("33", "55") }}
                >
                  <img src={card.icon} alt="" className="w-4 h-4" loading="lazy" />
                </div>

                {/* Big number */}
                <div
                  className="text-[42px] leading-none font-light mb-3 transition-colors duration-500 group-hover:text-white/25"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "rgba(255,255,255,0.12)",
                  }}
                >
                  {card.number}
                </div>

                {/* Title */}
                <h3
                  className="text-white text-[13px] font-semibold mb-1.5 transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[11px] leading-relaxed mb-3"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {card.desc}
                </p>

                {/* Footer */}
                <div
                  className="mt-auto pt-2.5 text-[10px] font-medium"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {card.footer}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
