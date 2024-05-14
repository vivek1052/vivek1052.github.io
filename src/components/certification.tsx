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
      heading={<div>{certification.title}</div>}
      subHeadingIcon={calendarIcon}
      subHeading={<div>{certification.issuedDate}</div>}
      line2Icon={instituteIcon}
      line2={<div>{certification.issuer}</div>}
      body={
        <a href={certification.validationLink}>
          <div className="flex flex-row items-center">
            {linkIcon}
            <div className="card-text-light">
              {certification.validationLink}
            </div>
          </div>
        </a>
      }
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
    <div className="card">
      <div className="card-title">Certification</div>
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
