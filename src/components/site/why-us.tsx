import { Gauge, LifeBuoy, Palette, Puzzle, Smartphone, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { container } from "./ui-bits";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { useEffect, useState } from "react";

const pillarIcons = [Palette, Gauge, Sparkles, Smartphone];
const pillarIndexes = [1, 2, 3, 4];
const iconAnimations = ["animate-icon-palette", "animate-icon-gauge", "animate-icon-sparkles", "animate-icon-phone"];

const extraIcons = [Puzzle, LifeBuoy];
const extraIndexes = [1, 2];

export function WhyUs() {
  const { t } = useTranslation();
  const { ref: leftRef, isInView: leftInView } = useInView<HTMLDivElement>({ threshold: 0.15 }, true);
  const { ref: rightRef, isInView: rightInView } = useInView<HTMLDivElement>({ threshold: 0.15 }, true);

  // Autonomous cycling state for the right column cards
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      setActiveCardIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % pillarIndexes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className={container}>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div ref={leftRef} className="min-w-0">
            <p 
              className={cn(
                "mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase",
                "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <span aria-hidden="true" className="h-[2px] w-8 bg-accent animate-line-pulse motion-reduce:animate-none" />
              {t("whyus.eyebrow")}
            </p>
            <h2 
              className={cn(
                "text-[2rem] leading-[1.1] text-foreground sm:text-[2.7rem]",
                "transition-all duration-700 ease-out delay-100 motion-reduce:transition-none motion-reduce:transform-none",
                leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {t("whyus.title_start")}{" "}
              <span className="italic text-accent">{t("whyus.title_highlight")}</span>.
            </h2>
            <p 
              className={cn(
                "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
                "transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",
                leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {t("whyus.desc")}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {extraIndexes.map((idx, i) => {
                const Icon = extraIcons[i];
                const title = t(`whyus.extras.${idx}.title`);
                const description = t(`whyus.extras.${idx}.desc`);
                return (
                  <div
                    key={idx}
                    className={cn(
                      "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                      leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
                      {/* Left border glow accent */}
                      <div className="absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full bg-accent animate-border-pulse motion-reduce:animate-none" style={{ animationDelay: `${i * 1.5}s` }} />
                      
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                        <h3 className="text-lg text-foreground">{title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={rightRef} className="grid gap-5 sm:grid-cols-2">
            {pillarIndexes.map((idx, i) => {
              const Icon = pillarIcons[i];
              const title = t(`whyus.pillars.${idx}.title`);
              const description = t(`whyus.pillars.${idx}.desc`);
              const iconAnimClass = iconAnimations[i];
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                    rightInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                  )}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <article 
                    className={cn(
                      "group relative h-full overflow-hidden rounded-3xl border-2 p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-primary hover:shadow-elevated hover:border-transparent",
                      activeCardIndex === i 
                        ? "bg-primary/5 border-primary shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.4)]" 
                        : "bg-card border-border/40 shadow-none"
                    )}
                  >
                    {/* The number */}
                    <span 
                      className="font-display text-4xl text-accent/50 transition-colors duration-400 group-hover:text-accent-soft inline-block animate-number-breathe motion-reduce:animate-none"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    
                    {/* The Icon */}
                    <div className="mt-6">
                      <Icon
                        size={22}
                        aria-hidden="true"
                        className={cn(
                          "text-primary transition-colors duration-400 group-hover:text-accent-soft origin-center motion-reduce:animate-none",
                          iconAnimClass
                        )}
                        style={{ animationDelay: `${i * 0.7}s` }}
                      />
                    </div>

                    <h3 className="mt-4 text-xl text-foreground transition-colors duration-400 group-hover:text-primary-foreground">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-400 group-hover:text-primary-foreground/70">
                      {description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes line-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-line-pulse {
          animation: line-pulse 3s ease-in-out infinite;
        }

        @keyframes border-pulse {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 0px 0px hsl(var(--accent) / 0); }
          50% { opacity: 1; box-shadow: 0 0 10px 1px hsl(var(--accent) / 0.5); }
        }
        .animate-border-pulse {
          animation: border-pulse 4s ease-in-out infinite;
        }

        @keyframes number-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-number-breathe {
          animation: number-breathe 4s ease-in-out infinite;
        }

        @keyframes icon-palette {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        .animate-icon-palette {
          animation: icon-palette 4s ease-in-out infinite;
        }

        @keyframes icon-gauge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-icon-gauge {
          animation: icon-gauge 3.5s ease-in-out infinite;
        }

        @keyframes icon-sparkles {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(15deg); }
        }
        .animate-icon-sparkles {
          animation: icon-sparkles 4.5s ease-in-out infinite;
        }

        @keyframes icon-phone {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-8deg) translateY(-3px); }
        }
        .animate-icon-phone {
          animation: icon-phone 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
