import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    number: '01',
    title: 'WSO2 DevAssist',
    description:
      'A RAG assistant that answers WSO2 API Manager questions in plain English and cites the exact documentation it used. Indexes 3,127 chunks from 350 markdown files into ChromaDB, retrieves by cosine similarity, and answers with Llama 3 — surfacing a confidence indicator and warning when a question falls outside the docs rather than inventing an answer. Also exposed as an MCP server, so any MCP-compatible assistant can call it as a tool.',
    tags: ['Python', 'RAG', 'ChromaDB', 'MCP', 'Llama 3', 'Streamlit'],
    github: 'https://github.com/HeshaGamage/wso2-devassist',
    live: 'https://wso2-devassist.streamlit.app',
    year: '2026',
  },
  {
    number: '02',
    title: 'Predictive Maintenance — Industrial AI',
    description:
      'Monitors aircraft engines and predicts how many flight cycles remain before failure. An XGBoost model drives the forecast, SHAP explains which sensors moved it, and a Llama 3 step drafts a maintenance work order for high-risk engines automatically — the whole chain surfaced in an interactive dashboard.',
    tags: ['Python', 'XGBoost', 'SHAP', 'LLM', 'Streamlit', 'Time Series'],
    github: 'https://github.com/HeshaGamage/predictive-maintenance-industrial-ai',
    live: 'https://predictive-maintainance-v01.streamlit.app',
    video: 'https://youtu.be/ednx9Flmqbc',
    year: '2026',
  },
  {
    number: '03',
    title: 'ResumeX — AI Job Application Assistant',
    description:
      'Compares a resume against a job description and returns an ATS match score, the skills that are missing, rewritten resume bullets, a cover letter draft, and a predicted job role. Built because students apply for internships with no idea whether their resume actually matches the posting.',
    tags: ['FastAPI', 'scikit-learn', 'spaCy', 'NLTK', 'React', 'MongoDB'],
    github: 'https://github.com/HeshaGamage/resumeX',
    live: null,
    year: '2026',
  },
  {
    number: '04',
    title: 'V-Chat — Vehicle Search Bot',
    description:
      'A Telegram bot that searches Riyasewana.lk and ikman.lk at once from a plain-English query. An n8n workflow extracts search parameters with a Groq-hosted LLaMA model, so "Toyota Vitz under 8 million under 50000 km" becomes a structured query across both marketplaces, returned with prices and direct listing links.',
    tags: ['n8n', 'Groq', 'LLaMA', 'Telegram API', 'Automation'],
    github: 'https://github.com/HeshaGamage/v-chat',
    live: null,
    year: '2026',
  },
  {
    number: '05',
    title: 'Smart University System',
    description:
      'A Flutter platform for university students combining Lost & Found, a campus marketplace, study-group matching, and study-area finding. Semantic search and smart grouping handle the matching, with Firebase behind it.',
    tags: ['Flutter', 'Firebase', 'Python', 'ML', 'Semantic Search'],
    github: 'https://github.com/it24101264/WE_DS_G03_AIML',
    live: null,
    year: '2025',
  },
  {
    number: '06',
    title: 'ML Cryptocurrency Price Prediction',
    description:
      'A machine learning model that forecasts cryptocurrency price trends from historical data, with real-time fetching through yFinance and interactive visualisations of what the model saw and predicted.',
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'yFinance'],
    github: 'https://github.com/HeshaGamage/Crypto_price_project',
    live: null,
    year: '2025',
  },
];

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="text-[var(--text5)] hover:text-[var(--text1)] transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-8">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 border-b border-[var(--border)] pb-8">
        <h2 className="text-section text-[var(--text1)]">Selected Work</h2>
        <span className="text-sm text-[var(--text5)] tracking-widest uppercase hidden sm:block">
          {projects.length} Projects
        </span>
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group border-b border-[var(--border)] py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start hover:bg-[var(--hover)] transition-colors duration-300 -mx-4 px-4 rounded-xl"
          >
            {/* Number */}
            <span className="text-xs text-[var(--text6)] tracking-widest mt-1 font-mono">
              {project.number}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 flex-wrap">
                <h3 className="text-xl md:text-2xl font-medium text-[var(--text1)]">
                  {project.title}
                </h3>
                <span className="text-xs text-[var(--text5)] border border-[var(--border2)] px-2.5 py-1 rounded-full mt-1">
                  {project.year}
                </span>
                {project.live && (
                  <span className="text-xs text-[var(--live)] border border-[var(--live-bd)] bg-[var(--live-bg)] px-2.5 py-1 rounded-full mt-1">
                    Live demo
                  </span>
                )}
              </div>
              <p className="text-[var(--text4)] text-sm leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[var(--text5)] bg-[var(--tag-bg)] border border-[var(--tag-bd)] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions — always visible so they work on touch devices */}
            <div className="flex items-center gap-5 md:pt-1">
              <IconLink href={project.github} label={`${project.title} on GitHub`}>
                <FaGithub size={18} />
              </IconLink>
              {project.live && (
                <IconLink href={project.live} label={`${project.title} live demo`}>
                  <FaExternalLinkAlt size={15} />
                </IconLink>
              )}
              {project.video && (
                <IconLink href={project.video} label={`${project.title} demo video`}>
                  <FaYoutube size={18} />
                </IconLink>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Tail link to the rest of the work */}
      <div className="pt-10">
        <a
          href="https://github.com/HeshaGamage?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm text-[var(--text4)] hover:text-[var(--text1)] transition-colors duration-300"
        >
          <FaGithub size={16} />
          See every repository on GitHub
        </a>
      </div>
    </section>
  );
}
