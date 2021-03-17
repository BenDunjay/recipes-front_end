import React, { useState } from "react";

import "./App.css";
import LoginButton from "./Components/LoginButton";
import AuthContainer from "./Containers/AuthContainer";
import HomeContainer from "./Containers/HomeContainer";
import NavBar from "./Containers/NavBar";

function App() {
  const [userLogin, setUserLogin] = useState(false);

  const changeUserLogin = () => {
    setUserLogin(!userLogin);
  };

  return (
    <div className="App">
      {/* <LoginButton changeLoginState={changeUserLogin} /> */}
      <NavBar userStateLogin={changeUserLogin} />
      {userLogin ? <AuthContainer /> : <HomeContainer />}
    </div>
  );
}
export default App;
