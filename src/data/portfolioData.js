export const PROFILE = {
  brand: 'Sugumaran.dev',
  name: 'Sugumaran',
  statusBadge: 'Open to Full-Stack & GenAI Roles',
  headline: 'Bridging Enterprise Reliability & Modern Generative AI.',
  subhead:
    'Full-Stack Engineer with 2 years of operational product support experience, specializing in Python, Django REST Framework, React, and LangGraph/RAG AI Agent architectures.',
  currentRole: 'Product Support Executive (2 Years)',
  targetRoles: ['Full-Stack Developer (Django/React)', 'Generative AI / LLM Engineer'],
  email: 'sugumaran.dev@example.com',
  githubUrl: 'https://github.com/sugumaran-dev',
  linkedinUrl: 'https://linkedin.com/in/sugumaran-dev',
  formspreeEndpoint: 'https://formspree.io/f/your-form-id',
};

export const SKILL_GROUPS = [
  {
    id: 'ai',
    title: 'AI & Agents',
    subtitle: 'Generative AI & LLMs',
    icon: 'BrainCircuit',
    accent: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
    skills: [
      'LangChain',
      'LangGraph (Multi-step Agent Workflows)',
      'RAG & Vector Embeddings',
      'Vector DBs (Chroma / Pinecone)',
      'LLM Tool / Function Calling',
      'Hugging Face Spaces',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Backend & APIs',
    icon: 'Server',
    accent: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    skills: [
      'Python',
      'Django',
      'Django REST Framework (ViewSets / Filters)',
      'FastAPI',
      'PostgreSQL',
      'RESTful Architecture',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Web & Cross-Platform UI',
    icon: 'Smartphone',
    accent: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400',
    skills: [
      'React.js (Hooks, Context, Axios)',
      'React Native',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 / CSS3',
    ],
  },
  {
    id: 'data-devops',
    title: 'Data Science & Tooling',
    subtitle: 'Data, ML & DevOps Hosting',
    icon: 'Database',
    accent: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    skills: [
      'NumPy',
      'Pandas',
      'Scikit-Learn',
      'Google Colab',
      'Git & GitHub',
      'VS Code',
      'Render & Vercel',
      'Supabase',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'multi-agent-rag',
    title: 'Multi-Agent RAG Assistant',
    subtitle: 'LangGraph + FastAPI + Vector DB',
    category: 'Generative AI',
    description:
      'End-to-end RAG system with multi-step reasoning, external tool-calling, and custom document retrieval.',
    tech: ['LangGraph', 'FastAPI', 'ChromaDB', 'Hugging Face'],
    highlights: [
      'Stateful cyclic agent graph with supervisor routing & tool-calling nodes',
      'Semantic chunking and hybrid vector retrieval via ChromaDB embeddings',
      'Async FastAPI streaming endpoints deployed on Hugging Face Spaces',
    ],
    demoUrl: 'https://huggingface.co/spaces',
    repoUrl: 'https://github.com/sugumaran-dev/multi-agent-rag-assistant',
  },
  {
    id: 'academic-portal',
    title: 'Academic & Student Management Portal',
    subtitle: 'Role-Based ERP & Fee Tracking',
    category: 'Full-Stack',
    description:
      'Full-stack role-based management system with roll-number search, automated reporting, and fee tracking.',
    tech: ['Django REST Framework', 'PostgreSQL', 'React.js', 'Tailwind CSS'],
    highlights: [
      'DRF ViewSets & custom FilterBackends for instant roll-number & cohort lookup',
      'Role-based access control (Admin, Faculty, Student) with JWT auth',
      'Automated fee ledger reconciliation and exportable academic reports',
    ],
    demoUrl: 'https://vercel.com',
    repoUrl: 'https://github.com/sugumaran-dev/academic-student-portal',
  },
  {
    id: 'mobile-companion',
    title: 'Mobile Student Companion App',
    subtitle: 'Cross-Platform Student Experience',
    category: 'Mobile',
    description:
      'Mobile-first app for student profile access, attendance, and instant notification alerts.',
    tech: ['React Native', 'Expo', 'REST API'],
    highlights: [
      'Real-time attendance percentage tracking and semester timetable views',
      'Push notification alerts for fee deadlines, exam schedules, and circulars',
      'Offline-resilient API caching with clean Axios interceptors',
    ],
    demoUrl: 'https://expo.dev',
    repoUrl: 'https://github.com/sugumaran-dev/student-companion-app',
  },
];

export const EXPERIENCE = {
  role: 'Product Support Executive',
  duration: '2 Years',
  domain: 'Enterprise ERP & Academic Administration Systems',
  summary:
    'Owned root-cause debugging, managed production academic/ERP data pipelines, resolved complex edge cases, and partnered directly with end-users to elevate software reliability.',
  responsibilities: [
    'Investigated production incidents across academic & ERP workflows, tracing issues from UI state down to SQL queries and API payloads.',
    'Managed and validated production data pipelines, catching schema mismatches, orphaned records, and edge-case validation failures.',
    'Collaborated directly with clients and engineering teams to reproduce defects, document minimal repros, and ship permanent fixes.',
  ],
  engineeringTranslations: [
    {
      from: 'Client Issue Triage',
      to: 'Defensive API Validation',
      detail: 'Anticipating malformed inputs and edge cases before they hit production.',
    },
    {
      from: 'ERP Data Pipeline Audits',
      to: 'Hardened PostgreSQL Schemas',
      detail: 'Writing atomic transactions, clean migrations, and indexed DRF queries.',
    },
    {
      from: 'Root-Cause Debugging',
      to: 'Observable AI & Backend Systems',
      detail: 'Structured logging, deterministic fallbacks, and reliable LangGraph tool guards.',
    },
  ],
};
