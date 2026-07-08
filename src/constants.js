// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';


import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postmanLogo from './assets/tech_logo/postman.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';

import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png'
import figmaLogo from './assets/tech_logo/figma.png';

import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Experience Section Logo's
import mernLogo from './assets/company_logo/mern_logo.png';
import prodeskLogo from './assets/company_logo/prodesk_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';

import npmLogo from './assets/work_logo/npm.png';

import cmLogo from './assets/work_logo/cm.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo }, 
    ],
  },
];

  export const experiences = [
  
    {
      id: 1,
      img: mernLogo,
      role: "MERN Stack Developer",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "MySQL",
        "NodeJS",
        "MongoDB",
        "expressJS",
        "API's"
      ],
    },
    {
      id: 2,
      img: prodeskLogo,
      role: "Frontend Intern",
      company: "Prodex IT",
      date: "June 2025 - july 2025",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GBPIET ,Pauri Garhwal",
      date: "Sept 2024 - July 2026",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from UTU University, pauri. During my time at GBPIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GBPIET University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Gurukul Kangri, Haridwar",
      date: "Sept 2021 - Aug 2024",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from GKV, Haridwar. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GKV allowed me to work on projects.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Saraswati Vidhya Mandir, Kashipur",
      date: "Apr 2019 - March 2020",
      desc: "I completed my class 12 education from Saraswati Vidhya Mandir, Kashipur, under the UK board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "UK(XII) - PCM ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Saraswati Vidhya Mandir, Kashipur",
      date: "Apr 2018 - March 2019",
      desc: "I completed my class 10 education from Saraswati Vidhya Mandir School,Kashipur, under the UK board, where I studied Science.",
      degree: "UK(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Frontend quiz!",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase. Simply enter a , and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: " voice TODO list",
      description:
        "It is buil by the help of HTML5, CSS , JavaScript.",
      image: csprepLogo,
      tags: ["React JS","HTML", "CSS", "JavaScript","Node.js"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "My Porfolio Website",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "JSX","Tailwind CSS","JavaScript","Vercel","GitHub","HTML","Emailjs"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 6,
      title: "Dictionary",
      description:
        "An ed-tech platform where users can access data for gain our throuth the meaning of anywords, notes, interview questions, e-books,this technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express",],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
  ];
