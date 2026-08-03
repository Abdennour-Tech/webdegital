import { Gauge, LifeBuoy, Palette, Puzzle, Smartphone, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./reveal";
import { container } from "./ui-bits";
import { cn } from "@/lib/utils";

const pillarIcons = [Palette, Gauge, Sparkles, Smartphone];
const pillarIndexes = [1, 2, 3, 4];

const extraIcons = [Puzzle, LifeBuoy];
const extraIndexes = [1, 2];

export function WhyUs() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className={container}>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="min-w-0">
            <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
              {t("whyus.eyebrow")}
            </p>
            <h2 className="text-[2rem] leading-[1.1] text-foreground sm:text-[2.7rem]">
              {t("whyus.title_start")}{" "}
              <span className="italic text-accent">{t("whyus.title_highlight")}</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
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
                      "min-w-0 rounded-2xl border border-border bg-surface p-6 transition-all duration-300",
                      "hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft",
                    )}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                      <h3 className="text-lg text-foreground">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillarIndexes.map((idx, i) => {
              const Icon = pillarIcons[i];
              const title = t(`whyus.pillars.${idx}.title`);
              const description = t(`whyus.pillars.${idx}.desc`);
              return (
                <Reveal key={idx} delay={i * 90} variant="zoom" className="min-w-0">
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:bg-primary hover:shadow-elevated">
                    <span className="font-display text-4xl text-accent/50 transition-colors duration-400 group-hover:text-accent-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      size={22}
                      aria-hidden="true"
                      className="mt-6 text-primary transition-colors duration-400 group-hover:text-accent-soft"
                    />
                    <h3 className="mt-4 text-xl text-foreground transition-colors duration-400 group-hover:text-primary-foreground">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-400 group-hover:text-primary-foreground/70">
                      {description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
