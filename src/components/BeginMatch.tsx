import KnightBackground from "@/assets/images/knight-bg.png";

export default function BeginMatch() {
  return (
    <section className="relative w-full h-full">
      {/* Absolute background full cover */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          src={KnightBackground.src}
          alt="Hero background"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-bold text-white">Begin Match</h1>
        <p className="text-gray-400 text-lg">
          Start your journey to become the best chess player.
        </p>

        <div className="flex gap-10">
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
