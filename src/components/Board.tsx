import { NavLink, Outlet } from "react-router-dom";

export default function Board() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`${profile}`} // Match the nested route
          className={({ isActive }) => (isActive ? "boldText" : "")}
        >
          Profile {profile}
        </NavLink>
      ))}
      {/* Render the child route here */}
      <Outlet />
    </div>
  );
}
