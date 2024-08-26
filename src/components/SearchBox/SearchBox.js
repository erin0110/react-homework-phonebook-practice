import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBox.css";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchKeyword = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_KEYWORD",
      payload: { keyword },
    });
  };

  return (
    <form className="search" onSubmit={searchKeyword}>
      <span className="input-field">
        <input
          type="text"
          placeholder="이름을 입력해 주세요."
          onChange={(e) => setKeyword(e.target.value)}
        />
      </span>
      <button className="search-button" type="submit">
        검색
      </button>
    </form>
  );
};

export default SearchBox;
