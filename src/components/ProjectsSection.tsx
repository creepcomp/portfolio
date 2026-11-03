import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import type { Content, Locale } from "../data/content";
import { filters, projects, type Filter } from "../data/projects";
import ProjectDialog from "./ProjectDialog";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  locale: Locale;
  t: Content;
};

export default function ProjectsSection({ locale, t }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="container-main section-padding">
        {/* Filters */}
        <div className="mb-10" style={{ animationDelay: "100ms" }}>
          <ScrollArea className="w-full -mx-6 px-6">
            <div className="flex gap-3" role="group" aria-label={t.filtersLabel}>
              {filters.map((item) => (
                <Button key={item.id} variant={filter === item.id ? "default" : "outline"} size="sm" onClick={() => setFilter(item.id)} aria-pressed={filter === item.id}>
                  {t[item.key]}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full">
              <img src={`/projects/${project.image}`} alt="" loading="lazy" decoding="async" className="w-full h-auto" />

              <CardContent className="p-6 flex flex-col gap-2 flex-1">
                <span className="text-xs">{project.eyebrow[locale]}</span>
                <CardTitle className="text-xl">{project.title[locale]}</CardTitle>
                <p className="flex-1">{project.description[locale]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between px-6 py-4 border-t">
                <Button onClick={() => setActiveProject(project)} variant="link" size="sm">
                  {t.projectOpen}
                  <ArrowDownRight size={12} />
                </Button>
                <Button variant="ghost" size="sm">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    <Code2 size={12} />
                    {t.openRepo}
                    <ArrowUpRight size={10} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center" style={{ animationDelay: "200ms" }}>
          <Button variant="ghost" size="lg">
            <a href="https://github.com/creepcomp?tab=repositories" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono">
              {locale === "en" ? "View all repositories" : "مشاهده همه مخازن"}
              <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>

      {activeProject && <ProjectDialog project={activeProject} locale={locale} onClose={() => setActiveProject(null)} />}
    </>
  );
}