import type { Content, Locale } from "../data/content";
import { skills } from "../data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  locale: Locale;
  t: Content;
};

export default function SkillsSection({ locale, t }: Props) {
  const focusDescription = locale === "en" ? "Building modern web products with a strong foundation in the systems behind them." : "ساخت محصولات وب مدرن با تکیه بر درک عمیق از زیرساخت‌ها و سیستم‌های پشت آن‌ها.";

  return (
    <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="container-main w-full">
        {/* Focus Card */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
          {/* Focus Card */}
          <Card className="lg:sticky lg:top-24">
            <CardContent className="flex flex-col justify-center h-full p-8">
              <span className="text-xs text-muted-foreground">{t.currentFocus}</span>
              <CardTitle className="text-3xl my-2">NEXT.JS × TypeScript</CardTitle>
              <p className="mb-2">{focusDescription}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Full-stack</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Skill Groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills[locale].map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}