import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import CreateForm from "./components/CreateForm/CreateForm";

/**
 * 1. 왼쪽에는 연락처를 입력하는 폼이 있고, 오른쪽에는 연락처 리스트와 search창이 있다.
 * 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
 * 3. 리스트에 아이템이 몇 개 있는지 보인다.
 * 4. 사용자가 유저를 이름 검색으로 찾을 수 있다.
 */

function App() {
  return (
    <main>
      <h1>연락처</h1>
      <CreateForm />
      <ContactList />
    </main>
  );
}

export default App;
