import heroVideo from "@/assets/hidden-hero-video.mp4";

const HiddenHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-8 md:px-14 lg:px-20 pt-24 pb-16 text-center">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="inline-flex items-center justify-center rounded-full px-5 py-2 mb-8" style={{ background: "#000000" }}>
            <span className="text-white text-[11px] sm:text-[12px] md:text-[13px] font-normal tracking-[0.5em] uppercase">
              Decision Intelligence Activated
            </span>
          </div>

          <h1 className="text-white font-medium leading-[1.15] tracking-[-0.01em] mb-8 text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[56px]">
            AI Powered Manufacturing and
            <br />
            Supply Chain Intelligence
          </h1>

          <p className="text-white/85 text-[14px] sm:text-[16px] md:text-[18px] leading-[1.7] max-w-[900px] mx-auto font-light">
            Empowering business decisions through <span className="font-medium text-white">AI-driven manufacturing</span> and supply chain intelligence.
            <br className="hidden sm:block" />
            <span className="font-medium text-white">Build enterprise data clouds,</span> activate pro-active <span className="font-medium text-white">agents,</span> and optimize plant workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiddenHeroSection;
