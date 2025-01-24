// import { NavLink, Outlet } from "react-router-dom";

export default function Board({
  profile,
}: {
  profile: {
    name: string;
    boardImages: { imageURL: string; imageAlt: string }[];
  };
}) {
  return (
    <div className="board_grid">
      <p className="profile_name">{profile.name}</p>
      {profile.boardImages.map((image, index) => (
        <div className="board_section">
          <div className="board_background">
            <img
              key={index}
              className="board_background_img"
              src={image.imageURL}
              alt={image.imageAlt}
            />
            <p className="location_text">{image.imageAlt}</p>
          </div>
        </div>
      ))}
    </div>
    // <div>
    //   {profiles.map((profile) => (
    //     <NavLink
    //       key={profile}
    //       to={`${profile}`} // Match the nested route
    //       className={({ isActive }) => (isActive ? "boldText" : "")}
    //     >
    //       Profile {profile}
    //     </NavLink>
    //   ))}
    //   {/* Render the child route here */}
    //   <Outlet />
    // </div>
  );
}
