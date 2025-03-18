import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchBoxStyle } from "./styles/SearchBoxStyle";
import TagSearchValue from "./TagSearchValue";

const SearchBox = () => {
  return (
    <SearchBoxStyle>
      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          type="text"
          id="searchBox"
          placeholder="Search for something cool!"
        />
        <button id="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </button>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        <TagSearchValue text="Movie" iconName="faVideo"></TagSearchValue>
        <TagSearchValue text="Pepper" iconName="faPepperHot"></TagSearchValue>
        <TagSearchValue text="Star" iconName="faStar"></TagSearchValue>
        <TagSearchValue text="Nature" iconName="faLeaf"></TagSearchValue>
        <TagSearchValue text="Moon" iconName="faMoon"></TagSearchValue>
      </div>
    </SearchBoxStyle>
  );
};

export default SearchBox;
