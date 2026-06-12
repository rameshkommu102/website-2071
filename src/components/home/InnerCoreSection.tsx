import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import oic1 from "@/assets/oic-1.png";
import oic2 from "@/assets/oic-2.png";
import oic3 from "@/assets/oic-3.png";
import oic4 from "@/assets/oic-4.png";
import oic5 from "@/assets/oic-5.png";

type Size = "tall" | "short";
const items: { img: string; title: string; desc: string; size: Size }[] = [
  { img: oic1, title: "Customer Impact", desc: "Every Solution Starts And Ends With Measurable Client Success.", size: "tall" },
  { img: oic2, title: "Engineering Excellence", desc: "Robust, Scalable Systems Built On Best-In-Class Practices.", size: "short" },
  { img: oic3, title: "Industrial Expertise", desc: "Deep Domain Knowledge Across Manufacturing Verticals.", size: "tall" },
  { img: oic4, title: "Practical Innovation", desc: "AI That Solves Real Problems, Not Just Proof-Of-Concepts.", size: "short" },
  { img: oic5, title: "Collaborative Partnership", desc: "Long-Term Relationships Built On Trust And Shared Goals.", size: "tall" },
];

const InnerCoreSection = () => {
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

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "#000000" }}>
      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-8 lg:gap-10 items-center">
          {/* Left column */}
          <div>
            <ScrollReveal animation="fadeRight" duration={0.9}>
              <div className="mb-6 sm:mb-8">
                <div className="inline-block">
                  <p
                    className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Our Inner Core
                  </p>
                  <div className="w-[60%] h-[2px] bg-white" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="clipReveal" duration={1}>
              <div className="lg:pl-10 xl:pl-14">
                <h2
                  className="text-white text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[38px] leading-[1.1] mb-5 sm:mb-6"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                >
                  Principles Behind Every Engagement & Decision
                </h2>
                <p
                  className="text-[13px] sm:text-[14px] xl:text-[15px] leading-relaxed"
                  style={{ color: "#C8C8C8" }}
                >
                  Built on trust, powered by innovation, and focused on measurable business outcomes.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - carousel */}
          <div className="relative min-w-0">
            {/* Arrows top-right */}
            <div className="flex justify-end gap-2 mb-4">
              <button
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
                disabled={!canPrev}
                className="w-9 h-9 flex items-center justify-center rounded-md transition-colors"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  color: canPrev ? "#FFFFFF" : "#555555",
                  cursor: canPrev ? "pointer" : "not-allowed",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollBy(1)}
                disabled={!canNext}
                className="w-9 h-9 flex items-center justify-center rounded-md transition-colors"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  color: canNext ? "#FFFFFF" : "#555555",
                  cursor: canNext ? "pointer" : "not-allowed",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="relative">
              {/* Edge fade overlays */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-20 lg:w-24 z-20 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)",
                  opacity: canPrev ? 1 : 0,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-20 lg:w-24 z-20 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 100%)",
                  opacity: canNext ? 1 : 0,
                }}
              />
              <div
                ref={scrollRef}
                className="flex gap-5 sm:gap-6 overflow-x-auto pb-2 snap-x scroll-smooth items-start"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style>{`div::-webkit-scrollbar { display: none; }`}</style>
              {items.map((item, i) => {
                const isTall = item.size === "tall";
                return (
                  <div
                    key={item.title}
                    data-card
                    className="snap-start shrink-0 w-[210px] sm:w-[230px] lg:w-[240px]"
                    style={{ marginTop: isTall ? 0 : 64 }}
                  >
                    <div
                      className="w-full rounded-2xl overflow-hidden mb-3"
                      style={{
                        background: "#0E0E0E",
                        height: isTall ? 320 : 240,
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4
                      className="text-white font-semibold text-[17px] sm:text-[18px] mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed" style={{ color: "#9A9A9A" }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerCoreSection;
