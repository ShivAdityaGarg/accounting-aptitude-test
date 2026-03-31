import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  ListChecks,
  MessageSquare,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

const testSections = [
  {
    icon: <Brain className="w-6 h-6" />,
    section: "Section 1",
    title: "Logical Reasoning",
    questions: 20,
    desc: "Analytical thinking, pattern recognition, and problem-solving questions.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    section: "Section 2",
    title: "Communication",
    questions: 10,
    desc: "Comprehension, grammar, and professional communication skills.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    section: "Section 3",
    title: "Accounting & Taxation",
    questions: 20,
    desc: "Core accounting principles, financial statements, and basic tax concepts.",
  },
];

const dos = [
  "Read each question carefully before selecting an answer",
  "Manage your time — aim for ~90 seconds per question",
  "Answer every question — no negative marking applies",
  "Review flagged questions if time permits",
  "Ensure a stable internet connection before starting",
];

const donts = [
  "Do not leave the exam tab/browser during the test",
  "Do not use external calculators, notes, or textbooks",
  "Do not share questions or answers with others",
  "Do not refresh the page during the exam",
  "Do not submit until you have reviewed your answers",
];

export default function Guidelines() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="bg-navy-deep py-16 px-4 text-white"
        data-ocid="guidelines.section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              Before You Begin
            </span>
            <h1 className="text-4xl font-extrabold mb-4">
              Test Guidelines & Details
            </h1>
            <p className="text-white/70 text-lg">
              Read these guidelines carefully before starting your examination.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-14">
        {/* Exam Format */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="guidelines.section"
        >
          <SectionHeader icon={<ListChecks />} title="Exam Format" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { label: "Questions", value: "50" },
              { label: "Format", value: "Multiple Choice" },
              { label: "Time Limit", value: "75 Minutes" },
            ].map((item) => (
              <Card
                key={item.label}
                className="text-center shadow-xs border-border"
              >
                <CardContent className="py-5">
                  <div className="text-2xl font-extrabold text-navy-DEFAULT mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Test Sections Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="guidelines.section"
        >
          <SectionHeader icon={<BookOpen />} title="Test Sections" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {testSections.map((s, i) => (
              <div
                key={s.title}
                className="border-2 border-border rounded-xl p-5 hover:border-gold transition-colors"
                data-ocid={`guidelines.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white"
                  style={{ background: "oklch(0.22 0.07 243)" }}
                >
                  {s.icon}
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                  {s.section}
                </span>
                <h3 className="font-bold text-foreground mt-1 mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{s.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-navy-DEFAULT">
                    {s.questions}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Questions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Time & Scoring */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="guidelines.section"
        >
          <SectionHeader icon={<Clock />} title="Time & Scoring" />
          <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Time Limit:</strong> You have
              exactly 75 minutes from the moment you start the exam. A live
              countdown timer is displayed prominently throughout.
            </p>
            <p>
              <strong className="text-foreground">Auto-Submit:</strong> When the
              timer reaches zero, your exam is automatically submitted with all
              answered questions.
            </p>
            <p>
              <strong className="text-foreground">Scoring:</strong> Each correct
              answer scores 1 point. There is no negative marking. Your final
              score is calculated as a percentage out of 50 questions.
            </p>
            <p>
              <strong className="text-foreground">Results:</strong> Your
              submission is carefully assessed by our founder and their team.
              Results will be communicated to you individually after the review
              process is complete.
            </p>
          </div>
        </motion.section>

        {/* Exam Rules */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="guidelines.section"
        >
          <SectionHeader icon={<ShieldCheck />} title="Exam Rules" />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-muted rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Do's
              </h3>
              <ul className="space-y-2">
                {dos.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600" /> Don'ts
              </h3>
              <ul className="space-y-2">
                {donts.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* How to Prepare */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-ocid="guidelines.section"
        >
          <SectionHeader icon={<Star />} title="How to Prepare" />
          <ol className="mt-6 space-y-4">
            {[
              {
                n: "1",
                t: "Review Core Concepts",
                d: "Brush up on double-entry bookkeeping, the accounting equation (Assets = Liabilities + Equity), and basic journal entries.",
              },
              {
                n: "2",
                t: "Study Financial Statements",
                d: "Understand how income statements, balance sheets, and cash flow statements are prepared and interpreted.",
              },
              {
                n: "3",
                t: "Practice Ratio Analysis",
                d: "Memorize key ratios: current ratio, quick ratio, gross profit margin, return on equity, and inventory turnover.",
              },
              {
                n: "4",
                t: "Time Your Practice",
                d: "Practice answering 50 questions in under 75 minutes to build speed and accuracy under exam conditions.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-navy-DEFAULT text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {step.t}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Important Notice */}
        <div className="border border-amber-200 bg-amber-50 rounded-lg p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <strong>Important:</strong> Once you start the exam, the timer
            begins immediately. Ensure you have a stable connection and
            uninterrupted time available before proceeding.
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link to="/test">
            <Button
              data-ocid="guidelines.primary_button"
              size="lg"
              className="bg-gold hover:bg-gold-hover text-white font-semibold px-10"
            >
              I'm Ready — Start the Exam
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
}: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-border pb-3">
      <div className="text-gold">{icon}</div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
