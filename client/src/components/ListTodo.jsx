import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  // delete func
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  // get func
  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <Fragment>
      <table className="w-full text-center table-fixed m-2">
        <thead>
          <tr className="odd:bg-gray-100 ">
            <th
              scope="col"
              className="font-bold text-sm  text-gray-900 px-6 py-4"
            >
              Description
            </th>
            <th
              scope="col"
              className="font-bold text-sm text-gray-900 px-6 py-4 "
            >
              Edit
            </th>
            <th
              scope="col"
              className="font-bold text-sm text-gray-900  px-6 py-4 "
            >
              Delete
            </th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id} className="p-2 border-b text-left">
              <td className="text-center">{todo.description}</td>
              <td className="text-center">
                <EditTodo todo={todo} />
              </td>
              <td className="text-center">
                <button
                  onClick={() => deleteTodo(todo.todo_id)}
                  className="text-white text-md bg-red-500
                    hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
