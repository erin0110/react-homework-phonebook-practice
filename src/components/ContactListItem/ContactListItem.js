import React from "react";
import "./ContactListItem.css";

const ContactListItem = ({ item }) => {
  return (
    <div className="list-item">
      <span className="avatar">
        <img src="" alt="" />
      </span>
      <dl>
        <dt>{item.name}</dt>
        <dd>{item.phoneNumber}</dd>
      </dl>
    </div>
  );
};

export default ContactListItem;
