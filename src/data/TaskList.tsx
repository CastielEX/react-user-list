//This is the container that holds all of Task's
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Task from "./Task";

const TaskList = ({ theTaskList }: any) => {
  const [searchTaskText, setTaskText] = useState("");
  const [filtered, setFiltered] = useState(theTaskList);

  function todoFilter(completed: boolean) {
    if (completed) {
      setFiltered(theTaskList);
    } else {
      let newTodo = [...theTaskList].filter((task) => !task.completed);
      setFiltered(newTodo);
    }

    //  else {
    //   let newFalseTodo = [...theTaskList].filter((task) => !task.completed);
    //   setFiltered(newFalseTodo);
    // }
  }

  return (
    <div>
      <div className="container mb-3">
        <input
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
          type="text"
          placeholder="Input Task Title..."
          className="px-3 py-3 placeholder-slate-500 text-slate-500 bg-gray-300 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
        />
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          <i className="fas fa-user"></i>
        </span>
        {/*True/False checkbox*/}
        <div className="container text-left mt-2">
          <input type="checkbox" id="all" onClick={() => todoFilter(true)} />
          <span>All tasks</span>
          <br></br>
          <input
            type="checkbox"
            id="onlydone"
            onClick={() => todoFilter(false)}
          />
          <span>Only done task</span>
          <br></br>
          <input
            type="checkbox"
            id="onlyfalse"
            onClick={() => todoFilter(false)}
          />
          <span>Only false task</span>
        </div>
        {/*///////////////////////////////*/}
      </div>
      {filtered
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
            <Link key={task.title} to={`/users/${task.title}`}>
              <Task task={task} />
            </Link>
          );
        })}
    </div>
  );
};

export default TaskList;
