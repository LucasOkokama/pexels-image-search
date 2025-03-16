import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { MenuStyle } from "./styles/Menu.styled";

const Menu = () => {
  return (
    <MenuStyle>
      <div id="brand">
        <FontAwesomeIcon icon={faGlobe} />
        Wemage
      </div>
      <div id="title">Unsplash Image Search</div>
      <div>
        <a
          href="https://github.com/LucasOkokama/unsplash-image-search"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} id="social-media" />
        </a>
      </div>
    </MenuStyle>
  );
};

export default Menu;
