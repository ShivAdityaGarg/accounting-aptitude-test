import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  ListChecks,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const featureCards = [
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Validate Your Skills",
    desc: "Benchmark your knowledge against industry standards with 50 carefully curated questions spanning logical reasoning, communication, and accounting.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Build Confidence",
    desc: "Gain the confidence you need to excel in interviews, on-the-job challenges, and professional certifications.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Get Experience",
    desc: "Gain real-world exposure and hands-on experience that sets you apart. Every step you take here brings you closer to a professional career in accounting and finance.",
  },
];

const overviewItems = [
  { icon: <ListChecks className="w-6 h-6" />, label: "50 Questions" },
  { icon: <CheckCircle2 className="w-6 h-6" />, label: "Multiple Choice" },
  { icon: <Clock className="w-6 h-6" />, label: "75 Minutes" },
  { icon: <ShieldCheck className="w-6 h-6" />, label: "Expert Review" },
];

const homeFAQs = [
  {
    id: "faq-who",
    q: "Who is this selection test for?",
    a: "This test is designed for trainees, interns, students, and freshers who are eager to kickstart their careers in accounting and finance.",
  },
  {
    id: "faq-topics",
    q: "What topics does the test cover?",
    a: "The test is divided into 3 sections: Logical Reasoning (10 questions), Communication (20 questions), and Accounting & Taxation (20 questions) — 50 questions in total.",
  },
  {
    id: "faq-duration",
    q: "How long does the test take?",
    a: "The test has a 75-minute time limit for 50 multiple-choice questions across three sections.",
  },
  {
    id: "faq-results",
    q: "When will I receive my results?",
    a: "Your responses are carefully reviewed by our team of professionals to ensure a fair and thorough evaluation. Results will be communicated to you after the review process is complete.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[580px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-accounting.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.22 0.07 243 / 0.80)" }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Trainee & Intern Selection Platform
            </span>
            <h1 className="text-4xl font-bold text-white mb-4 mt-2">
              Assess Your Accounting Aptitude
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our selection process is designed to identify skilled and
              passionate individuals who are eager to learn, innovate, and grow.
              Whether you're a student, a fresher, or someone looking to gain
              hands on experience, this platform will guide you through the
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/test" data-ocid="home.primary_button">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-hover text-white font-semibold px-8"
                >
                  Start Test
                </Button>
              </Link>
              <Link to="/guidelines">
                <Button
                  data-ocid="home.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Take the Test */}
      <section className="bg-muted py-16 px-4" data-ocid="home.section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Why Join Our Selection Process?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We look for individuals who are passionate, driven, and ready to
              grow into future professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                data-ocid={`home.card.${i + 1}`}
              >
                <Card className="shadow-card h-full border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-8 px-6">
                    <div className="text-gold mb-4">{card.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Overview Row */}
      <section className="bg-white py-14 px-4" data-ocid="home.section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-10">
            Assessment Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {overviewItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-white shadow-xs hover:shadow-card transition-shadow"
              >
                <div className="text-navy-DEFAULT">{item.icon}</div>
                <span className="font-semibold text-foreground text-sm">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timed Exam Portal Band */}
      <section
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.07 243) 0%, oklch(0.30 0.08 243) 100%)",
        }}
        data-ocid="home.section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Timed Exam Portal
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Real Exam Conditions, Thorough Evaluation
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
            Your responses are carefully reviewed by our team of professionals
            to ensure a fair and thorough evaluation. Results will be
            communicated to you after the review process is complete.
          </p>
          <div className="flex justify-center gap-10 mb-8">
            {[
              { stat: "50", label: "Questions" },
              { stat: "75m", label: "Time Limit" },
              { stat: "3", label: "Sections" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-gold">
                  {s.stat}
                </div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <Link to="/test">
            <Button
              data-ocid="home.primary_button"
              size="lg"
              className="bg-gold hover:bg-gold-hover text-white font-semibold"
            >
              Launch Exam
            </Button>
          </Link>
        </div>
      </section>

      {/* Home FAQ */}
      <section className="bg-white py-16 px-4" data-ocid="home.section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have more questions?{" "}
              <Link to="/faq" className="text-gold hover:underline font-medium">
                View full FAQ
              </Link>
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            data-ocid="home.panel"
          >
            {homeFAQs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-border rounded-lg px-5 data-[state=open]:shadow-card"
                data-ocid={`home.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
