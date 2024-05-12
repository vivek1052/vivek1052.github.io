export default function Title({ children }: { children: string }) {
  return (
    <h2 className="font-thin text-4xl mb-5 print:mb-2 print:text-3xl">
      {children}
    </h2>
  );
}
