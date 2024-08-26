import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CreateForm.css";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber }, // payload: { name: name, phoneNumber: phoneNumber } 인걸 축약한 것!
    });
  };

  return (
    <form className="create-form" onSubmit={addContact}>
      <div>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          placeholder="이름을 입력해 주세요."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="num">전화번호</label>
        <input
          type="number"
          id="num"
          placeholder="전화번호를 입력해 주세요."
          onChange={(e) => {
            setphoneNumber(e.target.value);
          }}
        />
      </div>
      <button type="submit">연락처 추가</button>
    </form>
  );
};

export default CreateForm;
