"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const sections = ["hero", "projects", "skills", "education", "roadmap", "contact"] as const;
type SectionId = (typeof sections)[number];

interface UseScrollSnapOptions {
  enabled?: boolean;
  headerHeight?: number;
}

export function useScrollSnap({ enabled = true, headerHeight = 80 }: UseScrollSnapOptions = {}) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isScrollingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const headerHeightRef = useRef(headerHeight);
  const containerRef = useRef<HTMLDivElement | null>(null);

  headerHeightRef.current = headerHeight;

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length) return;

    const sectionId = sections[index];
    const element = document.getElementById(sectionId);
    const container = containerRef.current;
    if (!element || !container) return;

    isScrollingRef.current = true;
    setIsScrolling(true);

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Calculate position relative to container - snap to start (top of section below header)
    const relativeTop = elementRect.top - containerRect.top + container.scrollTop;
    const targetPosition = relativeTop - headerHeightRef.current;

    container.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    currentIndexRef.current = index;
    setActiveSection(sectionId);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      setIsScrolling(false);
    }, 800);
  }, []);

  const scrollToNext = useCallback(() => {
    scrollToSection(currentIndexRef.current + 1);
  }, [scrollToSection]);

  const scrollToPrev = useCallback(() => {
    scrollToSection(currentIndexRef.current - 1);
  }, [scrollToSection]);

  const scrollToIndex = useCallback((index: number) => {
    scrollToSection(index);
  }, [scrollToSection]);

  // Update active section based on scroll position (more reliable with scroll snap)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActiveSection = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const viewportCenter = scrollTop + headerHeightRef.current + containerHeight / 2;

      let closestSection: SectionId = "hero";
      let closestDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const sectionCenter = rect.top - containerRect.top + container.scrollTop + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = sectionId;
        }
      });

      const newIndex = sections.indexOf(closestSection);
      if (newIndex !== -1 && newIndex !== currentIndexRef.current) {
        currentIndexRef.current = newIndex;
        setActiveSection(closestSection);
      }
    };

    // Throttle scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    updateActiveSection();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Wheel event handler for snap scrolling
  useEffect(() => {
    if (!enabled) return;

    const handleWheel = (event: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      // Don't intercept if user is scrolling inside a scrollable element
      const target = event.target as HTMLElement;
      const scrollableParent = target.closest('[data-scrollable="true"]');
      if (scrollableParent) return;

      // Don't intercept if focused on input
      if (document.activeElement?.matches("input, textarea, select")) return;

      // Don't intercept if a dialog is open
      if (document.querySelector('[role="dialog"]')) return;

      // Throttle wheel events
      if (wheelTimeoutRef.current) return;

      if (isScrollingRef.current) {
        event.preventDefault();
        return;
      }

      wheelTimeoutRef.current = setTimeout(() => {
        wheelTimeoutRef.current = null;
      }, 100);

      const delta = event.deltaY;
      if (Math.abs(delta) < 10) return;

      event.preventDefault();

      if (delta > 0) {
        scrollToNext();
      } else {
        scrollToPrev();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, [enabled, scrollToNext, scrollToPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!enabled) return;
      if (document.querySelector('[role="dialog"]')) return;
      if (document.activeElement?.matches("input, textarea, select")) return;

      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        scrollToNext();
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        scrollToPrev();
      } else if (event.key === "Home") {
        event.preventDefault();
        scrollToSection(0);
      } else if (event.key === "End") {
        event.preventDefault();
        scrollToSection(sections.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, scrollToNext, scrollToPrev, scrollToSection]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
    };
  }, []);

  return {
    activeSection,
    isScrolling,
    scrollToNext,
    scrollToPrev,
    scrollToSection: scrollToIndex,
    sections,
    containerRef,
  };
}