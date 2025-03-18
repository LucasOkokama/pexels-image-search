import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchBoxStyle } from "./styles/SearchBoxStyle";
import TagSearchValue from "./TagSearchValue";
import { useRef } from "react";

const SearchBox = () => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (searchInput.current != null) {
      console.log(searchInput.current.value);
    }
  };

  const handleTag = (tag: string) => {
    if (searchInput.current != null) {
      searchInput.current.value = tag;
    }
  };

  return (
    <SearchBoxStyle>
      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          type="text"
          id="searchBox"
          placeholder="Search for something cool!"
          ref={searchInput}
        />
        <button id="searchButton" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </button>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        <div onClick={() => handleTag("Pepper")}>
          <TagSearchValue text="Pepper" iconName="faPepperHot"></TagSearchValue>
        </div>

        <div onClick={() => handleTag("Star")}>
          <TagSearchValue text="Star" iconName="faStar"></TagSearchValue>
        </div>

        <div onClick={() => handleTag("Leaf")}>
          <TagSearchValue text="Nature" iconName="faLeaf"></TagSearchValue>
        </div>

        <div onClick={() => handleTag("Moon")}>
          <TagSearchValue text="Moon" iconName="faMoon"></TagSearchValue>
        </div>
      </div>
    </SearchBoxStyle>
  );
};

export default SearchBox;
