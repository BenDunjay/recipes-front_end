import React, { useState } from "react";

import "./App.css";
import LoginButton from "./Components/LoginButton";
import AuthContainer from "./Containers/AuthContainer";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  const [userLogin, setUserLogin] = useState(false);

  const changeUserLogin = () => {
    setUserLogin(!userLogin);
  };

  return (
    <div className="App">
      <LoginButton changeLoginState={changeUserLogin} />
      {userLogin ? <AuthContainer /> : <HomeContainer userState={userLogin} />}
    </div>
  );
}
export default App;
