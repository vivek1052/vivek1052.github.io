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
        <div className="flex flex-row print:break-inside-avoid">
            <div className="hidden sm:flex sm:flex-col sm:gap-1">
                <div className="border-4 border-slate-500  rounded-full w-5 h-5 mr-4 mt-2 print:mt-1"></div>
                <div className="border-r-2 border-slate-500 w-0 ml-2  h-full" />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col sm:flex-row justify-between">
                    <h5 className="font-semibold">
                        {experience.title} <span className="font-thin">at</span>{" "}
                        <span className="font-light">{experience.company}</span>
                    </h5>
                    <p className="!my-0 font-light">
                        {experience.fromDate} to {experience.toDate}
                    </p>
                </div>
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
        </div>
    );
}

export default function Experience({
    experiences,
}: {
    experiences: {
        title: string;
        company: string;
        location: string;
        fromDate: string;
        toDate: string;
        points: string[];
    }[];
}) {
    return (
        <Card className="print:break-inside-avoid">
            <Title>Experience</Title>
            <div className="prose prose-lg max-w-none  print:prose-sm">
                {experiences.map((experience) => {
                    return timeLineCard(experience);
                })}
            </div>
        </Card>
    );
}
