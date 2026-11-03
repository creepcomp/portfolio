"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Content } from "@/data/content";

interface SiteFooterProps {
  t: Content;
}

export default function SiteFooter({ t }: SiteFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle keyboard navigation for the back-to-top button
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <footer className="border-t" role="contentinfo">
      <Separator className="my-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          {/* Brand link */}
          <a
            href="#top"
            aria-label={t.brandHome}
            className={cn(
              "font-display text-lg font-semibold tracking-tight text-foreground",
              "hover:text-primary transition-colors focus:outline-none focus-visible:ring-2",
              "focus-visible:ring-primary focus-visible:ring-offset-2",
              "rounded-sm px-1 -ml-1"
            )}
          >
            P<span className="text-primary">.</span>
          </a>

          {/* Footer note */}
          <span className="text-center sm:text-left">{t.footerNote}</span>

          {/* Copyright */}
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} {t.allRights}
          </span>

          {/* Back to top button - using ShadCN Button component */}
          <Button
            variant="ghost"
            size="xs"
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            aria-label={t.backToTop}
            className={cn(
              "gap-1 hover:text-primary transition-colors",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "rounded-lg px-2 py-1"
            )}
          >
            <ArrowUp size={14} aria-hidden="true" />
            <span className="font-mono hidden sm:inline">{t.backToTop}</span>
            <span className="font-mono sm:hidden" aria-hidden="true">↑</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}