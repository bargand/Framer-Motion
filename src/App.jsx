import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{ 
          x:[0,500,500,0,0],
          y:[0,0,200,200,0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "anticipate" }}
      ></motion.div>
    </div>
  );
};

export default App;
