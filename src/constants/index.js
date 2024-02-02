import {
  mobile,
  backend,
  creator,
  nextjs,
  sass,
  bootstrap,
  express,
  postman,
  vscode,
  web,
  excel,
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
  collin,
  udemy,
  techedu,
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  // {
  //   name: "Express JS",
  //   icon: express,
  // },
  // {
  //   name: "Postman",
  //   icon: postman,
  // },
  // {
  //   name: "VS Code",
  //   icon: vscode,
  // },
  {
    name: "Microsoft Excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Front End Web Developer",
    company_name: "Collin It Solution, Kharadi, Pune",
    icon: collin,
    iconBg: "#fff",
    date: "February 2023 - July 2023",
    points: [
      "Developed responsive and user-friendly front-end solutions with HTML, CSS, and JavaScript.",
      "Reduced user-reported issues by 15% through effective front-end bug resolution and attention to details. ",
      "Transformed WordPress site to static HTML, CSS, and JavaScript, boosting website performance and load times by 30%.",
      "Participating in code reviews and providing constructive feedback to team.",
    ],
  },
  {
    title: "Web Development Bootcamp",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#fff",
    date: "September 2022 - December 2022",
    points: [
      "Proficient in HTML/CSS for web page structure, skilled in JavaScript for dynamic content, and adept at responsive design for seamless functionality across devices.",
      "Leveraging industry-standard frameworks, proficient in React for frontend development, and demonstrating expertise in Express for backend, ensuring efficient and scalable web application architecture.",
      "Proficient in server-side programming with Node.js, adept at database management with MongoDB, and skilled in creating and consuming APIs for seamless data exchange between frontend and backend.",
      "Git/GitHub : Collaborating on projects, managing branches, and resolving merge conflicts using version control.",
      "Project Organization: Structuring codebase and following best practices for maintainability.",
    ],
  },
];

const testimonials = [
  {
    certificate_link:
      "https://drive.google.com/file/d/1S_XZgw56I8dDulzpsHrSi_QcW7jrQPUD/view?usp=drive_link",
    name: "Web Development Bootcamp",
    date: "31 December 2022",
    company: "Udemy",
    image: "src/assets/certificates/certificate.png",
  },
  {
    certificate_link:
      "https://drive.google.com/file/d/1FubwX-jPHtBdvS5VI9ZODbFefmIDlZGv/view?usp=drive_link",
    name: "Web Developmet Intern",
    date: "February 2023 - July 2023",
    company: "Collin It Solution",
    image: "src/assets/certificates/certificate-1.png",
  },
  {
    certificate_link:
      "https://drive.google.com/file/d/15P36-AwEe5La87lGrwOvasb0YwGm5qoT/view?usp=drive_link",
    name: "Microsoft Excel - Master Program",
    date: "28 September 2021",
    company: "Udemy",
    image: "src/assets/certificates/certificate-2.png",
  },
];

const projects = [
  {
    name: "ShopingGo",
    website_link: "https://shopinggo.vercel.app/",
    description:
      "ShopingGo : E-commerce platform for exploring, purchasing, and managing a wide range of products, providing convenience and efficiency for all your shopping need.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/shopinggo.png",
    source_code_link: "https://github.com/MRadesh3/shopingGo",
  },
  {
    name: "ThoughtFlix",
    website_link: "https://thoughtflix.vercel.app/",
    description:
      "ThoughtFlix: A full-stack platform where users share and animate profound thoughts and quotes, bringing them to life with innovation and sophistication.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "next auth",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "blue-text-gradient",
      },
      {
        name: "google cloud",
        color: "green-text-gradient",
      },
    ],
    image: "src/assets/projects/thoughtflix.png",
    source_code_link: "https://github.com/MRadesh3/thoughtFlix",
  },
  {
    name: "React Admin Dashboard",
    website_link: "https://reactadmindashboard-seven.vercel.app/",
    description:
      "A React admin dashboard is a dynamic web application interface designed for efficiently managing and visualizing data within an organization.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html 5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/projects/adminboard.png",
    source_code_link: "https://github.com/MRadesh3/react_admindashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
