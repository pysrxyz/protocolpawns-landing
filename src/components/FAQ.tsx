import { MAIN_CONTENT } from "@/content";

export default function FAQ() {
  return (
    <section id="faqs" className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto">
          <div className="text-violet-400">{MAIN_CONTENT.FAQ.title}</div>
          <h2 className="text-white text-3xl md:text-5xl font-bold my-4">
            {MAIN_CONTENT.FAQ.subtitle}
          </h2>

          <div className="mt-10 space-y-12">
            {MAIN_CONTENT.FAQ.questions.map((faq) => (
              <details
                key={faq.question}
                className="bg-neutral-800 rounded-lg hover:bg-neutral-600 cursor-pointer [&_svg]:open:-rotate-180 list-none"
              >
                <summary className="w-full px-6 py-4 md:py-8 list-none marker:hidden">
                  <div className="flex w-full items-start justify-between text-left text-white">
                    <span className="text-lg font-semibold leading-7 text-white">
                      {faq.question}
                    </span>
                    <div className="ml-6 flex h-7 items-center">
                      <svg
                        className="rotate-0 transform transition-all duration-300"
                        fill="none"
                        height="20"
                        width="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </summary>
                <p className="pr-12 pb-6 px-6 text-base leading-7 text-gray-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
