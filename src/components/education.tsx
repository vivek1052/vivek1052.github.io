import CardLineItem from "./cardlineItem";
import { calendarIcon, trophyIcon } from "./icons";

const EducationTimeLine = (education: {
  title: string;
  institute: string;
  fromDate: string;
  toDate: string;
  score: string;
  points: string[];
}) => {
  return (
    <CardLineItem
      timeline={true}
      heading={
        <div>
          {education.title.toUpperCase()}{" "}
          <span className="font-thin">from</span>{" "}
          {education.institute.toUpperCase()}
        </div>
      }
      subHeadingIcon={calendarIcon}
      subHeading={
        <div>
          {education.fromDate} to {education.toDate}
        </div>
      }
      line2Icon={trophyIcon}
      line2={<div>{education.score}</div>}
      body={
        <ul className="list">
          {education.points.map((point, index) => {
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

export default function Education({
  educations,
}: Readonly<{
  educations: {
    title: string;
    institute: string;
    fromDate: string;
    toDate: string;
    score: string;
    points: string[];
  }[];
}>) {
  return (
    <div id="education" className="card print:break-inside-avoid">
      <div className="card-title">Education</div>
      {educations.map((education) => {
        return EducationTimeLine(education);
      })}
    </div>
  );
}
