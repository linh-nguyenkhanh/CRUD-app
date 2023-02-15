import React, { Fragment, useState } from "react";

import { useGlobalContext } from "../context";

const EditTodo = ({ todo }) => {
  console.log(todo);
  const { setShowModal, showModal } = useGlobalContext();
  const [description, setDescription] = useState(todo.description);

  //    EDIT description func
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        id={`#id${todo.todo_id}`}
        onClick={setShowModal}
        className="text-center text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        type="button"
      >
        Edit
      </button>
      {/* modal */}
      {showModal ? (
        <div className="backdrop-blur-sm flex justify-center items-center overflow-x-hidden overflow-y-auto fixed  inset-0 outline-none focus:outline-none">
          {/* close icon */}

          <div
            id={`id${todo.todo_id}`}
            className="relative w-auto my-6 mx-auto max-w-3xl"
          >
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-xl font=semibold">Edit Todo</h3>
                <button type="button" onClick={() => setShowModal(false)}>
                  &times;
                </button>
              </div>

              {/* input change when use form tag */}
              <form className="relative p-6 flex-auto">
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-3 px-1 text-black"
                />
              </form>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-white bg-yellow-500 active:bg-yellow-700 background-transparent  px-6 py-2 text-sm focus:outline-none mr-1 mb-1 border-yellow-700 rounded shadow hover:shadow-lg outline-none"
                  type="button"
                  onClick={(e) => updateDescription(e)}
                >
                  Edit
                </button>
                <button
                  className="text-white bg-red-500 active:bg-red-700 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default EditTodo;
