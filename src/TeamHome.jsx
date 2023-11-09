import { data } from "./data.json";
import { Link } from "react-router-dom";
export const TeamHome = () => {
  return (
    <main>
      <h2>Team Info</h2>
      <section>
        {data.map((id, name) => (
          <div key={name} className={`card card-${id.id}`}>
            <p>{id.name}</p>
            <Link to={`/${id.id}`}>More info</Link>
          </div>
        ))}
      </section>
    </main>
  );
};
