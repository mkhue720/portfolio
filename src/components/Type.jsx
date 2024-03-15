import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "ReactJS",
            "NodeJS, ExpressJS",
            "TailWind CSS",
            "MERN Stack",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
  );
}

export default Type;