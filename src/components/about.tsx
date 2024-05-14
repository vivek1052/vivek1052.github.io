import { calendarIcon, emailIcon, locationIcon, phoneIcon } from "./icons";

function BioItem({
  icon,
  text,
  value,
}: Readonly<{
  icon: JSX.Element;
  text: string;
  value: string;
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

export default function About({
  about,
  bio,
}: Readonly<{
  about: string;
  bio: {
    dob: string;
    email: string;
    phone: string;
    address: string;
  };
}>) {
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

  return (
    <div className="card">
      <div className="grid grid-flow-row gap-10 lg:grid-flow-col lg:grid-col-2 lg:gap-20 print:gap-5">
        <div>
          <div className="card-title">About Me</div>
          <div className="card-text">{about}</div>
        </div>

        <div>
          <div className="card-title">Bio</div>
          <div className="grid grid-cols-1 gap-2 print:grid-cols-2  print:gap-0">
            <BioItem
              icon={calendarIcon}
              text="Age"
              value={`${getAge(bio.dob)} yrs`}
            />
            <BioItem icon={emailIcon} text="Email" value={bio.email} />
            <BioItem icon={phoneIcon} text="Phone" value={bio.phone} />
            <BioItem icon={locationIcon} text="Address" value={bio.address} />
          </div>
        </div>
      </div>
    </div>
  );
}
