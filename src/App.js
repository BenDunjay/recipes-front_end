import React, { useState } from "react";

import "./App.css";

function App() {
  const [userLogin, setUserLogin] = useState(false);

  const changeUserState = () => {
    setUserLogin(!userLogin);
  };

  return (
    <div className="App">
      <button onClick={changeUserState}> </button>
    </div>
  );
}

export default App;
