import type { Content } from '../data/content'
import { educationIcons } from '../data/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function EducationSection({ t }: { t: Content }) {
  return (
    <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="container-main w-full">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {t.educationItems.map((entry) => {
            const Icon = educationIcons[entry.icon]

            return (
              <Card key={entry.title} className="flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                        <Icon size={19} />
                      </div>
                    </div>
                    <Badge variant="outline" className={`text-black ${entry.tone === "current" ? "bg-blue-200" : "bg-green-200"}`}>
                      {entry.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-0">
                  <p className="text-xs text-muted-foreground font-mono mb-2" dir='ltr'>{entry.period}</p>
                  <CardTitle className="text-base font-semibold text-foreground mb-1">{entry.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-auto">{entry.field}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}