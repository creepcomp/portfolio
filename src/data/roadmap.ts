export const roadmapConfig = {
  en: {
    title: 'Roadmap',
    intro: 'From my first C# lessons to modern full-stack products, with a clear path toward machine learning and AI model training.',
    items: [
      { title: 'First lines of code', body: 'Started with C# at Resalat — Namone Dolati Boys\' Technical Vocational School, where programming became a real interest.', phase: 'START', icon: 'code' },
      { title: 'Networking and systems', body: 'Studied computer networks at Shamsipour and built hands-on experience with Cisco, MikroTik, Packet Tracer, GNS3, and EVE-NG.', phase: 'FOUNDATION', icon: 'network' },
      { title: 'Python opened the web', body: 'Learned Python, Django, MySQL, and SQLite, then expanded into frontend work with HTML and Bootstrap.', phase: 'FOUNDATION', icon: 'web' },
      { title: 'Modern full-stack products', body: 'Built with Django REST Framework, React, and React Native; now focused on Next.js, TypeScript, and PostgreSQL.', phase: 'CURRENT', icon: 'product' },
      { title: 'Production engineering', body: 'Strengthen testing, secure API design, Linux, CI/CD, Docker, Kubernetes, cloud deployment, and observability.', phase: 'NEXT', icon: 'systems' },
      { title: 'Data and machine learning', body: 'Learn Python data tools, the math behind ML, model evaluation, and practical workflows with scikit-learn and PyTorch.', phase: 'THEN', icon: 'data' },
      { title: 'Train AI models', body: 'Prepare data, train and fine-tune models, track experiments, and deploy useful models through production APIs.', phase: 'GOAL', icon: 'ai' },
    ],
  },
  fa: {
    title: 'مسیر من',
    intro: 'از نخستین تجربه برنامه‌نویسی با C# تا ساخت محصولات فول‌استک و رسیدن به یادگیری ماشین و آموزش مدل‌های هوش مصنوعی.',
    items: [
      { title: 'اولین خط‌های کد', body: 'با یادگیری C# در هنرستان فنی نمونه دولتی پسرانه رسالت، علاقه‌ام به برنامه‌نویسی شکل گرفت.', phase: 'شروع', icon: 'code' },
      { title: 'شبکه و سیستم‌ها', body: 'در رشته شبکه‌های کامپیوتری در دانشکده فنی شهید شمسی‌پور تحصیل کردم و با Cisco، MikroTik، Packet Tracer، GNS3 و EVE-NG تجربه عملی به دست آوردم.', phase: 'پایه', icon: 'network' },
      { title: 'ورود به دنیای وب با Python', body: 'با یادگیری Python و Django و کار با MySQL و SQLite وارد توسعه وب شدم و بعد با HTML و Bootstrap رابط کاربری ساختم.', phase: 'پایه', icon: 'web' },
      { title: 'محصولات فول‌استک مدرن', body: 'با Django REST Framework، React و React Native کار کردم و امروز بر ساخت محصول با Next.js، TypeScript و PostgreSQL تمرکز دارم.', phase: 'اکنون', icon: 'product' },
      { title: 'مهندسی نرم‌افزار در محیط عملیاتی', body: 'مهارت‌هایم را در آزمون نرم‌افزار، طراحی امن API، Linux، CI/CD، Docker، Kubernetes، استقرار ابری و پایش سامانه‌ها تقویت می‌کنم.', phase: 'گام بعد', icon: 'systems' },
      { title: 'داده و یادگیری ماشین', body: 'کار با ابزارهای داده در Python، مبانی ریاضی یادگیری ماشین، ارزیابی مدل و کتابخانه‌هایی مانند scikit-learn و PyTorch.', phase: 'بعدتر', icon: 'data' },
      { title: 'آموزش مدل‌های هوش مصنوعی', body: 'آماده‌سازی داده، آموزش و تنظیم مدل‌ها، ثبت آزمایش‌ها و ارائه مدل‌های کاربردی از طریق API در محیط واقعی.', phase: 'هدف', icon: 'ai' },
    ],
  },
} as const

export type RoadmapConfig = typeof roadmapConfig
export type RoadmapLocale = keyof typeof roadmapConfig