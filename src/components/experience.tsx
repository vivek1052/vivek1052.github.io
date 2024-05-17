import CardLineItem from "./cardlineItem";
import { locationIcon, calendarIcon } from "./icons";

const ExperienceTimeline = (experience: {
  title: string;
  company: string;
  location: string;
  fromDate: string;
  toDate: string;
  points: string[];
}) => {
  return (
    <CardLineItem
      timeline={true}
      heading={
        <div>
          {experience.title.toUpperCase()} <span className="font-thin">at</span>{" "}
          {experience.company.toUpperCase()}
        </div>
      }
      subHeadingIcon={calendarIcon}
      subHeading={
        <div>
          {experience.fromDate} to {experience.toDate}
        </div>
      }
      line2Icon={locationIcon}
      line2={<div>{experience.location}</div>}
      body={
        <ul className="list">
          {experience.points.map((point, index) => {
            return (
              <li key={index} className="list-item">
                {point}
              </li>
            );
          })}
        </ul>
      }
    />
  );
};

export default function Experience({
  experiences,
}: Readonly<{
  experiences: {
    title: string;
    company: string;
    location: string;
    fromDate: string;
    toDate: string;
    points: string[];
  }[];
}>) {
  return (
    <div id="experience" className="card">
      <div className="card-title">Experience</div>
      {experiences.map((experience) => {
        return ExperienceTimeline(experience);
      })}
    </div>
  );
}
