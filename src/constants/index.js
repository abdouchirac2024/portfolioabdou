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
    title: "React vue js  Developer",
    icon: mobile,
  },
  {
    title: "Backend laravel  Developer",
    icon: backend,
  },
  {
    title: "wordpress Creator",
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
    "title": "Laravel 9 Livewire Developer",
    "company_name": "Janli Consulting",
   icon: meta,
    "iconBg": "#383E56",
    "date": "30 mai a 30 aout 2022",
    "points": [
      "Developed a web-based mail management application for a bank using Laravel Livewire.",
      "Worked in a team of 3, utilizing Tailwind CSS for the layout.",
      "Collaborated with cross-functional teams to ensure product quality.",
      "Implemented responsive designs and ensured cross-browser compatibility."
    ],
  }
  ,
  {
    "title": "Laravel Vue.js Tailwind CSS",
    "company_name": "Geno",
    // "icon": "tesla",  // You can replace this with the appropriate icon
    "iconBg": "#E6DEDD",
    "date": "Jan 2023 - Feb 2023",
    "points": [
      "I performed image maintenance on the website https://africaunity.net/.",
      "Added new features, including the publication of articles and blogs.",
      "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers."
    ],
  }
  ,
  {
    title: "Web Developer",
    company_name: "freelance ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "davinci",
    "icon": "tesla",
    iconBg: "#E6DEDD",
    date: "MAI 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "jsendmail",
    description:
      " Jsendmail allows managing all the company's mail traffic and client requests in real-time.",
    tags: [
      {
        name: "laravel& liwevire",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abdouchirac2024/",
  },
  {
    name: "jobs.adaalearning",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravet api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abdouchirac2024/",
  },
  {
    name: "AfricaUnity",
    description:
      "The site AfricaUnity is a professional and social network platform that connects users across Africa. It aims to foster collaboration, networking, and social interaction among professionals and individuals. Users can join communities, create profiles, and engage in discussions and connections related to various industries and social causes. The site appears to focus on empowering African unity through digital connections.",
    tags: [
      {
        name: "vue js 3",
        color: "blue-text-gradient",
      },
      {
        name: "laravel api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abdouchirac2024/",
  },
];

export { services, technologies, experiences, testimonials, projects };
