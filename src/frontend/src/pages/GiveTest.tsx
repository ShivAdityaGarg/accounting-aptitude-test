import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  NotebookPen,
  ShieldCheck,
  Trophy,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  type Question,
  pickRandomQuestions,
} from "../data/accountingQuestions";
import { pickRandomCommunicationQuestions } from "../data/communicationQuestions";
import { pickRandomLogicalQuestions } from "../data/logicalReasoningQuestions";
import { useGetExamConfig, useSubmitAttempt } from "../hooks/useQueries";
import ExamInstructions from "./ExamInstructions";
import Registration from "./Registration";

type Phase = "registration" | "instructions" | "ready" | "exam" | "results";
type QuestionStatus =
  | "not-visited"
  | "not-answered"
  | "answered"
  | "marked"
  | "answered-marked";

const SECTIONS = [
  {
    name: "Section 1: Logical Reasoning",
    short: "Section 1",
    start: 0,
    end: 19,
  },
  { name: "Section 2: Communication", short: "Section 2", start: 20, end: 29 },
  {
    name: "Section 3: Accounting & Taxation",
    short: "Section 3",
    start: 30,
    end: 49,
  },
];

function getSection(qIndex: number) {
  return SECTIONS.findIndex((s) => qIndex >= s.start && qIndex <= s.end);
}

// ---- Draggable wrapper hook ----
function useDraggable(initialX: number, initialY: number) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return { pos, onMouseDown };
}

