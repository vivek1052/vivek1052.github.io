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
}

const userData: UserData = {
  name: "Vivek Parashar",
  title: "Fullstack Native Software Engineer",
  subtitle: "MERN Stack | Azure Certified | Shell-SAP-Deloitte",
  aboutMe:
    "I am a Fullstack Native Software Engineer with 8 years of experience, ranging from building ERPs to cloud native softwares. Being part of Product based, Service based and Captive companies, I have acquired a wide range of skillset and experience.",
  bio: {
    dob: "26-Apr-1995",
    email: "vivekparashar811@gmail.com",
    phone: "+91-9884916300",
    address: "Bengaluru-560073",
  },
  skills: [
    {
      title: "Backend Frameworks",
      items: [
        { name: "NodeJS", level: 5 },
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
        { name: "GraphQL", level: 3 },
        { name: "gRPC", level: 2 },
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
      title: "Cloud Platforms",
      items: [{ name: "Azure(Certified)", level: 4 }],
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
        "Redesigned the existing architecture to use asyncronous messaging bus communication instead of REST to improve throughput.",
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
        `Acted as fullstack developer working with CRM ABAP and UI5 for Konica Minolta.`,
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
};

export default userData;
