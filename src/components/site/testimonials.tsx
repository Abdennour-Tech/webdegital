import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { container } from "./ui-bits";
import { cn } from "@/lib/utils";

const testimonialKeys = [1, 2, 3, 4, 5, 6] as const;

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className="fill-accent text-accent"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="scroll-mt-24 bg-background py-24 lg:py-32 overflow-hidden">
      <div className={container}>
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={
            <>
              {t("testimonials.title_start")}{" "}
              <span className="italic text-accent">{t("testimonials.title_highlight")}</span>
              {t("testimonials.title_end")}
            </>
          }
          subtitle={t("testimonials.subtitle")}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialKeys.map((key, i) => (
            <Reveal key={key} delay={i * 80} variant="zoom" className="min-w-0">
              <article
                className={cn(
                  "group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft",
                  "card-glow",
                  // Featured card (1ère) plus grande sur desktop
                  i === 0 && "lg:col-span-1 border-accent/20 bg-surface",
                )}
              >
                {/* Déco quote */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 font-display text-7xl leading-none text-accent/10 select-none rtl:right-auto rtl:left-6"
                >
                  "
                </span>

                {/* Étoiles */}
                <StarRating />

                {/* Texte */}
                <blockquote className="relative flex-1 text-sm leading-[1.85] text-muted-foreground">
                  "{t(`testimonials.items.${key}.text`)}"
                </blockquote>

                {/* Auteur */}
                <footer className="flex items-center gap-3 border-t border-border pt-5">
                  {/* Avatar initiales */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground shadow-soft"
                    aria-hidden="true"
                  >
                    {t(`testimonials.items.${key}.name`)
                      .split(" ")
                      .slice(0, 2)
                      .map((n: string) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {t(`testimonials.items.${key}.name`)}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {t(`testimonials.items.${key}.role`)}
                    </p>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
