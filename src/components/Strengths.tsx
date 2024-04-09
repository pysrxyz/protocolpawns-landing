import FeaturesHeroImage from "@/assets/images/features-hero.png";
import { MAIN_CONTENT } from "@/content";

export default function Strengths() {
  return (
    <section
      id={"our_strength"}
      className="w-full-h-full py-20 px-4 bg-neutral-dark"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center flex flex-col items-center">
          <div className="text-green-500 ">
            {MAIN_CONTENT.main.our_strength.title}
          </div>
          <div className="text-white text-3xl md:text-5xl font-semibold my-4">
            {MAIN_CONTENT.main.our_strength.subtitle}
          </div>
          <div className="text-base md:text-xl md:max-w-4xl text-gray-400">
            {MAIN_CONTENT.main.our_strength.description}
          </div>
        </h2>

        <div className="w-full py-20 px-4">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="mb-8 md:mb-0">
              <img src={FeaturesHeroImage.src} alt="Features Hero" />
            </div>

            <div className="flex flex-col justify-evenly gap-9">
              {MAIN_CONTENT.main.features.map((feature, index) => (
                <h3 key={index}>
                  <div className="text-2xl text-white font-semibold my-4 md:my-2">
                    {feature.title}
                  </div>
                  <div className="text-sm md:text-lg text-gray-400 max-w-md">
                    {feature.description}
                  </div>
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
