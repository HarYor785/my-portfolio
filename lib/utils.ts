import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projects = [
  {
    id: 1,
    title: "Social Media Web Application",
    slug: "social-media-web-app",
    category: "Full Stack / Real-Time Systems",
    reporUrl: "",
    liveUrl: "https://connectme-socialmedia.netlify.app",
    overview:
      "This project was designed and engineered as a production-grade social media platform focused on real-time user engagement, scalable content delivery, and resilient backend architecture. The goal was to simulate and implement the type of distributed system patterns used in modern large-scale social applications — where thousands of users can interact concurrently without performance degradation.",
      overviewTwo: "The platform enables users to create rich media posts, engage through comments and reactions, follow other users, and communicate instantly via real-time messaging. Special emphasis was placed on feed performance, WebSocket connection management, database query optimization, and infrastructure readiness for horizontal scaling. Beyond feature implementation, the system was architected with maintainability and extensibility in mind through modular backend design, caching strategies, and structured CI/CD deployment workflows.",

    projectChallenges: [
      "Real-time synchronization of posts, notifications, and chat messages across users.",
      "Efficient feed generation under high read/write database load.",
      "Scalable WebSocket connection handling.",
      "Secure authentication and session lifecycle management.",
      "Preventing performance degradation as user base grows.",
    ],

    solutions: [
      "Implemented Socket.io with room-based event architecture for scalable real-time communication.",
      "Designed modular REST API architecture using controller-service pattern.",
      "Optimized MongoDB queries with indexing and aggregation pipelines.",
      "Implemented JWT authentication",
      "Added rate limiting, security headers, and validation middleware.",
    ],

    keyFeatures: [
      "User authentication & profile management",
      "Post creation (text and media)",
      "Likes, comments & threaded replies",
      "Real-time notifications",
      "Private real-time messaging",
      "Follow / unfollow system",
      "Infinite scrolling feed",
      "Search functionality",
      "Online presence tracking",
    ],

    architectureHighlights: [
      "Event-driven WebSocket communication layer",
      "RESTful API with centralized error handling",
      "Indexed MongoDB schema optimized for feed queries",
      "Cursor-based pagination for scalable content loading",
      "Modular backend separation of concerns",
    ],

    performanceOptimizations: [
      "Reduced API latency with indexed queries and selective field projection",
      "Optimized feed query performance with indexing",
      "Lazy loading for media-heavy content",
      "Optimized socket memory management",
    ],

    securityMeasures: [
      "JWT-based stateless authentication",
      "Secure password hashing using bcrypt",
      "Role-based access control (RBAC)",
      "XSS and CSRF mitigation",
      "Rate limiting & secure HTTP headers",
    ],

    techStack: {
      frontend: ["React.js", "Redux Toolkit", "TailwindCSS", "React Query", "Axios"],
      backend: ["Node.js", "Express.js", "Socket.io", "MongoDB"],
      devopsAndDeployment: [
        "Docker",
        "Nginx",
        "GitHub Actions",
        "Ubuntu Server",
        "PM2",
        "MongoDB Atlas",
        "SSL/TLS",
      ],
    },

    impact: [
      "Designed system capable of supporting thousands of concurrent connections.",
      "Improved real-time update latency through event-driven architecture.",
      "Reduced database load using caching strategies.",
      "Built maintainable modular codebase structured for scalability.",
    ],
    images: [
      "/social1.png",
      "/social2.png",
    ],
  },
  {
    id: 2,
    title: "Thrift Contribution Platform (Mobile App)",
    slug: "thrift-contribution-platform",
    category: "Fintech / Distributed Systems / Mobile & Web",
    liveUrl: "https://flexpurse.vercel.app/",
    repoUrl: "",
    overview:
      "A full-stack fintech contribution platform built to digitize traditional thrift savings systems. The application allows users to create contribution groups, invite family and friends, automate recurring payments, manage rotational payouts, and receive intelligent reminders.",
    overviewTwo: "The system was architected to handle financial transaction integrity, scheduled background processing, and scalable real-time notifications across both mobile (iOS & Android) and web environments. Special focus was placed on payout reliability, concurrency control, job queue processing, and payment lifecycle management. The platform integrates background workers, caching layers, and role-based permissions to ensure secure and predictable financial operations at scale.",

    projectChallenges: [
      "Ensuring accurate rotational payout logic without financial inconsistencies.",
      "Handling concurrent group contributions without race conditions.",
      "Automating recurring reminders and scheduled payouts reliably.",
      "Maintaining transactional integrity across distributed services.",
      "Managing real-time group activity updates across mobile and web clients.",
      "Designing a scalable notification and reminder infrastructure.",
    ],

    solutions: [
      "Implemented atomic database transactions to prevent double payouts and race conditions.",
      "Integrated BullMQ with Redis to handle scheduled jobs for reminders and payout automation.",
      "Designed queue-based background workers to process contribution cycles reliably.",
      "Used Prisma ORM with structured relational modeling for group, member, and payout relationships.",
      "Implemented role-based group permissions (admin, member, treasurer roles).",
      "Built event-driven notification system for contribution updates and payout confirmations.",
      "Designed fault-tolerant job retry strategies to ensure financial task completion.",
    ],

    keyFeatures: [
      "User onboarding & secure authentication",
      "Group creation & invitation system",
      "Member role assignment & permissions",
      "Recurring contribution tracking",
      "Automated rotational payout logic",
      "Contribution history & financial transparency logs",
      "Push notifications & reminder scheduling",
      "Admin monitoring tools",
      "Mobile app for iOS & Android",
      "Public website landing page",
    ],

    architectureHighlights: [
      "Queue-based background job processing architecture",
      "Redis-backed task scheduling system",
      "Atomic financial transaction handling",
      "Modular NestJS backend with domain-based architecture",
      "Prisma relational schema modeling",
      "Separation of API layer and worker services",
      "Mobile and web client separation with shared backend",
      "Centralized global state management using Redux Toolkit.",
      "API layer abstraction and caching via RTK Query.",
    ],

    performanceOptimizations: [
      "Used Redis caching to reduce repeated database reads for group summaries.",
      "Optimized Prisma queries with selective field fetching.",
      "Implemented indexed relational keys for faster contribution lookups.",
      "Background task batching to reduce worker overload.",
      "Optimized mobile bundle size for improved app performance.",
    ],

    securityMeasures: [
      "JWT authentication with refresh token rotation.",
      "Encrypted sensitive financial payloads.",
      "Server-side validation for payout logic.",
      "Role-based authorization per group.",
      "Input validation & request schema enforcement.",
      "Secure environment variable management.",
    ],

    techStack: {
      frontendWeb: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],

      mobile: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Notifications",
        "Redux Toolkit (RTK)",
        "RTK Query",
        "Secure Storage",
      ],

      backend: [
        "NestJS",
        "Prisma ORM",
        "PostgreSQL",
        "BullMQ",
        "Redis",
        "JWT",
        "Paystack (Payment Processing)",
        "VTPass (Utility & Bill Payment API)",
        "Class Validator",
        "Node.js",
      ],

      devopsAndDeployment: [
        "Docker",
        "Docker Compose",
        "Ubuntu Server",
        "Nginx Reverse Proxy",
        "GitHub Actions CI/CD",
        "PM2",
        "Redis Cloud",
        "Environment-based deployment configs",
        "SSL/TLS configuration",
      ],
    },

    impact: [
      "Digitized traditional thrift savings system into a secure fintech platform.",
      "Reduced manual payout errors through automated background processing.",
      "Improved financial transparency through structured contribution logs.",
      "Built scalable job-processing system capable of handling high group activity.",
      "Enabled cross-platform financial participation via mobile and web clients.",
    ],

    images: [
      "/flexpurse1.png",
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
  id: 4,
  title: "SMS Infrastructure Platform",
  slug: "sms-infrastructure-platform",
  category: "Full Stack / SaaS / Messaging Infrastructure",
  reporUrl: "",
  liveUrl: "",
  overview:
    "Designed and engineered a scalable, multi-tenant SMS infrastructure platform enabling businesses to send transactional and bulk SMS via secure API integrations. The system was built as a production-grade messaging backend with credit-based billing, asynchronous job processing, provider failover mechanisms, and developer-ready API documentation.",
  overviewTwo:
    "The platform exposes secure RESTful endpoints with API key authentication, enabling third-party systems to integrate seamlessly for notifications, OTP delivery, marketing campaigns, and transactional messaging. Emphasis was placed on queue-based architecture, billing automation, delivery tracking, and system reliability under high throughput conditions.",

  projectChallenges: [
    "Handling high-volume SMS dispatch without blocking API response cycles.",
    "Ensuring delivery reliability despite external provider dependency.",
    "Designing a scalable, credit-based wallet and billing system.",
    "Tracking delivery status asynchronously across queued jobs.",
    "Preventing abuse and enforcing rate limits per tenant.",
  ],

  solutions: [
    "Implemented BullMQ with Redis-backed workers for asynchronous SMS dispatch.",
    "Integrated multiple external SMS providers with retry and fallback logic.",
    "Built wallet & credit funding system powered by Paystack API and webhook validation.",
    "Designed API key authentication with scoped permissions.",
    "Implemented rate limiting and per-tenant throttling middleware.",
  ],

  keyFeatures: [
    "Bulk and transactional SMS sending",
    "Queued background job processing",
    "Provider failover & retry logic",
    "Delivery status tracking & reporting",
    "Credit wallet management",
    "Automated Paystack funding",
    "API key authentication",
    "Webhook support",
    "Comprehensive API documentation",
  ],

  architectureHighlights: [
    "Event-driven queue architecture using BullMQ & Redis",
    "Modular NestJS backend with domain-based separation",
    "Prisma ORM with relational schema modeling",
    "Multi-tenant system architecture",
    "Background worker processes isolated from API layer",
  ],

  performanceOptimizations: [
    "Reduced API latency by decoupling message dispatch via queues.",
    "Optimized relational queries with indexed Prisma models.",
    "Implemented batch processing for bulk SMS operations.",
    "Used Redis for job state management and retry handling.",
  ],

  securityMeasures: [
    "API key-based authentication system",
    "Scoped access control per tenant",
    "Rate limiting & abuse detection",
    "Secure Paystack webhook verification",
    "Centralized error handling & input validation",
  ],

  techStack: {
    frontend: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "shadcn/ui",
      "TailwindCSS",
      "Axios",
      "React Hook Form",
      "Zod Validation"
    ],
    backend: [
      "NestJS",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "JWT Authentication",
      "Class Validator"
    ],
    integrations: [
      "External SMS Gateway Providers",
      "Paystack Payment API",
      "Webhook Processing",
      "RESTful API Documentation (Swagger/OpenAPI)"
    ],
    devopsAndDeployment: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "Ubuntu Server",
      "GitHub Actions",
      "PM2",
      "SSL/TLS",
      "Environment Configuration Management"
    ],
  },

  impact: [
    "Built scalable SMS infrastructure capable of handling high-throughput dispatch.",
    "Reduced API blocking through asynchronous queue-based processing.",
    "Enabled monetization via integrated wallet and automated funding workflows.",
    "Delivered developer-ready API documentation for third-party integrations.",
  ],

  images: [
    "/sms1.png",
    "/sms2.png"
  ],
},
{
  id: 3,
  title: "Thrift Contribution Admin Dashboard",
  slug: "thrift-contribution-admin-dashboard",
  category: "Fintech Operations / Internal Systems / Admin Platform",
  liveUrl: "",
  repoUrl: "",
  overview:
    "A comprehensive administrative control platform built to manage, monitor, and govern a fintech thrift contribution ecosystem.",
  overviewTwo:"The dashboard serves as the operational backbone of the contribution system, providing real-time visibility into group activities, user registrations, payout cycles, transaction logs, and system health. Designed with scalability and observability in mind, the platform enables administrators to manage financial flows, resolve disputes, audit transactions, and enforce compliance rules. The system emphasizes data transparency, operational efficiency, and structured permission control to ensure platform integrity at scale.",

  projectChallenges: [
    "Designing an admin system capable of handling high-volume financial records.",
    "Ensuring secure visibility into sensitive user financial data.",
    "Providing real-time monitoring of payouts and contributions.",
    "Preventing fraudulent or duplicate payout scenarios.",
    "Maintaining clear audit logs for operational accountability.",
    "Designing scalable filters and search across large datasets.",
  ],

  solutions: [
    "Built advanced filtering and search mechanisms for contributions, groups, and payouts.",
    "Implemented role-based admin access levels (Super Admin, Finance Admin, Support).",
    "Designed transaction audit logs to track financial modifications and system actions.",
    "Integrated real-time activity monitoring using event-driven architecture.",
    "Created payout verification layers before final approval execution.",
    "Structured backend endpoints specifically optimized for admin-heavy queries.",
  ],

  keyFeatures: [
    "User management & account moderation",
    "Group monitoring & lifecycle control",
    "Contribution tracking & verification",
    "Payout approval & financial reconciliation",
    "Transaction audit logs",
    "System activity monitoring",
    "Analytics dashboard (growth, contributions, payout metrics)",
    "Role-based admin permissions",
    "Dispute resolution tools",
    "Notification broadcasting tools",
  ],

  architectureHighlights: [
    "Dedicated admin API endpoints separated from public API layer.",
    "Optimized relational queries for high-volume financial datasets.",
    "Role-based access control at route and service level.",
    "Audit logging middleware for traceability.",
    "Real-time system monitoring integration.",
    "Modular dashboard components for scalability.",
  ],

  performanceOptimizations: [
    "Pagination and cursor-based querying for large transaction logs.",
    "Indexed database fields for faster financial lookups.",
    "Caching summarized analytics metrics.",
    "Lazy-loaded data tables to improve frontend performance.",
    "Optimized backend queries specifically for admin dashboards.",
  ],

  securityMeasures: [
    "Strict role-based access enforcement.",
    "Sensitive financial data masking where appropriate.",
    "Server-side validation of all payout approvals.",
    "Activity tracking for administrative actions.",
    "Secure session handling and token rotation.",
  ],

  techStack: {
    frontendWeb: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "ShadCN UI",
      "React Query",
      "Redux Toolkit",
      "Axios",
      "Data Table Libraries",
      "Chart.js / Recharts",
    ],

    backend: [
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "JWT",
      "Node.js",
    ],

    devopsAndDeployment: [
      "Docker",
      "Nginx Reverse Proxy",
      "GitHub Actions CI/CD",
      "PM2",
      "Redis Cloud",
      "Environment-based deployment configs",
      "SSL/TLS Configuration",
    ],
  },

  impact: [
    "Centralized operational control of fintech contribution ecosystem.",
    "Improved financial transparency through structured audit trails.",
    "Reduced payout-related disputes via verification workflows.",
    "Enhanced administrative efficiency with analytics dashboards.",
    "Strengthened platform security with granular permission controls.",
  ],

  images: [
    "/flexpurse-admin1.png",
    "/flexpurse-admin2.png",
  ],
},
{
  id: 5,
  title: "SMS Platform Admin Dashboard",
  slug: "sms-platform-admin-dashboard",
  category: "Full Stack / Admin Systems / Platform Governance",
  reporUrl: "",
  liveUrl: "",
  overview:
    "Engineered a centralized admin governance dashboard for controlling and monitoring the SMS infrastructure platform. The dashboard enables platform administrators to manage users, review sender ID requests, monitor message throughput, enforce compliance policies, and oversee credit transactions in real time.",
  overviewTwo:
    "Built with a focus on system transparency and operational control, the admin panel provides analytics dashboards, provider health monitoring, transaction auditing, and tenant-level enforcement tools. The system was architected with strict role-based access control to ensure secure operational oversight.",

  projectChallenges: [
    "Designing secure administrative control without compromising tenant isolation.",
    "Implementing sender ID approval workflow with compliance checks.",
    "Providing real-time platform monitoring and analytics visibility.",
    "Ensuring financial transparency for wallet funding and deductions.",
    "Preventing misuse through enforcement tools and access restrictions.",
  ],

  solutions: [
    "Implemented RBAC with role-scoped permissions using NestJS guards.",
    "Built sender ID approval and rejection workflow with audit logging.",
    "Designed real-time analytics dashboard for throughput & usage tracking.",
    "Integrated Paystack transaction monitoring with webhook reconciliation.",
    "Added provider health monitoring and system alert mechanisms.",
  ],

  keyFeatures: [
    "User & tenant management",
    "Sender ID approval & compliance review",
    "Message throughput analytics",
    "Wallet transaction auditing",
    "Provider health monitoring",
    "System configuration controls",
    "Role-based access control",
    "Audit logs & activity tracking",
  ],

  architectureHighlights: [
    "Secure RBAC using NestJS guards & decorators",
    "Admin-only scoped APIs",
    "Prisma relational audit logging schema",
    "Analytics aggregation endpoints",
    "Isolated admin route architecture",
  ],

  performanceOptimizations: [
    "Optimized dashboard analytics queries with indexed relational models.",
    "Implemented paginated activity logs for large datasets.",
    "Cached frequently accessed platform metrics.",
  ],

  securityMeasures: [
    "Strict role-based access control (RBAC)",
    "Admin route guards and scoped API validation",
    "Audit trail logging for sensitive operations",
    "Secure webhook reconciliation for financial records",
  ],

  techStack: {
    frontend: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "shadcn/ui",
      "TailwindCSS",
      "Chart Libraries (Recharts/Chart.js)",
      "Axios"
    ],
    backend: [
      "NestJS",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Redis"
    ],
    integrations: [
      "Paystack Webhooks",
      "External SMS Providers",
      "System Monitoring Services"
    ],
    devopsAndDeployment: [
      "Docker",
      "Nginx",
      "Ubuntu Server",
      "GitHub Actions",
      "SSL/TLS"
    ],
  },

  impact: [
    "Enabled centralized governance of SMS infrastructure platform.",
    "Improved compliance and sender ID approval workflow transparency.",
    "Enhanced operational visibility with real-time analytics dashboard.",
    "Strengthened financial oversight through transaction auditing.",
  ],

  images: [
    "/smsadmin2.png",
    "/smsadmin1.png",
  ],
},
{
  id: 6,
  title: "Payroll & Staff Management Platform",
  slug: "payroll-staff-management-platform",
  category: "Enterprise SaaS / HR Tech / Financial Systems",
  liveUrl: "",
  repoUrl: "",
  overview:
    "A full-stack payroll and staff management platform designed to streamline employee administration, salary computation, and operational oversight within organizations. The system centralizes employee records, attendance tracking, payroll calculation, role-based access control, and reporting into a unified enterprise dashboard. Built with scalability and data integrity as primary objectives, the platform emphasizes financial precision, auditability, and modular architecture. The application is engineered to support multi-role organizational structures, automated payroll computation workflows, and structured reporting systems suitable for growing companies. Currently in active development, the system is being built with long-term extensibility, compliance readiness, and infrastructure scalability in mind.",

  projectChallenges: [
    "Ensuring payroll calculations remain accurate across varying salary structures.",
    "Handling complex staff hierarchies and role-based permissions.",
    "Preventing financial miscalculations due to concurrency issues.",
    "Designing scalable reporting systems for HR and finance teams.",
    "Maintaining data consistency across web and mobile interfaces.",
    "Preparing architecture for future compliance and regulatory expansion.",
  ],

  solutions: [
    "Implemented modular payroll computation engine capable of handling fixed salary, allowances, deductions, and bonuses.",
    "Designed relational schema using Prisma to maintain strong data integrity between staff, payroll cycles, and transactions.",
    "Introduced transaction-safe payroll processing to prevent duplicate salary execution.",
    "Built role-based access control system (Admin, HR, Manager, Staff).",
    "Structured payroll processing into staged workflows (draft → review → approval → disbursement).",
    "Implemented audit logging for payroll modifications and sensitive actions.",
  ],

  keyFeatures: [
    "Employee onboarding & profile management",
    "Department & role assignment",
    "Salary structure configuration",
    "Allowance & deduction management",
    "Automated payroll computation engine",
    "Payslip generation",
    "Payroll cycle history tracking",
    "Attendance tracking integration (planned)",
    "HR analytics dashboard",
    "Mobile access for staff self-service",
  ],

  architectureHighlights: [
    "Domain-driven modular backend architecture using NestJS",
    "Relational data modeling with Prisma & PostgreSQL",
    "Transaction-based payroll processing safeguards",
    "Layered service architecture for separation of concerns",
    "API-first backend design for mobile & web clients",
    "Structured audit logging system",
  ],

  performanceOptimizations: [
    "Optimized relational queries using indexed foreign keys.",
    "Selective field fetching in Prisma to reduce payload size.",
    "Efficient payroll batch processing logic to handle large staff sets.",
    "Pagination for large employee datasets.",
    "Caching frequently accessed dashboard metrics.",
  ],

  securityMeasures: [
    "JWT authentication with refresh token rotation.",
    "Role-based authorization per organizational hierarchy.",
    "Encrypted sensitive salary-related data.",
    "Audit logs for financial operations.",
    "Request validation using DTO schema enforcement.",
    "Environment-based configuration and secret management.",
  ],

  techStack: {
    frontendWeb: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "ShadCN UI",
      "React Query",
      "Redux Toolkit",
      "Axios",
      "Chart.js / Recharts",
    ],

    mobile: [
      "React Native (Planned/Integrated)",
      "Expo",
      "Secure Storage",
      "Redux Toolkit (RTK)",
      "RTK Query",
      "Expo Notifications",
    ],

    backend: [
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Node.js",
      "Class Validator",
      "JWT",
      "Paystack (Automated salary disbursement)"
    ],

    devopsAndDeployment: [
      "Docker",
      "Docker Compose",
      "Ubuntu Server",
      "Nginx Reverse Proxy",
      "GitHub Actions CI/CD",
      "PM2",
      "Cloud Database Hosting",
      "Environment Variable Management",
      "SSL/TLS Configuration",
    ],
  },

  impact: [
    "Digitizes payroll and HR processes for improved operational efficiency.",
    "Reduces risk of manual payroll miscalculations.",
    "Centralizes employee records and salary structures.",
    "Improves organizational transparency through reporting dashboards.",
    "Designed with scalability to support growing enterprises.",
  ],

  images: [
    "/payroll2.png",
    "/payroll1.png",
  ],
},
// {
//   id: 7,
//   title: "Movie Streaming & Discovery Platform",
//   slug: "movie-streaming-discovery-platform",
//   category: "Media Platform / Real-Time Systems / Content Architecture",
//   liveUrl: "https://flimify.netlify.app",
//   repoUrl: "",
//   overview:
//     "A full-stack movie discovery and streaming platform designed to provide dynamic content browsing, user interaction, and scalable media management.",
//   overviewTwo: "The platform enables users to explore movies by category, search across extensive datasets, view detailed metadata, and engage in real-time discussions. Built with performance and content scalability in mind, the system integrates optimized database querying, structured content indexing, and WebSocket-based real-time updates. Special emphasis was placed on media optimization, search efficiency, and modular backend design to support growing content libraries and increasing user activity.",
//   projectChallenges: [
//     "Efficiently managing large movie datasets with fast search and filtering.",
//     "Handling concurrent user interactions such as comments and live reactions.",
//     "Optimizing media-heavy pages for performance and load speed.",
//     "Designing scalable content categorization and indexing structure.",
//     "Preventing backend performance degradation as content library grows.",
//   ],

