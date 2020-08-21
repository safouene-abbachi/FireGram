import React, { useEffect } from "react";
import UseStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = ({ file, setfile }) => {
  const { url, progress } = UseStorage(file);
  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
