import React from "react";
import API from "./API";
import "./App.css";

function App() {
  const test = (user) => {
    API.getUsersRecipes(user).then((data) => console.log(data));
    console.log();
  };

  return (
    <div className="App">
      <button onClick={test}></button>
    </div>
  );
}

export default App;
