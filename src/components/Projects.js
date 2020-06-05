import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhotoGoogleDuo from "../images/photo-google-duo.png";
import PhotoGoogleDuo2x from "../images/photo-google-duo-2x.png";
import PhotoVevoMusic from "../images/photo-vevo-music.png";
import PhotoVevoMusic2x from "../images/photo-vevo-music-2x.png";
import PhotoXfinityStream from "../images/photo-xfinity-stream.png";
import PhotoXfinityStream2x from "../images/photo-xfinity-stream-2x.png";

const section = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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
      y: { ease: "easeInOut", duration: 0.15 },
    },
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      y: { ease: "easeInOut", duration: 0.15 },
    },
  },
};

const imageExitRight = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeInOut", duration: 0.15 },
    },
  },
  hidden: {
    y: 0,
    x: 50,
    opacity: 0,
    transition: {
      y: { ease: "easeInOut", duration: 0.15 },
    },
  },
};

const imageExitLeft = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeInOut", duration: 0.15 },
    },
  },
  hidden: {
    y: 0,
    x: -50,
    opacity: 0,
    transition: {
      y: { ease: "easeInOut", duration: 0.15 },
    },
  },
};

function ProjectGoogleDuo() {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });
  return (
    <section ref={ref} className="project project-google-duo">
      <motion.div
        className="flex-order-1  project-text"
        initial={{ y: -20, opacity: 0 }}
        animate={controls}
        variants={section}
      >
        <motion.div variants={item}>
          <Typography variant="h2" paragraph>
            Google Duo
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography variant="body3" paragraph>
            Visual Designer (UX)
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography paragraph>
            Simple, high quality video calls on Android phones, iPhones,
            tablets, computers, and Smart Displays.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Button variant="contained" color="primary" disableElevation>
            See more
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-order-2  project-image"
        initial={{ y: -20, opacity: 0 }}
        animate={controls}
        variants={imageExitRight}
      >
        <img
          className="project-google-duo-picture"
          srcSet={`${PhotoGoogleDuo} 1x, ${PhotoGoogleDuo2x} 2x`}
          alt="Google Duo Screenshots on multiple devices"
        />
      </motion.div>
    </section>
  );
}

function ProjectVevoMusic() {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });
  return (
    <section ref={ref} className="project project-vevo-music vevo-music">
      <motion.div
        className="flex-order-1  project-text"
        initial={{ y: -20, opacity: 0 }}
        animate={controls}
        variants={section}
      >
        <motion.div variants={item}>
          <Typography variant="h2" paragraph>
            Vevo Music
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography variant="body3" paragraph>
            Product Designer
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography paragraph>
            Sometimes it’s difficult to find content that you love. This was my
            inspiration as I made this concept: an experience for people to
            personalize with their musical tastes.
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Button variant="contained" color="primary" disableElevation>
            See more
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-order-1  project-image"
        initial={{ y: -20, opacity: 0 }}
        animate={controls}
        variants={imageExitRight}
      >
        <img
          className="project-vevo-music-picture"
          srcSet={`${PhotoVevoMusic} 1x, ${PhotoVevoMusic2x} 2x`}
          alt="Vevo Music user interface Screenshots"
        />
      </motion.div>
    </section>
  );
}

function ProjectXfinityStream() {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });
  return (
    <section
      ref={ref}
      className="project project-xfinity-stream xfinity-stream"
    >
      <motion.div
        className="flex-order-1  project-image"
        initial={{ y: -20, opacity: 0 }}
        animate={controls}
        variants={imageExitLeft}
      >
        <img
          className="project-xfinity-stream-picture"
          srcSet={`${PhotoXfinityStream} 1x, ${PhotoXfinityStream2x} 2x`}
          alt="Xfinity Stream TV application Screenshots"
        />
      </motion.div>
      <motion.div
        className="flex-order-1  project-text"
        initial={{ y: -20, opacity: 0 }}
        animate={controls}
        variants={section}
      >
        <motion.div variants={item}>
          <Typography variant="h2" paragraph>
            Xfinity Stream
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography paragraph variant="body3">
            Lead Visual Designer (UX)
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography paragraph>
            Stream TV app took a streaming mobile experience to the big screen.
            I lead the visual and UX experience and brought the Stream TV apps
            to Roku, and smart tvs like LG and Samsung.
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Button variant="contained" color="primary" disableElevation>
            See more
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Projects() {
  return (
    <div className="projects">
      <ProjectGoogleDuo />
      <ProjectXfinityStream />
      <ProjectVevoMusic />
    </div>
  );
}
