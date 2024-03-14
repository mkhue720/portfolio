import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-mobile">
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
    </div>
  );
}

export default Type;