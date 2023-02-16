import React, { Fragment } from "react";

import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className=" flex flex-col lg:w-full md:w-48 justify-center items-center ">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
