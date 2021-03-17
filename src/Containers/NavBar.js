import React, { useState } from "react";

import LoginButton from "../Components/LoginButton";

function NavBar(props) {
  return (
    <div>
      <LoginButton userStateLogin={props.userStateLogin} />
    </div>
  );
}

export default NavBar;
