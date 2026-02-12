"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Helix DB?",
    answer: "Replace this with a real answer about your product.",
  },
  {
    question: "How do I get started?",
    answer: "Replace this with onboarding instructions.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Replace this with your support details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
        FAQ
      </h2>
      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="rounded-xl border border-white/10 bg-white/5">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-white"
            >
              {faq.question}
              <span className="ml-4 text-zinc-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-sm text-zinc-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
