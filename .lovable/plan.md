## Solid Web — agency website

A single scrolling French-language page at `/`, with sticky nav and smooth-scroll anchors to each section.

### Design system
- Palette (Navy Trust) as oklch tokens in `src/styles.css`: deep navy `#0f1b3d` as brand/primary, `#1e3a5f` and `#3b6fa0` as secondary/accent, `#e8edf3` as light surface, white background, near-black text. No gradients, no glass, no neon.
- Typography: Instrument Serif for headings, Work Sans for body — loaded via `<link>` in `src/routes/__root.tsx`, registered as `--font-display` / `--font-sans` theme tokens.
- Generous whitespace, thin hairline borders, small radius, restrained shadows. Subtle fade/slide-up on scroll via a small IntersectionObserver hook, plus gentle hover lifts on cards and buttons.

### Page sections (in order)
1. **Header** — sticky, translucent-on-scroll white bar: "Solid Web" wordmark, links (Accueil, Services, À propos, Réalisations, Processus, Contact), CTA "Demander un devis" scrolling to Contact. Mobile hamburger with a clean slide-down panel.
2. **Hero** — headline "Créons votre présence digitale.", supporting paragraph, two CTAs, and a realistic photographic/mockup visual (generated image: clean workspace / browser mockup, no AI-illustration look).
3. **Services** — "Nos solutions digitales" + subtitle, 6 cards with Lucide icons and the exact copy provided.
4. **À propos** — two paragraphs plus 5 value chips (Qualité, Simplicité, Design moderne, Expérience utilisateur, Solutions personnalisées) next to a professional image.
5. **Pourquoi choisir Solid Web ?** — 6 feature blocks with icons, on a light navy-tinted band.
6. **Réalisations** — 6 project cards with generated mockup images, name, category, short description, hover overlay.
7. **Notre processus** — 4 numbered steps (01–04) on a connected timeline.
8. **CTA band** — "Vous avez un projet digital ?" on deep navy, with "Démarrer mon projet" and "Nous contacter".
9. **Contact** — "Parlons de votre projet": form (Nom complet, Email, Téléphone, Type de projet select, Message) validated with zod; submit composes a prefilled `mailto:` to Solidweb.contact@gmail.com and shows a confirmation toast. Alongside: clickable `tel:+212638711276`, `mailto:` link, and social icon placeholders.
10. **Footer** — brand + description, page links, services links, contact details, social icons, "© 2026 Solid Web. Tous droits réservés."

### Technical
- Rewrite `src/routes/index.tsx` as the page; sections as reusable components under `src/components/sections/`, shared bits (`SectionHeading`, `Container`, `Reveal`) under `src/components/`.
- Semantic HTML (`header`/`nav`/`main`/`section`/`footer`), one H1, labelled form fields, alt text on all images, `lang="fr"`.
- SEO: French `head()` on the index route — title, description, og:title/description, og:type, twitter:card; JSON-LD `ProfessionalService` with the phone and email.
- Smooth scrolling with header-height offset; mobile-first responsive with grid + `min-w-0` patterns; verify desktop and mobile with browser screenshots before finishing.
- Images generated locally into `src/assets/` (hero, about, 6 project mockups) — realistic and understated.
- No backend; form is mailto-only.
