//This is the container that holds all of Task's
import React from "react";
import Task from "./Task";

const TaskList = ({ theTaskList }: any) => {
  return (
    <div>
      {theTaskList.map((task: any) => {
        return <Task task={task} />;
      })}
    </div>
  );
};

export default TaskList;
