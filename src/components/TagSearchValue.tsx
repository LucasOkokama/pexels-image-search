import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TahSearchValueStyle } from "./styles/TagSearchValueStyle";
import {
  faVideo,
  faPepperHot,
  faStar,
  faLeaf,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faVideo,
  faPepperHot,
  faStar,
  faLeaf,
  faMoon,
};

interface TagSearchValueProps {
  text: string;
  iconName: keyof typeof icons;
}

const TagSearchValue = ({ text, iconName }: TagSearchValueProps) => {
  return (
    <TahSearchValueStyle>
      <FontAwesomeIcon icon={icons[iconName]} />
      {text}
    </TahSearchValueStyle>
  );
};

export default TagSearchValue;
