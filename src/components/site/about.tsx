import { Check, MonitorSmartphone, PenTool, Puzzle } from "lucide-react";
import { useTranslation } from "react-i18next";
import aboutMockup from "@/assets/about-mockup.jpg";
import aboutImage from "@/assets/about-studio.jpg";
import { container } from "./ui-bits";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const factIcons = [MonitorSmartphone, PenTool, Puzzle];
const factIndexes = [1, 2, 3];
const valueIndexes = [1, 2, 3, 4];

export function About() {
  const { t } = useTranslation();
  const { ref: leftRef, isInView: leftInView } = useInView<HTMLDivElement>({ threshold: 0.15 }, true);
  const { ref: rightRef, isInView: rightInView } = useInView<HTMLDivElement>({ threshold: 0.15 }, true);

  return (
    <section id="a-propos" className="scroll-mt-24 bg-surface py-24 lg:py-32 overflow-hidden">
      <div className={cn(container, "grid items-center gap-16 lg:grid-cols-2")}>
        
        {/* Left Column */}
        <div ref={leftRef} className="order-2 min-w-0 lg:order-1 relative">
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 hidden h-28 w-28 rounded-3xl border border-accent/30 sm:block rtl:left-auto rtl:-right-6"
          />
          {/* Main Image */}
          <div 
            className={cn(
              "relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated animate-float-device motion-reduce:animate-none",
              "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <img
              src={aboutMockup}
              alt="About webdegital"
              width={1200}
              height={1008}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          {/* Smaller Image */}
          <div 
            className={cn(
              "absolute -right-4 -bottom-8 hidden w-40 overflow-hidden rounded-2xl border border-border shadow-card sm:block rtl:right-auto rtl:-left-4",
              "transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <img
              src={aboutImage}
              alt="webdegital Team"
              width={1200}
              height={912}
              loading="lazy"
              className="h-32 w-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="order-1 min-w-0 lg:order-2">
          <p 
            className={cn(
              "mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase",
              "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
            {t("about.eyebrow")}
          </p>
          
          <h2 
            className={cn(
              "text-balance text-[2rem] leading-[1.12] text-foreground sm:text-[2.6rem]",
              "transition-all duration-700 ease-out delay-100 motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {t("about.title_start")}{" "}
            <span className="italic">{t("about.title_italic")}</span>
            {t("about.title_end")}
          </h2>
          
          <p 
            className={cn(
              "mt-6 text-base leading-relaxed text-muted-foreground",
              "transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {t("about.desc")}
          </p>
          
          <p 
            className={cn(
              "mt-4 text-base leading-relaxed text-muted-foreground",
              "transition-all duration-700 ease-out delay-300 motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {t("about.desc2")}
          </p>

          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            {factIndexes.map((idx, i) => {
              const Icon = factIcons[i];
              return (
                <li
                  key={idx}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                  className={cn(
                    "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                    rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="h-full rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      {t(`about.facts.${idx}.title`)}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t(`about.facts.${idx}.text`)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {valueIndexes.map((idx, i) => (
              <li
                key={idx}
                style={{ transitionDelay: `${700 + i * 80}ms` }}
                className={cn(
                  "link-underline flex items-center gap-2 text-sm font-medium text-foreground",
                  "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                  rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <Check size={15} className="shrink-0 text-accent" aria-hidden="true" />
                {t(`about.values.${idx}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        @keyframes float-device {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-device {
          animation: float-device 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
