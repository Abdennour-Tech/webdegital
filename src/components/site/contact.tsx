import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { CONTACT } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { btnPrimary, container } from "./ui-bits";
import { cn } from "@/lib/utils";

const projectOptionKeys = [
  "vitrine",
  "portfolio",
  "landing",
  "entreprise",
  "refonte",
  "custom",
];

const budgetOptionKeys = [
  "small",
  "medium",
  "large",
  "xlarge",
  "discuss",
];

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-60 disabled:cursor-not-allowed";

export function Contact() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusState, setStatusState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const schema = z.object({
    name: z.string().trim().min(2, t("contact.validation.name_required")).max(100),
    email: z.string().trim().email(t("contact.validation.email_invalid")).max(255),
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    projectType: z.string().trim().min(1, t("contact.validation.project_required")).max(100),
    budget: z.string().trim().max(100).optional().or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(10, t("contact.validation.message_min"))
      .max(1000),
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      toast.error(t("contact.toast.form_error"));
      return;
    }

    setErrors({});
    setStatusState(null);
    setIsSubmitting(true);

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials missing.");
      setStatusState({
        type: "error",
        message: t("contact.toast.error_msg"),
      });
      toast.error(t("contact.toast.keys_missing"));
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone && result.data.phone.trim() ? result.data.phone : "N/A",
        projectType: result.data.projectType,
        budget: result.data.budget && result.data.budget.trim() ? result.data.budget : "N/A",
        message: result.data.message,
        reply_to: result.data.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatusState({
        type: "success",
        message: t("contact.toast.success_msg"),
      });
      toast.success(t("contact.toast.success"));
      form.reset();
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatusState({
        type: "error",
        message: t("contact.toast.error_msg"),
      });
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className={container}>
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="min-w-0">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9"
            >
              {statusState ? (
                <div
                  className={cn(
                    "mb-6 flex items-start gap-3 rounded-2xl p-4 text-sm font-medium transition-all",
                    statusState.type === "success"
                      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "border border-destructive/20 bg-destructive/10 text-destructive",
                  )}
                >
                  {statusState.type === "success" ? (
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <AlertCircle size={20} className="mt-0.5 shrink-0 text-destructive" />
                  )}
                  <div>
                    <p>{statusState.message}</p>
                    {statusState.type === "error" ? (
                      <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-4 hover:opacity-90"
                      >
                        {t("contact.form.whatsapp_direct")}
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.form.name")} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    disabled={isSubmitting}
                    placeholder={t("contact.form.name_ph")}
                    className={fieldClass}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.form.email")} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    disabled={isSubmitting}
                    placeholder={t("contact.form.email_ph")}
                    className={fieldClass}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div className="min-w-0">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    disabled={isSubmitting}
                    placeholder={t("contact.form.phone_ph")}
                    className={fieldClass}
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("contact.form.project")} <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    disabled={isSubmitting}
                    className={fieldClass}
                    aria-invalid={!!errors.projectType}
                  >
                    <option value="" disabled>
                      {t("contact.form.select_option")}
                    </option>
                    {projectOptionKeys.map((key) => {
                      const label = t(`contact.form.project_options.${key}`);
                      return (
                        <option key={key} value={label}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                  {errors.projectType ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.projectType}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 min-w-0">
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
                  {t("contact.form.budget")}{" "}
                  <span className="text-xs text-muted-foreground">{t("contact.form.optional")}</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  disabled={isSubmitting}
                  className={fieldClass}
                >
                  <option value="">{t("contact.form.select_budget")}</option>
                  {budgetOptionKeys.map((key) => {
                    const label = t(`contact.form.budget_options.${key}`);
                    return (
                      <option key={key} value={label}>
                        {label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mt-5 min-w-0">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  {t("contact.form.message")} <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  disabled={isSubmitting}
                  placeholder={t("contact.form.message_ph")}
                  className={cn(fieldClass, "resize-y")}
                  aria-invalid={!!errors.message}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(btnPrimary, "mt-6 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed")}
              >
                {isSubmitting ? (
                  <>
                    {t("contact.form.submitting")}
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    {t("contact.form.submit")}
                    <Send size={16} className="rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <div className="relative h-full overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-card">
              <h3 className="text-2xl">{t("contact.info.title")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {t("contact.info.subtitle")}
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={CONTACT.phoneHref}
                    className="group flex min-w-0 items-center gap-4 transition-opacity hover:opacity-90"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10">
                      <Phone size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-primary-foreground/60 uppercase">
                        {t("contact.info.phone")}
                      </span>
                      <span className="block truncate text-sm font-medium group-hover:underline">
                        {CONTACT.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.emailHref}
                    className="group flex min-w-0 items-center gap-4 transition-opacity hover:opacity-90"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10">
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-primary-foreground/60 uppercase">
                        {t("contact.info.email")}
                      </span>
                      <span className="block truncate text-sm font-medium group-hover:underline">
                        {CONTACT.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.addressHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 items-start gap-4 transition-opacity hover:opacity-90"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10">
                      <MapPin size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-primary-foreground/60 uppercase">
                        {t("contact.info.address")}
                      </span>
                      <span className="block text-sm font-medium leading-relaxed group-hover:underline">
                        {CONTACT.address}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-8 border-t border-primary-foreground/15 pt-6">
                <p className="text-xs tracking-[0.14em] text-primary-foreground/60 uppercase">
                  {t("contact.info.follow_us")}
                </p>
                <div className="mt-4 flex gap-3">
                  {[
                    { Icon: Facebook, label: "Facebook" },
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Linkedin, label: "LinkedIn" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#contact"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-md border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
