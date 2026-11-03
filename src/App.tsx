import { useEffect, useState } from "react";
import { copy, type Locale, type Content } from "./data/content";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { HeroSection } from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import RoadmapSection from "./components/RoadmapSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import CommandPalette from "./components/CommandPalette";
import CVPage from "./components/CVPage";
import { useScrollSnap } from "./hooks/useScrollSnap";
import { cn } from "./lib/utils";

const sectionIds = ["hero", "projects", "skills", "education", "roadmap", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

// Only string-valued keys from Content
type StringContentKey = {
  [K in keyof Content]: Content[K] extends string ? K : never
}[keyof Content];

const sectionTitleKeys: Record<SectionId, StringContentKey> = {
  hero: "heroKicker",
  projects: "projectsTitle",
  skills: "toolkitTitle",
  education: "educationTitle",
  roadmap: "roadmapTitle",
  contact: "contactTitle",
};

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const urlLocale = searchParams.get("locale") as Locale | null;
  const cvParam = searchParams.get("cv");
  const showCV = cvParam !== null; // Any cv parameter triggers CV mode
  const initialLocale = urlLocale && copy[urlLocale] ? urlLocale : "en";

  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [commandOpen, setCommandOpen] = useState(false);
  const t = copy[locale];

  // Hooks must be called unconditionally
  const { activeSection, scrollToSection, sections, containerRef } = useScrollSnap({ headerHeight: 80 });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
    document.title = t.pageTitle;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", t.pageDescription);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", t.pageTitle);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", t.ogDescription);
  }, [locale, t]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const paletteOpen = document.querySelector('[role="dialog"]') !== null;
      if (document.body.classList.contains("dialog-open") && !paletteOpen) return;

      const target = event.target as HTMLElement;
      const isEditable = target.isContentEditable || target.matches("input, textarea, select");
      const shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const slashShortcut = event.key === "/" && !isEditable;

      if (!shortcut && !slashShortcut) return;
      event.preventDefault();
      setCommandOpen((open) => !open);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // If CV mode, render just the CV page (after hooks)
  if (showCV) {
    return <CVPage />;
  }

  const handleSectionClick = (sectionId: string) => {
    const index = sections.indexOf(sectionId as SectionId);
    if (index !== -1) {
      scrollToSection(index);
    }
  };

  return (
    <div className={`min-h-screen ${locale === "fa" ? "rtl" : "ltr"}`}>
      <SiteHeader
        locale={locale}
        setLocale={setLocale}
        onOpenCommand={() => setCommandOpen(true)}
        t={t}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Section Title Bar - Fixed below header, outside scroll container (hidden for hero) */}
      {activeSection !== "hero" && (
        <div className="section-title-bar hidden md:block" aria-hidden="true">
          <div className="container-main py-3">
            <h2
              className="font-display text-xl font-semibold text-foreground"
              id="section-title"
              aria-live="polite"
            >
              {t[sectionTitleKeys[activeSection as SectionId]]}
            </h2>
          </div>
        </div>
      )}

      {/* Scroll Snap Container */}
      <main ref={containerRef} className="scroll-snap-container" id="main-content">
        {/* Hero Section */}
        <section
          id="hero"
          className="scroll-section"
          data-scrollable="false"
        >
          <HeroSection locale={locale} t={t} />
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="scroll-section tall-section"
          data-scrollable="true"
        >
          <div className="flex-1 overflow-auto scrollable-content pt-32 md:pt-28">
            <ProjectsSection locale={locale} t={t} />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-section"
          data-scrollable="false"
        >
          <SkillsSection locale={locale} t={t} />
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="scroll-section"
          data-scrollable="false"
        >
          <EducationSection t={t} />
        </section>

        {/* Roadmap Section */}
        <section
          id="roadmap"
          className="scroll-section tall-section"
          data-scrollable="true"
        >
          <div className="flex-1 overflow-auto scrollable-content pt-32 md:pt-28">
            <RoadmapSection t={t} />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-section"
          data-scrollable="false"
        >
          <ContactSection t={t} locale={locale} />
        </section>
      </main>

      {/* Scroll Indicator Dots - Middle Right */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-30"
        aria-label="Page sections"
        role="navigation"
      >
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={cn(
              "relative w-2.5 h-2.5 rounded-full transition-all duration-300",
              "bg-muted-foreground/40 hover:bg-muted-foreground/70",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              activeSection === section
                ? "bg-primary scale-125"
                : ""
            )}
            aria-label={t[sectionTitleKeys[section as SectionId]] as string}
            aria-current={activeSection === section ? "true" : "false"}
          />
        ))}
      </nav>

      <SiteFooter t={t} />
      {commandOpen && <CommandPalette locale={locale} onClose={() => setCommandOpen(false)} />}
    </div>
  );
}

export default App;