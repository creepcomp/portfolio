import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react";
import type { Content, Locale } from "../data/content";
import ProfileBubble from "./ProfileBubble";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection({ locale, t }: { locale: Locale, t: Content }) {
  return (
    <div className="relative flex-1 flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-100 h-100 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-75 h-75 rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Content side */}
          <div className="text-center lg:text-start flex flex-col justify-center">
            {/* Name */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-foreground mb-6">
              <span className="block">{t.heroName.first}</span>
              <span className="block">{t.heroName.last}</span>
            </h1>

            {/* Eyebrow */}
            <p className="text-sm mb-4 text-muted-foreground">{t.heroKicker}</p>

            {/* Description */}
            <p className="text-justify mb-4 max-w-xl mx-auto lg:mx-0">{t.heroBody}</p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button variant="outline" size="lg">
                <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-2">
                  {t.projectCta}
                  <ArrowDownRight size={18} />
                </a>
              </Button>
              <Button size="lg">
                <a href={`/?cv=full-stack-${locale}`} target="_blank" className="flex items-center gap-2">
                  {t.downloadCv}
                  <ArrowUpRight size={17} />
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href="https://github.com/creepcomp" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors group" aria-label="GitHub">
                <Code2 size={18} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/creepcomp" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors group" aria-label="LinkedIn">
                <BriefcaseBusiness size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:creepcomp@gmail.com" className="flex items-center gap-2 transition-colors group" aria-label="Email">
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Visual side - Profile Bubble */}
          <div className="flex flex-col gap-5 items-center justify-center lg:justify-end">
            <ProfileBubble />

            {/* Status badge */}
            <Badge variant="secondary" className="mt-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping me-1" aria-hidden="true" />
              {t.available}
              <span className="flex items-center gap-1 ml-2">
                <MapPin size={12} /> {t.location}
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}