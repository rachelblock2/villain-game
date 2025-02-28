import { useEffect, useState } from "react";
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
  const [profiles, setProfiles] = useState([
    {
      id: 0,
      name: "Maleficent",
      boardImages: [
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "FORBIDDEN MOUNTAINS",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Fate", icon: "images/fate.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "BRIAR ROSE'S COTTAGE",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Fate", icon: "images/fate.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "THE FOREST",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Fate", icon: "images/fate.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "KING STEFAN'S CASTLE",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Fate", icon: "images/fate.svg" },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Prince John",
      boardImages: [
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "SHERWOOD FOREST",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Fate", icon: "images/fate.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "FRIAR TUCK'S CHURCH",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "2",
            },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            {
              actionType: "Move an Item or Ally",
              icon: "images/move_an_item_or_an_ally.svg",
            },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "NOTTINGHAM",
          actions: [
            { actionType: "Fate", icon: "images/fate.svg" },
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Vanquish", icon: "images/vanquish.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "THE JAIL",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "3",
            },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Captain Hook",
      boardImages: [
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "SHERWOOD FOREST",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Discard Cards", icon: "images/discard_cards.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Fate", icon: "images/fate.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "FRIAR TUCK'S CHURCH",
          actions: [
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "2",
            },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
            {
              actionType: "Move an Item or Ally",
              icon: "images/move_an_item_or_an_ally.svg",
            },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "NOTTINGHAM",
          actions: [
            { actionType: "Fate", icon: "images/fate.svg" },
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Vanquish", icon: "images/vanquish.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
          ],
        },
        {
          imageURL: "images/background_art/Forbidden_Mountain.PNG",
          imageAlt: "THE JAIL",
          actions: [
            { actionType: "Fate", icon: "images/fate.svg" },
            {
              actionType: "Gain Power",
              icon: "images/gain_power.svg",
              amount: "1",
            },
            { actionType: "Vanquish", icon: "images/vanquish.svg" },
            { actionType: "Play a Card", icon: "images/play_a_card.svg" },
          ],
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
  ]);

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOutPrev, setFadeOutPrev] = useState(false);
  const [fadeOutNext, setFadeOutNext] = useState(false);

  const nextProfile = () => {
    setFadeIn(false);
    // setFadeOutPrev(false);
    setFadeOutNext(false);
    setTimeout(() => {
      setProfiles((prevItems) => {
        if (prevItems.length === 0) return prevItems;
        return [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];
      });
      setFadeIn(true);
      // setFadeOutPrev(true);
      setFadeOutNext(true);
    }, 100);
  };

  const prevProfile = () => {
    setFadeIn(false);
    setFadeOutPrev(false);
    // setFadeOutNext(false);
    setTimeout(() => {
      setProfiles((prevItems) => {
        if (prevItems.length === 0) return prevItems;
        return [...prevItems.slice(1, prevItems.length), prevItems[0]];
      });
      setFadeIn(true);
      setFadeOutPrev(true);
      // setFadeOutNext(true);
    }, 100);
  };

  useEffect(() => {
    setFadeIn(true);
    setFadeOutPrev(true);
    setFadeOutNext(true);
  }, [profiles[1]]);

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
              <div>
                <button onClick={prevProfile}>Previous</button>
                <button onClick={nextProfile}>Next</button>
                <h1>Choose your villain:</h1>
              </div>
              <div className="profile_container">
                {profiles
                  .filter((_, index) => index === 0 || index === 2)
                  .map((profile, index) => {
                    let animationClass = "";

                    if (index === 0) {
                      animationClass =
                        fadeOutPrev ? "fade-out-down" : "";
                    } else if (index === 2) {
                      animationClass =
                        fadeOutNext ? "fade-out-up" : "";
                    }

                    return (
                      <Board
                        key={profile.id}
                        profile={profile}
                        className={animationClass}
                      />
                    );
                  })}
                <div className={`absolute_profile ${fadeIn ? "fade-in" : ""}`}>
                  {profiles[1] && (
                    <Board
                      key={profiles[1].id}
                      profile={profiles[1]}
                      className="active"
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
