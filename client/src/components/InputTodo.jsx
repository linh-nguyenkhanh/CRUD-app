import React, { Fragment } from "react";
import { useGlobalContext } from "../context";

const InputTodo = () => {
  const { description, setDescription, onSubmitForm } = useGlobalContext();

  return (
    <Fragment>
      <h1 className="text-center lg:text-3xl md:text-sm font-bold text-blue-600/100 p-4">
        PERN Todo List
      </h1>
      {description.length < 0 && <div>"Please add something to-do"</div>}
      <form onSubmit={onSubmitForm} className="flex  ">
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Enter a todo..."
          className="placeholder-shown:border-gray-500 rounded-md border-2 px-4 py-2 mr-3 lg:w-64 md:w-32 "
        />
        <button className=" px-5 py-2 text-lg bg-blue-500 text-white rounded-lg">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