//   solutions: [
//     "Implemented indexed MongoDB schema optimized for search and category filtering.",
//     "Designed dynamic filtering and pagination to handle large content sets.",
//     "Integrated WebSocket communication for real-time comments and reactions.",
//     "Optimized API response structure to reduce unnecessary payload size.",
//     "Applied lazy loading and optimized image delivery strategies.",
//     "Built modular backend architecture to separate content, user, and interaction services.",
//   ],

//   keyFeatures: [
//     "Movie discovery by genre, popularity, and rating",
//     "Advanced search functionality",
//     "Detailed movie metadata pages",
//     "Real-time comment system",
//     "User authentication & watchlist",
//     "Content rating & review system",
//     "Trending & recommended sections",
//     "Responsive design for multiple screen sizes",
//     "Admin-ready content control structure",
//   ],

//   architectureHighlights: [
//     "RESTful API design with structured service layers.",
//     "WebSocket integration for live user interaction.",
//     "MongoDB aggregation pipelines for advanced filtering.",
//     "Pagination & infinite scrolling implementation.",
//     "Separation of content services from user interaction services.",
//     "Scalable content indexing structure.",
//   ],

//   performanceOptimizations: [
//     "Indexed database queries for faster search operations.",
//     "Selective field projection to reduce API response size.",
//     "Lazy loading of images and dynamic imports.",
//     "Caching frequently accessed movie categories.",
//     "Optimized WebSocket event broadcasting.",
//   ],

