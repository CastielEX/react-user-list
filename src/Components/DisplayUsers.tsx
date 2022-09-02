//This is one single row in User list
import { Link } from "react-router-dom";

import "../App.css";

const DisplayUsers = ({ user, taskList }: any) => {
  if (!taskList) return null;

  return (
    <div className="border-2 border-neutral-600 py-2 px-4 rounded flex flex-col items-center mb-2">
      {user.id}
      {" - "}
      {user.name}

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

export default DisplayUsers;
