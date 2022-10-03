import React from "react";
import "../App.css";
function About() {
  return (
    <section className="about">
      <div className="main">
        <img src="images/1.jpg" alt="1.jpg" />
        <div className="about-text">
          <h1>About Us</h1>
          <h5>
            SportWear <span>Classic.</span>{" "}
          </h5>
          <p>
            For Martin, American sportswear was an expression of various
            predominantly middle-class aspects of American culture, including
            health ideals, the concept of democracy, ideas of comfort and
            function, and innovative design which might refer to historical
            concepts or leisure attributes.The establishment of a five-day
            working week and an eight-hour working day in America in the
            mid-20th century led to the need for clothing which enabled the
            fullest possible enjoyment of such increased leisure time, and was
            designed accordingly.
          </p>
          <button type="button">READ MORE</button>
        </div>
      </div>
    </section>
  );
}

export default About;
