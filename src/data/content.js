export const profile = {
  name: "Sravan Potnuru",
  title: "AI/ML Engineer & Full-Stack Developer",
  tagline:
    "Building production-grade AI, computer vision, and GenAI-powered applications.",
  summary:
    "AI/ML Engineer with 2 years of experience building production-grade video intelligence and GenAI applications. Experienced in FastAPI microservices, Triton Inference Server, AWS cloud services, computer vision, and LLM-powered systems. Currently working on US client projects involving real-time CCTV analytics and scalable AI deployments.",
  availability:
    "Currently full-time at Parabola9 — open to new full-time roles as well as freelance / contract engagements.",
  location: "Mangalagiri, India",
  resumeUrl: "/Sravan_Potnuru_Resume.pdf",
  photo: "/profile.png",
  contact: {
    email: "sravanpotnuru24@gmail.com",
    phone: "+91 9391872342",
    phoneHref: "+919391872342",
    linkedin: "https://www.linkedin.com/in/sravan-potnuru-a431a0215/",
    github: "https://github.com/sravancipher",
  },
};

export const roles = [
  "AI/ML Engineer",
  "GenAI & LLM Systems",
  "Full-Stack Developer",
];

export const services = [
  {
    title: "AI/ML & Computer Vision Systems",
    description:
      "Real-time object detection, multi-object tracking and face recognition pipelines for video analytics and surveillance use cases.",
    tags: ["YOLO", "BoT-SORT", "InsightFace", "Triton Inference Server"],
  },
  {
    title: "GenAI & LLM-Powered Applications",
    description:
      "Retrieval-augmented generation, semantic search and knowledge-graph-backed assistants that turn unstructured content into answers.",
    tags: ["RAG", "LangGraph", "Semantic Search", "Neo4j"],
  },
  {
    title: "Backend & API Engineering",
    description:
      "Production microservices and REST APIs that power AI inference, data ingestion and application logic at scale.",
    tags: ["FastAPI", "Spring Boot", "REST APIs"],
  },
  {
    title: "Cloud Infrastructure & MLOps",
    description:
      "Serverless ingestion pipelines, containerized model serving and GPU deployment across AWS and Akash Network.",
    tags: ["AWS Lambda", "Kinesis", "Docker", "EC2", "Akash Network"],
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end products with React front ends, Spring Boot / FastAPI back ends and MySQL, including auth and account flows.",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    title: "Data Pipelines & ETL",
    description:
      "Ingestion and transformation pipelines that bring enterprise data sources into a structured, queryable form.",
    tags: ["Azure Data Factory", "Apache NiFi", "Databricks"],
  },
];

