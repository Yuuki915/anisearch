import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BiSearch } from "react-icons/bi";
// import { IoSearchSharp, IoClose } from "react-icons/io";
import { CgSearch, CgClose } from "react-icons/cg";

import "../header/Header.css";

export default function Header(props) {
  const data = props.data;

  const [searchedData, setSearchedData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleFilter = (e) => {
    const searchValue = e.target.value;
    setInputValue(searchValue);

    const searchedItem = data.filter((val) => {
      return val.text.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (searchValue === "") {
      setSearchedData([]);
    } else {
      setSearchedData(searchedItem);
    }
  };

  const clearInput = () => {
    setSearchedData([]);
    setInputValue("");
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
          <input
            type="text"
            placeholder="Search..."
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

        {/* {filteredData.length != 0 && (
          <div className="data-lists">
            {filteredData.slice(0, 15).map((value) => {
              return (
                <a key={value.id} className="data-item" href={value.text}>
                  <p className="data-title">{value.text} </p>
                </a>
              );
            })}
          </div>
        )} */}
        {inputValue.length >= 2 ? (
          searchedData.length != 0 && (
            <div className="data-lists">
              {searchedData.slice(0, 10).map((item) => {
                return (
                  <a key={item.id} className="data-item" href={item.text}>
                    <p className="data-title">{item.text}</p>
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
