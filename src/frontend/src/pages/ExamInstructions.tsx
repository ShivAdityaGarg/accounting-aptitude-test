import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Flag,
  Hash,
  Info,
  Navigation,
  NotebookPen,
  Send,
  ShieldCheck,
  Timer,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

interface ExamInstructionsProps {
  onProceed: () => void;
}

const sections = [
  {
    id: 1,
    name: "Logical Reasoning",
    questions: 20,
    time: "~30 minutes",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    name: "Communication",
    questions: 10,
    time: "~15 minutes",
    color: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Accounting & Taxation",
    questions: 20,
    time: "~30 minutes",
    color: "bg-purple-100 text-purple-800",
  },
];

const tools = [
  {
    icon: Hash,
    title: "Question Navigation",
    description:
      "Use the numbered buttons at the bottom of the screen to jump directly to any question. Answered questions are highlighted so you can track your progress at a glance.",
  },
  {
    icon: Navigation,
    title: "Previous / Next Buttons",
    description:
      "Move through questions one at a time using the Previous and Next buttons. You can navigate freely in any direction at any point during the exam.",
  },
  {
    icon: Flag,
    title: "Mark for Review",
    description:
      "Flag any question you want to revisit later using the Mark for Review button. Flagged questions are visually highlighted in the navigation panel so you never lose track of them.",
  },
  {
    icon: NotebookPen,
    title: "Notepad",
    description:
      "A built-in scratch pad is available throughout the exam. Use it to jot down workings, intermediate steps, or any notes to help you think through answers.",
  },
  {
    icon: Calculator,
    title: "Calculator",
    description:
      "An on-screen calculator is accessible via the toolbar during the exam — especially useful for the Accounting & Taxation section. Click the calculator icon to open it at any time.",
  },
  {
    icon: TrendingUp,
    title: "Progress Bar",
    description:
      "A progress bar at the top of the screen shows how many questions you have answered out of the total 50. Use it to gauge your completion as you move through the exam.",
  },
  {
    icon: Timer,
    title: "Countdown Timer",
    description:
      "A countdown timer is always visible in the top bar showing your remaining time. When less than 5 minutes remain, the timer turns red and pulses to alert you.",
  },
];

const submissionSteps = [
  {
    label: "Manual Submission",
    desc: 'Click the "Submit Exam" button on the last question or use the "Submit Early" link below the navigation bar at any time.',
  },
  {
    label: "Confirmation Dialog",
    desc: "A confirmation dialog will appear before submission, showing you how many questions remain unanswered. You can choose to go back and review, or confirm submission.",
  },
  {
    label: "Final Submission",
    desc: "Once confirmed, your submission is final. You cannot return to the exam or change any answers.",
  },
  {
    label: "Auto-Submission",
    desc: "If the 75-minute timer reaches zero, your exam will be automatically submitted — no action needed. All answered questions will be captured.",
  },
  {
    label: "Results & Review",
    desc: "After submission, your responses are reviewed by the MyShared CFO team. You will be contacted with your results — results are NOT shown instantly.",
  },
];

const generalRules = [
  {
    icon: Clock,
    text: "The exam has 50 questions to be completed in 75 minutes.",
    warn: false,
  },
  {
    icon: Timer,
    text: 'The timer starts as soon as you click "Begin Examination" on the next screen.',
    warn: false,
  },
  {
    icon: AlertTriangle,
    text: "Do not refresh or navigate away — this may trigger automatic submission.",
    warn: true,
  },
  {
    icon: ShieldCheck,
    text: "Ensure a stable internet connection before starting the exam.",
    warn: false,
  },
  {
    icon: Navigation,
    text: "Questions are presented one at a time; you can freely navigate between them.",
    warn: false,
  },
  {
    icon: Info,
    text: "There are no negative marks for incorrect answers. Unanswered questions score 0.",
    warn: false,
  },
];

const importantNotes = [
  "Results are NOT shown instantly. They are carefully assessed by our team of professionals.",
  "There are no negative marks for incorrect answers — attempt every question.",
  "Unanswered questions automatically score 0.",
  "The MyShared CFO team will contact you directly with your results after review.",
];

