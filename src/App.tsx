import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import AllUserList from "./Pages/AllUserList";
import UserPage from "./Pages/UserPage";

function App() {
  const [userList, setUserList] = React.useState(null);

  const usersURL = "https://jsonplaceholder.typicode.com/users";
  // Getting User Data
  React.useEffect(() => {
    axios.get(usersURL).then((response) => {
      setUserList(response.data);
    });
  }, []);
  // Sa pun axios get in file aparte Service
  if (!userList) return null;
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
                  element={<AllUserList userList={userList} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<UserPage />} />
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
