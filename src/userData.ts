interface UserData {
  name: string;
  title: string;
  aboutMe: string;
  bio: {
    age: number;
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
  aboutMe:
    "I am a Fullstack Native Software Engineer with 8 years of experience, ranging from building ERPs to cloud native softwares.Being part of Product based, Service based and Captive companies, I have acquired a wide range of skillset and experience.",
  bio: {
    age: 29,
    email: "vivekparashar811@gmail.com",
    phone: "+91-9884916300",
    address: "Bluella Apt., Chinnapanahalli, Bengaluru-560073",
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
  ],
};

export default userData;