export const techStack = [
  { category: "Languages", items: ["Python", "Java"] },
  { category: "Backend", items: ["FastAPI", "Spring Boot", "REST APIs"] },
  {
    category: "AI/ML",
    items: [
      "YOLO",
      "InsightFace (Buffalo)",
      "RAG",
      "LangGraph",
      "Triton Inference Server",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Kinesis", "Docker"],
  },
  { category: "Databases", items: ["MySQL", "Neo4j (Cypher)"] },
  {
    category: "Data & Analytics",
    items: ["Databricks", "Azure Data Factory", "Apache NiFi"],
  },
  { category: "Frontend", items: ["React JS", "HTML", "CSS", "Bootstrap"] },
  { category: "Testing & Performance", items: ["Locust"] },
  { category: "Tools", items: ["Git", "Postman", "Jupyter", "VS Code"] },
];

export const experience = [
  {
    role: "AI/ML Engineer",
    org: "Parabola9",
    period: "12/2024 – Present",
    location: "Mangalagiri",
    bullets: [
      "Designed and deployed a production video analytics platform processing 10+ live CCTV streams through FastAPI microservices, enabling real-time AI inference and event detection.",
      "Built a serverless video ingestion pipeline using AWS Lambda, Kinesis Video Streams and S3 to automatically ingest, process and store live CCTV footage, eliminating manual video handling.",
      "Optimized AI inference using NVIDIA Triton Inference Server, reducing model serving latency and enabling real-time object detection across multiple concurrent streams.",
      "Developed a computer vision pipeline combining YOLO, BoT-SORT and InsightFace to perform real-time person detection, tracking and face recognition for surveillance applications.",
      "Containerized and deployed 5+ AI microservices on AWS EC2 using Docker, reducing deployment time and improving release consistency.",
      "Built an AI-powered warehouse surveillance platform capable of detecting PPE compliance and security events in real time, improving operational visibility for government facilities.",
      "Collaborate directly with CEO & CTO (US stakeholders) on development plan, performance improvements, and deployment decisions.",
      "Deployed GPU-enabled AI inference services on Akash Network (Linux/AMD64), reducing infrastructure cost while supporting production-scale model serving.",
      "Built a real-time video ingestion pipeline using Apache NiFi to ingest live streams, automate video chunking and eliminate manual ingestion processes.",
    ],
  },
  {
    role: "AI Contractor — Rich's",
    org: "Parabola9",
    period: "02/2026 – Present",
    location: "Mangalagiri",
    bullets: [
      "Contracted as an AI engineer on Rich's, building an AI-powered chat assistant that gives business users conversational access to enterprise SAP data.",
      "Built Azure Data Factory ETL pipelines ingesting data from multiple sources — including Azure DevOps work items and Azure File Share documents — into Databricks tables through Bronze, Silver and Gold layers.",
      "Contributing to a semantic layer over these Databricks tables so the chat agent can query and reason over SAP-sourced business data with accurate, structured context.",
      "Developed FastAPI APIs for document ingestion, semantic search and AI-driven retrieval, working across backend APIs, ETL pipelines and agent logic as part of the engineering team.",
      "Executed large-scale Locust load testing to identify performance bottlenecks, improving backend scalability before production deployments.",
    ],
  },
];

export const featuredProjects = [
  {
    slug: "video-intelligence-platform",
    name: "Video Intelligence & CCTV Analytics Platform",
    kind: "Professional work — Parabola9",
    summary:
      "Production video-analytics platform turning 10+ live CCTV streams into real-time detection, tracking and event alerts.",
    tech: [
      "FastAPI",
      "AWS Lambda",
      "Kinesis Video Streams",
      "S3",
      "NVIDIA Triton",
      "YOLO",
      "BoT-SORT",
      "InsightFace",
      "Docker",
      "AWS EC2",
      "Akash Network",
      "Apache NiFi",
    ],
    problem:
      "Facilities relying on live CCTV had no automated way to detect security events, PPE non-compliance, or track individuals across multiple concurrent camera streams in real time — visibility depended on manual monitoring of raw footage.",
    solution:
      "Designed and deployed a production video-intelligence platform that ingests 10+ live CCTV streams, runs real-time computer-vision inference (person detection, multi-object tracking, face recognition) and flags security and PPE-compliance events automatically, served through containerized, GPU-accelerated microservices.",
    contribution:
      "Built the serverless ingestion pipeline (AWS Lambda, Kinesis Video Streams, S3) and a parallel real-time ingestion path with Apache NiFi; optimized model serving on NVIDIA Triton Inference Server for concurrent multi-stream inference; developed the computer-vision pipeline combining YOLO, BoT-SORT and InsightFace for detection, tracking and face recognition; containerized 5+ AI microservices on Docker/EC2; and built the PPE-compliance detection platform for a government-facility client — collaborating directly with the company's CEO and CTO on architecture and deployment decisions.",
    outcome:
      "Eliminated manual video handling, enabled real-time event detection across concurrent streams, reduced model-serving latency, cut deployment time through containerization, and reduced infrastructure cost by moving GPU inference to Akash Network.",
  },
  {
    slug: "sap-ai-chat-assistant",
    name: "AI Chat Assistant on Enterprise SAP Data",
    kind: "Client project — Rich's",
    summary:
      "An AI-powered chat assistant that gives business users conversational access to enterprise SAP data, backed by a Databricks semantic layer.",
    tech: [
      "FastAPI",
      "Databricks",
      "Azure Data Factory",
      "Semantic Layer",
      "AI Agents",
      "Locust",
    ],
    problem:
      "Business users needed a way to ask questions of enterprise SAP data directly, instead of relying on manual reporting or someone else querying raw tables for them — with data scattered across multiple source systems.",
    solution:
      "Building an AI-powered chat assistant on top of SAP-sourced business data: ETL pipelines bring data from multiple sources into Databricks tables through a Bronze/Silver/Gold pipeline, a semantic layer sits on top of those tables to give the agent structured context, and the chat agent uses that layer to answer business questions conversationally.",
    contribution:
      "Contracted as an AI engineer on the engagement, working across backend systems — developing the FastAPI APIs, building the Azure Data Factory ETL pipelines that ingest Azure DevOps and Azure File Share data into Databricks, contributing to the semantic layer over those tables, and working on the conversational agent logic alongside the engineering team. Also ran large-scale Locust load testing to catch performance bottlenecks ahead of production.",
    outcome:
      "A chat assistant that gives business users direct, conversational access to SAP-sourced enterprise data grounded in a structured semantic layer rather than raw table lookups, with backend scalability validated under load ahead of production rollout.",
  },
  {
    slug: "logiq",
    name: "LogIQ — AI-Powered Project Monitor",
    kind: "Independent project",
    summary:
      "A pip-installable monitoring layer that turns application logs into automated error detection and fix suggestions.",
    tech: ["FastAPI", "React", "Cloud Integration", "LLMs"],
    liveNote: "Ships as a lightweight Python package (pip install).",
    problem:
      "Teams integrating AI or backend services into their applications lack a lightweight, drop-in way to monitor logs, catch errors and understand root causes without standing up a full observability stack.",
    solution:
      "Built an AI-powered project monitoring platform, distributed as a lightweight Python package, that adds log collection, error detection, root-cause analysis, cloud-based monitoring support and automated fix suggestions to any integrated application.",
    contribution:
      "Built the end-to-end product: the installable Python package, the log-collection and error/root-cause-analysis logic, the backend APIs, and the dashboard UI.",
    outcome:
      "A reusable monitoring layer any Python application can add via a single pip install, turning raw logs into actionable, AI-generated fix suggestions instead of manual log-diving.",
  },
  {
    slug: "parabot",
    name: "ParaBot — AI Chat & File Summarizer",
    kind: "Independent project",
    summary:
      "A Gemini-powered assistant that summarizes and answers questions over text, images, PDFs and websites.",
    tech: ["FastAPI", "React", "OCR", "Gemini"],
    repoUrl: "https://github.com/sravancipher/ChatBot_LLM",
    problem:
      "Users needed a single assistant that could answer questions and summarize content across very different formats — plain text, images, PDFs and websites — instead of juggling separate tools for each.",
    solution:
      "Built an AI chat assistant that ingests text, images, PDFs and website content and provides summarization and Q&A over it, powered by the Gemini API.",
    contribution:
      "Built the React front end and the FastAPI back end, integrated OCR for image/PDF text extraction, and connected the Gemini-powered summarization and Q&A pipeline.",
    outcome:
      "A working multi-format GenAI assistant, open-sourced on GitHub, demonstrating end-to-end application development from ingestion through UI.",
  },
  {
    slug: "screensaga",
    name: "ScreenSaga — Full-Stack OTT Platform",
    kind: "Independent project",
    summary:
      "A full-stack streaming platform with real authentication, watchlists, continue-watching and a feedback system.",
    tech: ["React JS", "Spring Boot", "REST APIs", "MySQL", "SMTP"],
    liveUrl: "https://screensaga.netlify.app/",
    problem:
      "Needed to prove out a complete, production-style full-stack product — not just a UI — covering real user authentication, content browsing and personalization end to end.",
    solution:
      "Built a full-stack OTT platform for movies and web series with personalized watchlists, season/episode selection, a Continue Watching feature, a feedback system, and secure authentication (email verification, password reset, account deletion).",
    contribution:
      "Built both the React front end and the Spring Boot REST API back end, including the MySQL schema, JSON APIs, and SMTP-driven email confirmation flows for authentication.",
    outcome:
      "A deployed, publicly viewable OTT platform demonstrating full-stack ownership from database design to UI polish.",
  },
];

export const otherProjects = [
  {
    name: "Stress Prediction Based on Sleeping Patterns",
    description:
      "A machine learning model that predicts stress levels from sleep data and surfaces wellness suggestions through a Streamlit interface.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    repoUrl: "https://github.com/sravancipher/mini_project",
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    school: "RGUKT IIIT Nuzvid",
    period: "2021 – 2025",
    detail: "CGPA: 9.0",
  },
  {
    degree: "Pre-University Course (Intermediate)",
    school: "RGUKT IIIT Nuzvid",
    period: "2019 – 2021",
    detail: "CGPA: 9.62",
  },
  {
    degree: "Secondary School (SSC)",
    school: "Government High School, Srikakulam",
    period: "2018 – 2019",
    detail: "CGPA: 10",
  },
];
