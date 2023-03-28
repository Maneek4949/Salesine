import React from "react";
import Button from "react-bootstrap/esm/Button";



const Home = () => {
  return (
    <div className="acc">
      <div className="accCard">
        <h3>Zoom Meetings</h3>
          <Button>Start a Meeting</Button>
          <Button>Join a Meeting</Button>
      </div>
    </div>
  );
};

export default Home;
