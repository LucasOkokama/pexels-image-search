import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  return (
    <div className="flex justify-between">
      <div>Wemage</div>
      <div>Unsplash Image Search</div>
      <div>
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
};

export default Menu;
