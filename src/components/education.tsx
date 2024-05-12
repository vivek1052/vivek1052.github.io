import Card from "./card";
import Title from "./title";

const plusCircleIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

function timeLineCard(education: {
    title: string;
    institute: string;
    fromDate: string;
    toDate: string;
    score: string;
    points: string[];
}) {
    return (
        <div className="flex flex-col w-full print:break-inside-avoid">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-row items-center">
                    <div className="hidden sm:inline border-4 border-slate-500  rounded-full w-5 h-5 mr-4" />
                    <h5 className="font-semibold">
                        {education.title} <span className="font-thin">from</span>{" "}
                        {education.institute}
                    </h5>
                </div>
                <p className="!my-0 font-light">
                    {education.fromDate} to {education.toDate}
                </p>
            </div>
            <div className="sm:border-l-2 border-slate-500 sm:ml-2 sm:pl-7">
                <p className="!my-0">{education.score}</p>
                <ul className="print:my-2">
                    {education.points.map((point, index) => {
                        return <li key={index} className="print:text-sm">{point}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default function Education({ educations }: Readonly<{
    educations: {
        title: string;
        institute: string;
        fromDate: string;
        toDate: string;
        score: string;
        points: string[];
    }[]
}>) {
    return (
        <Card>
            <Title>Education</Title>
            <div className="prose prose-lg max-w-none  print:prose-sm">
                {educations.map((education) => {
                    return timeLineCard(education);
                })}
            </div>
        </Card>
    );
}