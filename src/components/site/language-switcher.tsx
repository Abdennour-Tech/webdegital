import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "fr";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 shadow-soft backdrop-blur-sm",
        className,
      )}
    >
      <Globe
        size={14}
        className="ml-2 shrink-0 text-muted-foreground rtl:mr-2 rtl:ml-0"
        aria-hidden="true"
      />
      {languages.map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            title={lang.name}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-surface hover:text-foreground",
            )}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
