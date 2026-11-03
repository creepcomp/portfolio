import type { Content } from "../data/content";
import { portfolioIcons } from "../data/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapSection({ t }: { t: Content }) {
  return (
    <div className="container-main section-padding">
      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-6">
          {t.roadmapItems.map((item, index) => {
            const Icon = portfolioIcons[item.icon];
            const isGoal = item.icon === "ai";
            const accentColor = isGoal ? "amber-500" : "blue-500";
            const isLast = index === t.roadmapItems.length - 1;

            return (
              <div key={item.title} className={`relative`} style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex gap-4 sm:gap-6">
                  {/* Timeline marker column */}
                  <div className="relative flex justify-center shrink-0">
                    <div className="relative z-10 mt-5">
                      <span className={`grid size-10 place-items-center rounded-xl sm:size-12 bg-[${accentColor}]/20 text-[${accentColor}] border border-[${accentColor}]/30`}>
                        <Icon size={19} />
                      </span>
                    </div>
                    {!isLast && !isGoal && (
                      <div
                        className="absolute top-15 -bottom-14 left-1/2 w-px -translate-x-1/2"
                        style={{
                          background: `linear-gradient(to bottom, rgb(96 165 250 / 0.48), rgb(96 165 250 / 0.22))`,
                        }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <Card className="w-full">
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle className="text-lg font-semibold text-foreground">{item.title}</CardTitle>
                        <Badge variant="outline">{item.phase}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}