import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import debounce from "lodash/debounce";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as Ellipse9 } from "../svg/particles/particle-Ellipse-9.svg";
import { ReactComponent as Ellipse10 } from "../svg/particles/particle-Ellipse-10.svg";
import { ReactComponent as Ellipse11 } from "../svg/particles/particle-Ellipse-11.svg";
import { ReactComponent as Group3 } from "../svg/particles/particle-Group-3.svg";
import { ReactComponent as Group4 } from "../svg/particles/particle-Group-4.svg";
import { ReactComponent as Group6 } from "../svg/particles/particle-Group-6.svg";
import { ReactComponent as Group7 } from "../svg/particles/particle-Group-7.svg";
import { ReactComponent as Group8 } from "../svg/particles/particle-Group-8.svg";
import { ReactComponent as Polygon5 } from "../svg/particles/particle-Polygon-5.svg";
import { ReactComponent as Rectangle18 } from "../svg/particles/particle-Rectangle-18.svg";
import { ReactComponent as Rectangle19 } from "../svg/particles/particle-Rectangle-19.svg";
import { ReactComponent as Rectangle21 } from "../svg/particles/particle-Rectangle-21.svg";
import { ReactComponent as Vector1 } from "../svg/particles/particle-Vector-1.svg";
import { ReactComponent as Vector2 } from "../svg/particles/particle-Vector-2.svg";
import { ReactComponent as ArrowDown } from "../svg/graphic-down-arrow.svg";
import { enterFromBottom, exitToBottom } from "../utils/animations";

const particles = [
  {
    name: "Ellipse9",
    src: Ellipse9,
    height: 22,
    width: 22,
    initialTop: 1089,
    initialLeft: 429,
    speed: 80,
  },
  {
    name: "Ellipse10",
    src: Ellipse10,
    height: 28,
    width: 28,
    initialTop: 1639,
    initialLeft: 791,
    speed: 26,
  },
  {
    name: "Ellipse11",
    src: Ellipse11,
    height: 18,
    width: 18,
    initialTop: 1285,
    initialLeft: 1245,
    speed: 3,
  },
  {
    name: "Group3",
    src: Group3,
    height: 91,
    width: 86,
    initialTop: 1053,
    initialLeft: 630,
    speed: 18,
  },
  {
    name: "Group4",
    src: Group4,
    height: 71,
    width: 69,
    initialTop: 1569,
    initialLeft: 529,
    speed: 80,
  },
  {
    name: "Group6",
    src: Group6,
    height: 37,
    width: 35,
    initialTop: 1071,
    initialLeft: 1135,
    speed: 3,
  },
  {
    name: "Group7",
    src: Group7,
    height: 64,
    width: 64,
    initialTop: 1588 - 400,
    initialLeft: 260,
    speed: 4.2,
  },
  {
    name: "Group8",
    src: Group8,
    height: 71,
    width: 89,
    initialTop: 1204,
    initialLeft: 364.15,
    transform: `rotate(40.87deg)`,
    speed: 27,
  },
  {
    name: "Polygon5",
    src: Polygon5,
    height: 27,
    width: 27,
    initialTop: 1061,
    initialLeft: 205,
    speed: 3,
  },
  {
    name: "Rectangle18",
    src: Rectangle18,
    height: 8.4,
    width: 20,
    initialTop: 1581 - 500,
    initialLeft: 895,
    transform: `rotate(-15deg)`,
    speed: 3,
  },
  {
    name: "Rectangle19",
    src: Rectangle19,
    height: 11.25,
    width: 36.89,
    initialTop: 1439.24,
    initialLeft: 1302,
    transform: `rotate(56.31deg)`,
    speed: 100,
  },
  {
    name: "Rectangle21",
    src: Rectangle21,
    height: 2.77,
    width: 36.16,
    initialTop: 1644,
    initialLeft: 1184,
    transform: `rotate(-141.65deg)`,
    speed: 200,
  },
  {
    name: "Vector1",
    src: Vector1,
    height: 78,
    width: 46,
    initialTop: 1207,
    initialLeft: 729,
    transform: `rotate(-37.09deg)`,
    speed: 25,
  },
  {
    name: "Vector2",
    src: Vector2,
    height: 38.47,
    width: 46,
    initialTop: 1470,
    initialLeft: 109,
    transform: `rotate(-37.09deg)`,
    speed: 7,
  },
];

function SimpleParticles({ disableMovement }) {
  // I can improve these animations by using the translate
  // CSS transition instead of modifying the
  // top CSS values

  const Yoffset = 1000;
  const Xoffset = 90;
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    if (!disableMovement) {
      window.addEventListener("scroll", debounce(handleScroll, 3));
    }
  });

  return (
    <div className="simple-particles">
      {particles.map((element) => {
        const {
          name,
          height,
          width,
          initialTop,
          initialLeft,
          transform,
          speed,
        } = element;

        return (
          <element.src
            key={name}
            className={`simple-particle simple-particle-${name}`}
            style={{
              height: `${height}px`,
              width: `${width}px`,
              top: `${initialTop - Yoffset + scrollTop / speed}px`,
              left: `${initialLeft - Xoffset}px`,
              transform: `${transform}`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function SimpleIsBetter() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  const section = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const item = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });

  return (
    <section className="simple-is-better" id="projects-anchor">
      <SimpleParticles disableMovement={true} />
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={8}>
          <motion.div
            ref={ref}
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
            variants={section}
          >
            <motion.div variants={item}>
              <Typography variant="h1" align="center" paragraph>
                "Simple is Better"
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Typography paragraph align="center">
                Through my career as a designer, I've been privileged to work
                with talented designers to innovate consumer products that
                simplify millions of people's life.
              </Typography>
            </motion.div>
            <motion.div variants={item}>
              <Typography align="center" paragraph>
                <strong>Here's a few that I'd like to share.</strong>
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography align="center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [20, 40, 20] }}
                  transition={{
                    loop: Infinity,
                    ease: "linear",
                    duration: 1,
                  }}
                >
                  <ArrowDown />
                </motion.div>
              </Typography>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
}
