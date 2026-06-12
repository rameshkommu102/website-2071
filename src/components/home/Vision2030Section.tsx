import visionBg from "@/assets/vision2030-bg.png";
import visionVideo from "@/assets/vision2030-bg.mp4";
import ScrollReveal from "@/components/ewm/ScrollReveal";

const Vision2030Section = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '420px', backgroundColor: '#010203' }}>
      <video
        src={visionVideo}
        poster={visionBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Left-to-right dark gradient (matches reference) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #000000 0%, #000000 30%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.2) 100%)" }}
      />
      {/* Subtle dark overlay from center to right */}
      <div
        className="absolute inset-y-0 right-0 left-1/2 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.28) 100%)" }}
      />
      {/* Top blend into Capabilities section (#010203) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none h-32 sm:h-44"
        style={{ background: "linear-gradient(0deg, rgba(1, 2, 3, 0) 0%, #010203 100%)" }}
      />
      {/* Bottom blend into next section (#000) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none h-24 sm:h-32"
        style={{ background: "linear-gradient(0deg, #000000 0%, rgba(0,0,0,0) 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 flex flex-col justify-center min-h-[420px]">
        <ScrollReveal animation="fadeRight" duration={0.8}>
          <div className="mb-8 sm:mb-12">
            <div className="inline-block">
              <p className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Decade of Intelligence</p>
              <div className="w-[35%] h-[2px] bg-white" />
            </div>
          </div>
        </ScrollReveal>

        <div className="lg:pl-10 xl:pl-14">
        <ScrollReveal animation="fadeUp" duration={0.9} delay={0.1}>
          <h2
            className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[31px] 2xl:text-[35px] font-medium leading-[1.1] text-white mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AI + Manufacturing
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="clipReveal" duration={1.1} delay={0.2}>
          <p
            className="text-[38px] sm:text-[56px] md:text-[68px] xl:text-[80px] 2xl:text-[100px] font-medium leading-[1.1] mb-6 sm:mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ffffff" }}
          >
            Vision 2030
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.8} delay={0.35}>
          <p className="text-white/85 text-[14px] sm:text-sm md:text-base xl:text-[16px] 2xl:text-[18px] max-w-[560px] xl:max-w-[700px] leading-relaxed mb-0">
            Embrace AI, machine intelligence and predictive analytics for next-generation
            manufacturing. Our vision connects people, processes and machines into a unified
            intelligence layer.
          </p>
        </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Vision2030Section;
