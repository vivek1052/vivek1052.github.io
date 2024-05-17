import CardLineItem from "./cardlineItem";
import { calendarIcon, instituteIcon, linkIcon } from "./icons";

const CertificationTimeline = (certification: {
  title: string;
  issuer: string;
  issuedDate: string;
  validationLink: string;
}) => {
  return (
    <CardLineItem
      timeline={false}
      heading={
        <div>
          {certification.title} <span className="font-thin">from </span>{" "}
          {certification.issuer}
        </div>
      }
      subHeadingIcon={calendarIcon}
      subHeading={<div>{certification.issuedDate}</div>}
      line2Icon={linkIcon}
      line2={
        <a href={certification.validationLink}>
          {certification.validationLink}
        </a>
      }
      body={<div></div>}
    />
  );
};

export default function Certification({
  certifications,
}: Readonly<{
  certifications: {
    title: string;
    issuer: string;
    issuedDate: string;
    validationLink: string;
  }[];
}>) {
  return (
    <div id="certification" className="card">
      <div className="card-title">Certifications</div>
      <ul className="list">
        {certifications.map((certification, i) => {
          return (
            <li key={i} className="list-item my-6 print:my-2">
              {CertificationTimeline(certification)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
