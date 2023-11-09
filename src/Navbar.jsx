import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Team Project</NavLink>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="team-building">Team Building</NavLink>
      </div>
    </nav>
  );
};
