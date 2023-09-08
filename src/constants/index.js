import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "தானாக கற்றுக்கொள்ள என்ன செய்ய வேண்டும்.",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      //date: "Step 1",
      points: [
        "மாணவர்கள்  தொழில்நுட்ப ரீதியாக குழு சேர வேண்டும்.",
        "தனக்கு ஆர்வமான ஒரு தொழில்நுட்பத்தை தேர்வு செய்ய வேண்டும்.",
        "தொழில்நுட்பத்தை பற்றி கற்க வேண்டும் ஆய்வு செய்ய வேண்டும்.",
        "படிக்கும்போதே தொழில்நுட்பத்தை செய்து பார்க்க வேண்டும்.",
        "தான் கற்ற தொழில்நுட்பத்தை கற்றுக்கொள்ள ஆசைப்படுகின்ற மாணவர்களுக்கு கற்றுக் கொடுக்க வேண்டும்.",
      ],
    },
    {
      title: "Learn new programming",
      company_name: "How to learn new programming language by self?",
      icon: tesla,
      iconBg: "#E6DEDD",
      //date: "Jan 2021 - Feb 2022",
      points: [
        "Make Your Fundamentals Clear.",
        "Learn by Doing, Practicing, and Not Just Reading.",
        "Code by Hand.",
        "Share, Teach, Discuss and Ask for Help.",
        "Use Online Resources.",
        "Learn to Use Debugger.ake Breaks.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "How to Become a Better Web Developer?",
      icon: shopify,
      iconBg: "#383E56",
      //date: "Jan 2022 - Jan 2023",
      points: [
        "Explore different technologies and frameworks.",
        "Consider your personal interests.",
        "Find a project or problem that excites you.",
        "Talk to other web developers.",
        "Take online courses or earn a degree.",
      ],
    },
    {
      title: "Know latest computer technology",
      company_name: "How do you catch up with latest technology?",
      icon: meta,
      iconBg: "#E6DEDD",
      //date: "Jan 2023 - Present",
      points: [
        "Tech journals and blogs.",
        "Podcasts.",
        "Build a network.",
        "Attend conferences or events.",
        "Find a way to engage that interests you.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Blockchain Voting Application",
      description:
        "The blockchain voting system is decentralized and completely open, yet it ensures that voters are protected. This implies that anybody may count the votes with blockchain electronic voting, but no one knows who voted to whom.",
      tags: [
        {
          name: "Matamask",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "green-text-gradient",
        },
        {
          name: "ethereum",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Online ID Card Maker",
      description:
        "ID maker is help to easily create our own id cards, And no need any installaion this applicaion on you machine, because this application run on web Browser. It is also Responsible frontend, So when using mobile it's provide Best View. The Feature of the application is downloading ID Cards in png format.",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://tamilarasi-smvcoder.github.io/SmvIdMaker/web/index.html",
    },
    {
      name: "Face Spoof Detector",
      description:
        "The 'Attendees Recorder with Face Spoof Detector' .This project aims to build a class attendance system with face spoof detection. Which uses the method is based on auxiliary supervision of Fourier spectrum. CNN model is learned to estimate the face depth with pixel-wise supervision.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Artificial Intelligent",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/tamilarasi-smvcoder/FaceLiveness/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };