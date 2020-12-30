import React from "react";

import "./UserOutput.css";

const userOutpot = (props) => {
  return (
    <div className="UserOutput">
      <p>Username : {props.userName}</p>
      <p>This is my second paragraph.</p>
    </div>
  );
};

export default userOutpot;
