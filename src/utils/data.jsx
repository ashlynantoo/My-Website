import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaChrome,
} from "react-icons/fa";

import {
  SiJavascript,
  SiJquery,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVisualstudiocode,
  SiAtom,
  SiStyledcomponents,
  SiTailwindcss,
  SiDaisyui,
  SiNetlify,
  SiVite,
  SiAirtable,
  SiContentful,
  SiAuth0,
  SiAxios,
  SiReactrouter,
  SiReactquery,
  SiRedux,
  SiStripe,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

import { MdSettings } from "react-icons/md";

import axios from "axios";

const baseUrl = "/.netlify/functions";
export const customFetch = axios.create({
  baseURL: baseUrl,
});

export const title = "Hi, I'm Ashlyn";
export const desc = "I'm a Full Stack Web Developer";

export const pageLinks = [
  {
    id: 1,
    url: "#home",
    text: "home",
  },
  {
    id: 2,
    url: "#about",
    text: "about me",
  },
  {
    id: 3,
    url: "#skills",
    text: "skills",
  },
  {
    id: 4,
    url: "#portfolio",
    text: "portfolio",
  },
  {
    id: 5,
    url: "#contact",
    text: "contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://github.com/ashlynantoo",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/ashlynantoo",
    icon: <FaGithub />,
  },
];

export const jobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "Freelancing",
    period: "January 2021 - Present",
    duties: [
      "Developed front end, back end, and full stack applications as part of learning",
      "Implemented REST APIs in the back end and used these APIs in the front end. Also used APIs from third party applications.",
      "Applications use MVC(Model-View-Controller) architecture thereby enhancing maintainability, scalability, and efficiency",
      "Used react query to avoid unnecessary API requests by caching",
      "Use of redux toolkit for state management in applications",
      "JWT and Cookies used for authentication",
      "Used error handlers to handle errors and methods like hashing, encryption and extra security packages to prevent security attacks",
      "Aggregation pipeline was used to process and summarize the data",
      "Used Stripe to process the payments",
      "Docgen and Postman were used to generate API documentation",
    ],
  },
  {
    id: 2,
    title: "Assistant Systems Engineer",
    company: "Tata Consultancy Services",
    period: "March 2011 - July 2012",
    duties: [
      "Well-versed in all phases of software development life cycle",
      "Trained and worked in Java and Web Technologies",
      "Performed black box testing of software applications",
    ],
  },
];

export const degrees = [
  {
    id: 1,
    title: "Master of Technology (M.Tech)",
    spec: "Computer Science & Engineering",
    period: "August 2012 - August 2014",
  },
  {
    id: 2,
    title: "Bachelor of Technology (B.Tech)",
    spec: "Computer Science & Engineering",
    period: "June 2006 - June 2010",
  },
];

export const courses = [
  {
    id: 1,
    title: "NodeJS Tutorial and Projects Course - Udemy",
    year: "March 2024",
    desc: [
      "NodeJS and ExpressJS Fundamentals, Express Router, Routes & Controllers, Middleware, Error handler, REST API, Postman, MongoDB, Mongoose, Model, JWT, Hashing, Cookies, Security packages, Aggregation pipeline, File upload, Send emails using SendGrid, Stripe, Populate, Mongoose virtuals, Docgen for API docs, Deployment on Render",
    ],
  },
  {
    id: 2,
    title: "React 18 Tutorial and Projects Course - Udemy",
    year: "December 2023",
    desc: [
      "React Fundamentals, React Hooks, Performance, React Router, React Query, Axios HTTP Library, Redux Toolkit, Vite, Chrome DevTools, Contentful CMS, Airtable, Auth0, Tailwind CSS, Styled Components, Stripe, Serverless Netlify Functions, Deployment on Netlify",
    ],
  },
  {
    id: 3,
    title: "The Complete Web Development Bootcamp - Udemy",
    year: "July 2021",
    desc: [
      "Full-Stack Web Development",
      "HTML, CSS, Bootstrap, Javascript, jQuery, React, Node, Express, MongoDB, Mongoose, APIs & RESTful APIs, Git & Version Control",
    ],
  },
];

export const honors = [
  {
    id: 1,
    desc: "'On The Spot Award' for the outstanding contribution to the organization at Tata Consultancy Services, Chennai, India, 2011",
  },
  {
    id: 2,
    desc: "'Best Paper Award' for the research paper 'EEM-LEACH: Energy Efficient Multi-hop LEACH Routing Protocol for Clustered WSNs' at the IEEE International Conference, ICCICCT 2014",
  },
  {
    id: 3,
    desc: "GATE Scholarship for doing Master of Technology in Computer Science & Engineering",
  },
];

export const skillsAndTools = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 5,
    name: "jQuery",
    icon: <SiJquery />,
  },
  {
    id: 6,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 8,
    name: "daisyUI",
    icon: <SiDaisyui />,
  },
  {
    id: 9,
    name: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  {
    id: 10,
    name: "Git & Version Control",
    icon: <FaGitAlt />,
  },
  {
    id: 11,
    name: "Github",
    icon: <FaGithub />,
  },
  {
    id: 12,
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
  },
  {
    id: 13,
    name: "Atom",
    icon: <SiAtom />,
  },
  {
    id: 14,
    name: "Chrome DevTools",
    icon: <FaChrome />,
  },
  {
    id: 15,
    name: "Netlify",
    icon: <SiNetlify />,
  },
  {
    id: 16,
    name: "Vite",
    icon: <SiVite />,
  },
  {
    id: 17,
    name: "Airtable",
    icon: <SiAirtable />,
  },
  {
    id: 18,
    name: "Contentful",
    icon: <SiContentful />,
  },
  {
    id: 19,
    name: "Auth0",
    icon: <SiAuth0 />,
  },
  {
    id: 20,
    name: "Axios",
    icon: <SiAxios />,
  },
  {
    id: 21,
    name: "React Router",
    icon: <SiReactrouter />,
  },
  {
    id: 22,
    name: "React Query",
    icon: <SiReactquery />,
  },
  {
    id: 23,
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },
  {
    id: 24,
    name: "Stripe",
    icon: <SiStripe />,
  },
  {
    id: 25,
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    id: 26,
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    id: 27,
    name: "MongoDB & Mongoose",
    icon: <SiMongodb />,
  },
  {
    id: 28,
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    id: 29,
    name: "APIs & REST APIs",
    icon: <MdSettings />,
  },
  {
    id: 30,
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    id: 31,
    name: "JSON Web Token",
    icon: <SiJsonwebtokens />,
  },
  {
    id: 32,
    name: "Mockaroo",
  },
  {
    id: 33,
    name: "Render",
  },
  {
    id: 34,
    name: "Cloudinary",
  },
  {
    id: 35,
    name: "SendGrid",
  },
  {
    id: 36,
    name: "Docgen",
  },
  {
    id: 37,
    name: "EmailJS",
  },
];
