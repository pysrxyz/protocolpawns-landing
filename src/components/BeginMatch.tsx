import KnightBackground from "@/assets/images/knight-bg.png";

export default function BeginMatch() {
  return (
    <section className="relative w-full h-full px-4">
      {/* Absolute background full cover */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          src={KnightBackground.src}
          alt="Hero background"
          className="w-full h-full object-cover md:object-contain"
        />
      </div>

      <div className="h-full flex flex-col items-center justify-between md:justify-center gap-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white pb-5 md:pb-0">
            Begin your match
          </h1>
          <p className="text-gray-400 text-lg md:text-lg text-center">
            Start your journey to become the best chess player.
          </p>
        </div>

        <div className="flex gap-5 md:gap-10 flex-col-reverse md:flex-row w-full">
          <button className="bg-transparent text-white px-4 py-4 rounded-lg border border-white min-w-40">
            Learn More
          </button>

          <button className="bg-white text-primary px-4 py-4 rounded-lg min-w-40">
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
}
