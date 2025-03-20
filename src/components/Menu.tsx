import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { GitHub } from "react-feather";
import { MenuStyle } from "./styles/Menu.styled";
import ToggleButton from "./ToggleButton";

const Menu = ({
  toggleTheme,
  isDarkTheme,
}: {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}) => {
  return (
    <MenuStyle>
      <div id="brand">
        <FontAwesomeIcon icon={faGlobe} />
        Wemage
      </div>
      <div id="utils">
        <a
          href="https://github.com/LucasOkokama/pexels-image-search"
          target="_blank"
        >
          <GitHub id="social-media" size={20} />
        </a>
        <ToggleButton
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        ></ToggleButton>
      </div>
    </MenuStyle>
  );
};

export default Menu;
