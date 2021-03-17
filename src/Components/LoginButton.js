import React, { useState } from "react";

function LoginButton(props) {
  const [buttonText, setButtonText] = useState("Login");

  const changeLoginText = () => {
    setButtonText("Logout");
    console.log(buttonText);
  };

  return (
    <div>
      <button onClick={(props.userStateLogin, changeLoginText)}>
        {buttonText}{" "}
      </button>
    </div>
  );
}

export default LoginButton;
