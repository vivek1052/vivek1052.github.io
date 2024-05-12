import { locationIcon } from "./about";
import Card from "./card";
import Title from "./title";

function timeLineCard(experience: {
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
                    <div className="hidden sm:inline border-4 border-slate-500  rounded-full w-5 h-5 mr-4" />
                    <h5 className="font-semibold">
                        {experience.title} <span className="font-thin">at</span>{" "}
                        {experience.company}
                    </h5>
                </div>
                <p className="!my-0 font-light">
                    {experience.fromDate} to {experience.toDate}
                </p>
            </div>
            <div className="sm:border-l-2 border-slate-500 sm:ml-2 sm:pl-7">
                <div className="flex flex-row gap-2">
                    <p className="!my-0 font-light">{experience.location}</p>
                    {locationIcon}
                </div>
                <ul className="print:my-2">
                    {experience.points.map((point, index) => {
                        return <li key={index} className="print:text-sm">{point}</li>;
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
        <Card>
            <Title>Experience</Title>
            <div className="prose prose-lg max-w-none  print:prose-sm">
                {experiences.map((experience) => {
                    return timeLineCard(experience);
                })}
            </div>
        </Card>
    );
}
