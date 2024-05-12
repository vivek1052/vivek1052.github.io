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
}

const userData: UserData = {
  name: "Vivek Parashar",
  title: "Fullstack Native Software Engineer",
  subtitle: "MERN Stack | Azure Certified | Shell-SAP-Deloitte",
  aboutMe:
    "I am a Fullstack Native Software Engineer with 8 years of experience, ranging from building ERPs to cloud native softwares.Being part of Product based, Service based and Captive companies, I have acquired a wide range of skillset and experience.",
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
        { name: "Message Queues/Events", level: 5 },
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
};

export default userData;
