import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { container } from "./ui-bits";
import { cn } from "@/lib/utils";

const stepNumbers = ["01", "02", "03", "04"];

export function Process() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setActiveStep(3); // Show all as completed
      return;
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000); // 2s per step

    return () => clearInterval(interval);
  }, []);

  const progress = `${((activeStep + 1) / 4) * 100}%`;
  // When wrapping from 3 to 0, use duration-0 to snap back instantly without reversing
  const isResetting = activeStep === 0;

  return (
    <section id="processus" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className={container}>
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={
            <>
              {t("process.title_start")}{" "}
              <span className="italic text-accent">{t("process.title_highlight")}</span>{" "}
              {t("process.title_end")}
            </>
          }
          subtitle={t("process.subtitle")}
        />

        <div className="relative mt-16 lg:mt-20">
          {/* Base background line */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[27px] w-px bg-border sm:left-[31px] lg:top-8 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full rtl:left-auto rtl:right-[27px] sm:rtl:right-[31px]"
          >
            {/* Animated progress fill line */}
            <div
              className={cn(
                "absolute top-0 bg-accent transition-all ease-linear motion-reduce:transition-none",
                "ltr:left-0 rtl:right-0",
                "max-lg:w-full max-lg:h-[var(--progress)] lg:h-full lg:w-[var(--progress)]",
                isResetting ? "duration-0" : "duration-[2000ms]"
              )}
              style={{ "--progress": progress } as React.CSSProperties}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {stepNumbers.map((num, i) => {
              const stepIdx = i + 1;
              const title = t(`process.steps.${stepIdx}.title`);
              const description = t(`process.steps.${stepIdx}.desc`);
              
              const isActive = i === activeStep;
              const isPast = i < activeStep;

              return (
                <Reveal
                  as="li"
                  key={num}
                  delay={i * 120}
                  className="relative min-w-0 pl-20 sm:pl-24 lg:pl-0 rtl:pl-0 rtl:pr-20 sm:rtl:pr-24 lg:rtl:pr-0"
                >
                  <span 
                    className={cn(
                      "absolute top-0 left-0 grid h-14 w-14 place-items-center rounded-2xl border font-display text-2xl shadow-soft transition-all duration-700 ease-out sm:h-16 sm:w-16 sm:text-3xl lg:relative lg:h-16 lg:w-16 rtl:left-auto rtl:right-0",
                      isActive ? "border-accent bg-background text-accent shadow-[0_0_20px_rgba(235,94,40,0.15)] scale-110 motion-reduce:scale-100" :
                      isPast ? "border-accent bg-accent text-accent-foreground scale-100" :
                      "border-border bg-background text-primary scale-100 opacity-60"
                    )}
                  >
                    {num}
                  </span>
                  
                  <h3 
                    className={cn(
                      "mt-1 text-balance text-xl lg:mt-7 transition-all duration-500",
                      isActive ? "text-foreground font-semibold" : isPast ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {title}
                  </h3>
                  
                  <p 
                    className={cn(
                      "mt-2.5 max-w-xs text-sm leading-relaxed transition-all duration-500",
                      isActive ? "text-foreground/90" : "text-muted-foreground"
                    )}
                  >
                    {description}
                  </p>
                  
                  {i < stepNumbers.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-8 left-[27px] hidden h-1.5 w-1.5 rounded-full transition-all duration-500 sm:left-[31px] lg:top-[30px] lg:left-auto lg:right-2 lg:block rtl:left-auto rtl:right-[27px] sm:rtl:right-[31px] lg:rtl:right-auto lg:rtl:left-2",
                        isPast || isActive ? "bg-accent shadow-[0_0_8px_rgba(235,94,40,0.8)] scale-110" : "bg-border scale-100 opacity-50"
                      )}
                    />
                  ) : null}
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
