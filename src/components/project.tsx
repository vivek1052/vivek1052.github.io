import CardLineItem from "./cardlineItem";
import { linkIcon, stackIcon } from "./icons";

const ProjectTimeline = (project: {
  title: string;
  description: string;
  techStack: string;
  github: string;
}) => {
  return (
    <CardLineItem
      timeline={false}
      heading={<div>{project.title}</div>}
      subHeadingIcon={stackIcon}
      subHeading={<div>{project.techStack}</div>}
      line2Icon={linkIcon}
      line2={<a href={project.github}>{project.github}</a>}
      body={
        <div className="card-text mt-3 print:mt-2">{project.description}</div>
      }
    />
  );
};

export default function Project({
  projects,
}: Readonly<{
  projects: {
    title: string;
    description: string;
    techStack: string;
    github: string;
  }[];
}>) {
  return (
    <div id="project" className="card">
      <div className="card-title">Projects</div>
      <ul className="list">
        {projects.map((project, i) => {
          return (
            <li key={i} className="list-item my-6 print:my-2">
              {ProjectTimeline(project)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
