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

export default function Home() {
  return (
    <main>
      <div className="body">
        <Header />
        <div className="grid grid-flow-row gap-5 sm:gap-10 xl:gap-20 print:gap-3">
          <TopCard
            name={userData.name}
            title={userData.title}
            subtitle={userData.subtitle}
            bio={userData.bio}
          />
          <About about={userData.aboutMe} />
          <Skills skills={userData.skills} />
          <Experience experiences={userData.experience} />
          <Project projects={userData.projects} />
          <Education educations={userData.education} />
          <Certification certifications={userData.certifications} />
          <Award awards={userData.awards} />
          <Articles articles={userData.articles} />
          <Hobbies hobbies={userData.hobbies} />
        </div>
        <div id="contact" className="print:hidden my-10">
          <Contact bio={userData.bio} />
        </div>
      </div>
    </main>
  );
}
