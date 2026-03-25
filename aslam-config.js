const CONFIG = {
  // 1. PERSONAL INFO
  name: "Aslam",
  fullName: "Mohammed Aslam",
  heroPhoto: "aslam-photo.jpeg",
  role: "AI Engineer",
  email: "aslam1234u10b@gmail.com",
  domain: "github.com/mohammedaslam19",
  footerText: "Aslam — AI Engineering Portfolio",
  navSub: "Portfolio",
  year: 2026,

  // 2. PROJECT OVERVIEW
  projectName: "Intelligent Document Query System",
  projectTag: "PREPARED FOR VIBECON INDIA",
  projectDesc: "Designing and deploying a scalable multi-agent document intelligence platform enabling natural language querying over unstructured documents using OCR, RAG, and LLM-based reasoning.",
  platform: "Web + Backend API",
  duration: "Ongoing / Production",
  stackShort: "Python + LangChain + OpenSearch + LLMs",

  // 3. THE CHALLENGE & SOLUTION
  challengeTitle: "The Engineering Challenge",
  challengeDesc: "Building a system capable of extracting, understanding, and querying large-scale unstructured documents with high accuracy and low latency.",
  cards: [
    {
      icon: "document_scanner",
      title: "Document Understanding",
      desc: "Integrated OCR pipelines (DeepSeek OCR) to extract structured text from complex scanned documents."
    },
    {
      icon: "search",
      title: "Retrieval Architecture",
      desc: "Designed RAG-based pipelines using vector embeddings and OpenSearch for semantic retrieval across 11K+ documents."
    },
    {
      icon: "psychology",
      title: "Agentic Reasoning",
      desc: "Built multi-agent workflows using Agno framework to perform query decomposition, reasoning, and response generation."
    }
  ],

  // 4. PROCESS & SYSTEM DESIGN
  processTitle: "Process & System Design",
  process: [
    {
      title: "Discovery",
      desc: "Analyzed enterprise document workflows and identified gaps in traditional keyword-based search systems."
    },
    {
      title: "Architecture Design",
      desc: "Designed a modular pipeline combining OCR, embedding generation, vector search, and LLM agents."
    },
    {
      title: "Implementation",
      desc: "Developed Python-based orchestration layers with robust error handling, retries, and token optimization strategies."
    },
    {
      title: "Evaluation",
      desc: "Benchmarked multiple LLMs (Mistral, Gemini) for latency, accuracy, and token efficiency in production scenarios."
    }
  ],

  // 5. SYSTEM SHOWCASE
  screensTitle: "System Capabilities",
  screensDesc: "Focused on scalability, accuracy, and real-time document intelligence.",
  screens: [
    {
      img: "1d2Zv.png",
      num: "01",
      title: "OCR Pipeline",
      desc: "Automated extraction of structured text from scanned and image-based documents.",
      tags: ["OCR", "Preprocessing"]
    },
    {
      img: "SyINX.png",
      num: "02",
      title: "Semantic Search",
      desc: "Vector-based retrieval system enabling context-aware search across large datasets.",
      tags: ["RAG", "Embeddings"]
    },
    {
      img: "1d2Zv.png",
      num: "03",
      title: "Multi-Agent Query Engine",
      desc: "Agent-based reasoning system for handling complex natural language queries.",
      tags: ["Agents", "LLM", "Reasoning"]
    }
  ],

  // 6. TOOL STACK
  tech: [
    { icon: "code", name: "Python" },
    { icon: "link", name: "LangChain" },
    { icon: "search", name: "OpenSearch" },
    { icon: "psychology", name: "Agno Framework" },
    { icon: "model_training", name: "TensorFlow / PyTorch" },
    { icon: "api", name: "FastAPI" }
  ],

  // 7. CALL TO ACTION
  ctaTitle: "Interested in building AI systems together?",
  ctaDesc: "I'm open to AI engineering roles, freelance projects, and collaborations in LLM systems and automation.",
  ctaAccent: "AI systems together",
  ctaPrimary: "Let's Connect",
  ctaSecondary: "View Resume"
};
