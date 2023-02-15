import React, { Fragment, useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  // delete func

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      console.log(deleteTodo);
    } catch (err) {
      console.error(err.message);
    }
  };

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
                <button className="text-white text-md bg-green-500 rounded-sm px-3 py-1">
                  Edit
                </button>
              </td>
              <td className="text-center">
                <button
                  onClick={deleteTodo}
                  className="text-white text-md bg-red-500 rounded-sm px-3 py-1"
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
