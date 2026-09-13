// All page content lives here so the layout components stay presentational.
// Sourced from Heshan's CVs and the READMEs of the linked repositories.

export const profile = {
  name: 'Heshan Gamage',
  title: 'Data Science Undergraduate · Data Engineering | ML | Full-Stack',
  location: 'Ingiriya, Sri Lanka',
  phone: '+94 71 824 3557',
  phoneHref: 'tel:+94718243557',
  email: 'heshank92@gmail.com',
  site: 'heshagamage.github.io',
  siteHref: 'https://heshagamage.github.io',
  github: 'https://github.com/HeshaGamage',
  linkedin: 'https://www.linkedin.com/in/heshan-kavishka-655381215/',
};

export const summary = [
  'Information Technology undergraduate at SLIIT specializing in Data Science, with hands-on experience in Python, SQL, and data manipulation using Pandas and NumPy.',
  'Skilled at building end-to-end data workflows — ingestion, cleaning, transformation, and analysis — through machine learning and full-stack projects, and comfortable across the stack with React, Spring Boot, and relational data modeling.',
  'Recent work focuses on applied AI: retrieval-augmented generation over technical documentation, predictive maintenance with explainable models, and LLM-driven automation.',
];

export const projects = [
  {
    name: 'WSO2 DevAssist',
    tech: 'Python · RAG · ChromaDB · MCP · Llama 3 · Streamlit',
    bullets: [
      'Built a retrieval-augmented assistant that answers WSO2 API Manager questions in plain English and cites the exact documentation sections behind every answer.',
      'Indexed 3,127 documentation chunks from 350 markdown files into ChromaDB, retrieving by cosine similarity and generating answers with Llama 3 via Groq.',
      'Added a confidence indicator driven by cosine distance that warns when a question falls outside the documentation scope instead of inventing an answer.',
      'Exposed the knowledge base as an MCP server with two tools, so any MCP-compatible AI assistant can query it directly.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/HeshaGamage/wso2-devassist', kind: 'github' },
      { label: 'Live demo', href: 'https://wso2-devassist.streamlit.app', kind: 'live' },
    ],
  },
  {
    name: 'Predictive Maintenance — Industrial AI',
    tech: 'Python · XGBoost · SHAP · Llama 3 · Streamlit · Time Series',
    bullets: [
      'Built a predictive maintenance system that monitors aircraft engines and forecasts how many flight cycles remain before failure.',
      'Trained an XGBoost regression model on sensor telemetry and used SHAP to explain which sensors drove each individual prediction.',
      'Chained an LLM step that drafts a maintenance work order automatically for engines flagged as high risk.',
      'Surfaced the full pipeline — prediction, explanation, and generated work order — in an interactive dashboard.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/HeshaGamage/predictive-maintenance-industrial-ai', kind: 'github' },
      { label: 'Live demo', href: 'https://predictive-maintainance-v01.streamlit.app', kind: 'live' },
      { label: 'Video', href: 'https://youtu.be/ednx9Flmqbc', kind: 'video' },
    ],
  },
  {
    name: 'ResumeX — AI Job Application Assistant',
    tech: 'FastAPI · scikit-learn · spaCy · NLTK · React · MongoDB',
    bullets: [
      'Built a full-stack web app that compares a resume against a job description and returns an ATS match score, missing skills, and improved resume bullets.',
      'Added cover-letter drafting and job-role prediction using NLP and classification models over parsed PDF and DOCX resumes.',
      'Designed a component-based React UI with async API calls and JWT authentication against a FastAPI backend.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/HeshaGamage/resumeX', kind: 'github' }],
  },
  {
    name: 'V-Chat — Sri Lanka Vehicle Search Bot',
    tech: 'n8n · Groq (LLaMA) · Telegram Bot API · ScrapeNinja',
    bullets: [
      'Engineered an automation workflow that searches Riyasewana.lk and ikman.lk simultaneously from a single plain-English Telegram message.',
      'Used an LLM to parse natural-language queries such as "Toyota Vitz under 8 million under 50000 km" into structured search filters.',
      'Orchestrated async calls across multiple third-party APIs with error handling, returning unified listings with prices and direct links.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/HeshaGamage/v-chat', kind: 'github' }],
  },
  {
    name: 'Smart University System',
    tech: 'Flutter · Firebase · Python · Machine Learning',
    bullets: [
      'Built a mobile platform for university students combining Lost & Found, a campus marketplace, study-group matching, and study-area finding.',
      'Applied semantic search and smart grouping so students are matched to relevant items and study partners rather than raw keyword hits.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/it24101264/WE_DS_G03_AIML', kind: 'github' }],
  },
  {
    name: 'Cryptocurrency Market Analytics & Prediction',
    tech: 'Python · Pandas · NumPy · scikit-learn · yFinance · Matplotlib',
    bullets: [
      'Collected and consolidated multi-asset historical market data through the yFinance API, running data-quality checks across raw and cleaned layers.',
      'Performed exploratory analysis with aggregations, joins and trend visualizations to surface key indicators.',
      'Delivered structured datasets and visual summaries ready for consumption by BI tools.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/HeshaGamage/Crypto_price_project', kind: 'github' }],
  },
  {
    name: 'Web-Based Pharmacy Management System',
    tech: 'Java · Spring Boot · React · MySQL · REST APIs',
    bullets: [
      'Designed a normalized MySQL schema for drug inventory, prescriptions and patient records, with SQL queries using joins, filters and aggregations.',
      'Built CRUD REST APIs and a React frontend, keeping data accurate and consistent across modules.',
      'Applied data governance basics — input validation, role-based access control, and auditable records.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/HeshaGamage/Pharmacy-App', kind: 'github' }],
  },
  {
    name: 'End-to-End ML Pipeline for Mental Health Prediction',
    tech: 'Python · Pandas · NumPy · scikit-learn · Matplotlib · Seaborn',
    bullets: [
      'Designed an ingestion-to-insight workflow over tech-industry survey data, validating record-level consistency and handling missing values, duplicates and categorical encoding.',
      'Engineered features with scaling, encoding and imputation to produce clean, analytics-ready datasets.',
      'Trained and compared classification models to predict whether an employee would seek treatment, documenting accuracy, precision and recall.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/HeshaGamage/Predict_Mental_Health_Treatment-Tech-', kind: 'github' },
    ],
  },
];

