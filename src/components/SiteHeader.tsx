import { useState } from "react";
import { ArrowUpRight, Command, Globe2, Menu, X, Sun, Moon } from "lucide-react";
import type { Content, Locale } from "../data/content";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/lib/theme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

type NavLabelKey = "navProjects" | "navSkills" | "navEducation" | "navRoadmap" | "navContact" | "contactCta";

type NavItem = {
  id: string;
  labelKey: NavLabelKey;
  href?: string;
  external?: boolean;
};

type Props = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  onOpenCommand: () => void;
  t: Content;
  activeSection: string;
  onSectionClick: (id: string) => void;
};

const navItems: NavItem[] = [
  { id: "projects", labelKey: "navProjects" },
  { id: "skills", labelKey: "navSkills" },
  { id: "education", labelKey: "navEducation" },
  { id: "roadmap", labelKey: "navRoadmap" },
  { id: "contact", labelKey: "navContact" },
];

const mobileNavItems: NavItem[] = [...navItems, { id: "contact-mail", labelKey: "contactCta", href: "mailto:creepcomp@gmail.com", external: true }];

export default function SiteHeader({ locale, setLocale, onOpenCommand, t, activeSection, onSectionClick }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (item: NavItem, e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (item.href && item.external) {
      window.location.href = item.href;
    } else {
      onSectionClick(item.id);
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border bg-background/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-6">
          {/* Brand / Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onSectionClick("hero");
              closeMenu();
            }}
            aria-label={t.brandHome}
            className="flex items-center gap-3 shrink-0 bg-transparent border-none p-0 cursor-pointer"
          >
            <Avatar>
              <AvatarImage src="/profile.webp" alt="Profile" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <span className="hidden md:block text-left">
              <span className="font-display text-lg font-semibold tracking-tight text-foreground block">{locale === "en" ? t.heroName.full.toUpperCase() : t.heroName.full}</span>
              <span className="text-xs font-mono text-muted-foreground block">{locale === "en" ? "PROGRAMMER / TEHRAN" : "توسعه‌دهنده / تهران"}</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 h-full" aria-label={t.navLabel}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(item, e)}
                className={cn("relative text-sm font-mono transition-colors px-3 py-2 rounded-t-md hover:text-primary", activeSection === item.id ? "text-primary" : "text-muted-foreground")}
              >
                {t[item.labelKey]}
                {activeSection === item.id && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-t" />}
              </button>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            {/* Command Palette */}
            <Button variant="outline" size="sm" onClick={onOpenCommand} aria-label={t.commandOpen} title={t.commandOpen}>
              <Command size={14} />
              <kbd className="hidden sm:inline font-mono text-xs">Ctrl K</kbd>
            </Button>

            {/* Language Switch */}
            <Button variant="outline" size="sm" onClick={() => setLocale(locale === "en" ? "fa" : "en")} aria-label={t.switchLanguage} title={t.switchLanguage}>
              <Globe2 size={14} />
              <span className="font-mono text-xs">{locale === "en" ? "فا" : "EN"}</span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="outline" size="icon" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </Button>

            {/* Contact CTA - Desktop */}
            <Button variant="default" size="sm" className="hidden sm:inline-flex">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick("contact");
                  closeMenu();
                }}
                className="flex items-center gap-1"
              >
                {t.contactCta}
                <ArrowUpRight size={14} />
              </button>
            </Button>

            {/* Mobile Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="icon" aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen} className="md:hidden">
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {mobileNavItems.map((item) => (
                  <DropdownMenuItem key={item.id}>
                    <button onClick={(e) => handleNavClick(item, e)} className={cn(`flex w-full ${item.external ? "items-center justify-between" : ""}`)}>
                      {t[item.labelKey]}
                      {item.external && <ArrowUpRight size={14} />}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
