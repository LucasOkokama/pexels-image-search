import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SearchBoxStyle } from "./styles/SearchBoxStyle";
import TagSearchValue from "./TagSearchValue";
import { useEffect, useRef, useState } from "react";

type SearchBoxProps = {
  children: React.ReactNode;
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
};

const SearchBox = ({ children, setImages }: SearchBoxProps) => {
  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 13;

  const searchInput = useRef<HTMLInputElement>(null);
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleTag = (tag: string) => {
    if (searchInput.current != null) {
      searchInput.current.value = tag;
      handleSearch();
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

  const handleFetchImages = async () => {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchedTerm}&page=${currentPage}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    const data = await response.json();
    setImages(data.photos);
  };

  const handleSearch = () => {
    if (
      searchInput.current != null &&
      searchedTerm != searchInput.current.value
    ) {
      setSearchedTerm(searchInput.current.value);
    }
  };

  useEffect(() => {
    fetchInitialImages();
  }, []);

  useEffect(() => {
    if (searchInput.current === null || searchedTerm === "") {
      fetchInitialImages();
    } else {
      handleFetchImages();
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    if (searchInput.current != null && searchedTerm != "") {
      handleFetchImages();
    } else {
      fetchInitialImages();
    }
  }, [searchedTerm]);

  return (
    <SearchBoxStyle>
      <div className="max-w-xl w-full m-auto" id="search-box">
        <div className="flex gap-3 flex-col sm:flex-row">
          <input
            type="text"
            id="searchBox"
            placeholder="Search for something cool!"
            ref={searchInput}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button id="searchButton" onClick={handleSearch}>
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

          <div onClick={() => handleTag("Nature")}>
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
