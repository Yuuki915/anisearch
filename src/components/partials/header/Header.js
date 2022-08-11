import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CgSearch, CgClose } from "react-icons/cg";

export default function Header(props) {
  const data = props.data;

  const [count, setCount] = useState(1);
  const [searchFormToggle, setSearchFormToggle] = useState(false);
  const [togglePlaceholder, setTogglePlaceholder] = useState("ABC");
  const [searchedData, setSearchedData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const clickToggleHandler = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setSearchFormToggle(false);
      setTogglePlaceholder("ABC");
    } else {
      setSearchFormToggle(!false);
      setTogglePlaceholder("あいう");
    }
  };

  const clearInput = () => {
    setSearchedData([]);
    setInputValue("");
  };

  const handleFilter = (e) => {
    const searchedValue = e.target.value;
    setInputValue(searchedValue);

    let searchedEn;
    let searchedJp;
    if (searchFormToggle === false) {
      searchedEn = data.filter((val) => {
        return val.node.titleEn
          .toLowerCase()
          .includes(searchedValue.toLowerCase());
      });
      if (searchedValue === "") {
        setSearchedData([]);
      } else {
        setSearchedData(searchedEn);
      }
    } else {
      searchedJp = data.filter((val) => {
        return val.node.titleKana
          .toLowerCase()
          .includes(searchedValue.toLowerCase());
      });

      if (searchedValue === "") {
        setSearchedData([]);
      } else {
        setSearchedData(searchedJp);
      }
    }
  };

  return (
    <div className="header">
      <h1>AniSearch</h1>

      <nav className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <a href="/" className="link">
          Favorite
        </a>
        <a href="/" className="link">
          Home
        </a>
        <a href="/" className="link">
          Home
        </a>
      </nav>

      {/*   ↓↓ Search form ↓↓   */}

      <div className="search-form">
        <div className="search-inputs">
          <div className="search-lang">
            <div className="lang-change" onClick={clickToggleHandler}>
              <span className={searchFormToggle ? "search-wait" : "search-en"}>
                A
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
            {searchedData.length === 0 ? (
              <CgSearch />
            ) : (
              <CgClose onClick={clearInput} className="clear-btn" />
            )}
          </div>
        </div>

        {inputValue.length >= 2 ? (
          searchedData.length !== 0 && (
            <div className="data-lists">
              {searchedData.slice(0, 10).map((item) => {
                return (
                  <a
                    key={item.node.id}
                    className="data-item"
                    href={item.node.titleEn}
                  >
                    <p className="data-title">
                      {searchFormToggle ? item.node.title : item.node.titleEn}
                    </p>
                  </a>
                );
              })}
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
