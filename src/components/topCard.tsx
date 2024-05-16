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
export default function TopCard({
  name,
  title,
  subtitle,
  bio,
}: Readonly<{
  name: string;
  title: string;
  subtitle: string;
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
}>) {
  return (
    <div className="card !p-0 !relative">
      <img
        src="/header-background.jpg"
        alt=""
        className="print:hidden h-[546px] object-cover"
      />
      <div className="print:relative print:p-0 absolute z-10 top-0 left-0 w-full h-full p-8 bg-black bg-opacity-60 print:bg-white">
        <img
          src="/avatar.png"
          alt=""
          className="print:hidden border-4 rounded-full w-80 mx-auto"
        />

        <div className="print:py-0 mx-auto text-center py-2">
          <div className="text-4xl font-extrabold text-white mb-5 print:text-slate-600 print:mb-3">
            {name.toUpperCase()}
          </div>
          <div className="text-xl font-normal text-slate-300 print:text-slate-500">
            {title}
          </div>
          <div className="text-xl font-normal text-slate-300  print:text-slate-500">
            {subtitle}
          </div>
          <div className="hidden print:flex flex-row justify-center items-center mt-2">
            <ContactItem icon={phoneIcon} text={bio.phone} />
            <div className="dot-icon" />
            <ContactItem icon={emailIcon} text={bio.email} />
            <div className="dot-icon" />
            <ContactItem icon={locationIcon} text={bio.address} />
          </div>
          <div className="hidden print:flex flex-row justify-center items-center mt-2">
            <ContactItem icon={githubIcon} text={bio.githubHandle} />
            <div className="dot-icon" />
            <ContactItem icon={linkedInIcon} text={bio.linkedinHandle} />
          </div>
        </div>
      </div>
    </div>
  );
}
