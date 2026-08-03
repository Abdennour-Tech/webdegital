import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const serviceIndexes = [1, 2, 3, 4, 5];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative flex flex-col bg-surface text-foreground py-24 lg:py-32">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 sm:px-8">
        <h2 className="mb-10 text-balance text-3xl font-semibold tracking-tight text-primary sm:mb-16 sm:text-5xl">
          {t("services.section_title")}
        </h2>

        {/* Scroll Snap Container on mobile, normal stack on desktop */}
        <div
          className="flex flex-col gap-6 sm:gap-10 overflow-y-auto lg:overflow-visible snap-y snap-mandatory lg:snap-none max-h-[75vh] lg:max-h-none pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {serviceIndexes.map((num, idx) => (
            <article
              key={num}
              className={cn(
                "relative flex shrink-0 flex-col justify-center rounded-[24px] border border-primary/10 bg-background p-8 sm:p-12 lg:p-16 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1",
                "min-h-[50vh] snap-center sm:min-h-[60vh] lg:min-h-0 lg:h-auto"
              )}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-sans text-4xl font-bold tracking-tighter text-primary/15 sm:top-10 sm:right-10 sm:text-6xl rtl:right-auto rtl:left-6 sm:rtl:left-10">
                0{idx + 1}
              </div>

              {/* Content */}
              <div className="mt-8 flex h-full max-w-3xl flex-col justify-center lg:mt-0">
                <h3 className="mb-6 font-sans text-3xl font-black tracking-tighter text-primary uppercase sm:text-5xl lg:text-6xl">
                  {t(`services.items.${num}.title`)}
                </h3>
                <p className="mb-10 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg sm:leading-relaxed">
                  {t(`services.items.${num}.desc`)}
                </p>
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-8 py-3.5 text-sm font-bold tracking-widest text-primary uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    {t("services.cta")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