//   securityMeasures: [
//     "JWT-based authentication for protected routes.",
//     "Input validation for comments and reviews.",
//     "Rate limiting to prevent spam or abuse.",
//     "Sanitization to prevent XSS attacks.",
//     "Secure password hashing using bcrypt.",
//   ],

//   techStack: {
//     frontendWeb: [
//       "Next.js",
//       "React",
//       "TailwindCSS",
//       "Axios",
//       "React Query",
//       "Framer Motion",
//     ],

//     backend: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Mongoose",
//       "Socket.io",
//       "JWT",
//     ],

//     devopsAndDeployment: [],
//   },

//   impact: [
//     "Built scalable content discovery platform with structured search optimization.",
//     "Improved real-time engagement through WebSocket-based interaction system.",
//     "Reduced API latency via indexed queries and caching.",
//     "Designed maintainable modular backend suitable for content expansion.",
//     "Demonstrated scalable architecture for media-heavy applications.",
//   ],

//   images: [
//     "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
//   ],
// },
// {
//   id: 8,
//   title: "Movie Platform Admin Dashboard",
//   slug: "movie-platform-admin-dashboard",
//   category: "Content Management / Internal Tools / Media Operations",
//   liveUrl: "https://flimify-admin.netlify.app",
//   repoUrl: "",
//   overview:
//     "A centralized administrative control panel built to manage and govern a scalable movie discovery platform. The dashboard provides content managers and administrators with full visibility into movie records, user activity, moderation workflows, analytics metrics, and system-level controls.",
//   overviewTwo: "Designed with scalability and operational efficiency in mind, the system enables structured content publishing, metadata management, review moderation, and performance monitoring. Special focus was placed on handling high-volume datasets, optimizing admin-specific queries, and implementing granular role-based permissions to ensure secure and controlled platform governance.",

