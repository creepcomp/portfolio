import {
  BookOpenCheck, BrainCircuit, BriefcaseBusiness, Code2, Database,
  GraduationCap, Globe2, Network, School, Server, Sparkles
} from 'lucide-react'

export const portfolioIcons = {
  code: Code2,
  network: Network,
  web: Globe2,
  product: BriefcaseBusiness,
  systems: Server,
  data: Database,
  ai: BrainCircuit,
  realtime: Network,
  learning: Sparkles,
  google: Sparkles
} as const

export const educationIcons = {
  school: School,
  network: Network,
  bachelor: GraduationCap,
  masters: BookOpenCheck,
  phd: BrainCircuit,
} as const
