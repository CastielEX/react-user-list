import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TaskList from "../data/TaskList";
import User from "../data/User";
import { CompletionTriggerKind } from "typescript";
import DropDown from "./DropDown";
import FilterTaskList from "./DropDown";

const Singlepage = ({ task }: any) => {
  const { id, userId } = useParams();
  const [newUser, setNewUser] = React.useState<any[]>([]);
  const [theUserList, setUserList] = React.useState<any>([]);
  const [theTaskList, setTaskList] = React.useState<any>([]);
  const [searchTaskText, setTaskText] = useState("");
  const [checked, setChecked] = useState(theTaskList.completed);
  const [filtered, setFiltered] = React.useState<any>([]);
  const [selectedCompleted, setSelectedCompleted] = useState();
  const [filterTextValue, setfilterTextValue] = useState("all");

  const userURL = `https://jsonplaceholder.typicode.com/users/${id}`;
  React.useEffect(() => {
    axios.get(userURL).then((response) => {
      setUserList(response.data);
    });
  }, [id, userURL]);

  const taskURL = `https://jsonplaceholder.typicode.com/todos`;

  React.useEffect(() => {
    axios.get(taskURL).then((response) => {
      setTaskList(response.data);
      setFiltered(response.data);
    });
  }, [taskURL, userId, id]);

  const result = theTaskList.filter(
    (task: any) => task.userId === theUserList.id
  );

  const handleOnChange = (id: any) => {
    const array = [...theTaskList];
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
      {theUserList && (
        <>
          <h1>
            {theUserList.id}
            {" - "}
            {theUserList.name}
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
};

export default Singlepage;
