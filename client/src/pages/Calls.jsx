import React from "react";
import CallCard from "../Components/CallCard";


const Calls = () => {
  return (
    <div className="calls">
        <h2>All Calls</h2>
        <div className="callList">
        <CallCard name={"Pam and Tara v - ABC Company"} details={"March 28, 2023, Palm, ABC Company"} />
        <CallCard name={"Sonia and Ross -Ubisoft Co."} details={"March 22, 2023, Palm, Ubisoft Co."} />
        <CallCard name={"Berry and Ross -UbiSoft Co."} details={"March 21, 2023, Palm, Ubisoft Co."} />
        <CallCard name={"Alex and Tom -Acme Co."} details={"March 20, 2023, Palm, Acme Co."} />
        <CallCard name={"Jully and Jhon -Tbay Inc"} details={"March 08, 2023, Palm, Tbay Inc"} />
        <CallCard name={"William and Jully -Tbay Inc"} details={"March 12, 2023, Palm, Tbay Inc"} />
        </div>
    </div>
  );
};

export default Calls;
