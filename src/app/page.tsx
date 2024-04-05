import Scene from "@/components/Scene";

export default async function Home() {
  return (
    <main className="w-full h-screen py-4">
      <div className="w-full h-full relative flex flex-col items-center justify-between">
        <div className="w-full py-4 text-4xl md:text-8xl font-bold text-white md:px-10 flex flex-col items-center justify-between">
          <div>
            <div className="w-full text-center">
              Have fun & earn tokens
              <br />
              with Chess-on-chain
            </div>
            <div className="text-base md:text-lg font-light text-justify text-white mt-5 leading-relaxed">
              Challenge other wallets to play against you or play against an AI.
              Earn points by playing and winning. Complete recurring quests and
              collect achievements!
            </div>
          </div>
        </div>

        <div className="text-white">
          <button
            // Big CTA  button White bg transparent text
            className="w-80 h-12 md:h-16 bg-white text-primary font-bold text-lg md:text-2xl rounded-2xl border border-white"
          >
            Play Now
          </button>
        </div>

        <div className="w-full h-full absolute -z-10">
          <Scene />
        </div>
      </div>
    </main>
  );
}
