import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { HeroCrystal } from "./hero-crystal";
import { arrowMove, btnOutline, btnPrimary, container } from "./ui-bits";
import { cn } from "@/lib/utils";

const statKeys = ["responsive", "design", "support"];
const marqueeIndexes = [1, 2, 3, 4, 5, 6];

function StatCounter({ label, valueStr, className, delayMs = 0 }: { label: string, valueStr: string, className?: string, delayMs?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const match = valueStr.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const duration = 1500;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isReduced) {
      setCount(target);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(target * ease));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };
    
    const t = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateCounter);
    }, delayMs);

    return () => {
      clearTimeout(t);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [valueStr, delayMs]); // Use primitives for stable dependencies

  const displayMatch = valueStr.match(/^(\d+)(.*)$/);

  return (
    <div className={className}>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-[1.35rem] leading-tight text-foreground sm:text-2xl">
        {displayMatch ? `${count}${displayMatch[2]}` : valueStr}
      </dd>
      <p className="mt-1.5 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  );
}

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
      {/* Background Ambiance Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob-drift motion-reduce:animate-none pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/10 blur-[120px] animate-blob-drift-reverse motion-reduce:animate-none pointer-events-none" style={{ animationDelay: '-5s' }} />

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
          <div className="min-w-0">
            {/* Eyebrow badge animé */}
            <div className="mb-7 inline-flex overflow-hidden rounded-full border border-border bg-background/80 shadow-soft backdrop-blur-sm animate-slide-in-left motion-reduce:animate-none" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
              <p className="relative inline-flex items-center gap-2.5 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.18em] text-foreground/60 uppercase">
                <span aria-hidden="true" className="badge-shimmer absolute inset-0 rounded-full" />
                <Star size={12} className="relative text-accent" aria-hidden="true" />
                <span className="relative">{t("hero.badge")}</span>
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-balance text-[2.6rem] leading-[1.03] text-foreground sm:text-[3.4rem] lg:text-[4.2rem]">
              <span className="inline-block animate-slide-in-left motion-reduce:animate-none" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                {t("hero.title_start")}
              </span>{" "}
              <span className="inline-block accent-underline italic animate-slide-in-left motion-reduce:animate-none" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                {t("hero.title_highlight")}
              </span>
              <span className="inline-block animate-slide-in-left motion-reduce:animate-none" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] animate-slide-in-left motion-reduce:animate-none" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              {t("hero.desc")}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={cn(btnPrimary, "relative group isolate animate-slide-in-left motion-reduce:animate-none")} style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
                <span className="absolute inset-0 -z-10 rounded-full bg-primary blur-md opacity-0 animate-btn-glow motion-reduce:animate-none transition-opacity" />
                {t("hero.cta_quote")}
                <ArrowRight size={16} className={cn(arrowMove, "rtl:rotate-180")} />
              </a>
              <a href="#realisations" className={cn(btnOutline, "animate-slide-in-left motion-reduce:animate-none")} style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
                {t("hero.cta_portfolio")}
              </a>
            </div>

            {/* Stats bar */}
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-0 border-t border-border pt-8 animate-slide-in-left motion-reduce:animate-none" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
              {statKeys.map((key, i) => {
                const label = t(`hero.stats.${key}.label`);
                const value = t(`hero.stats.${key}.value`);
                return (
                  <StatCounter 
                    key={key}
                    label={label}
                    valueStr={value}
                    delayMs={600 + i * 150}
                    className={cn(
                      "min-w-0 pr-6 rtl:pr-0 rtl:pl-6",
                      i > 0 && "border-l border-border pl-6 rtl:border-l-0 rtl:border-r rtl:pr-6",
                    )}
                  />
                );
              })}
            </dl>
          </div>

          <div 
            className="min-w-0 animate-slide-in-right motion-reduce:animate-none" 
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
          >
            <div className="relative">
              {/* Cristal 3D flottant */}
              <HeroCrystal />
              
              {/* Rotating ring decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[115%] rounded-[40px] border border-dashed border-primary/20 animate-rotate-ring motion-reduce:animate-none pointer-events-none" />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated animate-float-device motion-reduce:animate-none">
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
              <div className="absolute -bottom-6 -left-4 hidden max-w-[14rem] rounded-2xl border border-border bg-background p-4 shadow-card sm:block rtl:left-auto rtl:-right-4 animate-badge-pulse motion-reduce:animate-none">
                <p className="font-display text-[1.4rem] leading-none text-foreground">
                  {t("hero.badge_float.title")}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {t("hero.badge_float.desc")}
                </p>
              </div>
            </div>
          </div>
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
      <style>{`
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes float-device {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-device {
          animation: float-device 6s ease-in-out infinite;
        }
        @keyframes rotate-ring {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-rotate-ring {
          animation: rotate-ring 25s linear infinite;
        }
        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-badge-pulse {
          animation: badge-pulse 3s ease-in-out infinite;
        }
        @keyframes blob-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-blob-drift {
          animation: blob-drift 20s ease-in-out infinite;
        }
        .animate-blob-drift-reverse {
          animation: blob-drift 25s ease-in-out infinite reverse;
        }
        @keyframes btn-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-btn-glow {
          animation: btn-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
