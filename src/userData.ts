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
    githubHandle: string;
    githubLink: string;
    linkedinHandle: string;
    linkedinLink: string;
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
}

const userData: UserData = {
  name: "Vivek Parashar",
  title: "Full-stack Native Software Engineer",
  subtitle: "MERN Stack | Azure Certified | Shell-SAP-Deloitte",
  aboutMe:
    "I am a Javascript Full-stack Native Software Engineer with 8 years of experience, ranging from building ERPs to cloud native softwares. Being part of different sectors, I have acquired a wide range of skillset and domain expertise.",
  bio: {
    dob: "26-Apr-1995",
    email: "vivekparashar811@gmail.com",
    phone: "+91-9884916300",
    address: "Bengaluru-560073",
    githubHandle: "vivek1052",
    githubLink: "https://github.com/vivek1052",
    linkedinHandle: "vivek-parashar-a525a469",
    linkedinLink: "https://www.linkedin.com/in/vivek-parashar-a525a469/",
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
        { name: "Tailwindcss/Bootstrap", level: 5 },
        { name: "SAP UI5", level: 4 },
        { name: "Next.js", level: 3 },
        { name: "Vue.js", level: 3 },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { name: "Docker", level: 5 },
        { name: "Kubernetes", level: 3 },
        { name: "Docker-compose", level: 5 },
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
      title: "Authentication Protocols",
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
        { name: "Microservices", level: 4 },
        { name: "MVC", level: 4 },
        { name: "Onion Architecture", level: 3 },
        { name: "Monolith", level: 5 },
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
        "Developed and maintained Blockchain based book and claim platform for Sustainable Aviation Fuel, Avelia. Project used React, NestJS, MongoDB, etherjs and was deployed on AKS using Github Actions.",
        "Redesigned the existing architecture to use asyncronous messaging bus instead of REST for microservice to microservice communication which improved throughput.",
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
        `Designed and developed features for a SaaS ERP Business ByDesign. Gained experience about large scale framework designs and efficient use of design patterns.`,
        `Proposed a solution for 'Pay per Use' model using SAP IOT and SAP Subscription services as part of Industrial IOT challenge. This solution created billing in SAP Subscription services based on usage of a crane mounted on a shipping vessel.`,
        `Designed and developed Planned Landed Cost and Landed Cost feature for SRM in Business Bydesign.`,
      ],
    },
    {
      title: "Associate Developer",
      company: "SAP Labs",
      location: "Bengaluru",
      fromDate: "May 2020",
      toDate: "May 2022",
      points: [
        `Gained experience about containerized applications with CI/CD pipeline.`,
        `Worked on product migration from ABAP to Nodejs based framework running in a containerized environment using Docker/Kubernetes.`,
        `Worked on design and development of Invoice Scanning feature using ML to scan physical/digital invoices and create a copy in ByDesign.`,
        `New features design and development on existing cloud based ERP, Business ByDesign, in SRM area.`,
      ],
    },
    {
      title: "Consultant",
      company: "Deloitte Consulting USI",
      location: "Bengaluru",
      fromDate: "Sep 2019",
      toDate: "Apr 2020",
      points: [
        `Worked on SD, FI & CRM projects using ABAP, UI5, SAP Gateway and OData for Caterpillar.`,
        `Developed UI5 Fiori app used by the traffic team to monitor Transport Units.`,
        `Was responsible for gathering Business requirements, Development and testing of RICEFW objects acting as Techno-Functional resource.`,
      ],
    },
    {
      title: "Business Technology Analyst",
      company: "Deloitte Consulting USI",
      location: "Bengaluru",
      fromDate: "Aug 2016",
      toDate: "Aug 2019",
      points: [
        `Acted as full-stack developer working with CRM ABAP and UI5 for Konica Minolta.`,
        `Acted as ABAP developer for West Pharmaceuticals. Carried out performance improvement for BOM explosion report.`,
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
        "Won Texas Instruments Analog Challenge along with Tech Events and multiple Best Project Awards.",
        "Worked on IoT based Remote Surveillance Projects recognized by College.",
        "Worked on LMS Noise Cancellation Algorithm developed in C.",
      ],
    },
    {
      title: "12th Board",
      institute: "Scholars Abode, Patna",
      fromDate: "2012",
      toDate: "2012",
      score: "78.8%",
      points: [],
    },
    {
      title: "10th Board",
      institute: "St. Paul's, Abu Road",
      fromDate: "2010",
      toDate: "2010",
      score: "9 CGPA",
      points: [],
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
};

export default userData;
