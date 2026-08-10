import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import impactImg from "@/assets/projects/impact.png";
import gpImg from "@/assets/projects/gp.png";
import medilabImg from "@/assets/projects/medilab.png";
import appendImg from "@/assets/projects/append.png";
import restaurantlyImg from "@/assets/projects/restaurantly.png";
import immobilierImg from "@/assets/projects/immobilier-yolaial.png";
import stockproImg from "@/assets/projects/stockpro.png";
import schoolImg from "@/assets/projects/suivi-parents-ecole.png";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { arrowMove, btnOutline, container } from "./ui-bits";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type Project = {
  key: "impact" | "gp" | "medilab" | "append" | "restaurantly" | "immobilier_yolaial" | "stockpro" | "suivi_parents_ecole";
  name: string;
  categoryKey: "site_vitrine" | "digital_solutions" | "medical" | "site_web" | "restaurant" | "real_estate" | "web_app" | "education";
  image: string;
  url: string;
  alt: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    key: "immobilier_yolaial",
    name: "Immobilier Yolaial",
    categoryKey: "real_estate",
    image: immobilierImg,
    url: "https://abdennour-tech.github.io/immoblier-yolaial/",
    alt: "Immobilier Yolaial project screenshot",
    featured: true,
  },
  {
    key: "stockpro",
    name: "StockPro",
    categoryKey: "web_app",
    image: stockproImg,
    url: "https://abdennour-tech.github.io/systemegestion/",
    alt: "StockPro project screenshot",
  },
  {
    key: "suivi_parents_ecole",
    name: "Suivi Parents-École",
    categoryKey: "education",
    image: schoolImg,
    url: "https://abdennour-tech.github.io/school/",
    alt: "Suivi Parents-École project screenshot",
  },
  {
    key: "impact",
    name: "Impact",
    categoryKey: "site_vitrine",
    image: impactImg,
    url: "https://abdennour-tech.github.io/impact/",
    alt: "Impact project screenshot",
  },
  {
    key: "gp",
    name: "GP",
    categoryKey: "digital_solutions",
    image: gpImg,
    url: "https://abdennour-tech.github.io/GP/",
    alt: "GP project screenshot",
  },
  {
    key: "medilab",
    name: "MediLab",
    categoryKey: "medical",
    image: medilabImg,
    url: "https://abdennour-medilab.netlify.app/",
    alt: "MediLab project screenshot",
  },
  {
    key: "append",
    name: "Append",
    categoryKey: "site_web",
    image: appendImg,
    url: "https://abdennour-tech.github.io/Append-Project/",
    alt: "Append project screenshot",
  },
  {
    key: "restaurantly",
    name: "Restaurantly",
    categoryKey: "restaurant",
    image: restaurantlyImg,
    url: "https://abdennour-tech.github.io/Restaurantly---Modern-Restaurant-Website/",
    alt: "Restaurantly project screenshot",
  },
];

const TABS = [
  { id: "all", label: "Tous" },
  { id: "vitrine", label: "Sites Vitrine", keys: ["site_vitrine", "site_web", "restaurant", "digital_solutions"] },
  { id: "webapp", label: "Applications Web", keys: ["web_app"] },
  { id: "metier", label: "Solutions Métier", keys: ["medical", "real_estate", "education"] },
];

