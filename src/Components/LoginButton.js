import React, { useState } from "react";

function LoginButton(props) {
  return (
    <div>
      <button onClick={props.changeLoginState}> Login </button>
    </div>
  );
}

export default LoginButton;
