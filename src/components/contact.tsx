import {
  emailIcon,
  githubIcon,
  linkedInIcon,
  locationIcon,
  phoneIcon,
} from "./icons";

const ContactItem = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  return (
    <div className="flex flex-row items-center">
      {icon}
      <div className="card-text-semibold text-sm">{text}</div>
    </div>
  );
};

export default function Contact({
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
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <ContactItem icon={phoneIcon} text={bio.phone} />
        <div className="dot-icon" />
        <ContactItem icon={emailIcon} text={bio.email} />
        <div className="dot-icon" />
        <ContactItem icon={locationIcon} text={bio.address} />
      </div>
      <div className="dot-icon hidden lg:inline" />
      <div className="flex flex-row justify-center items-center">
        <a href={bio.githubLink}>
          <ContactItem icon={githubIcon} text={bio.githubHandle} />
        </a>
        <div className="dot-icon" />
        <a href={bio.linkedinLink}>
          <ContactItem icon={linkedInIcon} text={bio.linkedinHandle} />
        </a>
      </div>
    </div>
  );
}
