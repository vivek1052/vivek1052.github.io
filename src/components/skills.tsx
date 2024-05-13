
const starIconOutLined = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="icon print:w-3 print:h-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

const starIconFilled = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon print:w-3 print:h-3"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

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

function SkillSet(skillSet: Readonly<{
  title: string;
  items: {
    name: string;
    level: number;
  }[];
}>) {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-5 md:gap-10 print:gap-5">
        {skills.map((skill) => {
          return <SkillSet {...skill} />;
        })}
      </div>
    </div>
  );
}
