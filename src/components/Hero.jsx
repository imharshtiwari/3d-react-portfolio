import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";
import { harsh } from "../assets";
import "./Hero.scss";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Web Developer",
        "Building Scalable Web Solutions",
        "DevOps Enthusiast",
        "Content Writer",
        "Software Developer",
        "Tech Enthusiast",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="flex">
        <div
          className={`head1 absolute max-w-9xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-90 h-40 violet-gradient" />
          </div>

          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hii there, I'm{" "}
              <p className="name text-[#915EFF]">Harsh Tiwari</p>
            </h1>
            <h3>
              <span
                ref={textRef}
                className={`${styles.heroSubText} mt-2 green-text-gradient`}
                style={{ fontFamily: "Arial, sans-serif" }}
              ></span>
            </h3>

            <div className="absolute link1">
              <a
                href="https://github.com/imharshtiwari"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/the-harsh-tiwari/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin />
              </a>
              <a
                href="https://www.instagram.com/harshtiwari.me"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
              </a>
              <a href="https://linktr.ee/#" target="_blank" rel="noreferrer">
                <BiLinkAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="imgcontainer1 absolute violet-gradient">
          <img src={harsh} alt="Harsh Tiwari" className="object-contain" />
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-6 w-10 flex justify-end items-center">
        <a href="#About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
