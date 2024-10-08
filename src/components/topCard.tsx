import { ReactElement } from "react";
import Contact from "./contact";

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
    webPresence: {
      handle: string;
      link: string;
      icon: ReactElement;
    }[];
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
          className="print:hidden border-4 rounded-full w-72 mx-auto"
        />

        <div className="print:py-0 mx-auto text-center py-2">
          <div className="text-4xl font-light tracking-[0.2em] text-white mb-5 print:text-black print:text-3xl print:mb-3">
            {name.toUpperCase()}
          </div>
          <div className="text-xl font-normal tracking-wide sm:tracking-widest text-slate-300 print:text-black">
            {title}
          </div>
          <div className="text-xl font-normal tracking-wide sm:tracking-widest text-slate-300  print:text-black">
            {subtitle}
          </div>
          <div className="hidden print:block mt-3 mb-5">
            <Contact bio={bio} />
          </div>
          <button
            className="print:hidden bg-cyan-400 px-4 py-2 mt-4 rounded-full card-text-light tracking-widest"
            onClick={() => {
              window.print();
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
