import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center text-3xl font-bold text-blue-600/100 p-4">
        PERN Todo List
      </h1>
      <form onSubmit={onSubmitForm}>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Enter a todo..."
          className="placeholder-shown:border-gray-500 rounded-md border-2 px-2 py-2 mr-3 w-96"
        />
        <button className=" px-5 py-2 text-lg bg-blue-300 text-white rounded-lg">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