export default function ExamInstructions({ onProceed }: ExamInstructionsProps) {
  return (
    <div className="min-h-screen bg-slate-50" data-ocid="instructions.section">
      {/* Header Banner */}
      <div className="bg-[#1b3e66] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#f97417] flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#f97417] font-semibold text-sm uppercase tracking-wider">
              Accounting Aptitude Test
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold mb-2"
          >
            Exam Instructions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-blue-200 text-base max-w-2xl"
          >
            Please read all instructions carefully before beginning your exam.
            This page explains the structure, available tools, and submission
            process.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            {[
              { icon: FileText, label: "50 Questions" },
              { icon: Clock, label: "75 Minutes Total" },
              { icon: BookOpen, label: "3 Sections" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2"
              >
                <Icon className="w-4 h-4 text-[#f97417]" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Section 1: Exam Structure */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h2 className="text-xl font-bold text-[#1b3e66] mb-1 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1b3e66] text-white text-sm flex items-center justify-center font-bold">
              1
            </span>
            Exam Structure
          </h2>
          <p className="text-slate-500 text-sm mb-4 ml-9">
            The exam is divided into three sections. Questions appear one at a
            time, but you may navigate freely between all sections.
          </p>

          {/* Cards for mobile */}
          <div className="grid sm:hidden gap-3">
            {sections.map((sec) => (
              <div
                key={sec.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">
                    Section {sec.id}
                  </span>
                  <Badge className={`text-xs ${sec.color} border-0`}>
                    {sec.questions} Qs
                  </Badge>
                </div>
                <p className="font-semibold text-[#1b3e66]">{sec.name}</p>
                <p className="text-sm text-slate-500 mt-1">{sec.time}</p>
              </div>
            ))}
            <div className="bg-[#1b3e66] text-white rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">Total</span>
                <div className="flex gap-3">
                  <Badge className="bg-[#f97417] text-white border-0 text-xs">
                    50 Questions
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 text-xs">
                    75 Minutes
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Table for desktop */}
          <div className="hidden sm:block bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#1b3e66]/5">
                  <TableHead className="font-bold text-[#1b3e66]">
                    Section
                  </TableHead>
                  <TableHead className="font-bold text-[#1b3e66]">
                    Topics
                  </TableHead>
                  <TableHead className="font-bold text-[#1b3e66] text-center">
                    Questions
                  </TableHead>
                  <TableHead className="font-bold text-[#1b3e66] text-center">
                    Time Allocation
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sections.map((sec) => (
                  <TableRow key={sec.id}>
                    <TableCell className="font-medium text-slate-600">
                      Section {sec.id}
                    </TableCell>
                    <TableCell className="font-semibold text-[#1b3e66]">
                      {sec.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={`${sec.color} border-0`}>
                        {sec.questions}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-slate-600">
                      {sec.time}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-[#1b3e66]/5 font-bold">
                  <TableCell className="text-[#1b3e66] font-bold">
                    Total
                  </TableCell>
                  <TableCell />
                  <TableCell className="text-center">
                    <Badge className="bg-[#f97417] text-white border-0">
                      50 Questions
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center text-[#1b3e66] font-bold">
                    75 Minutes
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </motion.section>

        {/* Section 2: General Rules */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-[#1b3e66] mb-1 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1b3e66] text-white text-sm flex items-center justify-center font-bold">
              2
            </span>
            General Exam Rules
          </h2>
          <p className="text-slate-500 text-sm mb-4 ml-9">
            Follow these rules to ensure a fair and smooth experience.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {generalRules.map((rule) => (
              <div
                key={rule.text}
                className={`flex gap-3 items-start p-4 rounded-xl border ${rule.warn ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200"} shadow-sm`}
              >
                <rule.icon
                  className={`w-4 h-4 flex-shrink-0 mt-0.5 ${rule.warn ? "text-amber-600" : "text-[#1b3e66]"}`}
                />
                <span
                  className={`text-sm ${rule.warn ? "text-amber-800" : "text-slate-700"}`}
                >
                  {rule.text}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Tools & Features */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <h2 className="text-xl font-bold text-[#1b3e66] mb-1 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1b3e66] text-white text-sm flex items-center justify-center font-bold">
              3
            </span>
            Tools & Features Available
          </h2>
          <p className="text-slate-500 text-sm mb-4 ml-9">
            These tools are available to you throughout the exam to help you
            perform at your best.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1b3e66]/10 flex items-center justify-center flex-shrink-0">
                  <tool.icon className="w-5 h-5 text-[#1b3e66]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1b3e66] mb-1">
                    {tool.title}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Submission Instructions */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-[#1b3e66] mb-1 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1b3e66] text-white text-sm flex items-center justify-center font-bold">
              4
            </span>
            How to Submit Your Exam
          </h2>
          <p className="text-slate-500 text-sm mb-4 ml-9">
            Understand the submission process before you begin.
          </p>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {submissionSteps.map((step, i) => (
              <div
                key={step.label}
                className={`flex gap-4 p-5 ${i < submissionSteps.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="w-7 h-7 rounded-full bg-[#f97417]/15 text-[#f97417] text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-[#1b3e66] mb-0.5">
                    {step.label}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Important Notes */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-[#1b3e66] rounded-2xl p-6 text-white"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#f97417]" />
            Important Notes
          </h3>
          <div className="space-y-3">
            {importantNotes.map((note) => (
              <div key={note} className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#f97417] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-100 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center pb-8"
        >
          <p className="text-slate-500 text-sm mb-4">
            By proceeding, you confirm that you have read and understood all
            instructions above.
          </p>
          <Button
            data-ocid="instructions.primary_button"
            size="lg"
            className="bg-[#f97417] hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl text-base shadow-lg shadow-orange-200 h-auto"
            onClick={onProceed}
          >
            I Understand, Proceed to Exam
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
            <Send className="w-3.5 h-3.5" />
            <span>
              You will be taken to a final confirmation screen before the timer
              starts.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
