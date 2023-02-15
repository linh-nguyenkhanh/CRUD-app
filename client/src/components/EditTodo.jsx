import React, { Fragment, useState } from "react";
import Modal from "./Modal";

const EditTodo = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  return (
    <Fragment>
      <button
        onClick={setShowModal}
        className="text-center text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        type="button"
      >
        Edit
      </button>
      {showModal ? (
        <Modal
          id={`id${todo.todo_id}`}
          setShowModal={setShowModal}
          setDescription={todo.todo_id.description}
        />
      ) : null}
    </Fragment>
  );
};

export default EditTodo;
