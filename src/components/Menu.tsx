interface MenuProps {
  beginGameSetup: () => void;
  gameSetUp: boolean
}

export default function Menu({ beginGameSetup, gameSetUp }: MenuProps) {
  // const {beginGameSetup} = props;
  return (
    <div className="background">
      <div className="btns">
        <div className="inner_border">
          <img className="menu_title" src="images/title.svg" alt="title" />
          <ul>
            {gameSetUp && <li onClick={beginGameSetup}>Play Game</li>}
            {gameSetUp && <li>Settings</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
