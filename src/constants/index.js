import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/harshtiwari01",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.cloudskillsboost.google/public_profiles/8f305d14-dd8b-414f-b36f-c46fb9299416",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.cloudskillsboost.google/public_profiles/8f305d14-dd8b-414f-b36f-c46fb9299416",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://leetcode.com/u/theharshtiwari",
      icon: "https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000",
    },
    {
      link:"https://dev.to/imharshtiwari",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@imharshtiwari1#badges",
      icon: holopin,
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
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"Java",
      icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Kubernetes",
      icon: "https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000",
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
      name: "AWS",
      icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
    },
    {
      name:"Docker",
      icon: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
    },
  ];

  const list = [
    {
      id: "java",
      title: "Java",
    },
    {
      id: "c++",
      title: "C++",
    },
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "Cryptography",
      description:
        "The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.",
      tags: [
        {
          name: "cryptography",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://github.com/imharshtiwari/Cryptography",
      source_code_link: "https://github.com/imharshtiwari/Cryptography",
    },
    {
      name: "Snake Yaml",
      description:
        "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
      tags: [
        {
          name: "yaml",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://github.com/imharshtiwari/Snake-Yaml-Project",
      source_code_link: "https://github.com/imharshtiwari/Snake-Yaml-Project",
    },
    {
      name: "CRUD operations",
      description:
        "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/imharshtiwari/CRUD-Operation",
      source_code_link: "https://github.com/imharshtiwari/CRUD-Operation",
    },
    {
      name: "Byte-Array-to-File",
      description:
        "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "byteArray",
          color: "green-text-gradient",
        },
        {
          name: "file",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/imharshtiwari/byte-array-to-file",
      source_code_link: "https://github.com/imharshtiwari/byte-array-to-file",
    },
    {
      name: "Spring Boot One To Many",
      description:
        "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
      tags: [
        {
          name: "onetomany",
          color: "blue-text-gradient",
        },
        {
          name: "springbott",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://github.com/imharshtiwari/oneTomany-springboot",
      source_code_link: "https://github.com/imharshtiwari/oneTomany-springboot",
    },
    {
      name: "OOP Lab",
      description:
        "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://github.com/imharshtiwari/Object-Oriented-Programming-Lab",
      source_code_link: "https://github.com/imharshtiwari/Object-Oriented-Programming-Lab",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/imharshtiwari/Trie-Data-structure",
      source_code_link: "https://github.com/imharshtiwari/Trie-Data-structure",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/imharshtiwari/Data-Structure-Algorithms",
      source_code_link: "https://github.com/imharshtiwari/Data-Structure-Algorithms/",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/imharshtiwari/Computer-Graphics",
      source_code_link: "https://github.com/imharshtiwari/Computer-Graphics",
    },
    
  ];
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://imharshtiwari.github.io/3d-react-portfolio/",
      source_code_link: "https://github.com/imharshtiwari/3d-react-portfolio",
    },
    {
      name: "React portfolio",
      description:
        "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "html css",
          color: "pink-text-gradient",
        },
      ],
      image: react1,
      source_link: "https://imharshtiwari.github.io/React-Portfolio/",
      source_code_link: "https://github.com/imharshtiwari/React-Portfolio",
    },
    {
      name: "30 Days of JavaScript",
      description:
        "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "30dayschallenge",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jsp,
      source_link: "https://rathi-30-days-of-javascript.onrender.com/",
      source_code_link: "https://github.com/imharshtiwari/30-Days-of-Javascript",
    },
    {
      name: "Chit Chat Application",
      description:
        "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
      tags: [
        {
          name: "Chatting",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://chit-chat-app.onrender.com/",
      source_code_link: "https://github.com/imharshtiwari/Chit-Chat-Real_time_chat_app",
    },
    {
      name: "Notes Application",
      description:
        "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
      tags: [
        {
          name: "notes",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://imharshtiwari.github.io/Notes-App/",
      source_code_link: "https://github.com/imharshtiwari/Notes-App",
    },
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
      source_code_link: "https://github.com/imharshtiwari/Final-Year-Project",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://github.com/imharshtiwari/DBMS-SQL-Lab",
      source_code_link: "https://github.com/imharshtiwari/DBMS-SQL-Lab",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://github.com/imharshtiwari/Mini-Project-SQL-LibraryManagement",
      source_code_link: "https://github.com/imharshtiwari/Mini-Project-SQL-LibraryManagement",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://github.com/imharshtiwari/MINI_PROJECT-Snake-and-Ladder",
      source_code_link: "https://github.com/imharshtiwari/MINI_PROJECT-Snake-and-Ladder",
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Devloper",
      company_name: "DigiRises",
      icon: bny,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      link: "",
      points: [
        "Led development of reusable components and UI libraries to accelerate feature delivery across multiple React applications used by internal teams and external clients.",
        "Resolved 75+ frontend and backend bugs during UAT and post-deployment phases, ensuring stable production rollouts. Employed Agile Scrum practices, Git workflows, and automated testing with Jest and Cypress.",
        "Built responsive dashboards and admin panels using React, TailwindCSS, and Redux Toolkit, integrating them with backend microservices for real-time data updates and user interaction.",
        "Added features like drag-and-drop interfaces, toast notifications, skeleton loaders, and accessibility enhancements to improve UX and meet WCAG compliance standards.",
        "Using technologies like React, TypeScript, Node.js, HTML, MongoDB, TailwindCSS,Bootstrap,CSS, and JS .",
      ],
      link: "https://www.digirises.in",
    },
    
    {
      title: "Google Cloud Arcade Facilitator",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Nov 2024",
      link: "",
      points: [
        "Introduction to GCP and more functionalities with free access to quests, skill badges.",
        "Collaborating with cross-functional technologies.",
        "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
        "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
      ],
      link: "https://www.cloudskillsboost.google/public_profiles/8f305d14-dd8b-414f-b36f-c46fb9299416",
    },
    {
      title: "Hacktoberfest",
      company_name: "GitHub",
      icon: hf,
      iconBg: "#E6DEDD",
      date: "Oct (2020 - 2022)",
      link: "",
      points: [
        "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
        "GitHub hosts many open source repositories that contribute to this event.",
      ],
      link: "https://dev.to/imharshtiwari",
    },
  ];
  
  export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps",
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
  
  export { list, profiles, technologies, experiences };
