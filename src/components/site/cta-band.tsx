import { ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { arrowMove, btnGhostLight, btnLight, container } from "./ui-bits";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function CtaBand() {
  const { t } = useTranslation();
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 }, true);

  const baseStagger = "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none";
  const hidden = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";

  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/2 left-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-soft/10 blur-[100px] animate-drift motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/2 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-accent/10 blur-[100px] animate-drift motion-reduce:animate-none"
        style={{ animationDelay: '-12s' }}
      />
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

      <div ref={sectionRef} className={cn(container, "relative text-center")}>
        <div 
          className={cn(baseStagger, isInView ? visible : hidden)}
          style={{ transitionDelay: '0ms' }}
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.2em] text-accent-soft uppercase shadow-soft animate-breath-glow motion-reduce:animate-none">
            {t("ctaband.badge")}
          </p>
        </div>

        <div 
          className={cn(baseStagger, isInView ? visible : hidden)}
          style={{ transitionDelay: '100ms' }}
        >
          <h2 className="mx-auto max-w-3xl text-[2.1rem] leading-[1.1] text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
            {t("ctaband.title_start")}{" "}
            <span className="italic text-accent-soft">{t("ctaband.title_highlight")}</span>.
          </h2>
        </div>

        <div 
          className={cn(baseStagger, isInView ? visible : hidden)}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            {t("ctaband.desc")}
          </p>
        </div>

        <div 
          className={cn(baseStagger, "mt-10 flex flex-col justify-center gap-3 sm:flex-row", isInView ? visible : hidden)}
          style={{ transitionDelay: '300ms' }}
        >
          <a 
            href="#contact" 
            className={cn(
              btnLight, 
              "btn-shimmer-effect transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
            )}
          >
            {t("ctaband.cta")}
            <ArrowRight size={16} className={cn(arrowMove, "rtl:rotate-180")} />
          </a>
          <a 
            href={CONTACT.phoneHref} 
            className={cn(
              btnGhostLight, 
              "group transition-all duration-300 hover:scale-[1.03] hover:bg-primary-foreground/10 active:scale-[0.97]"
            )}
          >
            <Phone size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3" />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <div 
          className={cn(baseStagger, isInView ? visible : hidden)}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href={CONTACT.emailHref}
            className="group mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/60 underline-offset-4 transition-colors duration-300 hover:text-primary-foreground hover:underline"
          >
            <Mail size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
