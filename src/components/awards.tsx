import CardLineItem from "./cardlineItem";
import { calendarIcon, instituteIcon } from "./icons";

const AwardTimeline = (award: {
  title: string;
  issuer: string;
  issuedDate: string;
  description: string;
}) => {
  return (
    <CardLineItem
      timeline={false}
      heading={
        <div>
          {award.title + " "} <span className="font-thin">from</span>
          {" " + award.issuer}
        </div>
      }
      subHeadingIcon={calendarIcon}
      subHeading={<div>{award.issuedDate}</div>}
      line2Icon={<div />}
      line2={<div>{award.description}</div>}
      body={<div />}
    />
  );
};

export default function Award({
  awards,
}: Readonly<{
  awards: {
    title: string;
    issuer: string;
    issuedDate: string;
    description: string;
  }[];
}>) {
  return (
    <div id="award" className="card">
      <div className="card-title">Awards & Recognition</div>
      <ul className="list">
        {awards.map((award, i) => {
          return (
            <li key={i} className="list-item my-6 print:my-2">
              {AwardTimeline(award)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
