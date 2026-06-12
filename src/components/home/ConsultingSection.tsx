import { useEffect, useRef, useState } from "react";
import globeBg from "@/assets/globe-bg.mp4";

const ConsultingSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boostRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const mq = window.matchMedia('(max-width: 640px)');
    const updateMq = () => setIsMobile(mq.matches);
    updateMq();
    mq.addEventListener('change', updateMq);
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Hysteresis: enter at 0.3, exit below 0.15, prevents flicker at edges
          if (e.intersectionRatio >= 0.3) setActive(true);
          else if (e.intersectionRatio < 0.15) setActive(false);
        });
      },
      { threshold: thresholds }
    );
    io.observe(el);

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh;
        const passed = vh - rect.top;
        const p = Math.max(0, Math.min(1, passed / total));
        const node = boostRef.current;
        if (node) {
          const mobile = mq.matches;
          const boostRange = mobile ? 0 : 0.5;
          const eased = p === 0 ? 0 : Math.pow(p, 2.2);
          const boost = 1 + eased * boostRange;
          node.style.transform = `scale(${boost})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener('change', updateMq);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Activation scale only — scroll boost is applied imperatively (no React re-render)
  const restScale = 1.1;
  const peakScale = isMobile ? 1.7 : 1.8;
  const activationScale = active ? peakScale : restScale;

  return (
    <section
      ref={wrapperRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#000' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `scale(${activationScale})`,
            transformOrigin: 'center center',
            transition: `transform ${isMobile ? 3400 : 2800}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        >
          <div
            ref={boostRef}
            className="absolute inset-0 will-change-transform"
            style={{
              transform: 'scale(1)',
              transformOrigin: 'center center',
            }}
          >
            <video
              src={globeBg}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] px-5 sm:px-8 md:px-14 lg:px-20 py-24 sm:py-32 md:py-40 text-center">
        <div className="mb-8">
          <div className="inline-block">
            <p
              className="text-white text-[15px] sm:text-[17px] tracking-wide font-normal"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Who we are
            </p>
            <div className="w-[60%] h-[2px] bg-white" />
          </div>
        </div>

        <h2
          className="text-white text-[32px] sm:text-[42px] md:text-[56px] lg:text-[58px] font-semibold leading-[1.05] mb-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built for Visionaries.
        </h2>

        <p className="text-white text-[22px] sm:text-[26px] md:text-[30px] leading-[1.5] mb-2">
          Transforming ideas into{" "}
          <span
            className="inline-block"
            style={{
              fontFamily: "'Special Elite', cursive",
              borderBottom: '3px solid',
              borderImageSource:
                'linear-gradient(90deg, #FE9300 -22.47%, #C02142 36.41%, #FE9300 100%)',
              borderImageSlice: 1,
            }}
          >
            scalable digital experiences
          </span>
        </p>
        <p className="text-white text-[22px] sm:text-[26px] md:text-[30px] leading-[1.5] mb-10">
          through AI, strategy, and engineering.
        </p>

        <p className="text-white/60 text-[16px] sm:text-[18px] md:text-[19px] max-w-2xl mx-auto leading-relaxed">
          No complexity. No disconnected teams. Just seamless{" "}
          <span className="text-white font-semibold">innovation - designed</span>{" "}
          experience by experience.
        </p>
      </div>
    </section>
  );
};

export default ConsultingSection;
