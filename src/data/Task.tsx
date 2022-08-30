//This is one single row in Task list
import React, { useState } from "react";

const Task = ({ task }: any) => {
  const [checked, setChecked] = useState(task.completed);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <div>
        <input
          type="checkbox"
          style={{ margin: "0 10px" }}
          checked={checked}
          disabled={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {task.userId}
        {" -"} {task.title}
      </div>
    </div>
  );
};

export default Task;
