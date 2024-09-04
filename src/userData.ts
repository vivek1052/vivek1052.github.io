import { ReactElement } from "react";
import { githubIcon, linkedInIcon, mediumIcon } from "./components/icons";

interface UserData {
  name: string;
  title: string;
  subtitle: string;
  aboutMe: string;
  bio: {
    dob: string;
    email: string;
    phone: string;
    address: string;
    webPresence: {
      handle: string;
      link: string;
      icon: ReactElement;
    }[];
  };
  skills: {
    title: string;
    items: {
      name: string;
      level: number;
    }[];
  }[];
  experience: {
    title: string;
    company: string;
    location: string;
    fromDate: string;
    toDate: string;
    points: string[];
  }[];
  education: {
    title: string;
    institute: string;
    fromDate: string;
    toDate: string;
    score: string;
    points: string[];
  }[];
  projects: {
    title: string;
    description: string;
    techStack: string;
    github: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    issuedDate: string;
    validationLink: string;
  }[];
  awards: {
    title: string;
    issuer: string;
    issuedDate: string;
    description: string;
  }[];
  articles: {
    title: string;
    link: string;
    date: string;
  }[];
  hobbies: string[];
}

const userData: UserData = {
  name: "Vivek Parashar",
  title: "Full-Stack Native Software Engineer | 8+ Years Exp.",
  subtitle: "MERN Stack | Azure Certified | Shell-SAP-Deloitte",
  aboutMe:
    "I am a JavaScript Full Stack Native Software Engineer with 8 years of experience, ranging from building ERPs to cloud native softwares. Being part of different sectors, I have acquired a wide range of skillset and domain expertise.",
  bio: {
    dob: "26-Apr-1995",
    email: "vivekparashar811@gmail.com",
    phone: "+91-9884916300",
    address: "Bengaluru-560073",
    webPresence: [
      {
        handle: "vivek1052",
        link: "https://github.com/vivek1052",
        icon: githubIcon,
      },
      {
        handle: "vivek-parashar-a525a469",
        link: "https://www.linkedin.com/in/vivek-parashar-a525a469/",
        icon: linkedInIcon,
      },
      {
        handle: "vivekparashar811",
        link: "https://medium.com/@vivekparashar811",
        icon: mediumIcon,
      },
    ],
  },
  skills: [
    {
      title: "Backend Frameworks",
      items: [
        { name: "NodeJS/Typescript", level: 5 },
        { name: "ExpressJS", level: 5 },
        { name: "NestJS", level: 5 },
        { name: "SAP Capire", level: 4 },
      ],
    },
    {
      title: "Frontend Frameworks",
      items: [
        { name: "ReactJS", level: 5 },
        { name: "HTML5/CSS", level: 5 },
        { name: "Tailwind/Bootstrap", level: 5 },
        { name: "SAP UI5", level: 4 },
        { name: "Next.js/Vue.js", level: 3 },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { name: "Docker", level: 5 },
        { name: "Docker-compose", level: 5 },
        { name: "Kubernetes", level: 3 },
        { name: "Github Actions", level: 3 },
        { name: "Terraforms", level: 2 },
      ],
    },
    {
      title: "Transport Protocols",
      items: [
        { name: "REST+HATEOAS", level: 5 },
        { name: "Odata", level: 5 },
        { name: "Message Queues", level: 5 },
        { name: "Pub Sub/Events", level: 3 },
        { name: "GraphQL", level: 3 },
      ],
    },
    {
      title: "Databases/ORMs/ODMs",
      items: [
        { name: "MongoDB", level: 5 },
        { name: "Mongoose", level: 5 },
        { name: "PostgreSQL", level: 4 },
        { name: "TypeORM", level: 4 },
        { name: "Redis", level: 3 },
      ],
    },
    {
      title: "Auth Protocols",
      items: [
        { name: "OIDC", level: 5 },
        { name: "OAuth2", level: 5 },
        { name: "JWT", level: 5 },
        { name: "Session", level: 5 },
        { name: "Basic Auth", level: 5 },
      ],
    },
    {
      title: "Architectures",
      items: [
        { name: "Monolith", level: 5 },
        { name: "Microservices", level: 4 },
        { name: "MVC", level: 4 },
        { name: "Onion Architecture", level: 3 },
      ],
    },
    {
      title: "Cloud Platforms",
      items: [{ name: "Azure(Certified)", level: 3 }],
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Shell India Pvt Ltd",
      location: "Bengaluru",
      fromDate: "Feb 2023",
      toDate: "Present",
      points: [
        "Developed and maintained Blockchain based book and claim platform for Sustainable Aviation Fuel, Avelia. Project used React, NestJS, MongoDB, etherjs and was deployed on Azure Kubernetes Service using Github Actions.",
        "Redesigned the existing architecture to use asyncronous messaging bus instead of REST for microservice to microservice communication which improved throughput. Increased volume handling from 5 to 49 million gallons, potentially reducing 450,000 tonnes of CO2 emissions.",
        "Developed RBAC module inorder to make the platform multi-tenant/multi-persona.",
        "Contributed to open source and inhouse capability building by developing various libraries such as Odata filter parser and Azure Service Bus wrapper for Nestjs.",
      ],
    },
    {
      title: "Developer",
      company: "SAP Labs",
      location: "Bengaluru",
      fromDate: "Apr 2022",
      toDate: "Feb 2023",
      points: [
        `Pioneered a 'Pay per Use' solution using SAP IoT, SAP Subscription Billing and Edge Computing for Industrial IoT challenge. It created billing in SAP Subscription Billing service based on the usage of a crane mounted on a shipping vessel. Gained experience in provisioning and managing IoT sensor nodes.`,
        `Designed and developed Planned Landed Cost and Landed Cost feature for SRM in Business ByDesign.`,
      ],
    },
    {
      title: "Associate Developer",
      company: "SAP Labs",
      location: "Bengaluru",
      fromDate: "May 2020",
      toDate: "May 2022",
      points: [
        `Contributed towards migration of the SaaS ERP product, Business ByDesign, from ABAP to a Node.js-based framework running in a containerized environment using Docker and Kubernetes. Potentially reduced operational expenses by 30% by using cloud service providers such as Alicloud and GCC.`,
        `Worked on the design and development of the Invoice Scanning feature using ML to scan physical and digital invoices and create a copy in ByDesign. Reduced the time taken to create an invoice by 50%.`,
        `Gained experience deploying containerized applications using Jenkins CI/CD pipelines. Learned about design patterns and their use within enterprise-grade framework architecture.`,
      ],
    },
    {
      title: "Consultant",
      company: "Deloitte Consulting USI",
      location: "Bengaluru",
      fromDate: "Sep 2019",
      toDate: "Apr 2020",
      points: [
        `Acted as a full-stack developer for Caterpillar's Transport Unit Monitoring web application using OpenUI5 and OData (REST) APIs. Reduced the lead time for detecting issues in transport units by 30%.`,
      ],
    },
    {
      title: "Business Technology Analyst",
      company: "Deloitte Consulting USI",
      location: "Bengaluru",
      fromDate: "Aug 2016",
      toDate: "Aug 2019",
      points: [
        `Engineered OData (REST) APIs using SAP Gateway and an SQL database to be consumed by Konica Minolta's E-commerce web application, which was developed using OpenUI5 (a JavaScript framework).`,
        `Designed and developed an IDOC monitoring and processing tool using OpenUI5 and OData services.`,
      ],
    },
  ],
  education: [
    {
      title: "BTech in Electronics and Communications Engineering",
      institute: "VIT University",
      fromDate: "2012",
      toDate: "2016",
      score: "9.01 CGPA",
      points: [
        "Won the Texas Instruments Analog Challenge, participated in tech events, and received multiple Best Project Awards.",
        "Worked on IoT-based remote surveillance project recognized by the college.",
        "Developed an LMS noise cancellation algorithm in C.",
      ],
    },
  ],
  projects: [
    {
      title: "Azure Service Bus Wrapper for NestJS",
      description:
        "This is a wrapper library which provides modules for Azure Service Bus package. It allows to create Queues/Controllers using decorators just as Nestjs. Connections are pooled and reused preventing duplicate connections being made to same resource.",
      techStack: "Typescript, Azure Service Bus, NestJS",
      github: "https://github.com/vivek1052/azure-service-bus-nestjs-wrapper",
    },
    {
      title: "Odata Filter Parser",
      description:
        "This is a database agnostic library which can be used to parse Odata $filter to a database specific query. Currently it supports MongoDB and SQL.",
      techStack: "Typescript",
      github: "https://github.com/vivek1052/odata-filter-parser",
    },
    {
      title: "Darpan",
      description:
        "A Photo gallery/manager app written in SAP CAPIRE and Vuejs which can be self hosted as a docker container.",
      techStack: "SAP CAPIRE, CAP CDS, Vuejs, Docker",
      github: "https://github.com/vivek1052/Darpan",
    },
    {
      title: "Portfolio",
      description:
        "Developer Portfolio website. This resume is generated using this project.",
      techStack: "Next.js, Tailwindcss, Typescript",
      github: "https://github.com/vivek1052/vivek1052.github.io",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      issuedDate: "Mar 2023",
      validationLink:
        "https://www.credly.com/badges/aa9c3ec7-8e5d-4e0f-bd37-19fb382603f8/linked_in_profile",
    },
    {
      title: "Certified In Cybersecurity",
      issuer: "ISC2",
      issuedDate: "Aug 2024",
      validationLink:
        "https://www.credly.com/badges/ffbfd08f-225c-435c-aac2-856c6e5c82b7/public_url",
    },
    {
      title: "Software Developer Boot Camp",
      issuer: "Construx Software",
      issuedDate: "Aug 2023",
      validationLink: "www.construx.com",
    },
    {
      title: "LFC131: Green Software for Practitioners",
      issuer: "Linux Foundation",
      issuedDate: "Mar 2024",
      validationLink:
        "https://www.credly.com/earner/earned/badge/92e3361f-275d-44db-9bfd-1c926ea53289",
    },
    {
      title: "Open SAP UI5",
      issuer: "SAP",
      issuedDate: "Jan 2020",
      validationLink:
        "https://open.sap.com/verify/xepem-hitep-zotig-lubez-duvob",
    },
  ],
  awards: [
    {
      title: "Continuous Development & Improvement Award",
      issuer: "Shell India Pvt Ltd",
      issuedDate: "2023",
      description:
        "Awarded for revamping the Avelia platform service-service communication and retrofitting REST apis with querying/pagination capabilities.",
    },
    {
      title: "Innersource Star",
      issuer: "Shell India Pvt Ltd",
      issuedDate: "2023",
      description:
        "Awarded for contributing to Innersource(Shell's reuse platform).",
    },
    {
      title: "Take It Higher",
      issuer: "SAP Labs SME Application Development",
      issuedDate: "2021",
      description:
        "Received award for innovations of products, tools, processes. and constantly striving to improve things, for proposing new ideas.",
    },
    {
      title: "Applause Award",
      issuer: "Deloitte USI Consulting",
      issuedDate: "2019",
      description:
        "Appreciated for outstanding performance for client Caterpillar.",
    },
    {
      title: "Spot Award",
      issuer: "Deloitte USI Consulting",
      issuedDate: "2018",
      description:
        "Appreciated for contributing towards UI5 B2B Workbench tool.",
    },
    {
      title: "Spot Award",
      issuer: "Deloitte USI Consulting",
      issuedDate: "2017",
      description: "Appreciated for performance on West Pharma project.",
    },
  ],
  articles: [
    {
      title: "Azure Service Bus with Nestjs Decorators?",
      link: "https://medium.com/@vivekparashar811/azure-service-bus-with-nestjs-decorators-0a2dd2d36942",
      date: "Nov 2023",
    },
  ],
  hobbies: ["Selfhosting Home Server", "Home Automation", "DIY Audio"],
};

export default userData;
