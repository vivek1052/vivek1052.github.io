import Card from "./card";
import Title from "./title";

const starIconOutLined = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
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
    className="w-5 h-5"
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
    <div className="flex flex-row">
      {[...Array(filledStars)].map(() => {
        return starIconFilled;
      })}
      {[...Array(emptyStars)].map(() => {
        return starIconOutLined;
      })}
    </div>
  );
}

function SkillSet(skillSet: {
  title: string;
  items: {
    name: string;
    level: number;
  }[];
}) {
  return (
    <div className="prose print:break-inside-avoid print:prose-sm">
      <h4>{skillSet.title}</h4>
      <ul>
        {skillSet.items.map((item) => {
          return (
            <li>
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
}: {
  skills: {
    title: string;
    items: {
      name: string;
      level: number;
    }[];
  }[];
}) {
  return (
    <Card>
      <Title>Professional Skills</Title>
      <div className="print:grid-cols-2 print:gap-5 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 ">
        {skills.map((skill) => {
          return <SkillSet {...skill} />;
        })}
      </div>
    </Card>
  );
}
