import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import impactImg from "@/assets/projects/impact.png";
import gpImg from "@/assets/projects/gp.png";
import medilabImg from "@/assets/projects/medilab.png";
import appendImg from "@/assets/projects/append.png";
import restaurantlyImg from "@/assets/projects/restaurantly.png";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { arrowMove, btnOutline, container } from "./ui-bits";
import { cn } from "@/lib/utils";

type Project = {
  key: "impact" | "gp" | "medilab" | "append" | "restaurantly";
  name: string;
  categoryKey: "site_vitrine" | "digital_solutions" | "medical" | "site_web" | "restaurant";
  image: string;
  url: string;
  alt: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    key: "impact",
    name: "Impact",
    categoryKey: "site_vitrine",
    image: impactImg,
    url: "https://abdennour-tech.github.io/impact/",
    alt: "Impact project screenshot",
    featured: true,
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

function FeaturedCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const category = t(`portfolio.categories.${project.categoryKey}`);
  const description = t(`portfolio.projects.${project.key}`);

  return (
    <Reveal delay={0} variant="zoom" className="min-w-0 lg:col-span-12">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("portfolio.view_project")} ${project.name}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated lg:flex-row"
      >
        {/* Image side */}
        <div className="relative flex-1 overflow-hidden bg-surface-strong" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={project.image}
            alt={project.alt}
            width={1440}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:bg-gradient-to-r lg:from-primary/40"
          />
          <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[0.6rem] font-bold tracking-[0.18em] text-accent-foreground uppercase shadow-soft rtl:left-auto rtl:right-5">
            {t("portfolio.featured_badge")}
          </span>
          <span className="absolute top-5 right-5 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-background/95 text-primary opacity-0 shadow-soft transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 rtl:right-auto rtl:left-5">
            <ArrowUpRight size={16} aria-hidden="true" className="rtl:rotate-[-90deg]" />
          </span>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center gap-5 p-7 lg:w-[36%] lg:shrink-0 lg:p-10 lg:py-12">
          <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">
            {category}
          </span>
          <h3 className="text-balance text-2xl text-foreground lg:text-[1.9rem]">
            {project.name}
          </h3>
          <p className="text-sm leading-[1.8] text-muted-foreground">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
            {t("portfolio.view_project")}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[-90deg]"
            />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

function ProjectCard({
  project,
  index,
  colSpan,
}: {
  project: Project;
  index: number;
  colSpan: string;
}) {
  const { t } = useTranslation();
  const num = String(index + 1).padStart(2, "0");
  const category = t(`portfolio.categories.${project.categoryKey}`);
  const description = t(`portfolio.projects.${project.key}`);

  return (
    <Reveal
      delay={(index % 3) * 90}
      variant="zoom"
      className={cn("min-w-0", colSpan)}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("portfolio.view_project")} ${project.name}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-strong">
          <img
            src={project.image}
            alt={project.alt}
            width={1440}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-background/85 px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.16em] text-foreground uppercase backdrop-blur-sm rtl:left-auto rtl:right-4">
            {category}
          </span>
          <span className="absolute top-4 right-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-background/95 text-primary opacity-0 shadow-soft transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 rtl:right-auto rtl:left-4">
            <ArrowUpRight size={15} aria-hidden="true" className="rtl:rotate-[-90deg]" />
          </span>
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="line-clamp-2 text-sm leading-relaxed text-primary-foreground/85">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-6 py-4">
          <div className="flex min-w-0 items-baseline gap-3">
            <span
              aria-hidden="true"
              className="shrink-0 font-display text-base text-muted-foreground/30 transition-colors duration-300 group-hover:text-accent/40"
            >
              {num}
            </span>
            <h3 className="truncate text-[1.05rem] text-foreground">{project.name}</h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold tracking-wide text-accent">
            {t("portfolio.view_short")}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Portfolio() {
  const { t } = useTranslation();
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  const colSpans = ["lg:col-span-6", "lg:col-span-6", "lg:col-span-7", "lg:col-span-5"];

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

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          <FeaturedCard project={featured} />

          {rest.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              colSpan={colSpans[i] ?? "lg:col-span-6"}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <a href="#contact" className={btnOutline}>
            {t("portfolio.cta")}
            <ArrowUpRight size={16} className={cn(arrowMove, "rtl:rotate-[-90deg]")} />
          </a>
        </div>
      </div>
    </section>
  );
}
