// import { NavLink, Outlet } from "react-router-dom";

export default function Board({
  className,
  profile
}: {
  className: string,
  profile: {
    name: string;
    boardImages: {
      imageURL: string;
      imageAlt: string;
      actions: { actionType: string; icon: string; amount?: string }[];
    }[];
  };
}) {
  return (
    <div className={`board_grid ${className}`}>
      <div className="objective">
        <div className="test">
          <img
            className="objective_img"
            src="images/objectives/prince-john.jpg"
            alt="Prince John"
          />
        </div>
      </div>
      {/* <p className="profile_name">{profile.name}</p> */}
      {profile.boardImages.map((image, index) => (
        <div className="board_section">
          <div className="board_background">
            <div className="top_actions"></div>
            <div className="image_icons">
              <img
                key={index}
                className="board_background_img"
                src={image.imageURL}
                alt={image.imageAlt}
              />
              <div
                className={`icons ${
                  image.actions.length === 3 ? "three_actions" : ""
                }`}
              >
                {image.actions.map((action, actionIndex) => (
                  <div>
                    <img
                      key={actionIndex}
                      src={action.icon}
                      alt={action.icon}
                    />
                    {action.amount !== undefined && <p>{action.amount}</p>}
                  </div>
                ))}
              </div>
            </div>
            <p className="location_text">{image.imageAlt}</p>
            <div className="bottom_actions"></div>
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
