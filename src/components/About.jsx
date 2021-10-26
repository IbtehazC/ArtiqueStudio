import { motion } from "framer-motion";
import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="content">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
        >
          <h2 style={{ marginTop: "3rem" }}>ARTIQUE STUDIO</h2>
          <p>
            Artique Studio is a design studio specializing in murals or
            wall-arts, branded illustration systems, and creative designing. Our
            murals and works are all throughout the city and has transcended
            outwards to Chittagong. Our goal is to create meaningful and
            timeless design for our clients and their audience. We use our
            experience and creativity to support brands of all sizes in telling
            their stories through classic visuals and strategic thinking. We
            believe that great work comes from building great relationships. We
            work one on one with our clients and collaborate with them every
            step of the way.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
        >
          <h2 style={{ marginTop: "3rem" }}>Tahsin Nur</h2>
          <p style={{ textAlign: "center", marginBottom: '2rem' }}>
            Cofounder + Communication Director
          </p>
          <p>
            Having experience in versatile mediums, Tahseen uses his ideas and
            design experience to make an idea born into reality. Be it mural
            works, illustrations, canvas paintings or any other types – he
            always gives his 110% and makes sure his works stand the test of
            time and marveled by all. As a natural creative thinker, Tahseen can
            be seen painting his room, travelling or trekking to adventurous
            places, visiting museums or simply walking in streets, observing the
            surroundings.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
        >
          <h2 style={{ marginTop: "3rem" }}>Swapnil Tanzim</h2>
          <p style={{ textAlign: "center", marginBottom: '2rem' }}>Cofounder + Creative Director</p>
          <p>
            As Creative Director at Artique Studio, Swapnil uses his design
            experience to support brands of all sizes in telling their stories
            through timeless visuals and strategic thinking. Swapnil’s
            philosophy of continuity, resilience and simplicity result in
            elegant and sophisticated works aimed to stand the test of time. As
            a true artisan, when not occupied painting wall-arts for his
            clients, Swapnil can be found hanging out with his friends, watching
            movies and sports, or traveling around the country.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
        >
          <h2 style={{ marginBottom: 32 }}>Contacts</h2>
          <div className="icons-div">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="svg-inline--fa fa-envelope fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-square"
              className="svg-inline--fa fa-facebook-square fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="svg-inline--fa fa-instagram fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "spring" } }}
        >
          <h2>Skills</h2>
          <div className="skill-div">
            <div className="chip">Skill - 1</div>
            <div className="chip">Skill - 2</div>
            <div className="chip">Skill - 3</div>
            <div className="chip">Skill - 4</div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