//   projectChallenges: [
//     "Managing large movie datasets efficiently within an admin interface.",
//     "Ensuring safe moderation of user-generated content (reviews & comments).",
//     "Providing real-time visibility into platform activity metrics.",
//     "Preventing unauthorized access to sensitive administrative controls.",
//     "Optimizing data-heavy tables for performance and usability.",
//   ],

//   solutions: [
//     "Built dedicated admin API routes separated from public-facing endpoints.",
//     "Implemented advanced filtering, sorting, and pagination for movie records.",
//     "Designed structured moderation workflows for user reviews and comments.",
//     "Integrated role-based access control (Super Admin, Content Manager, Moderator).",
//     "Optimized database queries specifically for admin analytics use cases.",
//     "Implemented activity logging to track administrative actions.",
//   ],

//   keyFeatures: [
//     "Movie creation, editing, and deletion controls",
//     "Genre & category management",
//     "Bulk upload & content publishing workflows",
//     "User management & moderation tools",
//     "Review and comment moderation",
//     "Platform analytics dashboard",
//     "Content performance tracking",
//     "Role-based admin access",
//     "System configuration management",
//   ],

//   architectureHighlights: [
//     "Admin-specific service layer separated from public services.",
//     "Optimized MongoDB aggregation pipelines for analytics dashboards.",
//     "Role-based authorization middleware.",
//     "Modular dashboard UI components for scalability.",
//     "Dedicated admin query optimization layer.",
//     "Activity logging middleware for traceability.",
//   ],

