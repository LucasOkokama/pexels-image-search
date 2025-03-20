import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
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
          href="https://github.com/LucasOkokama/unsplash-image-search"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} id="social-media" className="" />
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
