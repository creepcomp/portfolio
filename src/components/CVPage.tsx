import type { Locale } from "@/data/content";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, User, GraduationCap, Sparkles, Box, Trophy, Link2, Globe } from "lucide-react";

// Types matching the JSON structure
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  image?: string;
  website?: string;
}

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

interface Project {
  name: string;
  description: string;
  url: string;
}

interface Award {
  name: string;
  description: string;
  url: string;
}

interface SocialLinks {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

interface CVMeta {
  id: string;
  direction: "ltr" | "rtl";
  locale: Locale;
}

interface CVData {
  meta: CVMeta;
  personal: PersonalInfo;
  education: EducationEntry[];
  skills: string[];
  projects: Project[];
  awards: Award[];
  social: SocialLinks;
}

// Dynamic import for CV data - loads from src/data/cv/*.json
async function loadCV(cvId: string): Promise<CVData> {
  try {
    const module = await import(`@/data/cv/${cvId}.json`);
    return module.default as CVData;
  } catch {
    // Fallback to full-stack-fa
    const module = await import("@/data/cv/full-stack-fa.json");
    return module.default as CVData;
  }
}

function getCVIdFromUrl(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("cv") || "full-stack-fa";
}

export function CVPage() {
  const cvId = getCVIdFromUrl();

  // We'll use a simple approach: load CV data based on cvId
  // For SSR/hydration, we'll use dynamic import
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCV(cvId).then((data) => {
      setCvData(data);
      setIsLoading(false);
    });
  }, [cvId]);

  if (isLoading || !cvData) {
    return (
      <div className="cv-container min-h-[297mm] w-[210mm] mx-auto bg-white text-black flex items-center justify-center">
        <div className="text-center text-gray-500">Loading CV...</div>
      </div>
    );
  }

  const { meta, personal, education, skills, projects, awards, social } = cvData;
  const isRTL = meta.direction === "rtl";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={cn("cv-container min-h-[297mm] w-[210mm] mx-auto bg-white text-black", isRTL ? "rtl" : "ltr")} style={{ fontFamily: "'Geist Variable', sans-serif" }} dir={meta.direction}>
      {/* Page 1: Header, About, Education, Skills */}
      <div className="cv-page p-8 md:p-10 space-y-6" style={{ minHeight: "297mm" }}>
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-3">
          <div className="flex-1 flex items-center gap-6">
            {/* Profile Image at inline-start (before name in reading direction) */}
            {personal.image && (
              <div className="shrink-0">
                <img src={personal.image} alt={personal.name} className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover border-2 border-gray-200" />
              </div>
            )}
            <div className={cn("flex-1", isRTL ? "text-right" : "text-left")}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{personal.name}</h1>
              <p className="text-lg md:text-xl text-gray-600 mt-1 font-medium mb-2">{personal.title}</p>
            </div>
            <div className="text-xs" dir="ltr">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600 shrink-0" aria-hidden="true" />
                <a href={`mailto:${personal.email}`} className="font-mono text-blue-600 hover:underline">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600 shrink-0" aria-hidden="true" />
                <a href={`tel:${personal.phone}`} className="font-mono text-blue-600 hover:underline">
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600 shrink-0" aria-hidden="true" />
                <a href={`https://www.google.com/maps/search/${personal.location}`} className="font-mono text-blue-600 hover:underline">
                  {personal.location}
                </a>
              </div>
              {personal.website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-600 shrink-0" aria-hidden="true" />
                  <a href={`https://${personal.website}`} target="_blank" rel="noopener noreferrer" className="font-mono text-blue-600 hover:underline">
                    {personal.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* About / Summary */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" aria-hidden="true" />
            {meta.locale === "fa" ? "درباره من" : "About"}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">{personal.summary}</p>
        </section>

        {/* Education */}
        <section className="space-y-4 print-avoid-break pt-3">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-gray-600" aria-hidden="true" />
            {meta.locale === "fa" ? "سوابق تحصیلی" : "Education"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="font-semibold text-gray-900 text-base">{edu.degree}</h3>
                  <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gray-600" aria-hidden="true" />
            {meta.locale === "fa" ? "مهارت‌ها" : "Skills"}
          </h2>
          <div className="flex flex-wrap gap-2" dir="auto">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-5 print-avoid-break pt-3">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
            <Box className="w-5 h-5 text-gray-600" aria-hidden="true" />
            {meta.locale === "fa" ? "پروژه‌ها" : "Projects"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="font-semibold text-gray-900 text-base">{project.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline" dir="ltr">
                    <span>{project.url}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="space-y-4 print-avoid-break pt-3">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-gray-600" aria-hidden="true" />
            {meta.locale === "fa" ? "جوایز و افتخارات" : "Awards"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <div key={index} className="space-y-1 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="font-semibold text-gray-900 text-base">{award.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
                {award.url && (
                  <a href={award.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 hover:underline" dir="ltr">
                    {award.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section className="space-y-3 pt-3 border-gray-300 print-avoid-break">
          <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
            <Link2 className="w-5 h-5 text-gray-600" aria-hidden="true" />
            {meta.locale === "fa" ? "شبکه‌های اجتماعی" : "Social"}
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500 w-20 shrink-0">{meta.locale === "fa" ? "تلفن" : "Phone"}:</span>
              <a href={`tel:${social.phone}`} className="text-blue-600 hover:underline font-mono" dir="ltr">
                {social.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500 w-20 shrink-0">{meta.locale === "fa" ? "ایمیل" : "Email"}:</span>
              <a href={`mailto:${social.email}`} className="text-blue-600 hover:underline font-mono" dir="ltr">
                {social.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500 w-20 shrink-0">{meta.locale === "fa" ? "لینکدین" : "LinkedIn"}:</span>
              <a href={`https://${social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-mono" dir="ltr">
                {social.linkedin}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-500 w-20 shrink-0">{meta.locale === "fa" ? "گیت هاب" : "Github"}:</span>
              <a href={`https://${social.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-mono" dir="ltr">
                {social.github}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Print Controls - only visible on screen */}
      <div className="no-print fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <button onClick={handlePrint} className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors shadow-lg">
          Print / Save as PDF
        </button>
      </div>

      {/* Print-specific styles injected via style tag */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @page {
            size: A4;
            margin: 0;
          }
          @media print {
            .cv-container {
              width: 210mm;
              height: 297mm;
              margin: 0;
              box-shadow: none;
              page-break-after: always;
            }
            .no-print {
              display: none !important;
            }
            .cv-page {
              page-break-inside: avoid;
              min-height: 297mm;
            }
            .cv-page:first-child {
              page-break-after: always;
            }
            a[href]::after {
              content: none !important;
            }
          }
        `,
        }}
      />
    </div>
  );
}

import { useState, useEffect } from "react";

export default CVPage;
