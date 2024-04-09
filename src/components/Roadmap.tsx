import { MAIN_CONTENT } from "@/content";

export default function Roadmap() {
  return (
    <section id="roadmap" className="px-4">
      <div>
        <h2 className="flex flex-col max-w-7xl mx-auto">
          <div className="text-sky-400">{MAIN_CONTENT.roadmap.title}</div>
          <div className="text-white text-5xl font-bold my-4">
            {MAIN_CONTENT.roadmap.subtitle}
          </div>
          <div className="text-xl text-gray-400">
            {MAIN_CONTENT.roadmap.description}
          </div>
        </h2>

        <div className="flex flex-col max-w-7xl mx-auto my-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MAIN_CONTENT.roadmap.steps.map((roadmap, index) => (
              <li
                key={roadmap.title}
                className="col-span-1 flex flex-col bg-gradient-to-tr from-neutral-dark via-neutral-700 to-neutral-dark rounded-lg shadow divide-y divide-neutral-700 max-w-sm"
              >
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-3xl font-bold text-white">
                    <div>{(index + 1).toString().padStart(2, "0")}</div>
                    <div className="text-xl my-4 font-semibold">
                      {roadmap.title}
                    </div>
                  </h3>
                  <p className="text-base text-gray-400">
                    {roadmap.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
