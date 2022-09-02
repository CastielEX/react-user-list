import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUsers } from "../Services/ServiceData";
import { getTasks } from "../Services/ServiceData";
// import ServiceData from "../Services/ServiceData";

import FilterTaskList from "../Components/DropDownList";
// import getUsers from "../Services/ServiceData";
// import getTasks from "../Services/ServiceData";

function UserPage() {
  const { id, userId, task } = useParams();
  const [userList, setUserList] = React.useState<any>({});
  const [taskList, setTaskList] = React.useState<any>([]);
  const [filtered, setFiltered] = React.useState<any>([]);
  const [searchTaskText, setTaskText] = useState("");
  const [checked, setChecked] = useState(taskList.completed);
  const [filterTextValue, setfilterTextValue] = useState("all");
  const [users] = useState([]);
  useEffect(() => {
    getUsers(id).then((response) => {
      console.log(response.data);
      setUserList(response.data);
    });
    getTasks().then((response) => {
      console.log(response.data);
      setTaskList(response.data);
    });
  }, []);

  const result = taskList.filter((task: any) => task.userId === userList.id);

  const handleOnChange = (id: any) => {
    const array = [...taskList];
    array[array.findIndex((el) => el.id === id)].completed = true;
    setChecked(array);
  };

  function onFilterValueSelected(filterValue: any) {
    setfilterTextValue(filterValue);
  }

  const filteredTaskList = result.filter((task: any) => {
    if (filterTextValue === "true") {
      return task.completed;
    } else if (filterTextValue === "false") {
      return !task.completed;
    } else {
      return task;
    }
  });

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
                <div className="border-2 border-neutral-600 py-2 px-4 rounded flex flex-col items-center mb-2">
                  <div>
                    <input
                      key={id}
                      type="checkbox"
                      style={{ margin: "0 10px" }}
                      checked={task.completed}
                      disabled={task.completed}
                      onClick={() => handleOnChange(task.id)}
                    />
                    {task.userId}
                    {" - "} {task.title}
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
