import About from "@/components/about";
import Body from "@/components/body";
import Header from "@/components/header";
import TopCard from "@/components/topCard";
import userData from "../userData";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Body>
        <Header />
        <div className="grid grid-flow-row gap-5 sm:gap-10 xl:gap-20 print:gap-5">
          <TopCard
            name={userData.name}
            title={userData.title}
            subtitle={userData.subtitle}
          />
          <About about={userData.aboutMe} bio={userData.bio} />
          <Skills skills={userData.skills} />
        </div>
      </Body>
    </main>
  );
}