// ---- Calculator Component ----
function CalcPanel({ onClose }: { onClose: () => void }) {
  const [display, setDisplay] = useState("0");
  const [expr, setExpr] = useState("");
  const [memory, setMemory] = useState(0);
  const [resetNext, setResetNext] = useState(false);
  const { pos, onMouseDown } = useDraggable(window.innerWidth - 290, 90);

  const pressNum = (val: string) => {
    if (resetNext) {
      setDisplay(val === "." ? "0." : val);
      setResetNext(false);
    } else {
      if (val === "." && display.includes(".")) return;
      setDisplay(display === "0" && val !== "." ? val : display + val);
    }
  };

  const pressOp = (op: string) => {
    const realOp = op === "×" ? "*" : op === "÷" ? "/" : op;
    const cur = Number.parseFloat(display);
    if (expr) {
      try {
        // biome-ignore lint/security/noGlobalEval: calculator evaluation
        const res = eval(`${expr}${cur}`);
        setDisplay(String(Number.parseFloat(res.toFixed(10))));
        setExpr(`${Number.parseFloat(res.toFixed(10))}${realOp}`);
      } catch {
        setExpr(`${cur}${realOp}`);
      }
    } else {
      setExpr(`${cur}${realOp}`);
    }
    setResetNext(true);
  };

  const pressEquals = () => {
    if (!expr) return;
    try {
      const cur = Number.parseFloat(display);
      // biome-ignore lint/security/noGlobalEval: calculator evaluation
      const res = eval(`${expr}${cur}`);
      const str = String(Number.parseFloat(res.toFixed(10)));
      setDisplay(str);
      setExpr("");
      setResetNext(true);
    } catch {
      setDisplay("Error");
      setExpr("");
      setResetNext(true);
    }
  };

  const press = (val: string) => {
    if (val === "C") {
      setDisplay("0");
      setExpr("");
      setResetNext(false);
    } else if (val === "CE") {
      setDisplay("0");
      setResetNext(false);
    } else if (val === "=") {
      pressEquals();
    } else if (val === "±") {
      setDisplay((d) => (d.startsWith("-") ? d.slice(1) : `-${d}`));
    } else if (val === "%") {
      setDisplay((d) => String(Number.parseFloat(d) / 100));
      setResetNext(true);
    } else if (val === "MRC") {
      setDisplay(String(memory));
      setResetNext(true);
    } else if (val === "M+") {
      setMemory((m) => m + Number.parseFloat(display));
    } else if (val === "M-") {
      setMemory((m) => m - Number.parseFloat(display));
    } else if (["+", "-", "×", "÷"].includes(val)) {
      pressOp(val);
    } else {
      pressNum(val);
    }
  };

  const buttons = [
    "MRC",
    "M+",
    "M-",
    "CE",
    "C",
    "±",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div
      className="fixed z-[200] w-64 bg-white rounded-xl shadow-2xl border border-gray-200 select-none"
      style={{ left: pos.x, top: pos.y }}
      data-ocid="test.panel"
    >
      <div
        className="flex items-center justify-between px-3 py-2 bg-[#1b3e66] rounded-t-xl cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
      >
        <span className="text-white text-sm font-semibold flex items-center gap-1">
          <Calculator className="w-3.5 h-3.5" /> Calculator
          {memory !== 0 && (
            <span className="ml-1 text-xs bg-orange-400 text-white rounded px-1">
              M
            </span>
          )}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="bg-gray-900 text-right px-4 py-3">
        <div className="text-gray-400 text-xs h-4 truncate">
          {expr || "\u00a0"}
        </div>
        <div className="text-white text-2xl font-mono truncate">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-0.5 bg-gray-200 p-0.5 rounded-b-xl">
        {buttons.map((b) => (
          <button
            type="button"
            key={b}
            onClick={() => press(b)}
            className={`${b === "=" ? "col-span-2" : ""} ${
              ["+", "-", "×", "÷", "="].includes(b)
                ? "bg-[#f97417] text-white hover:bg-orange-500"
                : ["C", "CE", "±", "%"].includes(b)
                  ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  : ["MRC", "M+", "M-"].includes(b)
                    ? "bg-[#1b3e66] text-white hover:bg-[#2f5a8a]"
                    : "bg-white text-gray-800 hover:bg-gray-100"
            } font-semibold py-3 text-sm transition-colors`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---- Notepad Component ----
const NOTEPAD_KEY = "exam_notepad_text";

function NotepadPanel({ onClose }: { onClose: () => void }) {
  const [notes, setNotes] = useState(
    () => localStorage.getItem(NOTEPAD_KEY) ?? "",
  );
  const { pos, onMouseDown } = useDraggable(window.innerWidth - 580, 90);

  const handleChange = (val: string) => {
    setNotes(val);
    localStorage.setItem(NOTEPAD_KEY, val);
  };

  const clearNotes = () => {
    setNotes("");
    localStorage.removeItem(NOTEPAD_KEY);
  };

  return (
    <div
      className="fixed z-[200] w-64 bg-white rounded-xl shadow-2xl border border-gray-200"
      style={{ left: pos.x, top: pos.y }}
      data-ocid="test.panel"
    >
      <div
        className="flex items-center justify-between px-3 py-2 bg-[#1b3e66] rounded-t-xl cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
      >
        <span className="text-white text-sm font-semibold flex items-center gap-1">
          <NotebookPen className="w-3.5 h-3.5" /> Notepad
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="p-2">
        <Textarea
          value={notes}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Write your notes here..."
          className="resize-none h-40 text-sm"
          data-ocid="test.textarea"
        />
        <button
          type="button"
          onClick={clearNotes}
          className="mt-1.5 text-xs text-gray-500 hover:text-red-500 underline"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

// ---- Purple Ribbon SVG icon ----
function RibbonIcon() {
  return (
    <svg
      role="img"
      aria-label="Marked for review"
      viewBox="0 0 12 16"
      className="w-3 h-4"
      fill="#7c3aed"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0h10a1 1 0 011 1v14l-6-3.5L0 15V1a1 1 0 011-1z" />
    </svg>
  );
}

export default function GiveTest() {
  const [phase, setPhase] = useState<Phase>("registration");
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(75 * 60);
  const [startTime, setStartTime] = useState<number>(0);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [markedForReview, setMarkedForReview] = useState<boolean[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [showCalc, setShowCalc] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resultRef = useRef<{ score: bigint; passed: boolean } | null>(null);

  const { data: config } = useGetExamConfig();
  // config referenced to avoid unused warning; timer is always hardcoded to 75 mins
  void config;
  const submitMutation = useSubmitAttempt();

  const [examQuestions, setExamQuestions] = useState<Question[]>([]);

  const handleSubmit = useCallback(
    async (auto = false) => {
      if (timerRef.current) clearInterval(timerRef.current);
      const duration = BigInt(Math.floor((Date.now() - startTime) / 1000));
      const responses = answers.map((a) => BigInt(a ?? 0));
      // Always proceed to results — backend call is best-effort only
      try {
        const result = await submitMutation.mutateAsync({
          duration,
          responses,
        });
        resultRef.current = result;
      } catch {
        // Backend unavailable or errored; still show results since marks aren't displayed
      }

      // Calculate scores per section
      let lrScore = 0;
      let commScore = 0;
      let atScore = 0;

      for (let i = 0; i < 20; i++) {
        if (
          answers[i] !== null &&
          answers[i] === examQuestions[i]?.correctAnswerIndex
        )
          lrScore++;
      }
      for (let i = 20; i < 30; i++) {
        if (
          answers[i] !== null &&
          answers[i] === examQuestions[i]?.correctAnswerIndex
        )
          commScore++;
      }
      for (let i = 30; i < 50; i++) {
        if (
          answers[i] !== null &&
          answers[i] === examQuestions[i]?.correctAnswerIndex
        )
          atScore++;
      }
      const totalScore = lrScore + commScore + atScore;

      // Send scores + candidate info to Formspree (fire-and-forget)
      try {
        const scoreData = new FormData();
        scoreData.append(
          "Full Name",
          sessionStorage.getItem("candidateName") || "",
        );
        scoreData.append(
          "Phone Number",
          sessionStorage.getItem("candidatePhone") || "",
        );
        scoreData.append(
          "Email Address",
          sessionStorage.getItem("candidateEmail") || "",
        );
        scoreData.append(
          "Date of Birth",
          sessionStorage.getItem("candidateDob") || "",
        );
        scoreData.append("LR Score (/20)", String(lrScore));
        scoreData.append("Communication Score (/10)", String(commScore));
        scoreData.append("Accounting & Taxation Score (/20)", String(atScore));
        scoreData.append("Total Score (/50)", String(totalScore));

        await fetch("https://formspree.io/f/mgopyvkn", {
          method: "POST",
          body: scoreData,
          headers: { Accept: "application/json" },
        });
      } catch {
        // Network failure — scores are best-effort
      }

      if (auto) toast.info("Time's up! Your exam has been auto-submitted.");
      setPhase("results");
    },
    [answers, examQuestions, startTime, submitMutation],
  );

  useEffect(() => {
    if (phase !== "exam") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, handleSubmit]);

  useEffect(() => {
    if (phase !== "exam") return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exam") return;
    setVisitedQuestions((prev) => {
      const next = [...prev];
      next[currentQ] = true;
      return next;
    });
  }, [currentQ, phase]);

  const startExam = () => {
    const atQuestions = pickRandomQuestions(20);
    const lrQuestions = pickRandomLogicalQuestions(20);
    const commQuestions = pickRandomCommunicationQuestions(10);
    const fullQuestions = [...lrQuestions, ...commQuestions, ...atQuestions];
    setExamQuestions(fullQuestions);
    const n = fullQuestions.length;
    setAnswers(new Array(n).fill(null));
    setMarkedForReview(new Array(n).fill(false));
    setVisitedQuestions(new Array(n).fill(false));
    setTimeLeft(75 * 60);
    setStartTime(Date.now());
    setCurrentQ(0);
    setCurrentSection(0);
    setPhase("exam");
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const answeredCount = answers.filter((a) => a !== null).length;
  const unanswered = answers.length - answeredCount;

  const getQuestionStatus = (idx: number): QuestionStatus => {
    const answered = answers[idx] !== null;
    const marked = markedForReview[idx];
    if (answered && marked) return "answered-marked";
    if (marked) return "marked";
    if (answered) return "answered";
    if (visitedQuestions[idx]) return "not-answered";
    return "not-visited";
  };

  const statusColor = (status: QuestionStatus, isCurrent: boolean) => {
    if (isCurrent) return "bg-[#f97417] text-white border-[#f97417]";
    switch (status) {
      case "answered":
        return "bg-green-500 text-white border-green-500";
      case "not-answered":
        return "bg-red-500 text-white border-red-500";
      case "marked":
        return "bg-white text-gray-700 border-gray-300";
      case "answered-marked":
        return "bg-green-500 text-white border-green-500";
      default:
        return "bg-gray-200 text-gray-700 border-gray-300";
    }
  };

  const goToQuestion = (idx: number) => {
    setCurrentQ(idx);
    setCurrentSection(getSection(idx));
  };

  const saveAndNext = () => {
    const section = SECTIONS[currentSection];
    if (currentQ < section.end) {
      setCurrentQ((p) => p + 1);
    } else if (currentSection < SECTIONS.length - 1) {
      const nextSection = SECTIONS[currentSection + 1];
      setCurrentSection(currentSection + 1);
      setCurrentQ(nextSection.start);
    }
  };

  const toggleMark = () => {
    setMarkedForReview((prev) => {
      const next = [...prev];
      next[currentQ] = !next[currentQ];
      return next;
    });
  };

  const clearResponse = () => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentQ] = null;
      return next;
    });
  };

  const prevQuestion = () => {
    const section = SECTIONS[currentSection];
    if (currentQ > section.start) setCurrentQ((p) => p - 1);
    else if (currentSection > 0) {
      const prevSection = SECTIONS[currentSection - 1];
      setCurrentSection(currentSection - 1);
      setCurrentQ(prevSection.end);
    }
  };

  // ---- Non-exam phases ----
  if (phase === "registration")
    return <Registration onComplete={() => setPhase("instructions")} />;
  if (phase === "instructions")
    return <ExamInstructions onProceed={() => setPhase("ready")} />;

  if (phase === "ready") {
    return (
      <div
        className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-muted"
        data-ocid="test.section"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-card max-w-lg w-full p-8 text-center"
        >
          <div className="w-16 h-16 bg-[#1b3e66] rounded-full flex items-center justify-center mx-auto mb-5">
            <Clock className="w-8 h-8 text-[#f97417]" />
          </div>
          <h1 className="text-2xl font-extrabold text-foreground mb-2">
            Ready to Start?
          </h1>
          <p className="text-muted-foreground mb-6">
            You are about to begin the <strong>Accounting Aptitude Test</strong>
            . The timer starts immediately.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8 max-w-xs mx-auto">
            {[
              { label: "Questions", value: "50" },
              { label: "Time Limit", value: "75 mins" },
            ].map((s) => (
              <div key={s.label} className="bg-muted rounded-lg py-3">
                <div className="text-xl font-extrabold text-[#1b3e66]">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-left flex gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800">
              Ensure a stable internet connection. Do not refresh or close the
              browser during the exam.
            </p>
          </div>
          <Button
            data-ocid="test.primary_button"
            size="lg"
            className="w-full bg-[#f97417] hover:bg-orange-600 text-white font-semibold"
            onClick={startExam}
          >
            Begin Examination
          </Button>
        </motion.div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div
        className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-muted"
        data-ocid="test.section"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-card max-w-lg w-full p-8 text-center"
          data-ocid="test.success_state"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-blue-100">
            <Trophy className="w-8 h-8 text-[#1b3e66]" />
          </div>
          <h1 className="text-2xl font-extrabold text-foreground mb-1">
            Thank You for Completing the Test
          </h1>
          <p className="text-muted-foreground mb-6">
            You have completed the selection assessment.
          </p>
          <div className="bg-[#1b3e66]/5 border border-[#1b3e66]/20 rounded-lg p-5 mb-6 flex gap-3 text-left">
            <ShieldCheck className="w-6 h-6 text-[#1b3e66] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground mb-1">
                Professional Review
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your responses have been carefully reviewed by our team of
                professionals.{" "}
                <strong className="text-foreground">
                  Your result will be shared with you via WhatsApp or email.
                </strong>{" "}
                Please await further correspondence.
              </p>
            </div>
          </div>
          <Button
            data-ocid="test.primary_button"
            className="w-full bg-[#1b3e66] hover:bg-[#2f5a8a] text-white font-semibold"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  // ---- EXAM PHASE ----
  const question = examQuestions[currentQ];
  const section = SECTIONS[currentSection];
  const isFirstQ = currentQ === section.start && currentSection === 0;
  const isTimeLow = timeLeft < 300;
  const candidateName =
    (typeof window !== "undefined" &&
      sessionStorage.getItem("candidateName")) ||
    "Candidate";
  const isMarked = markedForReview[currentQ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden"
      data-ocid="test.section"
    >
      {/* ---- Top Header ---- */}
      <div className="bg-[#1b2330] text-white flex items-center justify-between px-4 py-2 flex-shrink-0">
        <span className="text-sm font-semibold tracking-wide">
          MyShared CFO – Accounting Aptitude Test
        </span>
      </div>

      {/* ---- Section Tabs + Tools strip ---- */}
      <div className="bg-gray-100 border-b border-gray-300 flex items-center justify-between px-4 py-1.5 flex-shrink-0">
        <div className="flex items-center gap-1">
          {SECTIONS.map((sec, idx) => (
            <button
              type="button"
              key={sec.short}
              data-ocid="test.tab"
              onClick={() => {
                setCurrentSection(idx);
                setCurrentQ(sec.start);
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
                currentSection === idx
                  ? "bg-[#2f7dbd] text-white border-[#2f7dbd]"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {sec.short}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="test.toggle"
            onClick={() => setShowCalc((p) => !p)}
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded border transition-colors ${
              showCalc
                ? "bg-[#f97417] text-white border-[#f97417]"
                : "text-[#f97417] border-[#f97417] hover:bg-orange-50"
            }`}
          >
            <Calculator className="w-3.5 h-3.5" /> Calculator
          </button>
          <button
            type="button"
            data-ocid="test.toggle"
            onClick={() => setShowNotepad((p) => !p)}
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded border transition-colors ${
              showNotepad
                ? "bg-[#f97417] text-white border-[#f97417]"
                : "text-[#f97417] border-[#f97417] hover:bg-orange-50"
            }`}
          >
            <NotebookPen className="w-3.5 h-3.5" /> Notepad
          </button>
          <div
            className={`flex items-center gap-1 font-mono font-bold text-sm px-3 py-0.5 rounded ${
              isTimeLow
                ? "bg-red-100 text-red-700"
                : "bg-[#1b3e66]/10 text-[#1b3e66]"
            }`}
            data-ocid="test.panel"
          >
            <Clock
              className={`w-3.5 h-3.5 ${isTimeLow ? "animate-pulse" : ""}`}
            />
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* ---- Blue marks info bar with section name ---- */}
      <div className="bg-[#2f7dbd] text-white text-xs px-4 py-1 flex justify-between items-center flex-shrink-0">
        <span className="font-semibold">{SECTIONS[currentSection].name}</span>
        <span>
          Marks for correct answer: 1.0 &nbsp;|&nbsp; Negative Marks: 0.0
        </span>
      </div>

      {/* ---- Body: Main + Sidebar ---- */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.15 }}
              className="flex-1"
            >
              <div
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6"
                data-ocid="test.card"
              >
                <div className="text-sm font-bold text-gray-800 mb-3">
                  Question No: {currentQ + 1}
                </div>
                <p className="text-gray-800 text-base leading-relaxed mb-6">
                  {question?.questionText ?? "Loading question..."}
                </p>
                {question?.imageUrl && (
                  <div className="my-3">
                    <img
                      src={question.imageUrl}
                      alt="Question figure"
                      className="max-w-full rounded"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                  </div>
                )}
                <div className="space-y-2.5" role="radiogroup">
                  {(question?.options ?? []).map((option, oi) => (
                    <label
                      key={option}
                      data-ocid={`test.radio.${oi + 1}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-all ${
                        answers[currentQ] === oi
                          ? "border-[#2f7dbd] bg-blue-50"
                          : "border-gray-200 hover:border-[#2f7dbd]/40 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${currentQ}`}
                        value={oi}
                        checked={answers[currentQ] === oi}
                        onChange={() => {
                          const updated = [...answers];
                          updated[currentQ] = oi;
                          setAnswers(updated);
                        }}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          answers[currentQ] === oi
                            ? "border-[#2f7dbd]"
                            : "border-gray-400"
                        }`}
                      >
                        {answers[currentQ] === oi && (
                          <div className="w-2 h-2 rounded-full bg-[#2f7dbd]" />
                        )}
                      </div>
                      <span className="text-sm text-gray-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom nav buttons */}
          <div className="flex items-center gap-2 mt-5 flex-wrap">
            <Button
              data-ocid="test.secondary_button"
              variant="outline"
              size="sm"
              disabled={isFirstQ}
              onClick={prevQuestion}
              className="border-gray-400 text-gray-700"
            >
              <ChevronLeft className="w-4 h-4 mr-0.5" /> Previous
            </Button>
            <Button
              data-ocid="test.toggle"
              size="sm"
              variant="outline"
              onClick={toggleMark}
              className={`border-purple-500 text-purple-700 hover:bg-purple-50 flex items-center gap-1.5 ${
                isMarked ? "bg-purple-100" : ""
              }`}
            >
              <RibbonIcon />
              {isMarked ? "Unmark Review" : "Mark for Review"}
            </Button>
            <Button
              data-ocid="test.secondary_button"
              size="sm"
              variant="outline"
              onClick={clearResponse}
              className="border-gray-400 text-gray-600"
            >
              Clear Response
            </Button>
            <div className="flex-1" />
            <Button
              data-ocid="test.primary_button"
              size="sm"
              onClick={saveAndNext}
              className="bg-[#2f7dbd] hover:bg-[#1b6aad] text-white font-semibold"
            >
              Save & Next <ChevronRight className="w-4 h-4 ml-0.5" />
            </Button>
          </div>
        </div>

        {/* ---- Right Sidebar ---- */}
        <div className="w-60 bg-[#e9f6ff] border-l border-gray-200 flex flex-col overflow-hidden flex-shrink-0">
          {/* Candidate */}
          <div className="bg-[#1b3e66] text-white px-3 py-2 flex-shrink-0">
            <div className="text-xs text-blue-200">Candidate</div>
            <div className="text-sm font-semibold truncate">
              {candidateName}
            </div>
          </div>

          {/* Legend */}
          <div className="px-3 py-3 border-b border-blue-100 flex-shrink-0">
            <div className="text-xs font-bold text-gray-600 mb-2">Legend</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-green-500 flex-shrink-0" />
                <span className="text-xs text-gray-700">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-red-500 flex-shrink-0" />
                <span className="text-xs text-gray-700">Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-gray-300 flex-shrink-0" />
                <span className="text-xs text-gray-700">Not Visited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 rounded bg-white border border-gray-300 flex-shrink-0 flex items-end justify-end">
                  <div className="absolute top-0 right-0">
                    <RibbonIcon />
                  </div>
                </div>
                <span className="text-xs text-gray-700">Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5 rounded bg-green-500 flex-shrink-0 flex items-end justify-end">
                  <div className="absolute top-0 right-0">
                    <RibbonIcon />
                  </div>
                </div>
                <span className="text-xs text-gray-700">Answered & Marked</span>
              </div>
            </div>
          </div>

          {/* Question grid - all sections */}
          <div className="px-3 py-3 flex-1 overflow-y-auto">
            <div className="text-xs font-bold text-gray-600 mb-2">
              Choose a Question
            </div>
            {SECTIONS.map((sec, _secIdx) => (
              <div key={sec.short} className="mb-3">
                <div className="text-xs font-semibold text-[#1b3e66] mb-1">
                  {sec.short}
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {Array.from(
                    { length: sec.end - sec.start + 1 },
                    (_, relIdx) => {
                      const absIdx = sec.start + relIdx;
                      const status = getQuestionStatus(absIdx);
                      const isCurrent = absIdx === currentQ;
                      const isQMarked =
                        status === "marked" || status === "answered-marked";
                      return (
                        <button
                          type="button"
                          key={absIdx}
                          data-ocid={`test.item.${absIdx + 1}`}
                          onClick={() => goToQuestion(absIdx)}
                          className={`relative w-full aspect-square text-xs font-semibold rounded border transition-all ${statusColor(status, isCurrent)}`}
                        >
                          {absIdx + 1}
                          {isQMarked && (
                            <span className="absolute top-0 right-0 leading-none">
                              <RibbonIcon />
                            </span>
                          )}
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="px-3 py-2 border-t border-blue-100 grid grid-cols-2 gap-1 text-xs text-center flex-shrink-0">
            <div className="bg-green-100 rounded py-1">
              <div className="font-bold text-green-700">{answeredCount}</div>
              <div className="text-gray-500">Answered</div>
            </div>
            <div className="bg-red-100 rounded py-1">
              <div className="font-bold text-red-600">{unanswered}</div>
              <div className="text-gray-500">Unanswered</div>
            </div>
          </div>

          {/* Submit button */}
          <div className="px-3 py-3 flex-shrink-0">
            <Button
              data-ocid="test.submit_button"
              size="sm"
              className="w-full bg-[#1b3e66] hover:bg-[#2f5a8a] text-white font-semibold"
              onClick={() => setShowSubmitConfirm(true)}
            >
              Submit Exam
            </Button>
          </div>
        </div>
      </div>

      {/* Floating panels */}
      {showCalc && <CalcPanel onClose={() => setShowCalc(false)} />}
      {showNotepad && <NotepadPanel onClose={() => setShowNotepad(false)} />}

      {/* Submit Confirmation */}
      <AlertDialog open={showSubmitConfirm} onOpenChange={setShowSubmitConfirm}>
        <AlertDialogContent data-ocid="test.dialog">
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Exam?</AlertDialogTitle>
            <AlertDialogDescription>
              {unanswered > 0 ? (
                <>
                  <strong>
                    {unanswered} question{unanswered > 1 ? "s" : ""} unanswered.
                  </strong>{" "}
                  Unanswered questions score 0. Are you sure you want to submit?
                </>
              ) : (
                "You've answered all questions. Ready to submit your exam?"
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="test.cancel_button">
              Continue Exam
            </AlertDialogCancel>
            <AlertDialogAction
              data-ocid="test.confirm_button"
              className="bg-[#1b3e66] hover:bg-[#2f5a8a] text-white"
              onClick={() => handleSubmit(false)}
            >
              Submit Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
