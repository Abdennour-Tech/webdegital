import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CONTACT } from "@/lib/site";
import { container } from "./ui-bits";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const pageLinks = [
  { key: "home", href: "#accueil" },
  { key: "services", href: "#services" },
  { key: "about", href: "#a-propos" },
  { key: "portfolio", href: "#realisations" },
  { key: "contact", href: "#contact" },
];

const serviceIndexes = [1, 2, 3, 4, 5];

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className={container}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2.5">
              <img src={logoImg} alt="webdegital Logo" className="h-20 w-auto shrink-0" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.desc")}
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Liens du site" className="min-w-0">
            <h2 className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
              {t("footer.nav_title")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nos services" className="min-w-0">
            <h2 className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
              {t("footer.services_title")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceIndexes.map((idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {t(`footer.services_list.${idx}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
              {t("footer.contact_title")}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex min-w-0 items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone size={15} className="shrink-0" aria-hidden="true" />
                  <span className="truncate">{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex min-w-0 items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail size={15} className="shrink-0" aria-hidden="true" />
                  <span className="truncate">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.addressHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{t("footer.address")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn("mt-12 border-t border-border pt-6 text-center")}>
          <p className="text-xs text-muted-foreground">
            © 2026 webdegital. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
