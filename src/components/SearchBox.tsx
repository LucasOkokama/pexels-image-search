import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SearchBoxStyle } from "./styles/SearchBoxStyle";
import TagSearchValue from "./TagSearchValue";
import { useEffect, useRef, useState } from "react";
import { preview } from "vite";

type SearchBoxProps = {
  children: React.ReactNode;
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
};

const SearchBox = ({ children, setImages }: SearchBoxProps) => {
  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const [currentPage, setCurrentPage] = useState(1);
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
    if (searchInput.current == null || searchInput.current.value === "") {
      fetchInitialImages();
    }
  }, [currentPage]);

  useEffect(() => {
    fetchInitialImages();
  }, []);

  return (
    <SearchBoxStyle>
      <div className="max-w-xl w-full m-auto" id="search-box">
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
            <TagSearchValue
              text="Pepper"
              iconName="faPepperHot"
            ></TagSearchValue>
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
      </div>
      <div className="mt-16">{children}</div>
      <div id="navigate-pages" className="mt-12">
        <button
          className={`navigate-pages-btn ${
            currentPage > 1
              ? "opacity-100 cursor-pointer"
              : "opacity-60 cursor-not-allowed"
          }`}
          onClick={() => {
            if (currentPage > 1) setCurrentPage((previous) => previous - 1);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className={`navigate-pages-btn ${
            currentPage < 20
              ? "opacity-100 cursor-pointer"
              : "opacity-60 cursor-not-allowed"
          }`}
          onClick={() => {
            if (currentPage < 20) setCurrentPage((previous) => previous + 1);
          }}
        >
          Next
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </SearchBoxStyle>
  );
};

export default SearchBox;
