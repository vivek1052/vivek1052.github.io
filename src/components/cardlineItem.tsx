import { ReactElement } from "react";

export default function CardLineItem({
  timeline,
  heading,
  subHeadingIcon,
  subHeading,
  line2Icon,
  line2,
  body,
}: Readonly<{
  timeline: boolean;
  heading: ReactElement;
  subHeadingIcon: ReactElement;
  subHeading: ReactElement;
  line2Icon: ReactElement;
  line2: ReactElement;
  body: ReactElement;
}>) {
  return (
    <div className="flex flex-col print:break-inside-avoid">
      <div className="flex flex-col lg:flex-row print:flex-row justify-between">
        <div className="flex flex-row items-center">
          {timeline && <div className="circle-icon" />}
          <div className="card-text-semibold">{heading}</div>
        </div>

        <div className="flex flex-row items-center">
          {subHeadingIcon}
          <div className="card-text-light">{subHeading}</div>
        </div>
      </div>

      <div
        className={
          timeline
            ? "lg:border-l-2 print:border-l-2 border-slate-500 lg:ml-2 print:ml-2 lg:pl-7 print:pl-7"
            : ""
        }
      >
        <div className="flex flex-row items-center">
          {line2Icon}
          <div className="card-text-light">{line2}</div>
        </div>
        {body}
      </div>
    </div>
  );
}
