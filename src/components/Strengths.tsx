import FeaturesHeroImage from "@/assets/images/features-hero.png";

export default function Strengths() {
  return (
    <section className="w-full-h-full py-20 bg-neutral-dark">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center flex flex-col items-center">
          <div className="text-green-500 ">Our Strength</div>
          <div className="text-white text-5xl font-semibold my-4">
            What makes Protocal Pawns special ?
          </div>
          <div className="text-xl max-w-4xl text-gray-400">
            There are very few games that can run fully on-chain, chess can be
            one of those. <br />
            There will be a play2earn FT, that serves as a way to earn protocol
            revenue from <br />
            wager matches and others.
          </div>
        </h2>

        <div className="w-full py-20">
          <div className="flex justify-center">
            <div>
              <img src={FeaturesHeroImage.src} alt="Features Hero" />
            </div>

            <div className="flex flex-col justify-evenly">
              <h3>
                <div className="text-2xl text-white my-2">Transparency</div>
                <div className="text-lg text-gray-400 max-w-md">
                  The transparency of blockchain websites brings a whole new
                  level of excitement to the chess game. Playing chess on a
                  blockchain give you full transparency of what players have
                  been doing.
                </div>
              </h3>

              <h3>
                <div className="text-2xl text-white my-2">Well-known game</div>
                <div className="text-lg text-gray-400 max-w-md">
                  Chess is probably one of the most played and most well known
                  games around the world. It is easy for whether a beginner or
                  an expert player to start. Anyone can start enjoying it in no
                  time.
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
