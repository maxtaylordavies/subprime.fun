import React from "react";
import { motion } from "framer-motion";

import logo from "../../logo.png";

import "./home.css";

export const Home = () => {
  return (
    <motion.div className="home-page">
      <img src={logo} />
    </motion.div>
  );
};
