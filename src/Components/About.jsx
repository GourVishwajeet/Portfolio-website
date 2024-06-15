/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/im.jpg";

const imageAltText = "White background with plant leaves";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Profile Summary As a proactive Fullstack Developer Intern with a strong foundation in JavaScript, React.js, React Native, Node.js, MySQL, and the MERN stack, I am committed to My diligent work ethic is evident in my commendable HSC results, reflecting my dedication to learning and growth. Eager to enhance my skills through valuable internship experiences, I am keen to contribute effectively to an esteemed team. I aim to leverage my expertise to provide innovative solutions, gain practical exposure and shape a successful career in the tech industry.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Fullstack Development",
  "Mern Stack",
  "Front End Design",
  "Mobile Development",
  "Web Development",
  "DSA",
  "Backend Development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my FullStack experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
