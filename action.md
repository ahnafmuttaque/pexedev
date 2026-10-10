# PexeDev Improvement Roadmap

This roadmap tracks the execution of codebase organization, dynamic functionality & interactivity (**Option A**), and visual & UX polish (**Option C**). Updating template data (**Option B**) is deferred for later.

---

## Phase 1: Codebase Professional Organization & Hygiene

- [x] **1.1 Fix TypeScript & Linter Errors**
  - Fix `Marquee.default || Marquee` typing mismatch in [Collaborate.tsx](file:///e:/Development/pexedev/src/pages/homepage/collaborate/Collaborate.tsx) and [SliderHero.tsx](file:///e:/Development/pexedev/src/pages/homepage/slider-hero/SliderHero.tsx) to pass `npx tsc -b`.
  - Fix missing `key` props on outer elements in [SliderHero.tsx](file:///e:/Development/pexedev/src/pages/homepage/slider-hero/SliderHero.tsx).
  - Remove unused imports (e.g., `FC` in [Projects.tsx](file:///e:/Development/pexedev/src/pages/homepage/projects/Projects.tsx)) to pass `npm run lint`.
- [x] **1.2 Clean Up File Naming & Folder Typos**
  - Rename `src/components/footer/Cooyright` -> `Copyright` and update imports.
  - Rename `src/pages/portfolio/whole-project/WholePorject.tsx` -> `WholeProject.tsx` and fix component/prop typos (`WhoeleProjectHeader`, `WholePorjectProps`).
  - Fix typo `ContactUsInputPorps` in [LetsBuildSomething.tsx](file:///e:/Development/pexedev/src/components/letsBuildSomething/LetsBuildSomething.tsx).
- [x] **1.3 Asset & Document Health**
  - Add missing `favicon.svg` in `public/` matching the agency branding logo.
  - Add `ScrollToTop` helper in [RootLayout.tsx](file:///e:/Development/pexedev/src/layouts/RootLayout.tsx) to reset scroll position on route transitions.

---

## Phase 2: Option A — Functionality & Interactivity

- [x] **2.1 Interactive Category Filtering on Projects**
  - Implement active category filtering on [Projects.tsx](file:///e:/Development/pexedev/src/pages/homepage/projects/Projects.tsx) (`All`, `Website Design`, `Mobile app`, `SaaS Platform`).
  - Add smooth filtering transitions.
- [ ] **2.2 Dynamic Case Study Modal in Portfolio**
  - Connect [Portfolio.tsx](file:///e:/Development/pexedev/src/pages/portfolio/Portfolio.tsx) to [WholeProject.tsx](file:///e:/Development/pexedev/src/pages/portfolio/whole-project/WholeProject.tsx) so clicking a project dynamically injects that project's case study data.
  - Implement backdrop click-to-close, `Escape` key listener, and lock background scrolling (`overflow: hidden` on body when open).
- [ ] **2.3 Universal Navigation & Interactive CTAs**
  - Connect hero buttons ("start your project" -> `/contact-us`, "explore projects" -> `/portfolio`).
  - Connect About Us "Learn More About Us" -> `/know-us`.
  - Connect Capability "Contact Us" -> `/contact-us`.
  - Connect FAQ button "contact us" -> `/contact-us`.
  - Connect WholeProject modal buttons ("Start your Project", "Contact Us") -> `/contact-us`.
- [ ] **2.4 Form Handling & FAQ Interaction Polish**
  - In [LetsBuildSomething.tsx](file:///e:/Development/pexedev/src/components/letsBuildSomething/LetsBuildSomething.tsx), wrap submit buttons inside `<form>`, add real budget options, support `type="email"`, and add client-side validation with a success notification.
  - In [FaqSection.tsx](file:///e:/Development/pexedev/src/components/faqSection/FaqSection.tsx), make the entire question row clickable to expand/collapse with accessible ARIA attributes.

---

## Phase 3: Option C — Visual, UX & Mobile Responsiveness

- [ ] **3.1 Mobile & Tablet Responsiveness**
  - Fix `.projects__gallery` in [index.css](file:///e:/Development/pexedev/src/index.css) (replace fixed `minmax(710px, 1fr)` with fluid responsive columns so it doesn't break on screens < 710px).
  - Fix pricing grid in [Pricing.module.css](file:///e:/Development/pexedev/src/pages/homepage/pricing/Pricing.module.css) from rigid 4 columns to responsive columns (1 col mobile, 2 col tablet, 4 col desktop).
  - Add mobile responsive navigation menu/drawer in [Navbar.tsx](file:///e:/Development/pexedev/src/components/navbar/Navbar.tsx).
  - Refine hero typography scaling and section padding for small viewports.
- [ ] **3.2 Micro-Interactions & Hover Effects**
  - Add smooth hover elevation, image zoom, and subtle shadow glows on project cards.
  - Add interactive states and smooth transitions on buttons, pricing cards, and social links.
  - Highlight current active pricing card with visual accent.
- [ ] **3.3 Interactive Media Previews**
  - Add play interaction for the video play button in About Us.

---

## Phase 4: Option B — Content & Copy Polish *(Deferred)*

- [ ] Replace placeholder project descriptions, duplicate titles, and duplicate tags.
- [ ] Write unique, informative answers for each FAQ question.
- [ ] Fix copy typos (e.g. `"countries sesrved"`).
