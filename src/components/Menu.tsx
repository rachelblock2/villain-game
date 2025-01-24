import Board from "./Board";

interface MenuProps {
  beginGameSetup: () => void;
  gameSetUp: boolean;
  fadeBackground: boolean;
}

export default function Menu({
  fadeBackground,
  beginGameSetup,
  gameSetUp,
}: MenuProps) {
  // const profiles = [1, 2, 3, 4, 5];
  const profiles = [
    {
      name: "Maleficent",
      boardImages: [
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "FORBIDDEN MOUNTAINS",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "BRIAR ROSE'S COTTAGE",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "THE FOREST",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "KING STEFAN'S CASTLE",
        },
      ],
    },
    {
      name: "Prince John",
      boardImages: [
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "SHERWOOD FOREST",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "FRIAR TUCK'S CHURCH",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "NOTTINGHAM",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "THE JAIL",
        },
      ],
    },
    {
      name: "Captain Hook",
      boardImages: [
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "SHERWOOD FOREST",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "FRIAR TUCK'S CHURCH",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "NOTTINGHAM",
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "THE JAIL",
        },
      ],
    },
    // {
    //   name: "Jafar",
    //   boardImages: ["images/background_art/Forbidden_Mountain.PNG"],
    // },
    // {
    //   name: "Queen of Hearts",
    //   boardImages: ["images/background_art/Forbidden_Mountain.PNG"],
    // },
    // {
    //   name: "Ursula",
    //   boardImages: ["images/background_art/Forbidden_Mountain.PNG"],
    // },
  ];

  return (
    <div className="background">
      <div className="btns">
        <div
          className={`inner_border ${fadeBackground ? "fade_background" : ""}`}
        >
          {!gameSetUp && (
            <img className="menu_title" src="images/title.svg" alt="title" />
          )}
          {!gameSetUp && (
            <ul>
              <li className="initial_btn" onClick={beginGameSetup}>
                Play Game
              </li>
              <li className="initial_btn">Settings</li>
            </ul>
          )}
          {gameSetUp && (
            <>
              <h1>Choose your villain:</h1>
              <div className="profile_container">
                {profiles.map((profile, index) => (
                  <Board key={index} profile={profile} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