function ProjectCard({
  project,
  index,
  hasFeaturedFirst,
}: {
  project: Project;
  index: number;
  hasFeaturedFirst: boolean;
}) {
  const { t } = useTranslation();
  const { ref, isInView } = useInView<HTMLAnchorElement>({ threshold: 0.1 }, true);
  const num = String(index + 1).padStart(2, "0");
  const category = t(`portfolio.categories.${project.categoryKey}`);
  const description = t(`portfolio.projects.${project.key}`);

  const isFullWidth = project.featured;
  
  // Zigzag staggered delay logic
  let delay = 0;
  if (!isFullWidth) {
    if (hasFeaturedFirst) {
      delay = index % 2 === 0 ? 150 : 0;
    } else {
      delay = index % 2 === 0 ? 0 : 150;
    }
  }

  return (
    <div 
      className={cn(
        "min-w-0 overflow-hidden rounded-3xl", 
        isFullWidth ? "sm:col-span-2" : ""
      )}
    >
      <a
        ref={ref}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("portfolio.view_project")} ${project.name}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
          "transition-all duration-700 ease-out",
          "hover:-translate-y-1 hover:shadow-2xl hover:border-transparent hover:ring-1 hover:ring-primary/20",
          "motion-reduce:transition-none motion-reduce:transform-none",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className={cn("relative overflow-hidden bg-surface-strong", isFullWidth ? "aspect-video sm:aspect-[21/9]" : "aspect-video")}>
          <img
            src={project.image}
            alt={project.alt}
            width={1440}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
          />
          {/* Dark gradient overlay sliding up */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent translate-y-[20%] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none",
              isFullWidth ? "h-full" : "h-3/4"
            )}
          />
          
          <span className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.16em] text-white backdrop-blur-md uppercase rtl:left-auto rtl:right-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse motion-reduce:animate-none"></span>
            {isFullWidth ? t("portfolio.featured_badge") : category}
          </span>
          <span className="absolute top-4 right-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-background/95 text-primary opacity-0 shadow-soft transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 rtl:right-auto rtl:left-4">
            <ArrowUpRight size={15} aria-hidden="true" className="rtl:rotate-[-90deg]" />
          </span>
          
          <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none">
            <p className={cn("line-clamp-2 text-sm leading-relaxed text-white/95", isFullWidth && "sm:text-base sm:line-clamp-3 sm:w-2/3")}>
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-6 py-4 relative z-10 bg-card">
          <div className="flex min-w-0 items-baseline gap-3">
            <span
              aria-hidden="true"
              className="shrink-0 font-display text-base text-muted-foreground/30 transition-colors duration-300 group-hover:text-accent/40"
            >
              {num}
            </span>
            <h3 className={cn("truncate text-foreground transition-colors duration-300", isFullWidth ? "text-xl sm:text-2xl" : "text-[1.05rem]")}>
              {project.name}
            </h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold tracking-wide text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110 origin-right motion-reduce:transform-none motion-reduce:transition-none">
            {t("portfolio.view_short")}
          </span>
        </div>
      </a>
    </div>
  );
}

export function Portfolio() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active tab
  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    const tabConfig = TABS.find((t) => t.id === activeTab);
    return tabConfig?.keys?.includes(p.categoryKey);
  });

  const hasFeaturedFirst = filteredProjects.length > 0 && !!filteredProjects[0].featured;

  // Handle smooth filtering
  const handleTabClick = (tabId: string) => {
    if (tabId === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    // Smooth fade out delay
    setTimeout(() => {
      setActiveTab(tabId);
      // Let React render new DOM, then fade back in
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 300);
  };

  // Update sliding indicator position
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeEl = tabsRef.current.querySelector('[aria-selected="true"]') as HTMLElement;
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <section id="realisations" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className={container}>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            align="left"
            eyebrow={t("portfolio.eyebrow")}
            title={
              <>
                {t("portfolio.title_start")}{" "}
                <span className="italic text-accent">{t("portfolio.title_highlight")}</span>.
              </>
            }
            subtitle={t("portfolio.subtitle")}
          />
          <Reveal delay={120} className="hidden min-w-0 lg:block">
            <a href="#contact" className={btnOutline}>
              {t("portfolio.cta")}
              <ArrowUpRight size={16} className={cn(arrowMove, "rtl:rotate-[-90deg]")} />
            </a>
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <Reveal delay={200} className="mt-12 flex w-full justify-start lg:justify-center">
          <div 
            ref={tabsRef}
            className="relative flex w-full max-w-full overflow-x-auto overflow-y-hidden rounded-full border border-border bg-surface-strong p-1.5 shadow-sm sm:w-fit"
            style={{ scrollbarWidth: 'none' }} // Hide scrollbar for clean look
          >
            {/* Sliding background pill */}
            <div 
              className="absolute inset-y-1.5 rounded-full bg-primary transition-all duration-500 ease-out motion-reduce:transition-none"
              style={{ 
                left: `${indicatorStyle.left}px`, 
                width: `${indicatorStyle.width}px` 
              }}
              aria-hidden="true"
            />
            
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  aria-selected={isActive}
                  className={cn(
                    "relative z-10 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div 
          className={cn(
            "mt-12 grid gap-5 sm:grid-cols-2 lg:gap-8 transition-all duration-300 ease-out motion-reduce:transition-none",
            isTransitioning ? "opacity-0 scale-[0.98] blur-[2px]" : "opacity-100 scale-100 blur-0"
          )}
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              hasFeaturedFirst={hasFeaturedFirst}
            />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              Aucun projet trouvé pour cette catégorie.
            </div>
          )}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <a href="#contact" className={btnOutline}>
            {t("portfolio.cta")}
            <ArrowUpRight size={16} className={cn(arrowMove, "rtl:rotate-[-90deg]")} />
          </a>
        </div>
      </div>
    </section>
  );
}
