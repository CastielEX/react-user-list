//This is one single row in User list
import React, { useState } from "react";
import TaskList from "./TaskList";
import axios from "axios";
import UserList from "./UserList";

const User = ({ user, selectedUser, setSelectedUser, theTaskList }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  //Getting Task Data
  const taskURL = "https://jsonplaceholder.typicode.com/todos";

  if (!theTaskList) return null;
  //

  const handleClick = (event: any) => {
    setIsOpen(!isOpen);
    setSelectedUser(user.id);
  };

  const filteredTaskList = theTaskList.filter(
    (task: { completed: any; userId: any }) =>
      task.userId == user.id && !task.completed // Only False values
  );
  return (
    <div className="border-2 border-neutral-500 py-2 px-4 rounded flex flex-col items-center mb-2">
      {user.id}
      {" - "}
      {user.name}

      {/*Button that dropdown task list*/}
      <div>
        <button
          className="py-1 px-3 border bg-gray-400 rounded "
          onClick={handleClick}
        >
          Open
        </button>

        {selectedUser == user.id && isOpen ? (
          <div>
            <br></br>
            <TaskList theTaskList={filteredTaskList} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default User;
