import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUsers } from "../Services/ServiceData";
import { getTasks } from "../Services/ServiceData";
import FilterTaskList from "../Components/DropDownList";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";

function UserPage(this: any) {
  const { id, userId } = useParams();
  const [userList, setUserList] = React.useState<any>({}); //useLocalStorage("userList", {}); // React.useState<any>({});
  const [taskList, setTaskList] = React.useState<any>([]); //useLocalStorage("taskList", []); // React.useState<any>([]);
  const [searchTaskText, setTaskText] = useState("");
  const [checked, setChecked] = useState(taskList.completed);
  const [filterTextValue, setfilterTextValue] = useState("all");

  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(taskList));
  // }, [taskList]);

  useEffect(() => {
    getUsers(id).then((response) => {
      setUserList(response.data);
    });
    getTasks().then((response) => {
      setTaskList(response.data); // Comment when localstorage is already created in browser
    });
  }, []);

  const result = taskList.filter((task: any) => task?.userId === userList?.id);

  const handleOnChange = (id: any) => {
    const array = [...taskList];
    array[array.findIndex((el) => el.id === id)].completed = true;
    setChecked(array);
    setTaskList(array); // Saving to local storage
  };

  function onFilterValueSelected(filterValue: any) {
    setfilterTextValue(filterValue);
  }

  const filteredTaskList = result.filter((task: any) => {
    if (filterTextValue === "true") {
      return task?.completed;
    } else if (filterTextValue === "false") {
      return !task?.completed;
    } else {
      return task;
    }
  });

  // button that deletes all tasks from a user
  const deleteTaskList = (userId: any) => {
    const deleteAllList = filteredTaskList.filter(
      (task: { userId: any }) => task.userId === userId
    );
    setTaskList(deleteAllList);
  };

  //button that deletes only one task from a user
  const removeTask = (id: any) => {
    const newTaskList = taskList.filter((task: { id: any }) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <div>
      {userList && (
        <>
          <h1>
            {userList?.id}
            {" - "}
            {userList?.name}
          </h1>
        </>
      )}
      <input
        onChange={(e) => {
          setTaskText(e.target.value);
        }}
        type="text"
        placeholder="Input Task Title..."
        className="px-3 py-3 mb-3 placeholder-slate-500 text-slate-500 bg-gray-300 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
      />
      <div className="container text-left mb-2">
        <button
          className="py-1 px-3 border bg-gray-500 rounded "
          onClick={() => deleteTaskList(userId)}
        >
          Delete All
        </button>
      </div>
      <FilterTaskList filterValueSelected={onFilterValueSelected} />
      <div>
        <div>
          {filteredTaskList
            .filter((task: any) => {
              if (searchTaskText == "") {
                return task;
              } else if (
                task.title.toLowerCase().includes(searchTaskText.toLowerCase())
              ) {
                return task.title;
              }
            })
            .map((task: any) => {
              return (
                <div className="border-2 border-neutral-600 py-2 px-4 rounded flex flex-col mb-2">
                  <div>
                    <input
                      key={id}
                      type="checkbox"
                      style={{ margin: "0 10px" }}
                      checked={task?.completed}
                      disabled={task?.completed}
                      onClick={() => handleOnChange(task?.id)}
                    />
                    {task?.userId}
                    {" - "} {task?.title}
                    <div>
                      <button
                        className="ml-3 px-2 mt-1 border text-center bg-gray-500 rounded"
                        onClick={() => removeTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
