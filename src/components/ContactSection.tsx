import { useState } from "react";
import { ArrowUpRight, Check, Download, Mail } from "lucide-react";
import type { Content, Locale } from "../data/content";
import { contactChannels } from "../data/contact";
import { Button } from "@/components/ui/button";

const persianChannelNames: Record<string, string> = {
  GitHub: "گیت‌هاب",
  LinkedIn: "لینکدین",
  Email: "ایمیل",
  Telegram: "تلگرام",
  WhatsApp: "واتس‌اپ",
  Phone: "تماس",
};

export default function ContactSection({ t, locale }: { t: Content; locale: Locale }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("creepcomp@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:creepcomp@gmail.com";
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center w-full">
        <p className="text-lg mb-8">{t.contactBody}</p>

        {/* Actions */}
        <div className="flex flex-col justify-center sm:flex-row gap-4 mb-4">
          <Button size="lg">
            <a href="mailto:creepcomp@gmail.com" className="flex items-center gap-2">
              <Mail size={17} />
              {t.emailCta}
              <ArrowUpRight size={15} />
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={copyEmail}>
            {copied ? <Check size={16} /> : <span className="text-muted-foreground">@</span>}
            {copied ? t.copied : t.copyEmail}
          </Button>
          <Button variant="outline" size="lg">
            <a href="/parsa-rostamzadeh-cv.pdf" download="parsa-rostamzadeh-cv.pdf" className="flex items-center gap-2">
              <Download size={16} />
              {t.downloadCv}
            </a>
          </Button>
        </div>

        {/* Contact Channels */}
        <div className="flex flex-wrap justify-center gap-3">
          {contactChannels.map(({ name, href, icon: Icon }) => {
            const channelName = locale === "fa" ? (persianChannelNames[name] ?? name) : name;

            return (
              <Button key={name} variant="outline" size="sm" className="gap-2 px-3 py-2">
                <a href={href} target="_blank" className="flex items-center gap-2">
                  <Icon size={16} />
                  <span className="font-mono text-xs">{channelName}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}