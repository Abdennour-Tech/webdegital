import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { Reveal } from "./reveal";
import { HeroCrystal } from "./hero-crystal";
import { arrowMove, btnOutline, btnPrimary, container } from "./ui-bits";
import { cn } from "@/lib/utils";

const statKeys = ["responsive", "design", "support"];
const marqueeIndexes = [1, 2, 3, 4, 5, 6];

export function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotlight.style.setProperty("--mouse-x", `${x}%`);
      spotlight.style.setProperty("--mouse-y", `${y}%`);
    };

    section.addEventListener("mousemove", onMouseMove);
    return () => section.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative overflow-hidden bg-surface pt-32 pb-0 lg:pt-40"
    >
      {/* Spotlight glow qui suit la souris */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="hero-spotlight pointer-events-none absolute inset-0 z-0"
        style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
      />
      {/* Gradient radial de fond */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0 z-0"
      />
      <div
        aria-hidden="true"
        className="hairline-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className={cn(container, "relative z-10")}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
          <Reveal className="min-w-0">
            {/* Eyebrow badge animé */}
            <div className="mb-7 inline-flex overflow-hidden rounded-full border border-border bg-background/80 shadow-soft backdrop-blur-sm">
              <p className="relative inline-flex items-center gap-2.5 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.18em] text-foreground/60 uppercase">
                <span aria-hidden="true" className="badge-shimmer absolute inset-0 rounded-full" />
                <Star size={12} className="relative text-accent" aria-hidden="true" />
                <span className="relative">{t("hero.badge")}</span>
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-balance text-[2.6rem] leading-[1.03] text-foreground sm:text-[3.4rem] lg:text-[4.2rem]">
              {t("hero.title_start")}{" "}
              <span className="accent-underline italic">{t("hero.title_highlight")}</span>.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              {t("hero.desc")}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={btnPrimary}>
                {t("hero.cta_quote")}
                <ArrowRight size={16} className={cn(arrowMove, "rtl:rotate-180")} />
              </a>
              <a href="#realisations" className={btnOutline}>
                {t("hero.cta_portfolio")}
              </a>
            </div>

            {/* Stats bar */}
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-0 border-t border-border pt-8">
              {statKeys.map((key, i) => {
                const label = t(`hero.stats.${key}.label`);
                const value = t(`hero.stats.${key}.value`);
                return (
                  <div
                    key={key}
                    className={cn(
                      "min-w-0 pr-6 rtl:pr-0 rtl:pl-6",
                      i > 0 && "border-l border-border pl-6 rtl:border-l-0 rtl:border-r rtl:pr-6",
                    )}
                  >
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-[1.35rem] leading-tight text-foreground sm:text-2xl">
                      {value}
                    </dd>
                    <p className="mt-1.5 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={140} variant="right" className="min-w-0">
            <div className="relative">
              {/* Cristal 3D flottant — remplace le cercle décoratif */}
              <HeroCrystal />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated">
                <img
                  src={heroMockup}
                  alt={t("hero.badge")}
                  width={1408}
                  height={1104}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  className="w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 hidden max-w-[14rem] rounded-2xl border border-border bg-background p-4 shadow-card sm:block rtl:left-auto rtl:-right-4">
                <p className="font-display text-[1.4rem] leading-none text-foreground">
                  {t("hero.badge_float.title")}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {t("hero.badge_float.desc")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee ticker */}
        <div className="relative mt-20 overflow-hidden border-y border-border/70 py-5 lg:mt-24">
          <div
            aria-hidden="true"
            className="marquee-track flex w-max items-center gap-10 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase"
          >
            {[...marqueeIndexes, ...marqueeIndexes].map((idx, i) => {
              const text = t(`hero.marquee.${idx}`);
              return (
                <span key={`${idx}-${i}`} className="flex items-center gap-10">
                  {text}
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
