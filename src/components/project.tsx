
const linkIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>


const ProjectTimeline = (project: {
    title: string;
    description: string;
    techStack: string;
    github: string;
}) => {
    return (
        <div className="flex flex-col w-full print:break-inside-avoid">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-row items-center">
                    <div className="circle-icon" />
                    <div className="card-text-semibold">
                        {project.title}
                    </div>
                </div>
                <div className="card-text-light">
                    {project.techStack}
                </div>
            </div>
            <div className="sm:border-l-2 border-slate-500 sm:ml-2 sm:pl-7">
                <a href={project.github}>
                    <div className="flex flex-row items-center">
                        {linkIcon}
                        <div className="card-text-light">{project.github}</div>
                    </div>
                </a>
                <div className="card-text my-6">{project.description}</div>
            </div>
        </div>
    );
}
export default function Project({ projects }: {
    projects: {
        title: string;
        description: string;
        techStack: string;
        github: string;
    }[]
}) {
    return (
        <div className="card">
            <div className="card-title">Project</div>
            {projects.map((project) => {
                return ProjectTimeline(project);
            })}
        </div>
    );
}
