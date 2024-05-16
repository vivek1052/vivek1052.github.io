export default function About({
  about,
}: Readonly<{
  about: string;
}>) {
  return (
    <div className="card">
      <div className="card-title">About Me</div>
      <div className="card-text">{about}</div>
    </div>
  );
}
