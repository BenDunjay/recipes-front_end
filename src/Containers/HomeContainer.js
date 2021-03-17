import React, { useState } from "react";

import NavBar from "./NavBar";

function HomeContainer(props) {
  return (
    <div>
      {" "}
      HomeContainer
      <NavBar userState={props.userLogin} />
    </div>
  );
}

export default HomeContainer;
