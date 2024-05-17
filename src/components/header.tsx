export default function Header() {
  return (
    <div className="my-10 flex flex-col lg:flex-row lg:justify-end lg:gap-4 print:hidden">
      <div className="flex flex-row justify-center gap-4">
        <a href="#about">
          <div className="card-text-light">About</div>
        </a>
        <a href="#skills">
          <div className="card-text-light">Skills</div>
        </a>
        <a href="#experience">
          <div className="card-text-light">Experience</div>
        </a>

        <a href="#project">
          <div className="card-text-light">Projects</div>
        </a>

        <a href="#education">
          <div className="card-text-light">Education</div>
        </a>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <a href="#certification">
          <div className="card-text-light">Certifications</div>
        </a>

        <a href="#award">
          <div className="card-text-light">Awards</div>
        </a>

        <a href="#contact">
          <div className="card-text-light">Contact</div>
        </a>
      </div>
    </div>
  );
}
