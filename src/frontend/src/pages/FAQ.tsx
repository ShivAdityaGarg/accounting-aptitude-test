import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    category: "Test Format",
    items: [
      {
        id: "fmt-1",
        q: "What is the format of the Accounting Aptitude Test?",
        a: "The AAT consists of 40 multiple-choice questions to be completed within a 45-minute time limit. Each question has four answer options, and only one is correct.",
      },
      {
        id: "fmt-2",
        q: "Can I go back and change my answers?",
        a: "Yes. You can navigate freely between questions using the Previous/Next buttons. You may change your selected answer at any time before submitting.",
      },
      {
        id: "fmt-3",
        q: "What happens if the timer runs out?",
        a: "Your exam is automatically submitted with whatever answers you have selected at that point. Unanswered questions are marked as incorrect.",
      },
      {
        id: "fmt-4",
        q: "Is the test taken online or on paper?",
        a: "The AAT is entirely online. You only need a stable internet connection and a web browser \u2014 no downloads or plugins required.",
      },
    ],
  },
  {
    category: "Scoring & Results",
    items: [
      {
        id: "scr-1",
        q: "What is the passing score?",
        a: "You need to correctly answer at least 24 out of 40 questions (60%) to receive a passing result and your digital certificate.",
      },
      {
        id: "scr-2",
        q: "How are results calculated?",
        a: "Each correct answer earns one point. There is no negative marking. Your total score is expressed as a percentage of 40.",
      },
      {
        id: "scr-3",
        q: "When do I receive my results?",
        a: "Results are instant. As soon as you submit (or the timer expires), your score, pass/fail status, and a topic breakdown appear on screen.",
      },
    ],
  },
  {
    category: "Eligibility & Retakes",
    items: [
      {
        id: "elig-1",
        q: "Who is eligible to take the test?",
        a: "The AAT is open to all accounting trainees, interns, students, and entry-level professionals. No prior qualification is required.",
      },
      {
        id: "elig-2",
        q: "Can I retake the test if I fail?",
        a: "Yes. There is no limit on the number of attempts. We recommend reviewing the guidelines and study materials before retaking.",
      },
      {
        id: "elig-3",
        q: "Is there a registration fee?",
        a: "The Accounting Aptitude Test is completely free for all trainees and interns during the assessment period.",
      },
    ],
  },
  {
    category: "Topics Covered",
    items: [
      {
        id: "top-1",
        q: "What accounting topics are tested?",
        a: "The exam covers: (1) Debits & Credits \u2014 journal entries and double-entry bookkeeping, (2) Financial Statements \u2014 income statements, balance sheets, and cash flow, (3) Accounting Ratios \u2014 liquidity, profitability, and efficiency ratios, (4) Budgeting \u2014 variance analysis and basic forecasting.",
      },
      {
        id: "top-2",
        q: "Are tax and payroll questions included?",
        a: "The current version focuses on core financial accounting. Tax and payroll topics may be included in future advanced modules.",
      },
      {
        id: "top-3",
        q: "How should I prepare for the test?",
        a: "Review the Guidelines page for a full topic breakdown. Focus on double-entry bookkeeping, the accounting equation, and ratio analysis. Practice with textbook exercises before taking the timed exam.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="bg-navy-deep py-16 px-4 text-white"
        data-ocid="faq.section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              Help Center
            </span>
            <h1 className="text-4xl font-extrabold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg">
              Everything you need to know about the Accounting Aptitude Test.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4" data-ocid="faq.section">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h2 className="text-lg font-bold text-navy-DEFAULT mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gold rounded-full inline-block" />
                {group.category}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="space-y-2"
                data-ocid="faq.panel"
              >
                {group.items.map((item, i) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-border rounded-lg px-5 data-[state=open]:shadow-card"
                    data-ocid={`faq.item.${gi * 4 + i + 1}`}
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
