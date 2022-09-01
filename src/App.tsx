import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import UserList from "./data/UserList";
import { Container } from "react-bootstrap";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Singlepage from "./pages/Singlepage";

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
    <Router>
      <div className="App">
        <Header />

        <div className="container mx-auto max-w-2xl pt-5">
          <Container>
            <div className="border-2 border-neutral-600 py-2 px-4 rounded">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/users"
                  element={
                    <UserList userDrop={userDrop} theUserList={theUserList} />
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<Singlepage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;
