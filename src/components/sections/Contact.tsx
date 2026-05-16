"use client";

import { sendContactEmail, type ContactFormState } from "@/app/[locale]/actions";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default function Contact() {
  const t = useTranslations("Contact");
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <section id="contacto" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            {t("badge")}
          </span>

          <h2 className="text-4xl font-bold md:text-6xl">{t("title")}</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            {t("description")}
          </p>
        </div>

        <form
          action={formAction}
          className="mx-auto grid max-w-2xl gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
        >
          <input
            name="name"
            required
            placeholder="Name"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/30"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/30"
          />

          <input
            name="company"
            placeholder="Company"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/30"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell me about your project"
            className="resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-white/30"
          />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <SubmitButton />

            <a
              href="https://www.linkedin.com/in/jeremy-doria-137195330/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>

          {state.message && (
            <p
              className={`text-sm ${
                state.success ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {state.message}
            </p>
          )}

          <p className="text-center text-sm text-white/40">
            hello@devjjdoria.com
          </p>
        </form>
      </div>
    </section>
  );
}