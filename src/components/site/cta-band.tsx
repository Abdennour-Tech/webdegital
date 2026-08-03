import { ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./reveal";
import { arrowMove, btnGhostLight, btnLight, container } from "./ui-bits";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaBand() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="hairline-grid-dark pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border border-primary-foreground/10 rtl:-right-auto rtl:-left-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-primary-foreground/10 rtl:-left-auto rtl:-right-20"
      />

      <div className={cn(container, "relative text-center")}>
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.2em] text-accent-soft uppercase">
            {t("ctaband.badge")}
          </p>
          <h2 className="mx-auto max-w-3xl text-[2.1rem] leading-[1.1] text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
            {t("ctaband.title_start")}{" "}
            <span className="italic text-accent-soft">{t("ctaband.title_highlight")}</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            {t("ctaband.desc")}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className={btnLight}>
              {t("ctaband.cta")}
              <ArrowRight size={16} className={cn(arrowMove, "rtl:rotate-180")} />
            </a>
            <a href={CONTACT.phoneHref} className={btnGhostLight}>
              <Phone size={16} aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <a
            href={CONTACT.emailHref}
            className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/60 underline-offset-4 transition-colors duration-300 hover:text-primary-foreground hover:underline"
          >
            <Mail size={15} aria-hidden="true" />
            {CONTACT.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
