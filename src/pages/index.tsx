import About from "@/components/about";
import Header from "@/components/header";
import TopCard from "@/components/topCard";
import userData from "../userData";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Project from "@/components/project";
import Certification from "@/components/certification";
import Award from "@/components/awards";
import Contact from "@/components/contact";
import Hobbies from "@/components/hobbies";
import Articles from "@/components/articles";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-card");
        }
      });
    });

    document.getElementById("parent")?.childNodes.forEach((child) => {
      observer.observe(child as Element);
    });
  }, []);

  return (
    <main>
      <div className="body">
        <Header />
        <div
          id="parent"
          className="grid grid-flow-row  sm:gap-10 xl:gap-20 print:gap-3"
        >
          <TopCard
            name={userData.name}
            title={userData.title}
            subtitle={userData.subtitle}
            bio={userData.bio}
          />
          <About about={userData.aboutMe} />
          <div className="bar-separator" />
          <Skills skills={userData.skills} />
          <div className="bar-separator" />
          <Experience experiences={userData.experience} />
          <div className="bar-separator" />
          <Project projects={userData.projects} />
          <div className="bar-separator" />
          <Education educations={userData.education} />
          <div className="bar-separator" />
          <Certification certifications={userData.certifications} />
          <div className="bar-separator" />
          <Award awards={userData.awards} />
          <div className="bar-separator" />
          <Articles articles={userData.articles} />
          <div className="bar-separator" />
          <Hobbies hobbies={userData.hobbies} />
        </div>
        <div id="contact" className="print:hidden my-10">
          <Contact bio={userData.bio} />
        </div>
      </div>
    </main>
  );
}
