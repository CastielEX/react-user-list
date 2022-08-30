//This is the container that holds all of "Users"
import React, { useState } from "react";
import User from "./User";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = ({ user, task, theUserList }: any) => {
  const [selectedUser, setSelectedUser] = React.useState<any[]>([]);
  const [theTaskList, setTaskList] = React.useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [searchTaskText, setTaskText] = useState("");
  //const [showAllTasks, setShowAllTasks] = React.useState<any[]>([]);

  const taskURL = "https://jsonplaceholder.typicode.com/todos";

  React.useEffect(() => {
    axios.get(taskURL).then((response) => {
      setTaskList(response.data);
    });
  }, []);

  return (
    <div>
      <div className="container relative flex w-full flex-wrap items-stretch mb-3 mt-3">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          placeholder="Input User Name..."
          className="px-3 py-3 placeholder-slate-500 text-slate-500 bg-gray-300 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
        />
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          <i className="fas fa-user"></i>
        </span>
      </div>
      {theUserList
        .filter((user: any) => {
          if (searchText == "") {
            return user;
          } else if (
            user.name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return user.name;
          }
        })
        .map((user: any) => {
          return (
            <User
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              user={user}
              theTaskList={theTaskList}
            />
          );
        })}
    </div>
  );
};

export default UserList;
