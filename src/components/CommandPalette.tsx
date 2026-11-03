import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Command, Download, Search } from "lucide-react";
import { copy, type Locale } from "../data/content";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type CommandItem = {
  label: string;
  href: string;
  keywords: string;
  external?: boolean;
  download?: string;
};

export default function CommandPalette({ locale, onClose }: { locale: Locale; onClose: () => void }) {
  const t = copy[locale];
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const items: CommandItem[] = [
    { label: t.navProjects, href: "#projects", keywords: "projects work portfolio پروژه‌ها" },
    { label: t.navSkills, href: "#skills", keywords: "skills toolkit مهارت‌ها" },
    { label: t.navRoadmap, href: "#roadmap", keywords: "roadmap learning مسیر" },
    { label: t.navEducation, href: "#education", keywords: "education school تحصیلات" },
    { label: t.navContact, href: "#contact", keywords: "contact email ارتباط" },
    {
      label: t.downloadCv,
      href: "/parsa-rostamzadeh-cv.pdf",
      keywords: "cv resume download رزومه",
      download: "parsa-rostamzadeh-cv.pdf",
    },
    { label: "GitHub", href: "https://github.com/creepcomp", keywords: "github code repositories", external: true },
  ];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleItems = items.filter((item) => `${item.label} ${item.keywords}`.toLocaleLowerCase().includes(normalizedQuery));

  useEffect(() => {
    inputRef.current?.focus();
    document.body.classList.add("dialog-open");

    return () => {
      document.body.classList.remove("dialog-open");
      document.querySelector<HTMLButtonElement>("[data-command-trigger]")?.focus({ preventScroll: true });
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      onClose();
    } else if (event.key === "ArrowDown" && visibleItems.length > 0) {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % visibleItems.length);
    } else if (event.key === "ArrowUp" && visibleItems.length > 0) {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + visibleItems.length) % visibleItems.length);
    } else if (event.key === "Enter" && visibleItems.length > 0) {
      event.preventDefault();
      resultRefs.current[activeIndex]?.click();
    } else if (event.key === "Tab") {
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('input:not([disabled]), button:not([disabled]), a[href]:not([tabindex="-1"])');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent ref={dialogRef} onKeyDown={handleKeyDown}>
        <DialogHeader className="pb-3 border-b border-border">
          <DialogTitle className="flex items-center gap-2 text-sm font-mono tracking-wide text-muted-foreground">
            <Command size={16} className="text-primary" />
            {t.commandTitle}
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-2 p-2 border-b border-border">
          <Search size={17} className="text-muted-foreground shrink-0 mt-1" aria-hidden="true" />
          <input
            id="command-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            placeholder={t.commandPlaceholder}
            autoComplete="off"
            spellCheck="false"
            aria-label={t.commandPlaceholder}
            className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <kbd className="px-2 py-1 text-xs text-muted-foreground bg-muted rounded border font-mono">ESC</kbd>
        </div>
        <ScrollArea className="flex-1 p-2">
          <div role="listbox" aria-label={t.commandTitle} className="space-y-1">
            {visibleItems.length ? (
              visibleItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  ref={(element) => {
                    resultRefs.current[index] = element;
                  }}
                  role="option"
                  aria-selected={activeIndex === index}
                  tabIndex={activeIndex === index ? 0 : -1}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  download={item.download}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      const id = item.href.slice(1);
                      const element = document.getElementById(id);
                      if (element) {
                        const headerHeight = 80;
                        const elementRect = element.getBoundingClientRect();
                        const absoluteTop = window.scrollY + elementRect.top;
                        const targetPosition = absoluteTop - headerHeight - (window.innerHeight - elementRect.height - headerHeight) / 2;
                        window.scrollTo({ top: Math.max(0, targetPosition), behavior: "smooth" });
                      }
                    }
                    onClose();
                  }}
                  className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors", activeIndex === index ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground")}
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-muted text-primary">{item.download ? <Download size={15} /> : <ArrowUpRight size={15} />}</span>
                  <span className="flex-1 truncate">{item.label}</span>
                  <ArrowUpRight className="command-result-arrow text-muted-foreground" size={14} />
                </a>
              ))
            ) : (
              <p className="px-3 py-6 text-center text-sm text-muted-foreground">{t.commandEmpty}</p>
            )}
          </div>
        </ScrollArea>
        <p className="px-3 py-2 text-right text-[8px] font-mono text-muted-foreground border-t border-border">{t.commandHint}</p>
      </DialogContent>
    </Dialog>
  );
}
