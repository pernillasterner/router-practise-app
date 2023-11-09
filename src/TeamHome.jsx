import { data } from "./data.json";

export const TeamHome = () => {
  return (
    <main>
      <h2>Team Info</h2>
      <section>
        {data.map((id, name) => (
          <div key={name} className={`card card-${id}`}>
            <p>{name}</p>
            <button id={id}>More info</button>
          </div>
        ))}
      </section>
    </main>
  );
};
