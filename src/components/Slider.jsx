import { wallpapers } from "../utils/wallpapers";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlidePagination from "./SlidePagination";
import { generateRandomNum, findIndex } from "../utils";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0.5,
      transition: {
        x: {
          duration: 1,
        },
        opacity: 1,
      },
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 1 },
    },
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      transition: {
        x: {
          duration: 1,
        },
      },
    };
  },
};

export default function Slider() {
  const [selected, setSelected] = useState();
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const random = generateRandomNum(wallpapers.length - 1);
    setSelected(wallpapers[random]);
  }, []);

  const next = () => {
    const indexNext = findIndex(wallpapers, "name", selected.name) + 1;
    const confirm = indexNext > wallpapers.length - 1 ? 0 : indexNext;
    setSelected(wallpapers[confirm]);
  };

  const handleSelected = (name) => {
    const found = findIndex(wallpapers, "name", name);
    const indexSelected = findIndex(wallpapers, "name", selected.name);

    if (found > indexSelected) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setSelected(wallpapers[found]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 16000);

    return () => {
      clearInterval(interval);
    };
  }, [selected]);

  if (!selected) {
    return <div>Loading</div>;
  }

  return (
    <section className="h-[80vh] md:h-[93vh] relative ">
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={selected.name}
            variants={variants}
            custom={direction}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.3 },
            }}
            className="absolute w-full h-full"
          >
            <img
              src={selected.wallpaper}
              alt={selected.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <SlidePagination
        images={wallpapers}
        selected={selected}
        handleSelected={handleSelected}
      />
    </section>
  );
}
