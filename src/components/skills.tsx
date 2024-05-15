import { starIconFilled, starIconOutLined } from "./icons";

function Profeciency(level: number) {
  const filledStars = level;
  const emptyStars = 5 - level;
  return (
    <div className="flex flex-row items-center">
      {[...Array(filledStars)].map(() => {
        return starIconFilled;
      })}
      {[...Array(emptyStars)].map(() => {
        return starIconOutLined;
      })}
    </div>
  );
}

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
              <div className="flex flex-row justify-between">
                {item.name}
                {Profeciency(item.level)}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-5 md:gap-10 print:gap-3">
        {skills.map((skill, i) => {
          return <SkillSet key={i} {...skill} />;
        })}
      </div>
    </div>
  );
}
