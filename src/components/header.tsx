export default function Header() {
  return (
    <div className="print:hidden flex flex-col xl:flex-row xl:justify-between xl:text-start xl:py-10">
      <div></div>

      <div className="prose flex flex-row gap-4 justify-around mx-auto xl:mx-0 pb-5 px-2 xl:py-0 xl:px-0">
        <h5>About</h5>
        <h5>Skills</h5>
        <h5>Experience</h5>
        <h5>Education</h5>
        <h5>Certification</h5>
      </div>
    </div>
  );
}
