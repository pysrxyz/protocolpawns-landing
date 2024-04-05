import Scene from "@/components/Scene";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex flex-col-reverse md:flex-row place-items-center min-h-[100vh] w-full px-3 md:px-0">
        <div className="w-full md:w-3/5 h-full text-4xl md:text-8xl font-bold text-white md:px-10 flex flex-col items-center justify-center">
          <div className="w-full">
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
        <div className="w-full md:w-2/5 h-[450px] md:min-h-[100vh]">
          <Scene />
        </div>
      </div>
    </main>
  );
}