//   performanceOptimizations: [
//     "Indexed frequently queried fields (title, genre, publish date).",
//     "Server-side pagination for large content tables.",
//     "Selective field projection to reduce payload size.",
//     "Lazy-loaded data tables to enhance frontend performance.",
//   ],

//   securityMeasures: [
//     "Granular role-based access control.",
//     "Server-side validation for all content modifications.",
//     "Activity audit logs for admin actions.",
//     "Protected API routes using JWT authentication.",
//     "Rate limiting and abuse prevention mechanisms.",
//   ],

//   techStack: {
//     frontendWeb: [
//       "React",
//       "React Query",
//       "Axios",
//       "Data Table Libraries",
//       "Chart.js / Recharts",
//     ],

//     backend: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Mongoose",
//       "JWT",
//     ],

//     devopsAndDeployment: [],
//   },

//   impact: [
//     "Centralized content governance and operational control.",
//     "Improved moderation efficiency through structured workflows.",
//     "Enhanced data visibility with analytics dashboards.",
//     "Reduced admin-side query latency via optimized database indexing.",
//     "Strengthened platform security through granular permissions.",
//   ],

//   images: [
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
//   ],
// }
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Redux / Zustand",
      "React Query",
      "Responsive Design",
      "Accessibility (a11y)",
      "SEO Optimization",
      "Component Architecture",
    ],
  },
  {
    category: "Mobile Development",
    items: [
      "React Native",
      "Expo",
      "Mobile UI/UX Optimization",
      "Cross-platform Architecture",
      "Native Device APIs",
      "Push Notifications",
      "Background Tasks",
      "App Performance Optimization",
      "Mobile State Management",
      "Offline Data Sync",
      "App Store Deployment",
      "Android / iOS Build Pipelines",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Python",
      "PHP",
      "REST APIs",
      "GraphQL",
    "Authentication (JWT, OAuth)",
      "Authorization Systems",
      "Middleware Architecture",
      "Server-side Rendering",
      "API Design",
      "WebSockets",
      "Microservices",
      "Rate Limiting",
      "Caching Strategies",
      "API Security",
    ],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Prisma ORM",
      "Mongoose ODM",
      "Schema Design",
      "Query Optimization",
      "Indexing",
      "Data Modeling",
      "Replication Basics",
      "Database Performance Tuning",
    ],
  },
  {
    category: "DevOps & Deployment",
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Vercel",
      "Netlify",
      "Docker",
      "Kubernetes Basics",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Linux Administration",
      "Nginx",
      "Load Balancing",
      "Infrastructure as Code (Terraform)",
      "Monitoring & Logging",
      "Environment Management",
    ],
  },
  {
    category: "Architecture & Engineering",
    items: [
      "System Design",
      "Scalable Architecture",
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Test Driven Development",
      "Unit & Integration Testing",
      "Code Refactoring",
      "Performance Engineering",
      "Event Driven Architecture",
    ],
  },
  {
    category: "Professional Skills",
    items: [
      "Problem Solving",
      "System Thinking",
      "Technical Documentation",
      "Agile Development",
      "Team Collaboration",
      "Code Reviews",
      "Project Ownership",
      "Product Thinking",
      "Time Management",
      "Communication",
      "Leadership",
    ],
  },
];

