import axios from "axios";

export const getUsers = async (id: any) => {
  const userURL = `https://jsonplaceholder.typicode.com/users/${id}`;
  return await axios.get(userURL);
};

export const getTasks = () => {
  const tasksURL = `https://jsonplaceholder.typicode.com/todos`;
  return axios.get(tasksURL);
};

// export const consoleIt = () => {
//   console.log("Hello from Services");
// };

export const Services = { getUsers, getTasks };
