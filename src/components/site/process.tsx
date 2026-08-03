import { useTranslation } from "react-i18next";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { container } from "./ui-bits";

const stepNumbers = ["01", "02", "03", "04"];

export function Process() {
  const { t } = useTranslation();

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
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-transparent via-border to-transparent sm:left-[31px] lg:top-8 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:bg-gradient-to-r rtl:left-auto rtl:right-[27px] sm:rtl:right-[31px]"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {stepNumbers.map((num, i) => {
              const stepIdx = i + 1;
              const title = t(`process.steps.${stepIdx}.title`);
              const description = t(`process.steps.${stepIdx}.desc`);
              return (
                <Reveal
                  as="li"
                  key={num}
                  delay={i * 120}
                  className="relative min-w-0 pl-20 sm:pl-24 lg:pl-0 rtl:pl-0 rtl:pr-20 sm:rtl:pr-24 lg:rtl:pr-0"
                >
                  <span className="absolute top-0 left-0 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-background font-display text-2xl text-primary shadow-soft transition-all duration-300 sm:h-16 sm:w-16 sm:text-3xl lg:relative lg:h-16 lg:w-16 rtl:left-auto rtl:right-0">
                    {num}
                  </span>
                  <h3 className="mt-1 text-balance text-xl text-foreground lg:mt-7">{title}</h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  {i < stepNumbers.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-8 left-[27px] hidden h-1.5 w-1.5 rounded-full bg-accent sm:left-[31px] lg:top-[30px] lg:left-auto lg:right-2 lg:block rtl:left-auto rtl:right-[27px] sm:rtl:right-[31px] lg:rtl:right-auto lg:rtl:left-2"
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
