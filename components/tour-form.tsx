"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { cn } from "@/lib/utils";

const schema = z.object({
  childAge: z.string().min(1, "Pick an age range"),
  program: z.string().min(1, "Pick a program"),
  startDate: z.string().min(1, "Pick a timeframe"),
  parentName: z.string().min(2, "Your name, please"),
  email: z.string().email("Looks like an invalid email"),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[0-9 ()+\-.]{7,}$/.test(v), "That phone doesn't look right"),
  preferredDate: z.string().min(1, "Pick a date"),
  preferredTime: z.string().min(1, "Pick a time"),
  notes: z.string().optional(),
  honey: z.string().max(0, "spam"), // honeypot
});

type FormValues = z.infer<typeof schema>;

const ageRanges = [
  { v: "infant", l: "6 weeks – 12 months" },
  { v: "toddler", l: "12 – 24 months" },
  { v: "preschool", l: "2 – 4 years" },
  { v: "prek", l: "4 – 5 years" },
  { v: "expecting", l: "Expecting a baby" },
];
const startDates = [
  { v: "asap", l: "As soon as possible" },
  { v: "1-3mo", l: "Within 1–3 months" },
  { v: "3-6mo", l: "3–6 months out" },
  { v: "fall", l: "Fall 2026" },
  { v: "exploring", l: "Just exploring for now" },
];
const times = ["10:00 AM", "11:00 AM", "1:30 PM", "2:30 PM"];

export function TourForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { honey: "" },
    mode: "onTouched",
  });

  const next = async (fields: (keyof FormValues)[]) => {
    const ok = await trigger(fields);
    if (ok) setStep((s) => Math.min(s + 1, 2));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    // Stand-in for Resend + GHL webhook integration
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "tour_request", source: "tour_page" });
    }
  };

  if (submitted) {
    return (
      <div className="bg-cream-deep rounded-2xl p-10 border border-line text-center">
        <div className="font-accent text-3xl text-terracotta-deep">we&rsquo;ll be in touch.</div>
        <h2 className="mt-4 font-display text-3xl tracking-tightish">
          Tour request received.
        </h2>
        <p className="mt-4 text-ink-soft max-w-md mx-auto">
          A confirmation just hit your inbox. Our enrollment director will text you within one business day to lock in the time. Bring your questions — there are no wrong ones.
        </p>
      </div>
    );
  }

  const stepsMeta = ["About your child", "About you", "Anything specific?"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-cream rounded-2xl border border-line shadow-soft p-7 md:p-9">
      <div className="flex items-center gap-2 mb-7">
        {stepsMeta.map((label, i) => (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className={cn(
                "w-7 h-7 rounded-full grid place-items-center font-display text-sm border transition",
                i <= step
                  ? "bg-terracotta border-terracotta text-cream"
                  : "bg-cream border-line text-ink-soft"
              )}
            >
              {i + 1}
            </div>
            <div className={cn("text-[12px] uppercase tracking-[0.14em]", i === step ? "text-ink" : "text-ink-soft")}>
              {label}
            </div>
            {i < stepsMeta.length - 1 && <div className="flex-1 h-px bg-line" />}
          </div>
        ))}
      </div>

      {/* Step 0 */}
      <div className={step === 0 ? "block" : "hidden"}>
        <Field label="Your child's age" error={errors.childAge?.message}>
          <select className="ipt" {...register("childAge")}>
            <option value="">Pick an age range</option>
            {ageRanges.map((a) => (<option key={a.v} value={a.v}>{a.l}</option>))}
          </select>
        </Field>
        <Field label="Program of interest" error={errors.program?.message}>
          <select className="ipt" {...register("program")}>
            <option value="">Pick a program</option>
            <option value="infants">Infants</option>
            <option value="toddlers">Toddlers</option>
            <option value="preschool">Preschool</option>
            <option value="pre-k">Pre-K</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </Field>
        <Field label="When would you want to start?" error={errors.startDate?.message}>
          <select className="ipt" {...register("startDate")}>
            <option value="">Pick a timeframe</option>
            {startDates.map((s) => (<option key={s.v} value={s.v}>{s.l}</option>))}
          </select>
        </Field>
        <div className="mt-6 flex justify-end">
          <button type="button" onClick={() => next(["childAge", "program", "startDate"])} className="btn-primary">
            Continue →
          </button>
        </div>
      </div>

      {/* Step 1 */}
      <div className={step === 1 ? "block" : "hidden"}>
        <Field label="Your name" error={errors.parentName?.message}>
          <input type="text" autoComplete="name" className="ipt" {...register("parentName")} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Email" error={errors.email?.message}>
            <input type="email" autoComplete="email" className="ipt" {...register("email")} />
          </Field>
          <Field label="Phone (optional)" error={errors.phone?.message}>
            <input type="tel" autoComplete="tel" className="ipt" {...register("phone")} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Preferred tour date" error={errors.preferredDate?.message}>
            <input type="date" className="ipt" {...register("preferredDate")} />
          </Field>
          <Field label="Preferred time" error={errors.preferredTime?.message}>
            <select className="ipt" {...register("preferredTime")}>
              <option value="">Pick a time</option>
              {times.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </Field>
        </div>
        <div className="mt-6 flex justify-between">
          <button type="button" onClick={back} className="btn-ghost">← Back</button>
          <button type="button" onClick={() => next(["parentName", "email", "preferredDate", "preferredTime"])} className="btn-primary">
            Continue →
          </button>
        </div>
      </div>

      {/* Step 2 */}
      <div className={step === 2 ? "block" : "hidden"}>
        <Field label="Anything specific you'd like to see? (optional)" error={errors.notes?.message}>
          <textarea rows={5} className="ipt resize-none" placeholder="A specific classroom, the kitchen, the outdoor space, a teacher you'd like to meet…" {...register("notes")} />
        </Field>

        <input type="text" tabIndex={-1} aria-hidden className="hidden" {...register("honey")} />

        <p className="mt-4 text-[13px] text-ink-soft">
          We respond within 1 business day. We&rsquo;ll never share your info — and we don&rsquo;t add you to a marketing list.
        </p>
        <div className="mt-6 flex justify-between">
          <button type="button" onClick={back} className="btn-ghost">← Back</button>
          <button type="submit" disabled={submitting} className="btn-primary">
            {submitting ? "Sending…" : "Request my tour"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .ipt {
          width: 100%;
          background: var(--cream);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 16px;
          color: var(--ink);
          transition: border-color 150ms;
        }
        .ipt:focus {
          outline: none;
          border-color: var(--sage);
          box-shadow: 0 0 0 3px rgba(122, 139, 92, 0.18);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block mt-5 first:mt-0">
      <span className="block text-[14px] font-medium mb-1.5 text-ink">{label}</span>
      {children}
      {error && <span className="block mt-1.5 text-[13px] text-terracotta-deep">{error}</span>}
    </label>
  );
}
