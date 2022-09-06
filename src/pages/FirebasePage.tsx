import { useState, useEffect } from "react";
import { uid } from "uid";
import { db } from "../Services/firebase";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, onValue, push } from "firebase/database";

function Firebase() {
  const [users, setUsers] = useState([]);

  return (
    <div className="container">
      <h1>Firebase Test Page</h1>
    </div>
  );
}

export default Firebase;
