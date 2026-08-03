import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: Props) {
  return (
    <Reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] uppercase",
            align === "center" && "justify-center",
            tone === "dark" ? "text-accent" : "text-accent-soft",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-8",
              tone === "dark" ? "bg-accent/50" : "bg-accent-soft/50",
            )}
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]",
          tone === "dark" ? "text-foreground" : "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto max-w-2xl",
            tone === "dark" ? "text-muted-foreground" : "text-primary-foreground/70",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
