import React, { Fragment } from "react";

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <div className="flex flex-col h-80 justify-center items-center ">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
