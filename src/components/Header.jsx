import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export const Header = ({ title, subtitle, useMotion = false }) => {
  const content = (
    <>
      <p className="sectionSubText">{subtitle}</p>
      <h2 className="sectionHeadText">{title}</h2>
    </>
  );

  return useMotion ? (
    <motion.div variants={textVariant(0.2)}>{content}</motion.div>
  ) : (
    <div>{content}</div>
  );
};
