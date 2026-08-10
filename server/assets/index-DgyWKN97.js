import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import { useState, useEffect, useRef, useCallback } from "react";
import { Globe, Phone, ArrowRight, X, Menu, Star, ChevronLeft, ChevronRight, Code2, ShieldCheck, TrendingUp, Megaphone, Monitor, MonitorSmartphone, PenTool, Puzzle, Check, LifeBuoy, Palette, Gauge, Sparkles, Smartphone, ArrowUpRight, Mail, CheckCircle2, AlertCircle, Loader2, Send, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { N as NAV_LINKS, C as CONTACT } from "./router-C6sJ9pzL.js";
import { z } from "zod";
import { QRCodeSVG } from "qrcode.react";
import "@tanstack/react-query";
import "@tanstack/react-router";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const btnPrimary = "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const btnOutline = "group inline-flex items-center justify-center gap-2 rounded-full border border-input bg-background px-7 py-4 text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:border-primary hover:bg-secondary hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const btnLight = "group inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-semibold tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background";
const btnGhostLight = "group inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-foreground/60 hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background";
const arrowMove = "transition-transform duration-300 group-hover:translate-x-1";
const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const languages = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" }
];
function LanguageSwitcher({ className }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.split("-")[0] : "fr";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 shadow-soft backdrop-blur-sm",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          Globe,
          {
            size: 14,
            className: "ml-2 shrink-0 text-muted-foreground rtl:mr-2 rtl:ml-0",
            "aria-hidden": "true"
          }
        ),
        languages.map((lang) => {
          const isActive = currentLang === lang.code;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => i18n.changeLanguage(lang.code),
              title: lang.name,
              className: cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300",
                isActive ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-surface hover:text-foreground"
              ),
              children: lang.label
            },
            lang.code
          );
        })
      ]
    }
  );
}
const logoImg = "/assets/logo-6FewkKV0.png";
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight * 100 : 0;
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
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled || open ? "glass-header border-border/60" : "border-transparent bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent/80 to-accent/40 transition-all duration-100",
            style: { width: `${scrollProgress}%` }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              container,
              "flex items-center justify-between gap-4 transition-all duration-500",
              scrolled ? "py-3.5" : "py-5"
            ),
            children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#accueil",
                  className: "relative z-10 flex shrink-0 items-center transition-transform duration-300 hover:scale-105",
                  "aria-label": "webdegital",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: logoImg,
                      alt: "webdegital Logo",
                      className: "h-14 w-auto sm:h-16 lg:h-20"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("nav", { "aria-label": "Navigation principale", className: "hidden lg:block", children: /* @__PURE__ */ jsx("ul", { className: "flex items-center gap-1", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  className: "relative block rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:bg-surface hover:text-foreground",
                  children: t(`nav.${link.key}`)
                }
              ) }, link.href)) }) }),
              /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-3 lg:flex", children: [
                /* @__PURE__ */ jsx(LanguageSwitcher, {}),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: CONTACT.phoneHref,
                    className: "flex items-center gap-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors duration-300 hover:text-accent",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { size: 15, "aria-hidden": "true" }),
                      /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: CONTACT.phoneDisplay })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#contact",
                    className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold whitespace-nowrap text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-card",
                    children: [
                      t("nav.quote"),
                      /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: cn(arrowMove, "rtl:rotate-180") })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
                /* @__PURE__ */ jsx(LanguageSwitcher, {}),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen((v) => !v),
                    "aria-expanded": open,
                    "aria-controls": "mobile-nav",
                    "aria-label": open ? t("nav.close_menu") : t("nav.open_menu"),
                    className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background/80 text-foreground transition-colors hover:bg-secondary",
                    children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            id: "mobile-nav",
            className: cn(
              "overflow-hidden border-t border-border bg-background transition-[max-height] duration-400 ease-out lg:hidden",
              open ? "max-h-[32rem]" : "max-h-0 border-t-0"
            ),
            children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Navigation mobile", className: cn(container, "py-5"), children: [
              /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  onClick: () => setOpen(false),
                  className: "block border-b border-border/70 py-3.5 text-base font-medium text-foreground transition-colors hover:text-accent",
                  children: t(`nav.${link.key}`)
                }
              ) }, link.href)) }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#contact",
                  onClick: () => setOpen(false),
                  className: "mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground",
                  children: [
                    t("nav.quote"),
                    /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "rtl:rotate-180" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: CONTACT.phoneHref,
                  className: "mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3.5 text-sm font-semibold text-foreground",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { size: 15, "aria-hidden": "true" }),
                    CONTACT.phoneDisplay
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
const heroMockup = "/assets/hero-mockup-Brxp168z.jpg";
const SIZE_DESKTOP = 200;
const SIZE_MOBILE = 140;
const NAVY = 990013;
const COPPER = 12878138;
function HeroCrystal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let rafId;
    let renderer;
    let animating = true;
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const SIZE = isMobile ? SIZE_MOBILE : SIZE_DESKTOP;
    import("three").then((THREE) => {
      var _a;
      if (!animating) return;
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power"
      });
      renderer.setSize(SIZE, SIZE);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 4.5);
      const ambientLight = new THREE.AmbientLight(16777215, 0.6);
      scene.add(ambientLight);
      const keyLight = new THREE.DirectionalLight(16777215, 2.8);
      keyLight.position.set(2, 4, 3);
      scene.add(keyLight);
      const fillLight = new THREE.PointLight(COPPER, 1.8, 12);
      fillLight.position.set(-2.5, -1.5, 2);
      scene.add(fillLight);
      const rimLight = new THREE.PointLight(NAVY, 1.2, 10);
      rimLight.position.set(1, -2, -3);
      scene.add(rimLight);
      const geo = new THREE.IcosahedronGeometry(1.15, 0);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 16777215,
        metalness: 0,
        roughness: 0.08,
        transmission: 0.92,
        // effet verre / cristal
        thickness: 1.6,
        // réfraction interne
        ior: 1.72,
        // indice optique cristal
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.4,
        transparent: true,
        opacity: 1,
        side: THREE.FrontSide
      });
      const crystal = new THREE.Mesh(geo, mat);
      scene.add(crystal);
      const ringGeo = new THREE.TorusGeometry(1.52, 0.018, 6, 80);
      const ringMat = new THREE.MeshStandardMaterial({
        color: COPPER,
        metalness: 0.9,
        roughness: 0.25,
        emissive: COPPER,
        emissiveIntensity: 0.12
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.4;
      ring.rotation.y = 0.3;
      scene.add(ring);
      const particleGroup = new THREE.Group();
      const pGeo = new THREE.SphereGeometry(0.025, 6, 6);
      const pMat = new THREE.MeshStandardMaterial({
        color: COPPER,
        metalness: 1,
        roughness: 0.1,
        emissive: COPPER,
        emissiveIntensity: 0.5
      });
      const particleData = [];
      for (let i = 0; i < 8; i++) {
        const p = new THREE.Mesh(pGeo, pMat);
        const theta = i / 8 * Math.PI * 2;
        const phi = Math.PI * 0.3 + i % 2 * Math.PI * 0.4;
        const radius = 1.85 + Math.random() * 0.3;
        particleData.push({ mesh: p, theta, phi, speed: 0.3 + Math.random() * 0.2, radius });
        particleGroup.add(p);
      }
      scene.add(particleGroup);
      const section = ((_a = canvasRef.current) == null ? void 0 : _a.closest("section")) ?? document.body;
      const onMouseMove = (e) => {
        const rect = section.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      section.addEventListener("mousemove", onMouseMove);
      const onResize = () => {
        const s = window.matchMedia("(max-width: 768px)").matches ? SIZE_MOBILE : SIZE_DESKTOP;
        renderer.setSize(s, s);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };
      window.addEventListener("resize", onResize, { passive: true });
      let t = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        if (!animating) return;
        rafId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        t += delta;
        target.x += (mouse.x - target.x) * 0.04;
        target.y += (mouse.y - target.y) * 0.04;
        crystal.rotation.y = t * 0.25 + target.x * 0.22;
        crystal.rotation.x = Math.sin(t * 0.15) * 0.18 + target.y * 0.12;
        crystal.rotation.z = t * 0.08;
        ring.rotation.z = t * 0.18;
        ring.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.2) * 0.06;
        crystal.position.y = Math.sin(t * 0.6) * 0.06;
        ring.position.y = crystal.position.y;
        particleData.forEach((p, i) => {
          const a = p.theta + t * p.speed * (i % 2 === 0 ? 1 : -0.7);
          p.mesh.position.set(
            p.radius * Math.sin(a) * Math.sin(p.phi),
            p.radius * Math.cos(p.phi) + crystal.position.y,
            p.radius * Math.cos(a) * Math.sin(p.phi)
          );
          p.mesh.material.emissiveIntensity = 0.3 + Math.sin(t * 1.5 + i) * 0.2;
        });
        fillLight.intensity = 1.6 + Math.sin(t * 0.8) * 0.4;
        renderer.render(scene, camera);
      };
      animate();
      return () => {
        animating = false;
        cancelAnimationFrame(rafId);
        section.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        geo.dispose();
        mat.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        pGeo.dispose();
        pMat.dispose();
        renderer.dispose();
      };
    });
    return () => {
      animating = false;
      cancelAnimationFrame(rafId);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      "aria-hidden": "true",
      className: "hero-crystal-wrap pointer-events-none absolute -top-10 -right-10 z-10 hidden sm:block rtl:right-auto rtl:-left-10",
      children: /* @__PURE__ */ jsx(
        "canvas",
        {
          ref: canvasRef,
          className: "hero-crystal-canvas",
          style: { width: SIZE_DESKTOP, height: SIZE_DESKTOP }
        }
      )
    }
  );
}
const statKeys = ["responsive", "design", "support"];
const marqueeIndexes = [1, 2, 3, 4, 5, 6];
function StatCounter({ label, valueStr, className, delayMs = 0 }) {
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
    let animationFrameId;
    let startTime = null;
    const updateCounter = (currentTime) => {
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
  }, [valueStr, delayMs]);
  const displayMatch = valueStr.match(/^(\d+)(.*)$/);
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: label }),
    /* @__PURE__ */ jsx("dd", { className: "font-display text-[1.35rem] leading-tight text-foreground sm:text-2xl", children: displayMatch ? `${count}${displayMatch[2]}` : valueStr }),
    /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase", children: label })
  ] });
}
function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;
    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      spotlight.style.setProperty("--mouse-x", `${x}%`);
      spotlight.style.setProperty("--mouse-y", `${y}%`);
    };
    section.addEventListener("mousemove", onMouseMove);
    return () => section.removeEventListener("mousemove", onMouseMove);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      id: "accueil",
      className: "relative overflow-hidden bg-surface pt-32 pb-0 lg:pt-40",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/10 blur-[120px] animate-blob-drift motion-reduce:animate-none pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/10 blur-[120px] animate-blob-drift-reverse motion-reduce:animate-none pointer-events-none", style: { animationDelay: "-5s" } }),
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: spotlightRef,
            "aria-hidden": "true",
            className: "hero-spotlight pointer-events-none absolute inset-0 z-0",
            style: { "--mouse-x": "50%", "--mouse-y": "50%" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "hero-glow pointer-events-none absolute inset-0 z-0"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "hairline-grid pointer-events-none absolute inset-0 opacity-70"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: cn(container, "relative z-10"), children: [
          /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-14", children: [
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-7 inline-flex overflow-hidden rounded-full border border-border bg-background/80 shadow-soft backdrop-blur-sm animate-slide-in-left motion-reduce:animate-none", style: { animationDelay: "0ms", animationFillMode: "both" }, children: /* @__PURE__ */ jsxs("p", { className: "relative inline-flex items-center gap-2.5 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.18em] text-foreground/60 uppercase", children: [
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "badge-shimmer absolute inset-0 rounded-full" }),
                /* @__PURE__ */ jsx(Star, { size: 12, className: "relative text-accent", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "relative", children: t("hero.badge") })
              ] }) }),
              /* @__PURE__ */ jsxs("h1", { className: "text-balance text-[2.6rem] leading-[1.03] text-foreground sm:text-[3.4rem] lg:text-[4.2rem]", children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block animate-slide-in-left motion-reduce:animate-none", style: { animationDelay: "100ms", animationFillMode: "both" }, children: t("hero.title_start") }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "inline-block accent-underline italic animate-slide-in-left motion-reduce:animate-none", style: { animationDelay: "200ms", animationFillMode: "both" }, children: t("hero.title_highlight") }),
                /* @__PURE__ */ jsx("span", { className: "inline-block animate-slide-in-left motion-reduce:animate-none", style: { animationDelay: "200ms", animationFillMode: "both" }, children: "." })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] animate-slide-in-left motion-reduce:animate-none", style: { animationDelay: "300ms", animationFillMode: "both" }, children: t("hero.desc") }),
              /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-col gap-3 sm:flex-row", children: [
                /* @__PURE__ */ jsxs("a", { href: "#contact", className: cn(btnPrimary, "relative group isolate animate-slide-in-left motion-reduce:animate-none"), style: { animationDelay: "400ms", animationFillMode: "both" }, children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -z-10 rounded-full bg-primary blur-md opacity-0 animate-btn-glow motion-reduce:animate-none transition-opacity" }),
                  t("hero.cta_quote"),
                  /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: cn(arrowMove, "rtl:rotate-180") })
                ] }),
                /* @__PURE__ */ jsx("a", { href: "#realisations", className: cn(btnOutline, "animate-slide-in-left motion-reduce:animate-none"), style: { animationDelay: "500ms", animationFillMode: "both" }, children: t("hero.cta_portfolio") })
              ] }),
              /* @__PURE__ */ jsx("dl", { className: "mt-12 grid max-w-lg grid-cols-3 gap-0 border-t border-border pt-8 animate-slide-in-left motion-reduce:animate-none", style: { animationDelay: "600ms", animationFillMode: "both" }, children: statKeys.map((key, i) => {
                const label = t(`hero.stats.${key}.label`);
                const value = t(`hero.stats.${key}.value`);
                return /* @__PURE__ */ jsx(
                  StatCounter,
                  {
                    label,
                    valueStr: value,
                    delayMs: 600 + i * 150,
                    className: cn(
                      "min-w-0 pr-6 rtl:pr-0 rtl:pl-6",
                      i > 0 && "border-l border-border pl-6 rtl:border-l-0 rtl:border-r rtl:pr-6"
                    )
                  },
                  key
                );
              }) })
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "min-w-0 animate-slide-in-right motion-reduce:animate-none",
                style: { animationDelay: "200ms", animationFillMode: "both" },
                children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(HeroCrystal, {}),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[115%] rounded-[40px] border border-dashed border-primary/20 animate-rotate-ring motion-reduce:animate-none pointer-events-none" }),
                  /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated animate-float-device motion-reduce:animate-none", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: heroMockup,
                      alt: t("hero.badge"),
                      width: 1408,
                      height: 1104,
                      loading: "eager",
                      decoding: "sync",
                      fetchPriority: "high",
                      className: "w-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -left-4 hidden max-w-[14rem] rounded-2xl border border-border bg-background p-4 shadow-card sm:block rtl:left-auto rtl:-right-4 animate-badge-pulse motion-reduce:animate-none", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-display text-[1.4rem] leading-none text-foreground", children: t("hero.badge_float.title") }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: t("hero.badge_float.desc") })
                  ] })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative mt-20 overflow-hidden border-y border-border/70 py-5 lg:mt-24", children: /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "marquee-track flex w-max items-center gap-10 text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase",
              children: [...marqueeIndexes, ...marqueeIndexes].map((idx, i) => {
                const text = t(`hero.marquee.${idx}`);
                return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-10", children: [
                  text,
                  /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-accent/60" })
                ] }, `${idx}-${i}`);
              })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
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
      ` })
      ]
    }
  );
}
function useInView(options = { threshold: 0.1 }, triggerOnce = true) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.disconnect();
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, options);
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [options, triggerOnce]);
  return { ref, isInView };
}
const serviceIndexes$1 = [1, 2, 3, 4, 5];
const icons = {
  1: Monitor,
  2: Megaphone,
  3: TrendingUp,
  4: ShieldCheck,
  5: Code2
};
function ServiceCard({ num, idx }) {
  const { t } = useTranslation();
  const { ref, isInView } = useInView({ threshold: 0.15 }, true);
  const Icon = icons[num] || Monitor;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [btnHovered, setBtnHovered] = useState(false);
  const delay = idx * 100;
  const handleMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -8;
    const rotateY = (x - centerX) / centerX * 8;
    setTilt({ x: rotateX, y: rotateY });
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };
  const handleBtnMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setBtnHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setBtnPos({ x, y });
  };
  const handleBtnLeave = () => {
    setBtnHovered(false);
    setBtnPos({ x: 0, y: 0 });
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: cn(
        "group relative flex shrink-0 flex-col",
        "w-[85vw] sm:w-[50vw] lg:w-[26rem] min-h-[50vh] snap-center select-none",
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 scale-[1.02] rounded-[26px] bg-gradient-to-br from-primary/30 to-primary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden pointer-events-none" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            style: {
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            },
            className: cn(
              "relative flex h-full flex-col justify-between rounded-[24px] border border-primary/10 bg-background p-6 sm:p-8 lg:p-10 shadow-soft hover:shadow-xl",
              !isHovered && "transition-transform duration-300 ease-out hover:-translate-y-1",
              "motion-reduce:transform-none"
            ),
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 overflow-hidden rounded-[24px] pointer-events-none", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-0 bottom-0 left-0 w-3/4 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-60 animate-shimmer-sweep motion-reduce:animate-none",
                  style: { animationDelay: `${idx * 1.2}s` }
                }
              ) }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: { transitionDelay: `${delay + 150}ms` },
                  className: cn(
                    "absolute top-6 right-6 font-sans text-4xl font-bold tracking-tighter text-primary sm:top-8 sm:right-8 sm:text-5xl rtl:right-auto rtl:left-6 sm:rtl:left-8 z-10 pointer-events-none",
                    "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                    isInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                  ),
                  children: /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "animate-number-pulse block motion-reduce:animate-none opacity-15",
                      style: { animationDelay: `${idx * 0.5}s` },
                      children: [
                        "0",
                        idx + 1
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-12 sm:mt-16 flex h-full flex-col justify-center z-10 pointer-events-none sm:pointer-events-auto", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary shadow-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 motion-reduce:transform-none animate-icon-float motion-reduce:animate-none pointer-events-auto",
                    style: { animationDelay: `${idx * 0.4}s` },
                    children: /* @__PURE__ */ jsx(Icon, { size: 24 })
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "mb-4 font-sans text-2xl font-black tracking-tighter text-primary uppercase sm:text-3xl lg:text-4xl pointer-events-auto", children: t(`services.items.${num}.title`) }),
                /* @__PURE__ */ jsx("p", { className: "mb-8 text-sm leading-relaxed text-foreground/80 sm:text-base sm:leading-relaxed pointer-events-auto", children: t(`services.items.${num}.desc`) }),
                /* @__PURE__ */ jsx("div", { className: "mt-auto pt-4 pointer-events-none sm:pointer-events-auto", children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    onMouseMove: handleBtnMove,
                    onMouseLeave: handleBtnLeave,
                    style: { transform: `translate(${btnPos.x}px, ${btnPos.y}px)` },
                    className: cn(
                      "inline-flex w-full items-center justify-center rounded-full border-2 border-primary bg-transparent px-6 py-3 text-xs font-bold tracking-widest text-primary uppercase shadow-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none pointer-events-auto motion-reduce:transform-none",
                      !btnHovered && "transition-transform ease-out"
                    ),
                    onClick: (e) => {
                    },
                    children: t("services.cta")
                  }
                ) })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Services() {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 }, true);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const checkScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(Math.ceil(scrollLeft) > 0);
    setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    const cardWidth = scrollWidth / serviceIndexes$1.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), serviceIndexes$1.length - 1));
  }, []);
  useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, [checkScrollState]);
  useEffect(() => {
    if (!sectionInView) return;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;
    const timer1 = setTimeout(() => {
      if (carouselRef.current && carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollBy({ left: 80, behavior: "smooth" });
      }
    }, 3e3);
    const timer2 = setTimeout(() => {
      if (carouselRef.current && carouselRef.current.scrollLeft <= 85) {
        carouselRef.current.scrollBy({ left: -80, behavior: "smooth" });
      }
    }, 3600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [sectionInView]);
  const scrollByAmount = (direction) => {
    if (!carouselRef.current) return;
    const clientWidth = carouselRef.current.clientWidth;
    const cardWidth = clientWidth >= 1024 ? 416 : clientWidth * 0.85;
    carouselRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };
  const scrollToDot = (index) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.children[index];
    if (card) {
      const offset = card.offsetLeft - (carouselRef.current.clientWidth - card.clientWidth) / 2;
      carouselRef.current.scrollTo({ left: offset, behavior: "smooth" });
    }
  };
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStart.current = carouselRef.current.scrollLeft;
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeftStart.current - walk;
  };
  return /* @__PURE__ */ jsxs("section", { id: "services", ref: sectionRef, className: "relative flex min-h-screen flex-col bg-surface text-foreground py-24 lg:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-[10%] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px] opacity-60 animate-float pointer-events-none motion-reduce:animate-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-[5%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] opacity-60 animate-float pointer-events-none motion-reduce:animate-none", style: { animationDelay: "2s", animationDuration: "25s" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px] opacity-50 animate-float pointer-events-none motion-reduce:animate-none", style: { animationDelay: "5s", animationDuration: "30s" } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex w-full max-w-7xl flex-col items-center text-center px-4 sm:px-8 mb-10 sm:mb-16 z-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-balance text-3xl font-semibold tracking-tight text-primary sm:text-5xl", children: t("services.section_title") }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "mt-6 h-[4px] w-[80px] rounded-full bg-primary origin-center transition-transform duration-700 ease-out delay-150 motion-reduce:scale-x-100 motion-reduce:transition-none",
            sectionInView ? "scale-x-100" : "scale-x-0"
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full group z-10", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "absolute left-0 top-0 bottom-12 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none transition-opacity duration-500",
            canScrollLeft ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "absolute right-0 top-0 bottom-12 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none transition-opacity duration-500",
            canScrollRight ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollByAmount(-1),
          "aria-label": "Previous services",
          className: cn(
            "hidden sm:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-background/90 text-primary shadow-elevated backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-background disabled:pointer-events-none disabled:opacity-0",
            !canScrollLeft && "opacity-0 pointer-events-none"
          ),
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollByAmount(1),
          "aria-label": "Next services",
          className: cn(
            "hidden sm:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-background/90 text-primary shadow-elevated backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-background disabled:pointer-events-none disabled:opacity-0",
            !canScrollRight && "opacity-0 pointer-events-none"
          ),
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: carouselRef,
          onScroll: checkScrollState,
          onMouseDown: handleMouseDown,
          onMouseLeave: handleMouseLeave,
          onMouseUp: handleMouseUp,
          onMouseMove: handleMouseMove,
          className: cn(
            "flex flex-row gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 sm:px-8 max-w-7xl mx-auto scrollbar-hide",
            isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
          ),
          style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          children: serviceIndexes$1.map((num, idx) => /* @__PURE__ */ jsx(ServiceCard, { num, idx }, num))
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 mt-4", children: serviceIndexes$1.map((_, idx) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToDot(idx),
          "aria-label": `Go to slide ${idx + 1}`,
          className: cn(
            "h-2 rounded-full transition-all duration-300",
            activeIndex === idx ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"
          )
        },
        idx
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-14 w-11/12 max-w-4xl h-[2px] overflow-hidden rounded-full bg-primary/5 z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-80 animate-line-sweep motion-reduce:hidden" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/20 hidden motion-reduce:block" })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-icon-float {
          animation: icon-float 3.5s ease-in-out infinite;
        }
        @keyframes number-pulse {
          0%, 100% { opacity: 0.10; }
          50% { opacity: 0.25; }
        }
        .animate-number-pulse {
          animation: number-pulse 4s ease-in-out infinite;
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          25%, 100% { transform: translateX(250%) skewX(-20deg); }
        }
        .animate-shimmer-sweep {
          animation: shimmer-sweep 7s ease-in-out infinite;
        }
        @keyframes line-sweep {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(300%); }
        }
        .animate-line-sweep {
          animation: line-sweep 3s ease-in-out infinite;
        }
      ` })
  ] });
}
const aboutMockup = "/assets/about-mockup-B3ZvTBUP.jpg";
const aboutImage = "/assets/about-studio-NVki5Ls_.jpg";
const factIcons = [MonitorSmartphone, PenTool, Puzzle];
const factIndexes = [1, 2, 3];
const valueIndexes = [1, 2, 3, 4];
function About() {
  const { t } = useTranslation();
  const { ref: leftRef, isInView: leftInView } = useInView({ threshold: 0.15 }, true);
  const { ref: rightRef, isInView: rightInView } = useInView({ threshold: 0.15 }, true);
  return /* @__PURE__ */ jsxs("section", { id: "a-propos", className: "scroll-mt-24 bg-surface py-24 lg:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: cn(container, "grid items-center gap-16 lg:grid-cols-2"), children: [
      /* @__PURE__ */ jsxs("div", { ref: leftRef, className: "order-2 min-w-0 lg:order-1 relative", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute -top-6 -left-6 hidden h-28 w-28 rounded-3xl border border-accent/30 sm:block rtl:left-auto rtl:-right-6"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative overflow-hidden rounded-3xl border border-border bg-background shadow-elevated animate-float-device motion-reduce:animate-none",
              "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: aboutMockup,
                alt: "About webdegital",
                width: 1200,
                height: 1008,
                loading: "lazy",
                className: "w-full object-cover"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute -right-4 -bottom-8 hidden w-40 overflow-hidden rounded-2xl border border-border shadow-card sm:block rtl:right-auto rtl:-left-4",
              "transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: aboutImage,
                alt: "webdegital Team",
                width: 1200,
                height: 912,
                loading: "lazy",
                className: "h-32 w-full object-cover"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { ref: rightRef, className: "order-1 min-w-0 lg:order-2", children: [
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              "mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase",
              "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-px w-8 bg-accent/50" }),
              t("about.eyebrow")
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: cn(
              "text-balance text-[2rem] leading-[1.12] text-foreground sm:text-[2.6rem]",
              "transition-all duration-700 ease-out delay-100 motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: [
              t("about.title_start"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "italic", children: t("about.title_italic") }),
              t("about.title_end")
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "mt-6 text-base leading-relaxed text-muted-foreground",
              "transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: t("about.desc")
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "mt-4 text-base leading-relaxed text-muted-foreground",
              "transition-all duration-700 ease-out delay-300 motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: t("about.desc2")
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "mt-9 grid gap-3 sm:grid-cols-3", children: factIndexes.map((idx, i) => {
          const Icon = factIcons[i];
          return /* @__PURE__ */ jsx(
            "li",
            {
              style: { transitionDelay: `${400 + i * 100}ms` },
              className: cn(
                "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              ),
              children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft", children: [
                /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-accent", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-semibold text-foreground", children: t(`about.facts.${idx}.title`) }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-relaxed text-muted-foreground", children: t(`about.facts.${idx}.text`) })
              ] })
            },
            idx
          );
        }) }),
        /* @__PURE__ */ jsx("ul", { className: "mt-7 flex flex-wrap gap-x-6 gap-y-2", children: valueIndexes.map((idx, i) => /* @__PURE__ */ jsxs(
          "li",
          {
            style: { transitionDelay: `${700 + i * 80}ms` },
            className: cn(
              "link-underline flex items-center gap-2 text-sm font-medium text-foreground",
              "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: [
              /* @__PURE__ */ jsx(Check, { size: 15, className: "shrink-0 text-accent", "aria-hidden": "true" }),
              t(`about.values.${idx}`)
            ]
          },
          idx
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes float-device {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-device {
          animation: float-device 6s ease-in-out infinite;
        }
      ` })
  ] });
}
const pillarIcons = [Palette, Gauge, Sparkles, Smartphone];
const pillarIndexes = [1, 2, 3, 4];
const iconAnimations = ["animate-icon-palette", "animate-icon-gauge", "animate-icon-sparkles", "animate-icon-phone"];
const extraIcons = [Puzzle, LifeBuoy];
const extraIndexes = [1, 2];
function WhyUs() {
  const { t } = useTranslation();
  const { ref: leftRef, isInView: leftInView } = useInView({ threshold: 0.15 }, true);
  const { ref: rightRef, isInView: rightInView } = useInView({ threshold: 0.15 }, true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      setActiveCardIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % pillarIndexes.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-background py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: container, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { ref: leftRef, className: "min-w-0", children: [
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              "mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase",
              "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-[2px] w-8 bg-accent animate-line-pulse motion-reduce:animate-none" }),
              t("whyus.eyebrow")
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: cn(
              "text-[2rem] leading-[1.1] text-foreground sm:text-[2.7rem]",
              "transition-all duration-700 ease-out delay-100 motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: [
              t("whyus.title_start"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: t("whyus.title_highlight") }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
              "transition-all duration-700 ease-out delay-200 motion-reduce:transition-none motion-reduce:transform-none",
              leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            ),
            children: t("whyus.desc")
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1", children: extraIndexes.map((idx, i) => {
          const Icon = extraIcons[i];
          const title = t(`whyus.extras.${idx}.title`);
          const description = t(`whyus.extras.${idx}.desc`);
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              ),
              style: { transitionDelay: `${300 + i * 150}ms` },
              children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full bg-accent animate-border-pulse motion-reduce:animate-none", style: { animationDelay: `${i * 1.5}s` } }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Icon, { size: 18, className: "shrink-0 text-accent", "aria-hidden": "true" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg text-foreground", children: title })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: description })
              ] })
            },
            idx
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: rightRef, className: "grid gap-5 sm:grid-cols-2", children: pillarIndexes.map((idx, i) => {
        const Icon = pillarIcons[i];
        const title = t(`whyus.pillars.${idx}.title`);
        const description = t(`whyus.pillars.${idx}.desc`);
        const iconAnimClass = iconAnimations[i];
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
              rightInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            ),
            style: { transitionDelay: `${i * 100}ms` },
            children: /* @__PURE__ */ jsxs(
              "article",
              {
                className: cn(
                  "group relative h-full overflow-hidden rounded-3xl border-2 p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-primary hover:shadow-elevated hover:border-transparent",
                  activeCardIndex === i ? "bg-primary/5 border-primary shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.4)]" : "bg-card border-border/40 shadow-none"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "font-display text-4xl text-accent/50 transition-colors duration-400 group-hover:text-accent-soft inline-block animate-number-breathe motion-reduce:animate-none",
                      style: { animationDelay: `${i * 0.5}s` },
                      children: String(i + 1).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
                    Icon,
                    {
                      size: 22,
                      "aria-hidden": "true",
                      className: cn(
                        "text-primary transition-colors duration-400 group-hover:text-accent-soft origin-center motion-reduce:animate-none",
                        iconAnimClass
                      ),
                      style: { animationDelay: `${i * 0.7}s` }
                    }
                  ) }),
                  /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl text-foreground transition-colors duration-400 group-hover:text-primary-foreground", children: title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-400 group-hover:text-primary-foreground/70", children: description })
                ]
              }
            )
          },
          idx
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes line-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-line-pulse {
          animation: line-pulse 3s ease-in-out infinite;
        }

        @keyframes border-pulse {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 0px 0px hsl(var(--accent) / 0); }
          50% { opacity: 1; box-shadow: 0 0 10px 1px hsl(var(--accent) / 0.5); }
        }
        .animate-border-pulse {
          animation: border-pulse 4s ease-in-out infinite;
        }

        @keyframes number-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-number-breathe {
          animation: number-breathe 4s ease-in-out infinite;
        }

        @keyframes icon-palette {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        .animate-icon-palette {
          animation: icon-palette 4s ease-in-out infinite;
        }

        @keyframes icon-gauge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-icon-gauge {
          animation: icon-gauge 3.5s ease-in-out infinite;
        }

        @keyframes icon-sparkles {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(15deg); }
        }
        .animate-icon-sparkles {
          animation: icon-sparkles 4.5s ease-in-out infinite;
        }

        @keyframes icon-phone {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-8deg) translateY(-3px); }
        }
        .animate-icon-phone {
          animation: icon-phone 5s ease-in-out infinite;
        }
      ` })
  ] });
}
const impactImg = "/assets/impact-BDadREuW.png";
const gpImg = "/assets/gp-DQrX-q8v.png";
const medilabImg = "/assets/medilab-DXhl33Ao.png";
const appendImg = "/assets/append-CY25mt1B.png";
const restaurantlyImg = "/assets/restaurantly-DUPnpjuw.png";
const immobilierImg = "/assets/immobilier-yolaial-BURNyLXL.png";
const stockproImg = "/assets/stockpro-DxAH0V_k.png";
const schoolImg = "/assets/suivi-parents-ecole-C_DO23aM.png";
const variants = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom"
};
function Reveal({ children, className, delay = 0, as, variant = "up" }) {
  const Tag = as ?? "div";
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(
    Tag,
    {
      ref,
      "data-visible": visible ? "true" : "false",
      style: delay ? { transitionDelay: `${delay}ms` } : void 0,
      className: cn("reveal", variants[variant], className),
      children
    }
  );
}
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className
}) {
  return /* @__PURE__ */ jsxs(
    Reveal,
    {
      className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
      children: [
        eyebrow ? /* @__PURE__ */ jsxs(
          "p",
          {
            className: cn(
              "mb-5 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] uppercase",
              align === "center" && "justify-center",
              tone === "dark" ? "text-accent" : "text-accent-soft"
            ),
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: cn(
                    "h-px w-8",
                    tone === "dark" ? "bg-accent/50" : "bg-accent-soft/50"
                  )
                }
              ),
              eyebrow
            ]
          }
        ) : null,
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: cn(
              "text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]",
              tone === "dark" ? "text-foreground" : "text-primary-foreground"
            ),
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto max-w-2xl",
              tone === "dark" ? "text-muted-foreground" : "text-primary-foreground/70"
            ),
            children: subtitle
          }
        ) : null
      ]
    }
  );
}
const projects = [
  {
    key: "immobilier_yolaial",
    name: "Immobilier Yolaial",
    categoryKey: "real_estate",
    image: immobilierImg,
    url: "https://abdennour-tech.github.io/immoblier-yolaial/",
    alt: "Immobilier Yolaial project screenshot",
    featured: true
  },
  {
    key: "stockpro",
    name: "StockPro",
    categoryKey: "web_app",
    image: stockproImg,
    url: "https://abdennour-tech.github.io/systemegestion/",
    alt: "StockPro project screenshot"
  },
  {
    key: "suivi_parents_ecole",
    name: "Suivi Parents-École",
    categoryKey: "education",
    image: schoolImg,
    url: "https://abdennour-tech.github.io/school/",
    alt: "Suivi Parents-École project screenshot"
  },
  {
    key: "impact",
    name: "Impact",
    categoryKey: "site_vitrine",
    image: impactImg,
    url: "https://abdennour-tech.github.io/impact/",
    alt: "Impact project screenshot"
  },
  {
    key: "gp",
    name: "GP",
    categoryKey: "digital_solutions",
    image: gpImg,
    url: "https://abdennour-tech.github.io/GP/",
    alt: "GP project screenshot"
  },
  {
    key: "medilab",
    name: "MediLab",
    categoryKey: "medical",
    image: medilabImg,
    url: "https://abdennour-medilab.netlify.app/",
    alt: "MediLab project screenshot"
  },
  {
    key: "append",
    name: "Append",
    categoryKey: "site_web",
    image: appendImg,
    url: "https://abdennour-tech.github.io/Append-Project/",
    alt: "Append project screenshot"
  },
  {
    key: "restaurantly",
    name: "Restaurantly",
    categoryKey: "restaurant",
    image: restaurantlyImg,
    url: "https://abdennour-tech.github.io/Restaurantly---Modern-Restaurant-Website/",
    alt: "Restaurantly project screenshot"
  }
];
const TABS = [
  { id: "all", label: "Tous" },
  { id: "vitrine", label: "Sites Vitrine", keys: ["site_vitrine", "site_web", "restaurant", "digital_solutions"] },
  { id: "webapp", label: "Applications Web", keys: ["web_app"] },
  { id: "metier", label: "Solutions Métier", keys: ["medical", "real_estate", "education"] }
];
function ProjectCard({
  project,
  index,
  hasFeaturedFirst
}) {
  const { t } = useTranslation();
  const { ref, isInView } = useInView({ threshold: 0.1 }, true);
  const num = String(index + 1).padStart(2, "0");
  const category = t(`portfolio.categories.${project.categoryKey}`);
  const description = t(`portfolio.projects.${project.key}`);
  const isFullWidth = project.featured;
  let delay = 0;
  if (!isFullWidth) {
    if (hasFeaturedFirst) {
      delay = index % 2 === 0 ? 150 : 0;
    } else {
      delay = index % 2 === 0 ? 0 : 150;
    }
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "min-w-0 overflow-hidden rounded-3xl",
        isFullWidth ? "sm:col-span-2" : ""
      ),
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          ref,
          href: project.url,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `${t("portfolio.view_project")} ${project.name}`,
          className: cn(
            "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
            "transition-all duration-700 ease-out",
            "hover:-translate-y-1 hover:shadow-2xl hover:border-transparent hover:ring-1 hover:ring-primary/20",
            "motion-reduce:transition-none motion-reduce:transform-none",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          ),
          style: { transitionDelay: `${delay}ms` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: cn("relative overflow-hidden bg-surface-strong", isFullWidth ? "aspect-video sm:aspect-[21/9]" : "aspect-video"), children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.image,
                  alt: project.alt,
                  width: 1440,
                  height: 900,
                  loading: "lazy",
                  className: "h-full w-full object-cover object-top transition-transform duration-[800ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-hidden": "true",
                  className: cn(
                    "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent translate-y-[20%] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none",
                    isFullWidth ? "h-full" : "h-3/4"
                  )
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.16em] text-white backdrop-blur-md uppercase rtl:left-auto rtl:right-4", children: [
                /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse motion-reduce:animate-none" }),
                isFullWidth ? t("portfolio.featured_badge") : category
              ] }),
              /* @__PURE__ */ jsx("span", { className: "absolute top-4 right-4 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-background/95 text-primary opacity-0 shadow-soft transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 rtl:right-auto rtl:left-4", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 15, "aria-hidden": "true", className: "rtl:rotate-[-90deg]" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:transform-none", children: /* @__PURE__ */ jsx("p", { className: cn("line-clamp-2 text-sm leading-relaxed text-white/95", isFullWidth && "sm:text-base sm:line-clamp-3 sm:w-2/3"), children: description }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 px-6 py-4 relative z-10 bg-card", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-baseline gap-3", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: "shrink-0 font-display text-base text-muted-foreground/30 transition-colors duration-300 group-hover:text-accent/40",
                    children: num
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: cn("truncate text-foreground transition-colors duration-300", isFullWidth ? "text-xl sm:text-2xl" : "text-[1.05rem]"), children: project.name })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold tracking-wide text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110 origin-right motion-reduce:transform-none motion-reduce:transition-none", children: t("portfolio.view_short") })
            ] })
          ]
        }
      )
    }
  );
}
function Portfolio() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef(null);
  const filteredProjects = projects.filter((p) => {
    var _a;
    if (activeTab === "all") return true;
    const tabConfig = TABS.find((t2) => t2.id === activeTab);
    return (_a = tabConfig == null ? void 0 : tabConfig.keys) == null ? void 0 : _a.includes(p.categoryKey);
  });
  const hasFeaturedFirst = filteredProjects.length > 0 && !!filteredProjects[0].featured;
  const handleTabClick = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 300);
  };
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeEl = tabsRef.current.querySelector('[aria-selected="true"]');
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth
      });
    }
  }, [activeTab]);
  return /* @__PURE__ */ jsx("section", { id: "realisations", className: "scroll-mt-24 bg-surface py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid items-end gap-8 lg:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          align: "left",
          eyebrow: t("portfolio.eyebrow"),
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            t("portfolio.title_start"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: t("portfolio.title_highlight") }),
            "."
          ] }),
          subtitle: t("portfolio.subtitle")
        }
      ),
      /* @__PURE__ */ jsx(Reveal, { delay: 120, className: "hidden min-w-0 lg:block", children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: btnOutline, children: [
        t("portfolio.cta"),
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, className: cn(arrowMove, "rtl:rotate-[-90deg]") })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 200, className: "mt-12 flex w-full justify-start lg:justify-center", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref: tabsRef,
        className: "relative flex w-full max-w-full overflow-x-auto overflow-y-hidden rounded-full border border-border bg-surface-strong p-1.5 shadow-sm sm:w-fit",
        style: { scrollbarWidth: "none" },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-y-1.5 rounded-full bg-primary transition-all duration-500 ease-out motion-reduce:transition-none",
              style: {
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`
              },
              "aria-hidden": "true"
            }
          ),
          TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleTabClick(tab.id),
                "aria-selected": isActive,
                className: cn(
                  "relative z-10 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                ),
                children: tab.label
              },
              tab.id
            );
          })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "mt-12 grid gap-5 sm:grid-cols-2 lg:gap-8 transition-all duration-300 ease-out motion-reduce:transition-none",
          isTransitioning ? "opacity-0 scale-[0.98] blur-[2px]" : "opacity-100 scale-100 blur-0"
        ),
        children: [
          filteredProjects.map((project, i) => /* @__PURE__ */ jsx(
            ProjectCard,
            {
              project,
              index: i,
              hasFeaturedFirst
            },
            project.name
          )),
          filteredProjects.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full py-20 text-center text-muted-foreground", children: "Aucun projet trouvé pour cette catégorie." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center lg:hidden", children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: btnOutline, children: [
      t("portfolio.cta"),
      /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, className: cn(arrowMove, "rtl:rotate-[-90deg]") })
    ] }) })
  ] }) });
}
const testimonialKeys = [1, 2, 3, 4, 5, 6];
function StarRating({ count = 5 }) {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", "aria-label": `${count} étoiles sur 5`, children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx(
    Star,
    {
      size: 13,
      className: "fill-accent text-accent",
      "aria-hidden": "true"
    },
    i
  )) });
}
function Testimonials() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("section", { className: "scroll-mt-24 bg-background py-24 lg:py-32 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: t("testimonials.eyebrow"),
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          t("testimonials.title_start"),
          " ",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: t("testimonials.title_highlight") }),
          t("testimonials.title_end")
        ] }),
        subtitle: t("testimonials.subtitle")
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: testimonialKeys.map((key, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, variant: "zoom", className: "min-w-0", children: /* @__PURE__ */ jsxs(
      "article",
      {
        className: cn(
          "group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft",
          "card-glow",
          // Featured card (1ère) plus grande sur desktop
          i === 0 && "lg:col-span-1 border-accent/20 bg-surface"
        ),
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "absolute top-4 right-6 font-display text-7xl leading-none text-accent/10 select-none rtl:right-auto rtl:left-6",
              children: '"'
            }
          ),
          /* @__PURE__ */ jsx(StarRating, {}),
          /* @__PURE__ */ jsxs("blockquote", { className: "relative flex-1 text-sm leading-[1.85] text-muted-foreground", children: [
            '"',
            t(`testimonials.items.${key}.text`),
            '"'
          ] }),
          /* @__PURE__ */ jsxs("footer", { className: "flex items-center gap-3 border-t border-border pt-5", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground shadow-soft",
                "aria-hidden": "true",
                children: t(`testimonials.items.${key}.name`).split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase()
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-foreground", children: t(`testimonials.items.${key}.name`) }),
              /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-muted-foreground", children: t(`testimonials.items.${key}.role`) })
            ] })
          ] })
        ]
      }
    ) }, key)) })
  ] }) });
}
const stepNumbers = ["01", "02", "03", "04"];
function Process() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setActiveStep(3);
      return;
    }
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  const progress = `${(activeStep + 1) / 4 * 100}%`;
  const isResetting = activeStep === 0;
  return /* @__PURE__ */ jsx("section", { id: "processus", className: "scroll-mt-24 bg-background py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: t("process.eyebrow"),
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          t("process.title_start"),
          " ",
          /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: t("process.title_highlight") }),
          " ",
          t("process.title_end")
        ] }),
        subtitle: t("process.subtitle")
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-16 lg:mt-20", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": "true",
          className: "absolute top-0 bottom-0 left-[27px] w-px bg-border sm:left-[31px] lg:top-8 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full rtl:left-auto rtl:right-[27px] sm:rtl:right-[31px]",
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "absolute top-0 bg-accent transition-all ease-linear motion-reduce:transition-none",
                "ltr:left-0 rtl:right-0",
                "max-lg:w-full max-lg:h-[var(--progress)] lg:h-full lg:w-[var(--progress)]",
                isResetting ? "duration-0" : "duration-[2000ms]"
              ),
              style: { "--progress": progress }
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("ol", { className: "grid gap-10 lg:grid-cols-4 lg:gap-8", children: stepNumbers.map((num, i) => {
        const stepIdx = i + 1;
        const title = t(`process.steps.${stepIdx}.title`);
        const description = t(`process.steps.${stepIdx}.desc`);
        const isActive = i === activeStep;
        const isPast = i < activeStep;
        return /* @__PURE__ */ jsxs(
          Reveal,
          {
            as: "li",
            delay: i * 120,
            className: "relative min-w-0 pl-20 sm:pl-24 lg:pl-0 rtl:pl-0 rtl:pr-20 sm:rtl:pr-24 lg:rtl:pr-0",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "absolute top-0 left-0 grid h-14 w-14 place-items-center rounded-2xl border font-display text-2xl shadow-soft transition-all duration-700 ease-out sm:h-16 sm:w-16 sm:text-3xl lg:relative lg:h-16 lg:w-16 rtl:left-auto rtl:right-0",
                    isActive ? "border-accent bg-background text-accent shadow-[0_0_20px_rgba(235,94,40,0.15)] scale-110 motion-reduce:scale-100" : isPast ? "border-accent bg-accent text-accent-foreground scale-100" : "border-border bg-background text-primary scale-100 opacity-60"
                  ),
                  children: num
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: cn(
                    "mt-1 text-balance text-xl lg:mt-7 transition-all duration-500",
                    isActive ? "text-foreground font-semibold" : isPast ? "text-foreground" : "text-muted-foreground"
                  ),
                  children: title
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: cn(
                    "mt-2.5 max-w-xs text-sm leading-relaxed transition-all duration-500",
                    isActive ? "text-foreground/90" : "text-muted-foreground"
                  ),
                  children: description
                }
              ),
              i < stepNumbers.length - 1 ? /* @__PURE__ */ jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: cn(
                    "absolute top-8 left-[27px] hidden h-1.5 w-1.5 rounded-full transition-all duration-500 sm:left-[31px] lg:top-[30px] lg:left-auto lg:right-2 lg:block rtl:left-auto rtl:right-[27px] sm:rtl:right-[31px] lg:rtl:right-auto lg:rtl:left-2",
                    isPast || isActive ? "bg-accent shadow-[0_0_8px_rgba(235,94,40,0.8)] scale-110" : "bg-border scale-100 opacity-50"
                  )
                }
              ) : null
            ]
          },
          num
        );
      }) })
    ] })
  ] }) });
}
function CtaBand() {
  const { t } = useTranslation();
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 }, true);
  const baseStagger = "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none";
  const hidden = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-primary py-24 lg:py-32", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -top-1/2 left-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-soft/10 blur-[100px] animate-drift motion-reduce:animate-none"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -bottom-1/2 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-accent/10 blur-[100px] animate-drift motion-reduce:animate-none",
        style: { animationDelay: "-12s" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "hairline-grid-dark pointer-events-none absolute inset-0 opacity-60"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border border-primary-foreground/10 rtl:-right-auto rtl:-left-24"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-primary-foreground/10 rtl:-left-auto rtl:-right-20"
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref: sectionRef, className: cn(container, "relative text-center"), children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(baseStagger, isInView ? visible : hidden),
          style: { transitionDelay: "0ms" },
          children: /* @__PURE__ */ jsx("p", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-[0.7rem] font-semibold tracking-[0.2em] text-accent-soft uppercase shadow-soft animate-breath-glow motion-reduce:animate-none", children: t("ctaband.badge") })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(baseStagger, isInView ? visible : hidden),
          style: { transitionDelay: "100ms" },
          children: /* @__PURE__ */ jsxs("h2", { className: "mx-auto max-w-3xl text-[2.1rem] leading-[1.1] text-primary-foreground sm:text-5xl lg:text-[3.4rem]", children: [
            t("ctaband.title_start"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "italic text-accent-soft", children: t("ctaband.title_highlight") }),
            "."
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(baseStagger, isInView ? visible : hidden),
          style: { transitionDelay: "200ms" },
          children: /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg", children: t("ctaband.desc") })
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(baseStagger, "mt-10 flex flex-col justify-center gap-3 sm:flex-row", isInView ? visible : hidden),
          style: { transitionDelay: "300ms" },
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contact",
                className: cn(
                  btnLight,
                  "btn-shimmer-effect transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
                ),
                children: [
                  t("ctaband.cta"),
                  /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: cn(arrowMove, "rtl:rotate-180") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: CONTACT.phoneHref,
                className: cn(
                  btnGhostLight,
                  "group transition-all duration-300 hover:scale-[1.03] hover:bg-primary-foreground/10 active:scale-[0.97]"
                ),
                children: [
                  /* @__PURE__ */ jsx(Phone, { size: 16, "aria-hidden": "true", className: "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3" }),
                  CONTACT.phoneDisplay
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(baseStagger, isInView ? visible : hidden),
          style: { transitionDelay: "400ms" },
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: CONTACT.emailHref,
              className: "group mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/60 underline-offset-4 transition-colors duration-300 hover:text-primary-foreground hover:underline",
              children: [
                /* @__PURE__ */ jsx(Mail, { size: 15, "aria-hidden": "true", className: "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" }),
                CONTACT.email
              ]
            }
          )
        }
      )
    ] })
  ] });
}
const projectOptionKeys = [
  "vitrine",
  "portfolio",
  "landing",
  "entreprise",
  "refonte",
  "custom"
];
const budgetOptionKeys = [
  "small",
  "medium",
  "large",
  "xlarge",
  "discuss"
];
const fieldClass = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 disabled:opacity-60 disabled:cursor-not-allowed";
function Contact() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusState, setStatusState] = useState(null);
  const [siteUrl, setSiteUrl] = useState("https://webdegital.com");
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 }, true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSiteUrl(window.location.origin);
    }
  }, []);
  const schema = z.object({
    name: z.string().trim().min(2, t("contact.validation.name_required")).max(100),
    email: z.string().trim().email(t("contact.validation.email_invalid")).max(255),
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    projectType: z.string().trim().min(1, t("contact.validation.project_required")).max(100),
    budget: z.string().trim().max(100).optional().or(z.literal("")),
    message: z.string().trim().min(10, t("contact.validation.message_min")).max(1e3)
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      toast.error(t("contact.toast.form_error"));
      return;
    }
    setErrors({});
    setStatusState(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xjybywel", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: new FormData(form)
      });
      if (response.ok) {
        setStatusState({
          type: "success",
          message: "Votre message a été envoyé avec succès ! Nous vous répondrons rapidement."
        });
        toast.success(t("contact.toast.success"));
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatusState({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone ou email."
      });
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };
  const inputGroupClass = cn(
    "min-w-0 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none group",
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  );
  const labelClass = "mb-2 block text-sm font-medium text-foreground transition-colors duration-300 group-focus-within:text-accent";
  const bounceClass = "transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none motion-reduce:transform-none";
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "scroll-mt-24 bg-background py-24 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: t("contact.eyebrow"),
        title: t("contact.title"),
        subtitle: t("contact.subtitle")
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref: sectionRef, className: "mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit,
          noValidate: true,
          className: cn(
            "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ),
          children: [
            statusState ? /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "mb-6 flex items-start gap-3 rounded-2xl p-4 text-sm font-medium transition-all",
                  statusState.type === "success" ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border border-destructive/20 bg-destructive/10 text-destructive"
                ),
                children: [
                  statusState.type === "success" ? /* @__PURE__ */ jsx(CheckCircle2, { size: 20, className: "mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" }) : /* @__PURE__ */ jsx(AlertCircle, { size: 20, className: "mt-0.5 shrink-0 text-destructive" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { children: statusState.message }),
                    statusState.type === "error" ? /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: CONTACT.whatsappHref,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-4 hover:opacity-90",
                        children: t("contact.form.whatsapp_direct")
                      }
                    ) : null
                  ] })
                ]
              }
            ) : null,
            /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { className: inputGroupClass, style: { transitionDelay: "100ms" }, children: [
                /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: labelClass, children: [
                  t("contact.form.name"),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "name",
                    name: "name",
                    type: "text",
                    autoComplete: "name",
                    maxLength: 100,
                    disabled: isSubmitting,
                    placeholder: t("contact.form.name_ph"),
                    className: fieldClass,
                    "aria-invalid": !!errors.name
                  }
                ),
                errors.name ? /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-destructive", children: errors.name }) : null
              ] }),
              /* @__PURE__ */ jsxs("div", { className: inputGroupClass, style: { transitionDelay: "160ms" }, children: [
                /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: labelClass, children: [
                  t("contact.form.email"),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    maxLength: 255,
                    disabled: isSubmitting,
                    placeholder: t("contact.form.email_ph"),
                    className: fieldClass,
                    "aria-invalid": !!errors.email
                  }
                ),
                errors.email ? /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-destructive", children: errors.email }) : null
              ] }),
              /* @__PURE__ */ jsxs("div", { className: inputGroupClass, style: { transitionDelay: "220ms" }, children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: labelClass, children: t("contact.form.phone") }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "phone",
                    name: "phone",
                    type: "tel",
                    autoComplete: "tel",
                    maxLength: 30,
                    disabled: isSubmitting,
                    placeholder: t("contact.form.phone_ph"),
                    className: fieldClass
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: inputGroupClass, style: { transitionDelay: "280ms" }, children: [
                /* @__PURE__ */ jsxs(
                  "label",
                  {
                    htmlFor: "projectType",
                    className: labelClass,
                    children: [
                      t("contact.form.project"),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    id: "projectType",
                    name: "projectType",
                    defaultValue: "",
                    disabled: isSubmitting,
                    className: fieldClass,
                    "aria-invalid": !!errors.projectType,
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: t("contact.form.select_option") }),
                      projectOptionKeys.map((key) => {
                        const label = t(`contact.form.project_options.${key}`);
                        return /* @__PURE__ */ jsx("option", { value: label, children: label }, key);
                      })
                    ]
                  }
                ),
                errors.projectType ? /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-destructive", children: errors.projectType }) : null
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: inputGroupClass, style: { transitionDelay: "340ms" }, children: /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "budget", className: labelClass, children: [
                t("contact.form.budget"),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground font-normal", children: t("contact.form.optional") })
              ] }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "budget",
                  name: "budget",
                  defaultValue: "",
                  disabled: isSubmitting,
                  className: fieldClass,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: t("contact.form.select_budget") }),
                    budgetOptionKeys.map((key) => {
                      const label = t(`contact.form.budget_options.${key}`);
                      return /* @__PURE__ */ jsx("option", { value: label, children: label }, key);
                    })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: inputGroupClass, style: { transitionDelay: "400ms" }, children: /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: labelClass, children: [
                t("contact.form.message"),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: 5,
                  maxLength: 1e3,
                  disabled: isSubmitting,
                  placeholder: t("contact.form.message_ph"),
                  className: cn(fieldClass, "resize-y"),
                  "aria-invalid": !!errors.message
                }
              ),
              errors.message ? /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs text-destructive", children: errors.message }) : null
            ] }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "relative mt-6 inline-block w-full sm:w-auto transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                ),
                style: { transitionDelay: "460ms" },
                children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: isSubmitting,
                    className: cn(
                      btnPrimary,
                      "btn-shimmer-effect relative z-10 w-full sm:w-auto transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]",
                      "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    ),
                    children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      t("contact.form.submitting"),
                      /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" })
                    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                      t("contact.form.submit"),
                      /* @__PURE__ */ jsx(Send, { size: 16, className: "rtl:rotate-180" })
                    ] })
                  }
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "relative h-full overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-card",
            "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ),
          style: { transitionDelay: "150ms" },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl", children: t("contact.info.title") }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-primary-foreground/75", children: t("contact.info.subtitle") }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-8 space-y-5", children: [
              /* @__PURE__ */ jsx(
                "li",
                {
                  className: cn(bounceClass, isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4"),
                  style: { transitionDelay: "300ms" },
                  children: /* @__PURE__ */ jsxs("div", { className: "group flex min-w-0 items-center gap-4 transition-opacity", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 animate-float-icon",
                        style: { animationDelay: "0ms" },
                        children: /* @__PURE__ */ jsx(Phone, { size: 18, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "block text-xs tracking-wide text-primary-foreground/60 uppercase", children: t("contact.info.phone") }),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: CONTACT.phoneHref,
                          className: "block truncate text-sm font-medium hover:underline hover:opacity-90 focus:underline focus:outline-none",
                          children: CONTACT.phoneDisplay
                        }
                      )
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "li",
                {
                  className: cn(bounceClass, isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4"),
                  style: { transitionDelay: "380ms" },
                  children: /* @__PURE__ */ jsxs("div", { className: "group flex min-w-0 items-center gap-4 transition-opacity", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 animate-float-icon",
                        style: { animationDelay: "300ms" },
                        children: /* @__PURE__ */ jsx(Mail, { size: 18, "aria-hidden": "true" })
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "block text-xs tracking-wide text-primary-foreground/60 uppercase", children: t("contact.info.email") }),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: CONTACT.emailHref,
                          className: "block truncate text-sm font-medium hover:underline hover:opacity-90 focus:underline focus:outline-none",
                          children: CONTACT.email
                        }
                      )
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "li",
                {
                  className: cn(bounceClass, isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-4"),
                  style: { transitionDelay: "460ms" },
                  children: /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: CONTACT.addressHref,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "group flex min-w-0 items-start gap-4 transition-opacity hover:opacity-90",
                      children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 transition-transform duration-300 group-hover:scale-110 animate-float-icon",
                            style: { animationDelay: "600ms" },
                            children: /* @__PURE__ */ jsx(MapPin, { size: 18, "aria-hidden": "true" })
                          }
                        ),
                        /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsx("span", { className: "block text-xs tracking-wide text-primary-foreground/60 uppercase", children: t("contact.info.address") }),
                          /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium leading-relaxed group-hover:underline", children: CONTACT.address })
                        ] })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative mt-8 pt-6", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 h-px w-full animate-gradient-sweep rounded-full" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn("transition-all duration-700 ease-out motion-reduce:transition-none", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
                    style: { transitionDelay: "540ms" },
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.14em] text-primary-foreground/60 uppercase", children: t("contact.info.follow_us") }),
                      /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-3", children: [
                        { Icon: Facebook, label: "Facebook" },
                        { Icon: Instagram, label: "Instagram" },
                        { Icon: Linkedin, label: "LinkedIn" }
                      ].map(({ Icon, label }, idx) => /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: "#contact",
                          "aria-label": label,
                          className: cn(
                            "grid h-10 w-10 place-items-center rounded-md border border-primary-foreground/20",
                            "transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground hover:text-primary hover:border-transparent hover:shadow-lg",
                            "motion-reduce:transition-none motion-reduce:transform-none",
                            "animate-subtle-pulse",
                            isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                          ),
                          style: { transitionDelay: `${620 + idx * 80}ms`, animationDelay: `${idx * 200}ms` },
                          children: /* @__PURE__ */ jsx(Icon, { size: 17, "aria-hidden": "true" })
                        },
                        label
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn("flex flex-col gap-4 transition-all duration-700 ease-out motion-reduce:transition-none", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
                    style: { transitionDelay: "700ms" },
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.14em] text-primary-foreground/60 uppercase", children: "Scannez pour visiter le site" }),
                      /* @__PURE__ */ jsx("div", { className: "relative w-fit", children: /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl bg-white p-3 shadow-soft animate-breath-glow transition-transform duration-300 hover:scale-[1.03]", children: /* @__PURE__ */ jsx(QRCodeSVG, { value: siteUrl, size: 110 }) }) })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ) })
    ] })
  ] }) });
}
const pageLinks = [
  { key: "home", href: "#accueil" },
  { key: "services", href: "#services" },
  { key: "about", href: "#a-propos" },
  { key: "portfolio", href: "#realisations" },
  { key: "contact", href: "#contact" }
];
const serviceIndexes = [1, 2, 3, 4, 5];
function SiteFooter() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-surface py-16", children: /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex min-w-0 items-center gap-2.5", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "webdegital Logo", className: "h-20 w-auto shrink-0" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground", children: t("footer.desc") }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [
          { Icon: Facebook, label: "Facebook" },
          { Icon: Instagram, label: "Instagram" },
          { Icon: Linkedin, label: "LinkedIn" }
        ].map(({ Icon, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            "aria-label": label,
            className: "grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent",
            children: /* @__PURE__ */ jsx(Icon, { size: 16, "aria-hidden": "true" })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Liens du site", className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans text-sm font-semibold tracking-wide text-foreground uppercase", children: t("footer.nav_title") }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2.5", children: pageLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "text-sm text-muted-foreground transition-colors hover:text-accent",
            children: t(`nav.${link.key}`)
          }
        ) }, link.key)) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Nos services", className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans text-sm font-semibold tracking-wide text-foreground uppercase", children: t("footer.services_title") }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2.5", children: serviceIndexes.map((idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "#services",
            className: "text-sm text-muted-foreground transition-colors hover:text-accent",
            children: t(`footer.services_list.${idx}`)
          }
        ) }, idx)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans text-sm font-semibold tracking-wide text-foreground uppercase", children: t("footer.contact_title") }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: CONTACT.phoneHref,
              className: "flex min-w-0 items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 15, className: "shrink-0", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: CONTACT.phoneDisplay })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: CONTACT.emailHref,
              className: "flex min-w-0 items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent",
              children: [
                /* @__PURE__ */ jsx(Mail, { size: 15, className: "shrink-0", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: CONTACT.email })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: CONTACT.addressHref,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex min-w-0 items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-accent",
              children: [
                /* @__PURE__ */ jsx(MapPin, { size: 15, className: "mt-0.5 shrink-0", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { children: t("footer.address") })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn("mt-12 border-t border-border pt-6 text-center"), children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© 2026 webdegital. ",
      t("footer.rights")
    ] }) })
  ] }) });
}
function WhatsAppButton() {
  const { t } = useTranslation();
  const customMsg = encodeURIComponent(t("whatsapp.message"));
  const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${customMsg}`;
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-5 right-5 z-50 rtl:right-auto rtl:left-5", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute bottom-full right-0 mb-2.5 rtl:right-auto rtl:left-0 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0",
        children: /* @__PURE__ */ jsxs("div", { className: "whitespace-nowrap rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-card", children: [
          CONTACT.phoneDisplay,
          /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 right-4 h-2 w-2 rotate-45 border-r border-b border-border bg-background rtl:right-auto rtl:left-4" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: whatsappUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": t("whatsapp.tooltip"),
        className: "group flex items-center gap-3 rounded-full bg-primary text-primary-foreground border border-primary-foreground/20 px-4 py-3 shadow-card transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-accent active:scale-95 animate-gentle-pulse",
        children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-300 group-hover:rotate-6", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                width: "18",
                height: "18",
                fill: "currentColor",
                "aria-hidden": "true",
                className: "shrink-0",
                children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.475-8.417" })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-primary rtl:-right-auto rtl:-left-0.5" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap", children: t("whatsapp.label") })
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(WhyUs, {}),
      /* @__PURE__ */ jsx(Portfolio, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(CtaBand, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center" })
  ] });
}
export {
  Index as component
};
