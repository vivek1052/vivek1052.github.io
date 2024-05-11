interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <div
      className={`print:shadow-none print:border-none print:p-0 shadow-lg border-2 p-10 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
