export default function About({
  about,
}: Readonly<{
  about: string;
}>) {
  return (
    <div id="about" className="card print:hidden">
      <div className="card-title">About Me</div>
      <div className="card-text">{about}</div>
    </div>
  );
}
