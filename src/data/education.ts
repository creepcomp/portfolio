export const educationConfig = {
  en: {
    title: 'Education',
    items: [
      { title: 'High School Diploma', field: 'Technical Vocational School · Resalat', period: '2020–2022', status: 'COMPLETED', icon: 'school', tone: 'blue' },
      { title: 'Associate Degree', field: 'Computer Networks & Engineering · Shamsipour', period: '2022–2024', status: 'COMPLETED', icon: 'network', tone: 'cyan' },
      { title: 'Bachelor\'s Degree', field: 'Computer Networking · Shamsipour', period: '2024–2026', status: 'COMPLETED', icon: 'bachelor', tone: 'violet' },
      { title: 'Master\'s Degree', field: 'Software Engineering', period: '2026 — Currently', status: 'CURRENTLY', icon: 'masters', tone: 'current' },
    ],
  },
  fa: {
    title: 'تحصیلات',
    items: [
      { title: 'دیپلم فنی‌وحرفه‌ای', field: 'هنرستان فنی نمونه دولتی پسرانه رسالت', period: '۱۳۹۸-۱۴۰۰', status: 'فارغ التحصیل', icon: 'school', tone: 'blue' },
      { title: 'کاردانی', field: 'مهندسی شبکه‌های کامپیوتری · دانشکده فنی شمسی‌پور', period: '۱۴۰۰-۱۴۰۲', status: 'فارغ التحصیل', icon: 'network', tone: 'cyan' },
      { title: 'کارشناسی', field: 'مهندسی شبکه‌های کامپیوتری · دانشکده فنی شمسی‌پور', period: '۱۴۰۲-۱۴۰۵', status: 'فارغ التحصیل', icon: 'bachelor', tone: 'violet' },
      { title: 'کارشناسی ارشد', field: 'مهندسی نرم‌افزار', period: '۱۴۰۵-۱۴۰۸', status: 'در حال تحصیل', icon: 'masters', tone: 'current' },
    ],
  },
} as const

export type EducationConfig = typeof educationConfig
export type EducationLocale = keyof typeof educationConfig