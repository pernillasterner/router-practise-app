import { data } from "./data.json";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {
  const { id } = useParams();

  const teamData = data.find((t) => t.id === Number(id));

  return (
    <div className="profile-container">
      <div className="profile-img">
        <h2>Team member</h2>
      </div>
      <div className="profile-details">
        <h2>Personal info</h2>

        <p>Name: {teamData.name}</p>
        <p>Birthday: {teamData.birthday}</p>
        <p>Home: {teamData.home}</p>
        <p>
          Hobbies:
          {teamData.hobbies.map((hobby, id) => (
            <span key={id}>{hobby}</span>
          ))}
        </p>
        <p>Favourite Animal: {teamData.favouriteanimal}</p>
      </div>
    </div>
  );
};
