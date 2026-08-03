import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { CONTACT, NAV_LINKS } from "@/lib/site";
import { arrowMove, container } from "./ui-bits";
import { LanguageSwitcher } from "./language-switcher";
import logoImg from "@/assets/logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled || open
          ? "glass-header border-border/60"
          : "border-transparent bg-transparent",
      )}
    >
      {/* Barre de progression de scroll */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent/80 to-accent/40 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <div
        className={cn(
          container,
          "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500 lg:flex lg:justify-between",
          scrolled ? "py-3.5" : "py-5",
        )}
      >
        <a
          href="#accueil"
          className="group flex min-w-0 items-center gap-3"
          aria-label="webdegital"
        >
          <img
            src={logoImg}
            alt="webdegital Logo"
            className="h-20 w-auto shrink-0 transition-transform duration-300 group-hover:-rotate-3"
          />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative block rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:bg-surface hover:text-foreground"
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:text-accent"
          >
            <Phone size={15} aria-hidden="true" />
            <span className="hidden xl:inline">{CONTACT.phoneDisplay}</span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold whitespace-nowrap text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-card"
          >
            {t("nav.quote")}
            <ArrowRight size={15} className={cn(arrowMove, "rtl:rotate-180")} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.close_menu") : t("nav.open_menu")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background/80 text-foreground transition-colors hover:bg-secondary"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height] duration-400 ease-out lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <nav aria-label="Navigation mobile" className={cn(container, "py-5")}>
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-3.5 text-base font-medium text-foreground transition-colors hover:text-accent"
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            {t("nav.quote")}
            <ArrowRight size={15} className="rtl:rotate-180" />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3.5 text-sm font-semibold text-foreground"
          >
            <Phone size={15} aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
