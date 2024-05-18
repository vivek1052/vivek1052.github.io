import { ReactElement } from "react";
import {
  emailIcon,
  githubIcon,
  linkedInIcon,
  locationIcon,
  mediumIcon,
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
}: Readonly<{
  bio: {
    dob: string;
    email: string;
    phone: string;
    address: string;
    webPresence: {
      handle: string;
      link: string;
      icon: ReactElement;
    }[];
  };
}>) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <ContactItem icon={phoneIcon} text={bio.phone} />
        <div className="dot-icon" />
        <ContactItem icon={emailIcon} text={bio.email} />
        <div className="dot-icon" />
        <ContactItem icon={locationIcon} text={bio.address} />
      </div>
      <div className="flex flex-row justify-center mt-1">
        {bio.webPresence.map((web, i) => {
          return (
            <a key={i} href={web.link} className="flex flex-row items-center">
              <ContactItem icon={web.icon} text={web.handle} />
              {i < bio.webPresence.length - 1 && <div className="dot-icon" />}
            </a>
          );
        })}
      </div>
    </div>
  );
}
