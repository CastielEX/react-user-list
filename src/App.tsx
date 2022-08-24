import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import UserList from "./data/UserList";
import { Container } from "react-bootstrap";
import axios from "axios";
// import SearchBar from "./SeatchBar";

function App() {
  const [theUserList, setUserList] = React.useState(null);
  const [userDrop, setUserDrop] = useState(null);

  const userURL = "https://jsonplaceholder.typicode.com/users";
  // Getting User Data
  React.useEffect(() => {
    axios.get(userURL).then((response) => {
      setUserList(response.data);
    });
  }, []);

  if (!theUserList) return null;
  //

  return (
    <div className="App">
      <Header />

      <div className="container mx-auto max-w-2xl pt-5">
        <Container>
          <div className="border-2 border-neutral-500 py-2 px-4 rounded">
            <UserList userDrop={userDrop} theUserList={theUserList} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