export const experiences = [
    {
    company: "Binmatra (Cyprus) - Remote",
    role: "Full Stack Engineer",
    period: "2023 — Present",
    description:
      "Leading backend architecture, platform engineering, and product development for a multi-region service-based operations platform supporting customers across Europe, Middle East, and Africa.",
    achievements: [
      "Designed scalable backend architecture supporting multi-region users across Cyprus, Turkey, Kazakhstan, and Nigeria with future global expansion capability.",
      "Implemented internationalized payment processing workflows supporting cross-border transactions and regional compliance considerations.",
      "Integrated payment gateways and financial verification systems ensuring secure transaction processing across multiple markets.",
      "Designed webhook-driven payment lifecycle validation for transaction integrity and reconciliation accuracy.",
      "Built operational dashboards for business monitoring, financial analytics, and platform performance insights.",
      "Designed and built the full washer service web dashboard serving as the operational control center for service monitoring, analytics insights, and business workflow management.",
      "Contributed to mobile and web product ecosystems supporting customer and operational workflows.",
      "Led CI/CD pipeline engineering for automated deployments to Ubuntu-based production infrastructure.",
      "Improved platform reliability through automated release strategies and rollback-safe deployments.",
      "Optimized backend performance through query optimization, caching layers, and modular service design.",
      "Enforced clean architecture patterns to improve long-term maintainability and scalability."
    ],
  },
  {
    company: "VirtualFlux Africa - Remote",
    role: "Software Developer",
    period: "2023 — 2025",
    description:
      "Delivered production-ready platforms and enterprise integrations for multiple business clients.",
    achievements: [
      "Engineered scalable web platforms tailored to diverse business use cases.",
      "Integrated Zoho ecosystem products to enable CRM synchronization, workflow automation, and operational data flows.",
      "Designed backend services supporting data transformation and process automation.",
      "Collaborated with cross-functional teams to ensure solutions met business requirements and technical standards.",
      "Collaborated cross-functionally with stakeholders to translate business needs into technical systems.",
      "Supervised developers, conducted code reviews, and enforced engineering best practices.",
      "Provided ongoing maintenance and iterative improvements based on user feedback and evolving needs.",
    ],
  },
  {
    company: "DesignXcel - Contract",
    role: "Full Stack Engineer",
    // period: "2024 — ",
    description:
      "Owned full-stack architecture and delivery of a multi-platform sports betting system across web and mobile.",
    achievements: [
      "Architected and delivered a real-time betting platform supporting thousands of concurrent users with websocket-driven live updates.",
      "Designed scalable backend services handling user sessions, transactions, and real-time event streams.",
      "Built responsive web and mobile applications ensuring cross-platform consistency and performance.",
      "Developed administrative dashboards enabling operational monitoring, analytics, and transaction management.",
      "Implemented CI/CD pipelines to streamline deployments and reduce release friction",
      "Built subscription-based payment flows including Apple in-app subscriptions, handling receipt validation, lifecycle events, renewals, and cancellations."
    ],
  },
  
];

export const education = [
  {
    school: "National Open University of Nigeria",
    degree: "BSc Computer Science",
    period: "2025",
    description:
      "Focused on software engineering, distributed systems, and modern application architecture.",
  },
];

export const certifications = [
  {
    title: "Meta Backend Developer",
    issuer: "Coursera / Meta",
    year: "2022",
  },
  {
    title: "Meta Profesional Frontend Developer",
    issuer: "Coursera / Meta",
    year: "2021",
  },
  {
    title: "Cisco Certified Network Professional (CCNP)",
    issuer: "Cisco",
    year: "2020",
  },
];