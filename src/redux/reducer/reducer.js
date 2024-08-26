let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action; // 구조분해 할당으로, action.type, action.payload를 축약하여 쓸 수 있다.
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_KEYWORD":
      return {
        ...state,
        keyword: payload.keyword,
      };
    default:
      return { ...state };
  }
}

export default reducer;
