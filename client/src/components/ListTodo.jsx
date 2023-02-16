import React, { Fragment } from "react";

import EditTodo from "./EditTodo";
import { useGlobalContext } from "../context";

const ListTodo = () => {
  const { todos, deleteTodo } = useGlobalContext();
  return (
    <Fragment>
      <table className="lg:w-full md:w-48 text-center table-fixed m-2">
        <thead>
          <tr className="bg-white text-black underline decoration-4 decoration-purple-400">
            <th
              scope="col"
              className="font-bold lg:text-lg md:text-sm text-sm px-6 py-4 "
            >
              Description
            </th>
            <th
              scope="col"
              className="font-bold lg:text-lg md:text-sm  px-6 py-4 "
            >
              Edit
            </th>
            <th
              scope="col"
              className="font-bold lg:text-lg md:text-sm   px-6 py-4 "
            >
              Delete
            </th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.todo_id}
              className="p-2 border-b text-left odd:bg-white even:bg-slate-50 "
            >
              <td
                className="text-center hover:bg-yellow-100
"
              >
                {todo.description}
              </td>
              <td className="text-center ">
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
