import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="justify-center pb-[10px]">
      <h1 className="project__heading pb-5">
        Days <strong className="text-primaryColor">Code</strong>
      </h1>
      <div className="flex justify-center">
      <GitHubCalendar
        username="mkhue720"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      </div>
    </Row>
  );
}

export default Github;