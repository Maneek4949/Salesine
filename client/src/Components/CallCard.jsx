import React from "react";
import vv from "../assests/img/icon.jpg"
const CallCard = ({name,details}) => {
  return (
    <div className="callCard">
          <img src={vv} alt="icon"/>
        <h6>{name}</h6>
        <p>{details}</p>
    </div>

  );
};

export default CallCard;
