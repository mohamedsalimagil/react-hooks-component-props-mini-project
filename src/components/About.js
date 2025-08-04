import React from "react";

function About(props) {
  const imageSrc = props.image || "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
