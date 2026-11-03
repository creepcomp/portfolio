import type { Locale } from "./content";

export type ProjectKind = "web" | "network" | "realtime" | "security" | "automation";

export type Filter = "all" | ProjectKind;

export const projects: Array<{
  id: string;
  title: Record<Locale, string>;
  image: string;
  eyebrow: Record<Locale, string>;
  description: Record<Locale, string>;
  details: Record<Locale, string>;
  caseStudy: Record<
    Locale,
    {
      challenge: string;
      approach: string;
      outcome: string;
    }
  >;
  category: ProjectKind;
  stack: string[];
  repo: string;
  demo: string;
}> = [
  {
    id: "eve-ng-labs",
    title: {
      en: "EVE-NG Labs",
      fa: "آزمایشگاه‌های EVE-NG",
    },
    image: "eve-ng-labs.webp",
    eyebrow: {
      en: "NETWORK ENGINEERING",
      fa: "مهندسی شبکه",
    },
    description: {
      en: "A collection of hands-on network simulation labs covering routing, switching, network architecture, and firewall technologies using EVE-NG.",
      fa: "مجموعه‌ای از آزمایشگاه‌های عملی شبیه‌سازی شبکه با تمرکز بر مسیریابی، سوئیچینگ، معماری شبکه و فناوری‌های فایروال با استفاده از EVE-NG.",
    },
    details: {
      en: "EVE-NG Labs is a collection of practical networking exercises designed to explore real-world network configurations and architectures. The project covers routing and switching concepts, VLANs, inter-VLAN routing, EtherChannel, VTP, LLDP, CDP, and network architectures such as two-tier, three-tier, and spine-leaf designs. It also includes firewall simulation scenarios involving technologies such as Cisco ASA, Cisco Firepower, Palo Alto, Check Point, and FortiGate.",
      fa: "EVE-NG Labs مجموعه‌ای از تمرین‌های عملی شبکه برای بررسی پیکربندی‌ها و معماری‌های واقعی شبکه است. این پروژه مفاهیمی مانند مسیریابی و سوئیچینگ، VLAN، مسیریابی بین VLANها، EtherChannel، VTP، LLDP و CDP را پوشش می‌دهد. همچنین معماری‌های دو لایه، سه لایه و Spine-Leaf و سناریوهای شبیه‌سازی فایروال‌هایی مانند Cisco ASA، Cisco Firepower، Palo Alto، Check Point و FortiGate را شامل می‌شود.",
    },
    caseStudy: {
      en: {
        challenge: "Understanding enterprise networking requires practical experience with network topologies, routing protocols, switching technologies, and firewall configurations.",
        approach:
          "Developed a collection of EVE-NG network simulation labs covering routing and switching, VLAN configurations, network architectures, and firewall technologies. Included topology files and problem statements to support hands-on learning and experimentation.",
        outcome: "A practical networking lab catalog providing reusable simulation scenarios for exploring enterprise network design, configuration, and troubleshooting.",
      },
      fa: {
        challenge: "درک مفاهیم شبکه‌های سازمانی به تجربه عملی در طراحی توپولوژی، پروتکل‌های مسیریابی، فناوری‌های سوئیچینگ و پیکربندی فایروال نیاز دارد.",
        approach:
          "مجموعه‌ای از آزمایشگاه‌های شبیه‌سازی شبکه با EVE-NG تهیه کردم که موضوعاتی مانند مسیریابی و سوئیچینگ، پیکربندی VLAN، معماری شبکه و فناوری‌های فایروال را پوشش می‌دهند. برای هر سناریو فایل توپولوژی و شرح مسئله در نظر گرفته شده است.",
        outcome: "مجموعه‌ای کاربردی از سناریوهای شبیه‌سازی شبکه برای تمرین طراحی، پیکربندی و عیب‌یابی زیرساخت‌های سازمانی.",
      },
    },
    category: "network",
    stack: ["EVE-NG", "Cisco IOS", "Routing & Switching", "VLAN", "OSPF", "BGP", "Network Topology", "Firewall Technologies"],
    repo: "https://github.com/creepcomp/eve-ng-labs",
    demo: "",
  },
  {
    id: "didar",
    title: { en: "Didar", fa: "دیدار" },
    image: "didar.webp",
    eyebrow: {
      en: "COMPUTER VISION / IMAGE PROCESSING",
      fa: "پردازش تصویر / بینایی ماشین",
    },
    description: {
      en: "An image processing project built around computer vision models for detecting and identifying students’ faces in images.",
      fa: "پروژه‌ای مبتنی بر پردازش تصویر و بینایی ماشین برای تشخیص چهره دانش‌آموزان با استفاده از مدل‌های هوشمند.",
    },
    details: {
      en: "Didar is a computer vision project focused on processing images and detecting students’ faces using machine learning models. It explores practical applications of image processing and facial analysis, bringing AI models into a real-world educational context.",
      fa: "دیدار پروژه‌ای در حوزه پردازش تصویر و بینایی ماشینه که روی شناسایی چهره دانش‌آموزان با استفاده از مدل‌های یادگیری ماشین تمرکز داره. توی این پروژه از مدل‌های هوشمند برای تحلیل تصاویر و تشخیص چهره استفاده شده تا قابلیت‌های بینایی ماشین در یک کاربرد واقعی بررسی بشه.",
    },
    caseStudy: {
      en: {
        challenge: "Processing images of students and reliably detecting faces requires dedicated computer vision techniques and models.",
        approach: "Developed an image processing solution using machine learning models to analyze images and detect students’ faces.",
        outcome: "A practical computer vision project demonstrating the application of image processing and face detection models in an educational environment.",
      },
      fa: {
        challenge: "تحلیل تصاویر دانش‌آموزان و تشخیص دقیق چهره‌ها به روش‌های پردازش تصویر و مدل‌های تخصصی بینایی ماشین نیاز داره.",
        approach: "راهکاری مبتنی بر پردازش تصویر و مدل‌های یادگیری ماشین توسعه دادم که تصاویر رو تحلیل می‌کنه و چهره دانش‌آموزان رو تشخیص می‌ده.",
        outcome: "پروژه‌ای عملی برای استفاده از مدل‌های بینایی ماشین و پردازش تصویر در یک محیط آموزشی.",
      },
    },
    category: "web",
    stack: ["Python", "Django", "Face Recognition"],
    repo: "https://github.com/creepcomp/didar.ir",
    demo: "",
  },
  {
    id: "stockdevice",
    title: { en: "StockDevice", fa: "استاک‌دیوایس" },
    image: "stockdevice.webp",
    eyebrow: {
      en: "E-COMMERCE / FULL-STACK",
      fa: "تجارت الکترونیکی / فول‌استک",
    },
    description: {
      en: "A full-stack e-commerce platform featuring product discovery, customer accounts, shopping carts, order management, and an administration panel.",
      fa: "پلتفرم فروشگاهی فول‌استک با قابلیت جست‌وجوی محصولات، حساب کاربری، سبد خرید، مدیریت سفارش‌ها و پنل مدیریت.",
    },
    details: {
      en: "StockDevice is a commercial e-commerce platform built with React and Django REST Framework. Its PostgreSQL-backed architecture supports product catalogs, detailed product pages, customer authentication, shopping carts, order history, and administrative management of products, categories, users, and orders.",
      fa: "استاک‌دیوایس یک پلتفرم فروشگاهی تجاری است که با React و Django REST Framework توسعه داده شده است. معماری مبتنی بر PostgreSQL آن از کاتالوگ محصولات، صفحات جزئیات کالا، احراز هویت کاربران، سبد خرید، تاریخچه سفارش‌ها و مدیریت محصولات، دسته‌بندی‌ها و کاربران پشتیبانی می‌کند.",
    },
    caseStudy: {
      en: {
        challenge: "Building a commercial online store requires a consistent connection between product management, customer accounts, shopping workflows, and order processing.",
        approach:
          "Developed a REST API using Django REST Framework and a React frontend, with PostgreSQL as the database. Implemented product browsing, customer authentication, shopping cart functionality, order history, and administration features.",
        outcome: "A full-stack commercial e-commerce application covering the core workflows of an online store, from product discovery to order management.",
      },
      fa: {
        challenge: "ساخت یک فروشگاه آنلاین تجاری به هماهنگی میان مدیریت محصولات، حساب کاربران، فرآیند خرید و پردازش سفارش‌ها نیاز دارد.",
        approach:
          "با Django REST Framework یک REST API و با React رابط کاربری توسعه دادم و PostgreSQL را به‌عنوان پایگاه داده به کار گرفتم. قابلیت‌های مشاهده محصولات، احراز هویت، سبد خرید، تاریخچه سفارش‌ها و مدیریت فروشگاه را پیاده‌سازی کردم.",
        outcome: "یک اپلیکیشن فروشگاهی فول‌استک با پوشش فرآیندهای اصلی تجارت الکترونیکی، از مشاهده محصولات تا مدیریت سفارش‌ها.",
      },
    },
    category: "web",
    stack: ["Python", "Django REST Framework", "React", "JavaScript", "PostgreSQL"],
    repo: "https://github.com/creepcomp/stockdevice.ir",
    demo: "",
  },
  {
    id: "watchroom",
    title: { en: "Watchroom", fa: "واچ‌روم" },
    image: "watchroom.webp",
    eyebrow: {
      en: "REAL-TIME / SOCIAL APPLICATION",
      fa: "بلادرنگ / اپلیکیشن اجتماعی",
    },
    description: {
      en: "A synchronized movie-watching platform that lets people watch videos together with friends in real time.",
      fa: "پلتفرمی برای تماشای هم‌زمان فیلم با دوستان و هماهنگ‌سازی تجربه تماشا در لحظه.",
    },
    details: {
      en: "Watchroom explores real-time social entertainment by bringing people together in synchronized movie-watching sessions. Its repository includes a React Native frontend and backend implementations using Go with Gin and WebSockets, alongside an earlier Python FastAPI backend. The project focuses on real-time communication and synchronized viewing experiences.",
      fa: "واچ‌روم با ایجاد جلسات تماشای هم‌زمان فیلم، تجربه سرگرمی اجتماعی و ارتباط بلادرنگ را دنبال می‌کند. این مخزن شامل فرانت‌اند React Native و پیاده‌سازی‌های بک‌اند با Go و Gin و WebSocket، در کنار نسخه قدیمی‌تر مبتنی بر Python و FastAPI است. تمرکز پروژه بر ارتباط بلادرنگ و هماهنگ‌سازی تجربه تماشای محتواست.",
    },
    caseStudy: {
      en: {
        challenge: "Watching movies remotely with friends lacks the shared experience of being in the same room, especially when playback and communication are not synchronized.",
        approach: "Designed a real-time application with a React Native frontend and WebSocket-based backend implementations, exploring Go/Gin and an earlier Python/FastAPI implementation.",
        outcome: "A social entertainment project exploring real-time communication, backend architecture, and synchronized media experiences.",
      },
      fa: {
        challenge: "تماشای فیلم از راه دور، به‌خصوص زمانی که پخش محتوا و ارتباط کاربران هماهنگ نباشد، تجربه مشترک حضور در یک اتاق را ندارد.",
        approach: "اپلیکیشنی بلادرنگ با فرانت‌اند React Native و بک‌اند مبتنی بر WebSocket طراحی کردم و معماری‌های Go/Gin و نسخه قدیمی‌تر Python/FastAPI را بررسی کردم.",
        outcome: "پروژه‌ای در حوزه سرگرمی اجتماعی برای تجربه عملی ارتباط بلادرنگ، معماری بک‌اند و هماهنگ‌سازی رسانه.",
      },
    },
    category: "realtime",
    stack: ["React Native", "Go", "Gin", "WebSocket", "Python", "FastAPI"],
    repo: "https://github.com/creepcomp/watchroom.ir",
    demo: "",
  },
  {
    id: "meetup",
    title: { en: "MeetUp", fa: "میت‌آپ" },
    image: "meetup.webp",
    eyebrow: {
      en: "WEBRTC / REAL-TIME COMMUNICATION",
      fa: "WebRTC / ارتباط بلادرنگ",
    },
    description: {
      en: "A lightweight browser-based meeting platform featuring video and audio communication, screen sharing, participant management, and real-time chat.",
      fa: "پلتفرمی سبک برای برگزاری جلسه در مرورگر با ارتباط صوتی و تصویری، اشتراک‌گذاری صفحه، مدیریت شرکت‌کنندگان و گفت‌وگوی بلادرنگ.",
    },
    details: {
      en: "MeetUp is a real-time meeting application built with Go, React, TypeScript, and WebRTC. The Go backend uses Gin and Gorilla WebSocket to manage meeting rooms, participants, and signaling. The React frontend handles media devices and peer connections, while WebRTC enables peer-to-peer communication. Users can create or join rooms without requiring an account.",
      fa: "میت‌آپ یک اپلیکیشن جلسه آنلاین بلادرنگ است که با Go، React، TypeScript و WebRTC توسعه داده شده است. بک‌اند Go با استفاده از Gin و Gorilla WebSocket اتاق‌های جلسه، شرکت‌کنندگان و سیگنالینگ را مدیریت می‌کند. فرانت‌اند React مسئول مدیریت تجهیزات رسانه‌ای و ارتباط همتا‌به‌همتاست و WebRTC ارتباط مستقیم میان کاربران را فراهم می‌کند.",
    },
    caseStudy: {
      en: {
        challenge: "Browser-based meetings require reliable real-time communication, media handling, participant coordination, and signaling without adding unnecessary setup or account requirements.",
        approach:
          "Built a Go backend using Gin and Gorilla WebSocket for room management and signaling, alongside a React and TypeScript frontend. Integrated WebRTC peer connections, microphone access, screen sharing, participant tracking, active speaker detection, and real-time chat.",
        outcome: "A lightweight real-time meeting platform bringing together frontend engineering, backend development, WebRTC, and networking concepts.",
      },
      fa: {
        challenge: "جلسات مبتنی بر مرورگر به ارتباط بلادرنگ پایدار، مدیریت رسانه، هماهنگی شرکت‌کنندگان و سیگنالینگ نیاز دارند؛ بدون آنکه راه‌اندازی پیچیده‌ای به کاربران تحمیل شود.",
        approach:
          "بک‌اندی با Go، Gin و Gorilla WebSocket برای مدیریت اتاق‌ها و سیگنالینگ توسعه دادم و آن را به فرانت‌اند React و TypeScript متصل کردم. ارتباط WebRTC، دسترسی به میکروفون، اشتراک‌گذاری صفحه، مدیریت شرکت‌کنندگان، تشخیص گوینده فعال و چت بلادرنگ را پیاده‌سازی کردم.",
        outcome: "پلتفرمی سبک برای جلسه آنلاین که مهندسی فرانت‌اند، توسعه بک‌اند، WebRTC و مفاهیم شبکه را در یک محصول کاربردی ترکیب می‌کند.",
      },
    },
    category: "realtime",
    stack: ["Go", "Gin", "Gorilla WebSocket", "React", "React 18", "TypeScript", "WebRTC", "React Router", "Webpack"],
    repo: "https://github.com/creepcomp/meetup.ir",
    demo: "",
  },
  {
    id: "cisco-sentinel",
    title: { en: "Cisco Sentinel", fa: "سیسکو سنتینل" },
    image: "cisco-sentinel.webp",
    eyebrow: {
      en: "NETWORK ENGINEERING / MONITORING",
      fa: "مهندسی شبکه / مانیتورینگ",
    },
    description: {
      en: "A real-time Cisco network monitoring application that collects SNMP metrics and visualizes CPU, memory, and network traffic.",
      fa: "اپلیکیشن مانیتورینگ بلادرنگ تجهیزات سیسکو که اطلاعات SNMP را دریافت کرده و وضعیت پردازنده، حافظه و ترافیک شبکه را نمایش می‌دهد.",
    },
    details: {
      en: "Cisco Sentinel connects to Cisco network devices through SNMP and continuously collects device performance metrics. Built with Python, Tkinter, Matplotlib, asyncio, and pysnmp, it provides a graphical monitoring interface with dynamically updated CPU, memory, and inbound/outbound traffic charts.",
      fa: "سیسکو سنتینل از طریق پروتکل SNMP به تجهیزات شبکه سیسکو متصل می‌شود و شاخص‌های عملکردی آن‌ها را به‌صورت پیوسته دریافت می‌کند. این پروژه با Python، Tkinter، Matplotlib، asyncio و pysnmp توسعه یافته و رابطی گرافیکی برای نمایش پویای پردازنده، حافظه و ترافیک ورودی و خروجی شبکه ارائه می‌دهد.",
    },
    caseStudy: {
      en: {
        challenge: "Monitoring network devices requires continuous visibility into resource utilization and traffic patterns, rather than relying on occasional manual checks.",
        approach: "Developed a Python desktop monitoring application using SNMP and pysnmp to collect Cisco device metrics. Integrated asyncio for asynchronous operations and Matplotlib for continuously updated performance graphs.",
        outcome: "A practical network observability tool that translates SNMP device metrics into real-time visual insights.",
      },
      fa: {
        challenge: "پایش تجهیزات شبکه به مشاهده مداوم میزان مصرف منابع و الگوهای ترافیک نیاز دارد و بررسی دستی و مقطعی کافی نیست.",
        approach: "اپلیکیشن مانیتورینگ دسکتاپی با Python توسعه دادم که با استفاده از SNMP و pysnmp شاخص‌های تجهیزات سیسکو را دریافت می‌کند. همچنین از asyncio برای عملیات ناهمگام و Matplotlib برای نمایش نمودارهای پویای عملکرد استفاده کردم.",
        outcome: "ابزاری کاربردی برای مشاهده وضعیت شبکه که اطلاعات SNMP تجهیزات را به داده‌های بصری و قابل تحلیل در لحظه تبدیل می‌کند.",
      },
    },
    category: "network",
    stack: ["Python", "SNMP", "pysnmp", "asyncio", "Tkinter", "Matplotlib", "Cisco"],
    repo: "https://github.com/creepcomp/cisco-sentinel",
    demo: "",
  },
  {
    id: "codeguard",
    title: { en: "CodeGuard", fa: "کدگارد" },
    image: "codeguard.webp",
    eyebrow: {
      en: "CYBERSECURITY / APPLICATION SECURITY",
      fa: "امنیت سایبری / امنیت اپلیکیشن",
    },
    description: {
      en: "A web-based source code security scanner that integrates established security analysis tools to identify vulnerabilities and potential threats.",
      fa: "اسکنر امنیتی تحت وب برای کد منبع که ابزارهای تحلیل امنیتی را با هدف شناسایی آسیب‌پذیری‌ها و تهدیدهای احتمالی یکپارچه می‌کند.",
    },
    details: {
      en: "CodeGuard is a web application designed to make source code security analysis more accessible. Its Python backend integrates tools such as Snyk and Bandit to scan codebases and identify potential vulnerabilities. A dedicated frontend provides an interface for developers and security professionals to interact with scanning capabilities and review security findings.",
      fa: "کدگارد یک اپلیکیشن تحت وب برای ساده‌تر کردن تحلیل امنیتی کد منبع است. بک‌اند Python آن ابزارهایی مانند Snyk و Bandit را برای بررسی کد و شناسایی آسیب‌پذیری‌های احتمالی یکپارچه می‌کند. فرانت‌اند اختصاصی نیز محیطی برای تعامل توسعه‌دهندگان و متخصصان امنیت با قابلیت‌های اسکن و بررسی نتایج فراهم می‌کند.",
    },
    caseStudy: {
      en: {
        challenge: "Developers need accessible ways to identify security weaknesses in source code without having to operate multiple security analysis tools independently.",
        approach: "Built a web-based scanning platform with a Python backend and dedicated frontend, integrating Snyk and Bandit to bring source code vulnerability analysis into one application.",
        outcome: "A centralized application security project demonstrating security-tool integration, backend development, and web-based vulnerability analysis workflows.",
      },
      fa: {
        challenge: "توسعه‌دهندگان به راهکاری در دسترس برای شناسایی نقاط ضعف امنیتی کد نیاز دارند، بدون آنکه مجبور باشند چند ابزار تحلیل امنیتی را به‌صورت جداگانه مدیریت کنند.",
        approach: "پلتفرم اسکن تحت وبی با بک‌اند Python و فرانت‌اند اختصاصی توسعه دادم و ابزارهای Snyk و Bandit را برای یکپارچه‌سازی فرآیند تحلیل آسیب‌پذیری کد به کار گرفتم.",
        outcome: "پروژه‌ای متمرکز در حوزه امنیت اپلیکیشن با نمایش تجربه یکپارچه‌سازی ابزارهای امنیتی، توسعه بک‌اند و تحلیل آسیب‌پذیری تحت وب.",
      },
    },
    category: "security",
    stack: ["Python", "FastAPI", "Snyk", "Bandit", "Uvicorn", "JavaScript", "Web Security"],
    repo: "https://github.com/creepcomp/codeguard.ir",
    demo: "",
  },
  {
    id: "shell-commander",
    title: { en: "Shell Commander", fa: "شل کامندر" },
    image: "shell-commander.webp",
    eyebrow: {
      en: "SYSTEMS PROGRAMMING / REMOTE ADMINISTRATION",
      fa: "برنامه‌نویسی سیستمی / مدیریت از راه دور",
    },
    description: {
      en: "A Rust-based TCP client-server application for sending commands to remote machines and receiving execution results.",
      fa: "اپلیکیشن کلاینت-سرور مبتنی بر Rust و TCP برای ارسال فرمان به سیستم‌های راه دور و دریافت خروجی اجرای آن‌ها.",
    },
    details: {
      en: "Shell Commander explores low-level network communication through a TCP client-server architecture written in Rust. The server listens for incoming client connections, sends commands for execution, and receives the resulting output. The client supports Windows and Unix-like operating systems, making the project a practical exploration of systems programming and remote machine administration.",
      fa: "شل کامندر ارتباطات سطح پایین شبکه را با استفاده از معماری کلاینت-سرور مبتنی بر TCP و زبان Rust بررسی می‌کند. سرور اتصال کلاینت‌ها را دریافت کرده، فرمان‌ها را برای اجرا ارسال می‌کند و خروجی آن‌ها را بازمی‌گرداند. کلاینت از سیستم‌عامل‌های Windows و خانواده Unix پشتیبانی می‌کند.",
    },
    caseStudy: {
      en: {
        challenge: "Executing commands and collecting results from remote machines requires a communication channel between independently running server and client processes.",
        approach: "Implemented a TCP server-client architecture in Rust. The server accepts incoming connections, sends execution requests, and receives command output from clients running on Windows or Unix-like systems.",
        outcome: "A systems programming project demonstrating TCP networking, client-server communication, Rust development, and remote administration concepts.",
      },
      fa: {
        challenge: "اجرای فرمان و دریافت نتایج از سیستم‌های راه دور به یک کانال ارتباطی میان فرآیندهای مستقل سرور و کلاینت نیاز دارد.",
        approach: "معماری کلاینت-سرور مبتنی بر TCP را با Rust پیاده‌سازی کردم. سرور اتصال‌های ورودی را می‌پذیرد، درخواست اجرای فرمان را ارسال می‌کند و خروجی را از کلاینت‌های مبتنی بر Windows یا Unix دریافت می‌کند.",
        outcome: "پروژه‌ای در حوزه برنامه‌نویسی سیستمی با تمرکز بر شبکه TCP، ارتباط کلاینت-سرور، توسعه با Rust و مفاهیم مدیریت سیستم از راه دور.",
      },
    },
    category: "network",
    stack: ["Rust", "TCP", "Networking", "Client-Server Architecture", "Systems Programming"],
    repo: "https://github.com/creepcomp/shell-commander",
    demo: "",
  },
  {
    id: "web-scraping-tool",
    title: { en: "Web Scraping Tool", fa: "ابزار وب اسکرپینگ" },
    image: "web-scraping-tool.webp",
    eyebrow: {
      en: "PYTHON / DATA EXTRACTION",
      fa: "پایتون / استخراج داده",
    },
    description: {
      en: "A configurable Python scraping utility that extracts structured information from web pages using CSS selectors and regular expressions, then exports it to CSV.",
      fa: "ابزار استخراج داده با Python که با استفاده از CSS Selector و عبارات منظم اطلاعات صفحات وب را استخراج و در قالب CSV ذخیره می‌کند.",
    },
    details: {
      en: "This project provides a configuration-driven approach to web data extraction. Users can define target URLs, extraction fields, and output destinations through a JSON configuration file. The scraper supports CSS selectors and regular expressions, handles request failures, applies delays between requests, and exports extracted information into structured CSV files.",
      fa: "این پروژه رویکردی مبتنی بر پیکربندی برای استخراج داده از وب ارائه می‌دهد. کاربران می‌توانند آدرس صفحات، فیلدهای موردنظر و مسیر خروجی را از طریق فایل JSON تعریف کنند. ابزار از CSS Selector و عبارات منظم پشتیبانی می‌کند، خطاهای درخواست را مدیریت می‌کند، میان درخواست‌ها تأخیر قرار می‌دهد و اطلاعات استخراج‌شده را در فایل‌های CSV ذخیره می‌کند.",
    },
    caseStudy: {
      en: {
        challenge: "Collecting structured information from web pages can become repetitive when extraction rules and output formats need to be customized for different targets.",
        approach: "Developed a configurable Python scraper using Requests and BeautifulSoup. Added JSON-based configuration, CSS selector and regular expression extraction, request error handling, configurable delays, and CSV export.",
        outcome: "A reusable data extraction utility that turns configurable web scraping tasks into structured CSV datasets.",
      },
      fa: {
        challenge: "استخراج اطلاعات ساختاریافته از صفحات وب زمانی که قوانین استخراج و قالب خروجی برای هر هدف متفاوت باشند، به کاری تکراری تبدیل می‌شود.",
        approach: "ابزار استخراج داده‌ای با Python، Requests و BeautifulSoup توسعه دادم. پیکربندی JSON، استخراج با CSS Selector و عبارات منظم، مدیریت خطاهای درخواست، تأخیر قابل تنظیم و خروجی CSV را پیاده‌سازی کردم.",
        outcome: "ابزاری قابل استفاده مجدد برای تبدیل فرآیندهای استخراج داده از وب به مجموعه‌داده‌های ساختاریافته در قالب CSV.",
      },
    },
    category: "automation",
    stack: ["Python", "Requests", "BeautifulSoup", "CSS Selectors", "Regular Expressions", "JSON", "CSV"],
    repo: "https://github.com/creepcomp/web-scraping-tool",
    demo: "",
  },
  {
    id: "satra",
    title: {
      en: "Satra",
      fa: "سامانه مدیریت و ارزیابی ساترا",
    },
    image: "satra.webp",
    eyebrow: {
      en: "ENTERPRISE SOFTWARE / WORKFLOW MANAGEMENT",
      fa: "توسعه نرم‌افزار سازمانی / مدیریت فرآیند",
    },
    description: {
      en: "An internal workflow management system for handling media submissions, coordinating expert evaluations, managing review committees, and tracking content assessment decisions.",
      fa: "سامانه‌ای برای مدیریت درخواست‌های آثار رسانه‌ای، ارجاع به ارزیاب‌ها، مدیریت جلسات کارگروه و شورا و پیگیری کامل روند بررسی و ارزیابی محتوا.",
    },
    details: {
      en: "Developed for SATRA in Iran, this platform manages the internal review process for media productions. It covers the complete workflow, from registering a new submission and managing its documents to assigning evaluators, collecting structured content assessments, coordinating working groups and council meetings, and tracking final decisions. The system includes role-based access through Django authentication and user groups, configurable content evaluation indicators, Persian-language interfaces, Jalali date support, and a REST API connecting the backend to its React-based frontend.",
      fa: "این پروژه رو برای مجموعه ساترا توسعه دادم تا فرآیند بررسی و ارزیابی آثار رسانه‌ای به‌صورت یکپارچه مدیریت بشه. از زمان ثبت یک اثر و بارگذاری مستنداتش تا ارجاع به ارزیاب‌ها، ثبت نظر کارشناسان، برگزاری جلسات کارگروه و شورا و پیگیری نتیجه نهایی، همه مراحل داخل یک سامانه انجام می‌شن. امکان تعریف شاخص‌ها و زیرشاخص‌های ارزیابی محتوا، مدیریت کاربران و سطح دسترسی، ثبت گزارش جلسات و پشتیبانی از تاریخ شمسی هم در نظر گرفته شده. بک‌اند پروژه با Django و یک REST API توسعه داده شده و رابط کاربری اون با React پیاده‌سازی شده.",
    },
    caseStudy: {
      en: {
        challenge:
          "Managing media submissions and their review process across multiple evaluators, working groups, and committees requires a centralized system. Without one, tracking documents, evaluation results, meeting records, and final decisions becomes difficult.",
        approach:
          "Designed and developed a Django-based application with Django REST Framework and PostgreSQL. Implemented submission management, document uploads, evaluator assignments, configurable content assessment indicators, evaluation forms, working group and council coordination, attendance reports, and user/group management. Built a React and JavaScript frontend with a Persian RTL interface, Bootstrap, AJAX, and Jalali calendar support.",
        outcome: "A centralized internal platform that brings media submission management, expert evaluation, committee coordination, and decision tracking into one structured workflow.",
      },
      fa: {
        challenge: "مدیریت آثار رسانه‌ای و روند بررسی اون‌ها بین چند ارزیاب، کارگروه و شورا کار ساده‌ای نیست. وقتی اطلاعات، مستندات، نظر کارشناسان و نتیجه جلسات در بخش‌های مختلف پراکنده باشن، پیگیری کل فرآیند هم سخت و زمان‌بر می‌شه.",
        approach:
          "یک سامانه تحت وب با Django و Django REST Framework توسعه دادم و PostgreSQL رو به‌عنوان پایگاه داده به کار گرفتم. بخش‌های ثبت و مدیریت آثار، بارگذاری مستندات، ارجاع به ارزیاب‌ها، فرم‌های ارزیابی، شاخص‌های محتوایی، مدیریت جلسات کارگروه و شورا، گزارش حضور اعضا و مدیریت کاربران رو پیاده‌سازی کردم. رابط کاربری هم با React و JavaScript ساخته شده و از زبان فارسی، چیدمان راست‌چین و تقویم شمسی پشتیبانی می‌کنه.",
        outcome: "یک سامانه یکپارچه برای مدیریت کل فرآیند بررسی آثار رسانه‌ای که ثبت درخواست، ارزیابی کارشناسی، جلسات و پیگیری تصمیم‌ها رو در یک محیط متمرکز کنار هم قرار می‌ده.",
      },
    },
    category: "web",
    stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React", "JavaScript", "JSX", "Bootstrap RTL", "jQuery", "DataTables", "Gunicorn"],
    repo: "https://github.com/creepcomp/satra.ir",
    demo: "",
  },
];

export const filters: Array<{
  id: Filter;
  key: "filterAll" | "filterWeb" | "filterRealtime" | "filterNetwork" | "filterSecurity" | "filterAutomation";
}> = [
  { id: "all", key: "filterAll" },
  { id: "web", key: "filterWeb" },
  { id: "network", key: "filterNetwork" },
  { id: "realtime", key: "filterRealtime" },
  { id: "security", key: "filterSecurity" },
  { id: "automation", key: "filterAutomation" },
];

export type Project = (typeof projects)[number];
