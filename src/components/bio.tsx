import { ReactElement } from "react";
import {
  calendarIcon,
  emailIcon,
  phoneIcon,
  locationIcon,
  githubIcon,
  linkedInIcon,
} from "./icons";

function getAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function BioItem({
  icon,
  text,
  value,
}: Readonly<{
  icon: JSX.Element;
  text: string;
  value: string | ReactElement;
}>) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row w-32 items-center">
        {icon}
        <div className="card-text">{text}</div>
      </div>
      <div className="card-text">{value}</div>
    </div>
  );
}

export default function Bio({
  bio,
}: {
  bio: {
    dob: string;
    email: string;
    phone: string;
    address: string;
    githubHandle: string;
    githubLink: string;
    linkedinHandle: string;
    linkedinLink: string;
  };
}) {
  return (
    <div className="card">
      <div className="card-title">Bio</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 print:grid-cols-2 gap-2   print:gap-2">
        <BioItem
          icon={calendarIcon}
          text="Age"
          value={`${getAge(bio.dob)} yrs`}
        />
        <BioItem icon={emailIcon} text="Email" value={bio.email} />
        <BioItem icon={phoneIcon} text="Phone" value={bio.phone} />
        <BioItem icon={locationIcon} text="Address" value={bio.address} />
        <BioItem
          icon={githubIcon}
          text="Github"
          value={<a href={bio.githubLink}>{bio.githubHandle}</a>}
        />
        <BioItem
          icon={linkedInIcon}
          text="Linkedin"
          value={<a href={bio.linkedinLink}>{bio.linkedinHandle}</a>}
        />
      </div>
    </div>
  );
}
