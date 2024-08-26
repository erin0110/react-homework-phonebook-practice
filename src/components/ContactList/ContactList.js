import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import SearchBox from "../SearchBox/SearchBox";
import "./ContactList.css";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      const filteredList = contactList.filter((v) => v.name.includes(keyword));
      setSearchedList(filteredList);
    } else {
      setSearchedList([]);
    }
  }, [keyword, contactList]);

  const listToShow = keyword === "" ? contactList : searchedList;

  return (
    <div className="contact-list">
      <SearchBox />
      <div className="search-result">
        {keyword === "" ? (
          <p className="excerpt">
            연락처: <strong>{contactList.length}</strong>명
          </p>
        ) : (
          <p className="excerpt">
            <strong>{searchedList.length}</strong>명을 찾았습니다.
          </p>
        )}
        <div className="list">
          {listToShow.map((item, index) => (
            <ContactListItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
