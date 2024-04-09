"use client";

import { MAIN_CONTENT } from "@/content";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  return (
    <section id="faqs" className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto">
          <div className="text-violet-400">{MAIN_CONTENT.FAQ.title}</div>
          <h2 className="text-white text-3xl md:text-5xl font-bold my-4">
            {MAIN_CONTENT.FAQ.subtitle}
          </h2>
          <dl className="mt-10 space-y-12">
            {MAIN_CONTENT.FAQ.questions.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="bg-neutral-800 rounded-lg hover:bg-neutral-600"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`w-full px-6 pt-4 md:py-8`}>
                      <dt className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-lg font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ChevronUpIcon
                              className="h-6 w-"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </dt>
                    </Disclosure.Button>
                    <Disclosure.Panel as="dd" className="pr-12 pb-6 px-6">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
