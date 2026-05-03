"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Your name, please"),
  email: z.string().email("Looks like an invalid email"),
  message: z.string().min(10, "A little more detail helps"),
  honey: z.string().max(0),
});
type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { honey: "" },
  });

  const onSubmit = async (_d: Values) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream-deep rounded-2xl p-8 border border-line">
        <h2 className="font-display text-2xl">Thanks — we got it.</h2>
        <p className="mt-3 text-ink-soft">We respond within one business day, usually faster.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <Field label="Your name" error={errors.name?.message}>
        <input className="ipt" type="text" autoComplete="name" {...register("name")} />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input className="ipt" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label="What can we help with?" error={errors.message?.message}>
        <textarea rows={5} className="ipt resize-none" {...register("message")} />
      </Field>
      <input type="text" tabIndex={-1} className="hidden" {...register("honey")} />
      <div>
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? "Sending…" : "Send message"}
        </button>
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
    <label className="block">
      <span className="block text-[14px] font-medium mb-1.5">{label}</span>
      {children}
      {error && <span className="block mt-1.5 text-[13px] text-terracotta-deep">{error}</span>}
    </label>
  );
}
