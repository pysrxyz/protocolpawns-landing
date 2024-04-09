import Scene from "@/components/Scene";
import { MAIN_CONTENT, SOCIAL_MEDIA } from "@/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-full relative flex flex-col items-center justify-between"
    >
      <div className="w-full py-4 text-3xl md:text-6xl font-bold text-white md:px-10 flex flex-col items-center justify-between">
        <div>
          <div className="w-full max-w-3xl text-center leading-normal">
            {MAIN_CONTENT.main.intro.title}
          </div>
          <div className="text-sm md:text-lg max-w-sm md:max-w-xl font-light text-center text-white mt-2 leading-relaxed mx-auto">
            {MAIN_CONTENT.main.intro.description}
          </div>
        </div>
      </div>

      <div className="text-white pb-10 md:pb-20 z-20">
        <a
          href={SOCIAL_MEDIA.social_media.near.url}
          className="flex justify-center items-center w-80 h-12 md:h-16 bg-white text-primary font-bold text-lg md:text-2xl rounded-2xl border border-white"
          target="_blank"
          aria-label={MAIN_CONTENT.main.intro.button}
        >
          {MAIN_CONTENT.main.intro.button}
        </a>
      </div>

      <div className="w-full h-full absolute -z-10">
        <Scene />
      </div>
    </section>
  );
}
