import { calendarIcon, locationIcon } from "./about";


function TimeLineCard(experience: {
    title: string;
    company: string;
    location: string;
    fromDate: string;
    toDate: string;
    points: string[];
}) {
    return (

        <div className="flex flex-col w-full print:break-inside-avoid">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-row items-center">
                    <div className="circle-icon" />
                    <div className="card-text-semibold">
                        {experience.title} <span className="font-thin">at</span>{" "}
                        {experience.company}
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    {calendarIcon}
                    <div className="card-text-light">
                        {experience.fromDate} to {experience.toDate}
                    </div>
                </div>
            </div>
            <div className="sm:border-l-2 border-slate-500 sm:ml-2 sm:pl-7">
                <div className="flex flex-row items-center">
                    {locationIcon}
                    <div className="card-text-light">{experience.location}</div>
                </div>
                <ul className="list">
                    {experience.points.map((point, index) => {
                        return <li key={index} className="list-item">{point}</li>;
                    })}
                </ul>
            </div>
        </div >

    );
}

export default function Experience({
    experiences,
}: Readonly<{
    experiences: {
        title: string;
        company: string;
        location: string;
        fromDate: string;
        toDate: string;
        points: string[];
    }[];
}>) {
    return (
        <div className="card">
            <div className="card-title">Experience</div>
            {experiences.map((experience) => {
                return TimeLineCard(experience);
            })}
        </div>
    );
}
