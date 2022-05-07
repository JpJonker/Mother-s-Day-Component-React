import React from "react";
import { motion } from "framer-motion";

import "./App.scss";

const MotherDayCard = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delay: 1 }}
        className='app__card app__flex'
      >
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 2, delay: 2, ease: "backOut" }}
          className='app__card-header'
        >
          <h1>Happy Mothers Day</h1>
        </motion.div>
        <motion.p
          animate={{ x: [1000, 0] }}
          transition={{ duration: 2, delay: 2.75, ease: "backOut" }}
          className='app__card-text'
        >
          I want to wish you a very happy mothers day, I want to thank you for everything that you
          have done for me in my life. I love you so much mum.
        </motion.p>
        <motion.div
          animate={{ scale: [1, 3], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 4, ease: "easeInOut" }}
          className='app__card-image'
        >
          <motion.div>
            <motion.h2
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 5, ease: "backOut" }}
            >
              I
            </motion.h2>
            <motion.h2
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 7, ease: "backOut" }}
            >
              Mum
            </motion.h2>
            <motion.h2
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 6, ease: "backOut" }}
            >
              Y
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

const App = () => {
  return (
    <div className='app__container app__flex'>
      <MotherDayCard />
    </div>
  );
};

export default App;
