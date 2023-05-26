/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a <b>software engineer</b> with experience in <b>C#</b>,{" "}
        <b>Python</b>,<b>Javascript</b>, and other languages. I&apos;ve worked
        with <b>on-premise</b> and <b>containerized AWS cloud services</b>, as
        well as <b>AI/ML</b>, <b>Android</b>, <b>React</b>, and{" "}
        <b>WPF Desktop applications</b>.<br />
        <br /> I&apos;m a fast learner and have used many tools through this
        journey from <b>Docker</b> to <b>Jupyter Notebooks</b>,{" "}
        <b>Kubernetes</b> and <b>relational/document database engines</b>: to me
        it&apos;s all about algorithms and data structures in the end. <br />
        <br />
        I&apos;m a strong team player and a technical (academical)
        decision-maker, having led some projects and designed some system
        architectures so far.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
