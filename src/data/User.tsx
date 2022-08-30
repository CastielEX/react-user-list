//This is one single row in User list
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "./TaskList";
import "../App.css";

const User = ({ user, theTaskList }: any) => {
  if (!theTaskList) return null;

  const filteredTaskList = theTaskList.filter(
    (task: { completed: any; userId: any }) => task.userId == user.id
  );

  return (
    <div className="border-2 border-neutral-600 py-2 px-4 rounded flex flex-col items-center mb-2">
      {user.id}
      {" - "}
      {user.name}

      {/*Button that dropdown task list*/}
      <div>
        <Link key={user.id} to={`/users/${user.id}`}>
          <button className="py-1 px-3 border bg-gray-500 rounded ">
            Open
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
