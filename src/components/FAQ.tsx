"use client";

import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How can I earn on-chain points?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus eget nunc. Donec auctor, nunc nec ultricies ultricies, nunc nunc ultricies.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support via telegram",
  },
  {
    question: "How does your game align with the NDC and Gaming WG KPIs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet purus eget nunc. Donec auctor, nunc nec ultricies ultricies, nunc nunc ultricies.",
  },
];

export default function FAQ() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto divide-y divide-white/10">
          <div className="text-violet-400">Roadmap</div>
          <h2 className="text-white text-5xl font-bold my-4">
            {" "}
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <dt
                    className={`bg-neutral-800 px-6 rounded-lg py-8 ${
                      !open && "hover:bg-neutral-600"
                    }`}
                  >
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
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
                    </Disclosure.Button>
                    <Disclosure.Panel as="dd" className="mt-10 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </dt>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
