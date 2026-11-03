import { useEffect } from "react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { copy, type Locale } from "../data/content";
import type { Project } from "../data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectDialog({ project, locale, onClose }: { project: Project; locale: Locale; onClose: () => void }) {
  const t = copy[locale];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("dialog-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("dialog-open");
    };
  }, [onClose]);

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="flex flex-col min-w-1/2 max-h-[90dvh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>{t.dialogTitle}</DialogTitle>
        </DialogHeader>

        <div className="overflow-auto">
          <img src={`projects/${project.image}`} alt="" loading="lazy" decoding="async" className="w-full rounded-md" />

          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-3xl font-bold">{project.title[locale]}</h2>
            <p>{project.details[locale]}</p>
          </div>

          <div className="space-y-4" aria-label={t.caseStudyTitle}>
            <h3 className="text-xs font-mono tracking-wider text-primary uppercase">{t.caseStudyTitle}</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Card >
                <CardContent className="p-4">
                  <span className="text-xs font-mono tracking-wider text-primary mb-1 block">{t.caseStudyChallenge}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy[locale].challenge}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <span className="text-xs font-mono tracking-wider text-primary mb-1 block">{t.caseStudyApproach}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy[locale].approach}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <span className="text-xs font-mono tracking-wider text-primary mb-1 block">{t.caseStudyOutcome}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.caseStudy[locale].outcome}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-2 py-4 border-t">
            <span className="text-xs font-mono tracking-wider text-muted-foreground">{t.projectStack}</span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <Button size="lg">
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} /> {t.liveDemo} <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Code2 size={17} /> {t.dialogRepo} <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
