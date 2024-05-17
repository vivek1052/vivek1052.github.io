export default function Hobbies({ hobbies }: Readonly<{ hobbies: string[] }>) {
  return (
    <div id="hobbies" className="card">
      <div className="card-title">Hobbies</div>
      <div className="flex flex-row justify-start">
        {hobbies.map((hobby, i) => {
          return (
            <div key={i} className="card-text flex flex-row items-center">
              {hobby}
              {i < hobbies.length - 1 && <div className="dot-icon" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
