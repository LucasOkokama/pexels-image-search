import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchBoxStyle } from "./styles/SearchBoxStyle";
import TagSearchValue from "./TagSearchValue";
import { useEffect, useRef } from "react";

interface SearchBoxProps {
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
}

const SearchBox = ({ setImages }: SearchBoxProps) => {
  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
  const currentPage = 1;
  const perPage = 13;

  const searchInput = useRef<HTMLInputElement>(null);

  const handleTag = (tag: string) => {
    if (searchInput.current != null) {
      searchInput.current.value = tag;
    }
  };

  const fetchInitialImages = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`,
        {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }
      );

      const data = await response.json();
      setImages(data.photos);
    } catch (err) {
      console.error("Error fetching the images:", err);
    }
  };

  const handleSearch = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (searchInput.current != null && searchInput.current.value != "") {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`,
        {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }
      );

      const data = await response.json();
      setImages(data.photos);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchInitialImages();
  }, []);

  return (
    <SearchBoxStyle>
      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          type="text"
          id="searchBox"
          placeholder="Search for something cool!"
          ref={searchInput}
        />
        <button id="searchButton">
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
