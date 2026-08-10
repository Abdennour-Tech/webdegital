import { useState, useEffect, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { QRCodeSVG } from "qrcode.react";
import { CONTACT } from "@/lib/site";
import { SectionHeading } from "./section-heading";
import { btnPrimary, container } from "./ui-bits";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

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
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 disabled:opacity-60 disabled:cursor-not-allowed";

export function Contact() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusState, setStatusState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [siteUrl, setSiteUrl] = useState("https://webdegital.com");

  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 }, true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin);
    }
  }, []);

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

    try {
      const response = await fetch("https://formspree.io/f/xjybywel", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatusState({
          type: "success",
          message: "Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.",
        });
        toast.success(t("contact.toast.success"));
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatusState({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone ou email.",
      });
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputGroupClass = cn(
    "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none group",
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  );
  
  const labelClass = "mb-2 block text-sm font-medium text-foreground transition-colors duration-300 group-focus-within:text-accent";
  
  const bounceClass = "transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none motion-reduce:transform-none";

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className={container}>
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div ref={sectionRef} className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="min-w-0">
            <form
              onSubmit={onSubmit}
              noValidate
              className={cn(
                "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
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
                <div className={inputGroupClass} style={{ transitionDelay: '100ms' }}>
                  <label htmlFor="name" className={labelClass}>
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

                <div className={inputGroupClass} style={{ transitionDelay: '160ms' }}>
                  <label htmlFor="email" className={labelClass}>
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

                <div className={inputGroupClass} style={{ transitionDelay: '220ms' }}>
                  <label htmlFor="phone" className={labelClass}>
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

                <div className={inputGroupClass} style={{ transitionDelay: '280ms' }}>
                  <label
                    htmlFor="projectType"
                    className={labelClass}
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

              <div className={inputGroupClass} style={{ transitionDelay: '340ms' }}>
                <div className="mt-5">
                  <label htmlFor="budget" className={labelClass}>
                    {t("contact.form.budget")}{" "}
                    <span className="text-xs text-muted-foreground font-normal">{t("contact.form.optional")}</span>
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
              </div>

              <div className={inputGroupClass} style={{ transitionDelay: '400ms' }}>
                <div className="mt-5">
                  <label htmlFor="message" className={labelClass}>
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
              </div>

              <div 
                className={cn(
                  "relative mt-6 inline-block w-full sm:w-auto transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: '460ms' }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    btnPrimary,
                    "btn-shimmer-effect relative z-10 w-full sm:w-auto transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]",
                    "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  )}
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
              </div>
            </form>
          </div>

          <div className="min-w-0">
            <div 
              className={cn(
                "relative h-full overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-card",
                "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: '150ms' }}
            >
              <h3 className="text-2xl">{t("contact.info.title")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {t("contact.info.subtitle")}
              </p>

              <ul className="mt-8 space-y-5">
                <li
                  className={cn(bounceClass, isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4")}
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className="group flex min-w-0 items-center gap-4 transition-opacity">
                    <span 
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 animate-float-icon"
                      style={{ animationDelay: '0ms' }}
                    >
                      <Phone size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-primary-foreground/60 uppercase">
                        {t("contact.info.phone")}
                      </span>
                      <a 
                        href={CONTACT.phoneHref}
                        className="block truncate text-sm font-medium hover:underline hover:opacity-90 focus:underline focus:outline-none"
                      >
                        {CONTACT.phoneDisplay}
                      </a>
                    </span>
                  </div>
                </li>
                <li
                  className={cn(bounceClass, isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4")}
                  style={{ transitionDelay: '380ms' }}
                >
                  <div className="group flex min-w-0 items-center gap-4 transition-opacity">
                    <span 
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 animate-float-icon"
                      style={{ animationDelay: '300ms' }}
                    >
                      <Mail size={18} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs tracking-wide text-primary-foreground/60 uppercase">
                        {t("contact.info.email")}
                      </span>
                      <a 
                        href={CONTACT.emailHref}
                        className="block truncate text-sm font-medium hover:underline hover:opacity-90 focus:underline focus:outline-none"
                      >
                        {CONTACT.email}
                      </a>
                    </span>
                  </div>
                </li>
                <li
                  className={cn(bounceClass, isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4")}
                  style={{ transitionDelay: '460ms' }}
                >
                  <a
                    href={CONTACT.addressHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 items-start gap-4 transition-opacity hover:opacity-90"
                  >
                    <span 
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 animate-float-icon"
                      style={{ animationDelay: '600ms' }}
                    >
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

              <div className="relative mt-8 pt-6">
                <div className="absolute top-0 left-0 h-px w-full animate-gradient-sweep rounded-full" />
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div 
                  className={cn("transition-all duration-700 ease-out motion-reduce:transition-none", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}
                  style={{ transitionDelay: '540ms' }}
                >
                  <p className="text-xs tracking-[0.14em] text-primary-foreground/60 uppercase">
                    {t("contact.info.follow_us")}
                  </p>
                  <div className="mt-4 flex gap-3">
                    {[
                      { Icon: Facebook, label: "Facebook" },
                      { Icon: Instagram, label: "Instagram" },
                      { Icon: Linkedin, label: "LinkedIn" },
                    ].map(({ Icon, label }, idx) => (
                      <a
                        key={label}
                        href="#contact"
                        aria-label={label}
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-md border border-primary-foreground/20",
                          "transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground hover:text-primary hover:border-transparent hover:shadow-lg",
                          "motion-reduce:transition-none motion-reduce:transform-none",
                          "animate-subtle-pulse",
                          isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                        )}
                        style={{ transitionDelay: `${620 + idx * 80}ms`, animationDelay: `${idx * 200}ms` }}
                      >
                        <Icon size={17} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                <div 
                  className={cn("flex flex-col gap-4 transition-all duration-700 ease-out motion-reduce:transition-none", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}
                  style={{ transitionDelay: '700ms' }}
                >
                  <p className="text-xs tracking-[0.14em] text-primary-foreground/60 uppercase">
                    Scannez pour visiter le site
                  </p>
                  <div className="relative w-fit">
                    <div className="relative rounded-2xl bg-white p-3 shadow-soft animate-breath-glow transition-transform duration-300 hover:scale-[1.03]">
                      <QRCodeSVG value={siteUrl} size={110} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
