import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CgSearch, CgClose } from "react-icons/cg";

export const Search = ({ seasonData, yearData }) => {
  const [count, setCount] = useState(1);
  const [searchFormToggle, setSearchFormToggle] = useState(false);
  const [togglePlaceholder, setTogglePlaceholder] = useState("abc");
  const [searchedList, setSearchedList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const clickToggleHandler = () => {
    setCount((prev) => prev + 1);
    if (count % 2 === 0) {
      setSearchFormToggle(false);
      setTogglePlaceholder("abc");
    } else {
      setSearchFormToggle(!false);
      setTogglePlaceholder("あいう");
    }
  };

  const clearInput = () => {
    setSearchedList([]);
    setInputValue("");
  };

  // form filter
  const handleFilter = (e) => {
    const searchedValue = e.target.value;
    setInputValue(searchedValue);

    let searchedEn;
    let searchedJp;
    if (seasonData.length === 0) {
      if (searchFormToggle === false) {
        searchedEn = yearData.filter((val) => {
          return val.node.titleEn
            .toLowerCase()
            .includes(searchedValue.toLowerCase());
        });
        if (searchedValue === "") {
          setSearchedList([]);
        } else {
          setSearchedList(searchedEn);
        }
      } else {
        searchedJp = yearData.filter((val) => {
          return val.node.titleKana
            .toLowerCase()
            .includes(searchedValue.toLowerCase());
        });

        if (searchedValue === "") {
          setSearchedList([]);
        } else {
          setSearchedList(searchedJp);
        }
      }
    } else {
      if (searchFormToggle === false) {
        searchedEn = seasonData.filter((val) => {
          return val.node.titleEn
            .toLowerCase()
            .includes(searchedValue.toLowerCase());
        });
        if (searchedValue === "") {
          setSearchedList([]);
        } else {
          setSearchedList(searchedEn);
        }
      } else {
        searchedJp = seasonData.filter((val) => {
          return val.node.titleKana
            .toLowerCase()
            .includes(searchedValue.toLowerCase());
        });

        if (searchedValue === "") {
          setSearchedList([]);
        } else {
          setSearchedList(searchedJp);
        }
      }
    }
  };
  return (
    <div className="search-form">
      <div className="search-inputs">
        <div className="search-lang">
          <div className="lang-change" onClick={clickToggleHandler}>
            <span className={searchFormToggle ? "search-wait" : "search-en"}>
              a
            </span>
            <span>/</span>
            <span className={searchFormToggle ? "search-jp" : "search-wait"}>
              あ
            </span>
          </div>
        </div>
        <input
          type="text"
          placeholder={`Search ${togglePlaceholder}`}
          className="search-input"
          value={inputValue}
          onChange={handleFilter}
        />
        <div className="search-icon">
          {searchedList.length === 0 ? (
            <CgSearch />
          ) : (
            <CgClose onClick={clearInput} className="clear-btn" />
          )}
        </div>
      </div>

      {inputValue.length >= 2 ? (
        searchedList.length !== 0 && (
          <div className="data-lists">
            {searchedList.slice(0, 10).map((item) => {
              const url = item.node.titleEn;
              return (
                <Link
                  key={item.node.id}
                  className="data-item"
                  to={`/item/${url}`}
                >
                  <p className="data-title">
                    {searchFormToggle ? item.node.title : item.node.titleEn}
                  </p>
                </Link>
              );
            })}
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
