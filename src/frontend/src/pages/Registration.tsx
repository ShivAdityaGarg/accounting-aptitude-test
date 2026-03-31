import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { differenceInYears, format } from "date-fns";
import { CalendarIcon, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface RegistrationProps {
  onComplete: () => void;
}

export default function Registration({ onComplete }: RegistrationProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    code: "",
  });
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const CORRECT_CODE = "Mysharedtrainee12120";

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!form.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      errs.phone = "Phone number must be exactly 10 digits.";
    }

    if (!form.email.endsWith("@gmail.com")) {
      errs.email = "Email must end with @gmail.com.";
    }

    if (!dob) {
      errs.dob = "Date of birth is required.";
    } else if (differenceInYears(new Date(), dob) < 18) {
      errs.dob = "You must be at least 18 years old to take this exam.";
    }

    if (form.code !== CORRECT_CODE) {
      errs.code = "Invalid access code. Please check and try again.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const data = new FormData();
      data.append("Full Name", form.name);
      data.append("Phone Number", form.phone);
      data.append("Email Address", form.email);
      data.append("Date of Birth", dob ? format(dob, "yyyy-MM-dd") : "");

      const response = await fetch("https://formspree.io/f/mgopyvkn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        const msg =
          result?.errors
            ?.map((err: { message: string }) => err.message)
            .join(", ") || "Submission failed. Please try again.";
        setSubmitError(msg);
        setSubmitting(false);
        return;
      }
    } catch {
      // Network error — proceed anyway so candidates aren't blocked
    }

    sessionStorage.setItem("candidateName", form.name);
    sessionStorage.setItem("candidatePhone", form.phone);
    sessionStorage.setItem("candidateEmail", form.email);
    sessionStorage.setItem(
      "candidateDob",
      dob ? format(dob, "yyyy-MM-dd") : "",
    );
    setSubmitting(false);
    onComplete();
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-muted"
      data-ocid="registration.section"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-card max-w-lg w-full p-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#1b3e66] rounded-full flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#f97417]" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-[#1b3e66] leading-tight">
              Candidate Registration
            </h1>
            <p className="text-xs text-muted-foreground">
              Complete the form to access the exam
            </p>
          </div>
        </div>

        <div className="h-px bg-border my-5" />

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label
              htmlFor="name"
              className="text-sm font-semibold text-foreground"
            >
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={
                errors.name ? "border-red-400 focus-visible:ring-red-400" : ""
              }
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <Label
              htmlFor="phone"
              className="text-sm font-semibold text-foreground"
            >
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit phone number"
              value={form.phone}
              maxLength={10}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
              }
              className={
                errors.phone ? "border-red-400 focus-visible:ring-red-400" : ""
              }
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-foreground"
            >
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="yourname@gmail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={
                errors.email ? "border-red-400 focus-visible:ring-red-400" : ""
              }
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="space-y-1.5">
            <Label className="text-sm font-semibold text-foreground">
              Date of Birth <span className="text-red-500">*</span>
            </Label>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dob && "text-muted-foreground",
                    errors.dob && "border-red-400",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dob ? format(dob, "PPP") : "Select your date of birth"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dob}
                  onSelect={(date) => {
                    setDob(date);
                    setCalendarOpen(false);
                  }}
                  disabled={(date) => date > new Date()}
                  captionLayout="dropdown"
                  fromYear={1950}
                  toYear={new Date().getFullYear() - 18}
                  defaultMonth={new Date(new Date().getFullYear() - 20, 0)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.dob && <p className="text-xs text-red-500">{errors.dob}</p>}
          </div>

          {/* Access Code */}
          <div className="space-y-1.5">
            <Label
              htmlFor="code"
              className="text-sm font-semibold text-foreground"
            >
              Access Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="code"
              type="password"
              placeholder="Enter your access code"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              className={
                errors.code ? "border-red-400 focus-visible:ring-red-400" : ""
              }
            />
            {errors.code && (
              <p className="text-xs text-red-500">{errors.code}</p>
            )}
          </div>

          {submitError && (
            <p className="text-xs text-red-500 text-center">{submitError}</p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full bg-[#1b3e66] hover:bg-[#16325a] text-white font-semibold mt-2"
          >
            {submitting ? "Submitting..." : "Proceed to Exam"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
