export default function Header() {
  return (
    <div className="flex flex-row my-10 justify-around md:justify-end md:gap-4 print:hidden">
      <div className="card-text-light">About</div>
      <div className="card-text-light">Skills</div>
      <div className="card-text-light">Experience</div>
      <div className="card-text-light">Education</div>
      <div className="card-text-light">Certification</div>
    </div>
  );
}
