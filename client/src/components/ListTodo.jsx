import React, { Fragment, useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
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
      <table className="w-full text-left table-fixed m-2">
        <thead>
          <tr className="odd:bg-gray-100">
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4"
            >
              Description
            </th>
            <th
              scope="col"
              className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
            >
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {todos.map((todo) => (
              <td key={todo.todo_id} className="p-2 border-b text-left">
                {todo.description}
              </td>
            ))}
            <td>Edit</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
