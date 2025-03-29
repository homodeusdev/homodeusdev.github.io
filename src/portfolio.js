/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Martin Rangel",
  title: "Hi all, I'm Jose Martin Rangel Espinoza",
  subTitle: emoji(
    "A passionate AI & Backend Engineer 🚀 with over 5 years of experience building robust, scalable ML/NLP systems using Python, TensorFlow, PyTorch, and Hugging Face. Skilled in integrating LLMs and deploying AI-driven microservices on cloud platforms like GCP and Azure. I bridge the gap between ML and software engineering to deliver production-ready solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/homodeusdev",
  linkedin: "https://www.linkedin.com/in/martinrangel/",
  gmail: "jrangelespinoza@outlook.com",
  // Puedes agregar más redes si lo deseas
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Engineer on a mission to turn AI ideas into scalable, production-grade systems.",
  skills: [
    emoji("⚡ Architect and deploy end-to-end machine learning pipelines with MLOps best practices"),
    emoji("⚡ Implement LLM-based solutions for RAG, intelligent agents, and task automation"),
    emoji("⚡ Optimize backend microservices to support real-time AI inference at scale"),
    emoji("⚡ Design robust APIs and integrate ML models into production-ready cloud systems")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "BigQuery",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad Internacional de La Rioja (UNIR)",
      logo: require("./assets/images/unir_logo.png"),
      subHeader: "Master’s Degree in Artificial Intelligence",
      duration: "Jan 2020 - Dec 2023",
      desc: "Focused on Generative AI, NLP, Machine Learning, and model evaluation techniques.",
      descBullets: [
        "Projects involving LLMs, RAG, and performance metrics like F1, ROC-AUC, Precision/Recall.",
        "Thesis on optimization of AI models for intelligent decision-making systems."
      ]
    },
    {
      schoolName: "Universidad Internacional de La Rioja (UNIR)",
      logo: require("./assets/images/unir_logo.png"),
      subHeader: "Master’s Degree in Web Development Engineering",
      duration: "Jan 2017 - Dec 2019",
      desc: "Specialized in scalable backend development and cloud computing.",
      descBullets: [
        "Built backend services and microservices using .NET and JavaScript frameworks.",
        "Emphasis on system design, API development, and deployment to cloud platforms."
      ]
    },
    {
      schoolName: "Instituto Politécnico Nacional (IPN)",
      logo: require("./assets/images/ipn_logo.png"),
      subHeader: "Bachelor’s Degree in Computer Systems Engineering",
      duration: "Jan 2004 - Dec 2009",
      desc: "Strong foundation in data structures, algorithms, and software architecture.",
      descBullets: [
        "Academic projects focused on database systems and backend logic.",
        "Gained early exposure to .NET and enterprise systems."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "MLOps & Cloud Infrastructure",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning & LLMs",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer – AI Reliability",
      company: "Mercado Libre",
      companylogo: require("./assets/images/mercado_libre_logo.png"),
      date: "Feb 2023 – Feb 2025",
      desc: "Designed scalable AI monitoring systems to ensure model reliability in production environments.",
      descBullets: [
        "Developed anomaly detection pipelines with evaluation metrics like F1, ROC-AUC, and Precision/Recall.",
        "Integrated LLMs into event-driven architectures for real-time model monitoring and intelligent diagnostics.",
        "Built backend microservices with Python (Flask) and Java (Spring Boot) deployed on GCP."
      ]
    },
    {
      role: "Senior Software Engineer – Credits",
      company: "Mercado Libre",
      companylogo: require("./assets/images/mercado_libre_logo.png"),
      date: "Feb 2021 – Feb 2023",
      desc: "Engineered high-performance microservices and data pipelines for credit scoring systems.",
      descBullets: [
        "Worked with Python and Go to build scalable, distributed backend components.",
        "Processed large volumes of transactional data using BigQuery for risk evaluation models.",
        "Implemented real-time decision flows using messaging queues and CI/CD best practices."
      ]
    },
    {
      role: "Senior Software Engineer .NET",
      company: "ESPN (via Globant)",
      companylogo: require("./assets/images/globant_logo.png"),
      date: "May 2020 – Feb 2021",
      desc: "Led migration and modernization of legacy .NET systems for sports data platforms.",
      descBullets: [
        "Migrated .NET Framework to .NET Core and improved performance by 40%.",
        "Implemented CI/CD pipelines and unit testing with JavaScript.",
        "Deployed services on Azure with integrated monitoring dashboards."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "My personal lab: where experimentation meets real-world application.",
  projects: [
    {
      image: require("./assets/images/langchain_logo.png"),
      projectName: "Google Drive RAG",
      projectDesc:
        "An app that connects to your Google Drive, lets you select PDFs, and ask questions about their content using Retrieval-Augmented Generation (RAG) with OpenAI. Built with Gradio, LangChain, and ChromaDB.",
      footerLink: [
        {
          name: "View on Hugging Face",
          url: "https://huggingface.co/spaces/homodeus/google-drive-rag"
        }
      ]
    },
    {
      image: require("./assets/images/interview_warmup.jpg"),
      projectName: "Interview Warmup",
      projectDesc:
        "A powerful tool that simulates bilingual job interviews using OpenAI's Whisper, ChatGPT, and DALL·E. Ideal for job seekers and recruiters to practice, evaluate, and improve interview performance.",
      footerLink: [
        {
          name: "Try it on Hugging Face",
          url: "https://huggingface.co/spaces/homodeus/interview-warmup"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications in AI, LLMs, and Generative AI development with industry-leading tools and frameworks.",
  achievementsCards: [
    {
      title: "IBM Generative AI Engineering",
      subtitle:
        "Completed a 16-course professional certificate by IBM, covering LLMs, Transformers, LangChain, and RAG-based apps using Hugging Face and PyTorch.",
      image: require("./assets/images/ibm_logo.jpg"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/professional-cert/927ZVSXXP3YH"
        }
      ]
    },
    {
      title: "IBM AI Developer",
      subtitle:
        "Gained skills in full-stack development and generative AI, building intelligent apps with Flask, Python, GPT APIs and prompt engineering.",
      image: require("./assets/images/ibm_logo.jpg"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/professional-cert/67EO8C0OJCBJ"
        }
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      subtitle:
        "Mastered TensorFlow for computer vision, time series, and NLP tasks. Built and deployed ML models as part of a 4-course specialization.",
      image: require("./assets/images/deep_learning_ai_logo.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/professional-cert/9DMZNZDVQBZA"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is always open.",
  number: "+52 5567843855",
  email_address: "jrangelespinoza@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@LittleMartin86", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
