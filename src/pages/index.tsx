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
import Bio from "@/components/bio";

export default function Home() {
  return (
    <main>
      <div className="body">
        <Header />
        <div className="grid grid-flow-row gap-5 pb-5 sm:gap-10 sm:pb-10 xl:gap-20 xl:pb-20 print:gap-5">
          <TopCard
            name={userData.name}
            title={userData.title}
            subtitle={userData.subtitle}
          />
          <About about={userData.aboutMe} />
          <Bio bio={userData.bio} />
          <Skills skills={userData.skills} />
          <Experience experiences={userData.experience} />
          <Project projects={userData.projects} />
          <Education educations={userData.education} />
          <Certification certifications={userData.certifications} />
          <Award awards={userData.awards} />
        </div>
      </div>
    </main>
  );
}
