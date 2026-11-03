import { BriefcaseBusiness, Code2, Mail, MessageCircle, Phone, Send } from 'lucide-react'

export const contactChannels = [
  { name: 'GitHub', label: 'GitHub', href: 'https://github.com/creepcomp', icon: Code2 },
  { name: 'LinkedIn', label: 'LinkedIn', href: 'https://www.linkedin.com/in/creepcomp', icon: BriefcaseBusiness },
  { name: 'Email', label: 'Email', href: 'mailto:creepcomp@gmail.com', icon: Mail },
  { name: 'Telegram', label: 'Telegram · @creepcomp', href: 'https://t.me/creepcomp', icon: Send },
  { name: 'WhatsApp', label: 'WhatsApp · +98 936 196 6744', href: 'https://wa.me/989361966744', icon: MessageCircle },
  { name: 'Phone', label: 'Phone · +98 936 196 6744', href: 'tel:+989361966744', icon: Phone },
]
