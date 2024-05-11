export default function InfoSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-thin text-4xl mb-5 print:mb-3">{title}</h2>
      {children}
    </div>
  );
}
