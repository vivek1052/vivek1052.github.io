function SkillSet(
  skillSet: Readonly<{
    title: string;
    items: {
      name: string;
      level: number;
    }[];
  }>
) {
  return (
    <div className="print:break-inside-avoid">
      <div className="card-text-semibold">{skillSet.title}</div>
      <ul className="list">
        {skillSet.items.map((item, i) => {
          return (
            <li key={i} className="list-item">
              <div className="relative w-full  whitespace-nowrap indent-2 print:indent-1 z-0">
                <div
                  className="absolute overflow-hidden z-10 bg-slate-600 text-slate-50 "
                  style={{ width: `${item.level * 20}%` }}
                >
                  {item.name}
                </div>
                <div className="absolute overflow-hidden  w-full bg-slate-200">
                  {item.name}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Skills({
  skills,
}: Readonly<{
  skills: {
    title: string;
    items: {
      name: string;
      level: number;
    }[];
  }[];
}>) {
  return (
    <div className="card">
      <div className="card-title">Professional Skills</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 print:grid-cols-4 gap-5 md:gap-10 print:gap-3">
        {skills.map((skill, i) => {
          return <SkillSet key={i} {...skill} />;
        })}
      </div>
    </div>
  );
}