export const skills = [
  { group: 'Programming', items: 'Python, Java, JavaScript, SQL' },
  { group: 'AI & Machine Learning', items: 'Pandas, NumPy, Scikit-learn, PyTorch, XGBoost, SHAP, spaCy, NLTK, RAG, LLM & API integration' },
  { group: 'Data Engineering', items: 'Data ingestion, ETL workflows, Data cleaning & validation, Exploratory Data Analysis, KPI tracking' },
  { group: 'Databases & Vector Stores', items: 'MySQL, MongoDB, Relational data modeling, ChromaDB, Firebase' },
  { group: 'BI & Visualization', items: 'Power BI, Matplotlib, Seaborn, Streamlit' },
  { group: 'Web Technologies', items: 'React, Spring Boot, FastAPI, Flask, REST APIs, Tailwind CSS, Flutter' },
  { group: 'Tools & Workflow', items: 'Git/GitHub, Docker, Jupyter, Postman, VS Code, n8n automation' },
  { group: 'Currently learning', items: 'Next.js, Node.js, TypeScript, Microsoft Azure, Databricks' },
];

export const education = [
  {
    degree: 'BSc (Hons) in Information Technology — Specializing in Data Science',
    place: 'Sri Lanka Institute of Information Technology (SLIIT)',
    date: 'Present',
    note: 'Relevant coursework: Database Management Systems, Data Structures & Algorithms, Programming, Statistics, Machine Learning fundamentals, Web Development, Software Engineering.',
  },
  {
    degree: 'GCE Advanced Level — Physical Science Stream',
    place: 'Taxila Central College',
    date: 'Nov 2020 – Dec 2023',
    note: 'English (A), Physics (B), ICT (B), Mathematics (C).',
  },
  {
    degree: 'Diploma in Information & Communication Technology',
    place: 'ICBT Campus',
    date: 'Aug 2020 – Nov 2020',
    note: 'Successfully completed.',
  },
  {
    degree: 'GCE Ordinary Level',
    place: 'Taxila Central College',
    date: '2015 – 2020',
    note: 'Completed with 9 A passes.',
  },
];

export const certifications = [
  {
    name: 'Ultimate AWS Certified AI Practitioner (AIF-C01)',
    issuer: 'Udemy',
    date: 'Apr 2026',
  },
  {
    name: 'Data Science Job Simulation',
    issuer: 'British Airways (Forage)',
    date: 'Completed',
    note: 'Data cleaning, customer review analysis, predictive modeling, and presenting insights to stakeholders.',
  },
];

export const additional = [
  { label: 'Languages', value: 'English (Pearson Test of English — 77, Proficient) and Sinhala (Native).' },
  { label: 'References', value: 'Available upon request.' },
];

export const sections = [
  { id: 'summary', label: 'Professional Summary' },
  { id: 'projects', label: 'Selected Projects' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications & Courses' },
  { id: 'contact', label: 'Get in Touch' },
];
