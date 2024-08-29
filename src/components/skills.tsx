import { useEffect, useRef, useState } from "react";

function SkillSet(
  skillSet: Readonly<{
    title: string;
    items: {
      name: string;
      level: number;
    }[];
  }>
) {
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    listRef.current && observer.observe(listRef.current);
  }, [listRef]);

  return (
    <div>
      <div className="card-text-semibold">{skillSet.title.toUpperCase()}</div>
      <ul className="list" ref={listRef}>
        {skillSet.items.map((item, i) => {
          return (
            <li key={i} className="list-item">
              <div className="relative w-full  whitespace-nowrap indent-2 print:indent-1 z-0">
                <div
                  className="absolute overflow-hidden z-10 bg-transparent"
                  style={{ width: `${item.level * 20}%` }}
                >
                  <div
                    className={`overflow-hidden w-full bg-slate-600 text-slate-50 ${
                      isVisible && "animate-bar"
                    }`}
                  >
                    {item.name}
                  </div>
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
    <div id="skills" className="card">
      <div className="card-title">Skills</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 print:gap-3 print:hidden">
        {skills.map((skill, i) => {
          return <SkillSet key={i} {...skill} />;
        })}
      </div>
      <div className="hidden print:block">
        <ul className="list">
          {skills.map((skill, i) => {
            return (
              <li key={i} className="list-item">
                <div className=" flex flex-row gap-1">
                  <div className="card-text-semibold">
                    {`${skill.title.toUpperCase()}:`}
                  </div>
                  <div>{skill.items.map((item) => item.name).join(", ")}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
