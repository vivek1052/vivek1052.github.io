import Card from "./card";

export default function TopCard({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  return (
    <Card className="!p-0 !relative">
      <img
        src="/header-background.jpg"
        alt=""
        className="print:hidden h-[546px] object-cover"
      />
      <div className="print:relative print:p-0 absolute z-10 top-0 left-0 w-full h-full p-8 bg-black bg-opacity-60">
        <img
          src="/avatar.png"
          alt=""
          className="print:hidden border-4 rounded-full w-80 mx-auto"
        />

        <div className="print:py-0 mx-auto text-center py-2">
          <h2 className="text-4xl font-extrabold text-white mb-5">{name}</h2>
          <h5 className="text-xl font-normal text-slate-300">{title}</h5>
        </div>
      </div>
    </Card>
  );
}
