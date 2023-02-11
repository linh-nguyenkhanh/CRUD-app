import React, { Fragment } from "react";

import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
function App() {
  return (
    <Fragment>
      <div className="flex flex-col h-80 justify-center items-center ">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
