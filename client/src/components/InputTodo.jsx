import React, { Fragment } from "react";
import { useGlobalContext } from "../context";

const InputTodo = () => {
  const { description, setDescription, onSubmitForm } = useGlobalContext();

  return (
    <Fragment>
      <h1 className="text-center  lg:text-3xl md:text-md font-bold text-white m-5 ">
        PERN Todo List
      </h1>
      <form onSubmit={onSubmitForm} className="flex m-5 ">
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Enter a todo..."
          className="placeholder-shown:border-gray-500 rounded-md border-2 px-4 py-2 mr-3 lg:w-64 md:w-32 "
        />
        <button className=" px-5 py-2 text-lg font-bold bg-purple-500 text-white rounded-lg">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
