import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PhotoGoogleDuo from "../images/photo-google-duo.png";
import PhotoGoogleDuo2x from "../images/photo-google-duo-2x.png";
import PhotoVevoMusic from "../images/photo-vevo-music.png";
import PhotoVevoMusic2x from "../images/photo-vevo-music-2x.png";
import PhotoXfinityStream from "../images/photo-xfinity-stream.png";
import PhotoXfinityStream2x from "../images/photo-xfinity-stream-2x.png";
import { enterFromBottom, exitToBottom } from "../utils/animations";

function ProjectGoogleDuo() {
  const [ref, inView, entry] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(enterFromBottom);
    } else {
      controls.start(exitToBottom);
    }
  });
  return (
    <section ref={ref} className="project project-google-duo">
      <Grid container spacing={0} justify="space-between" alignItems="center">
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            <Typography variant="h3" paragraph>
              Google Duo
            </Typography>
            <Typography variant="body2" paragraph>
              Visual Designer (UX)
            </Typography>
            <Typography paragraph>
              Simple, high quality video calls on Android phones, iPhones,
              tablets, computers, and Smart Displays.
            </Typography>
            <Button variant="contained" color="primary" disableElevation>
              See more
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid
            className="project-picture-container"
            container
            justify="center"
            alignItems="center"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={controls}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <img
                className="project-google-duo-picture"
                srcSet={`${PhotoGoogleDuo} 1x, ${PhotoGoogleDuo2x} 2x`}
                alt="Google Duo Screenshots on multiple devices"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

function ProjectVevoMusic() {
  const [ref, inView, entry] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(enterFromBottom);
    } else {
      controls.start(exitToBottom);
    }
  });
  return (
    <section ref={ref} className="project project-vevo-music vevo-music">
      <Grid container spacing={0} justify="space-between" alignItems="center">
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            <Typography variant="h3" paragraph>
              VEVO MUSIC
            </Typography>
            <Typography variant="body2" gutterBottom>
              Product Designer
            </Typography>
            <Typography paragraph>
              Sometimes it’s difficult to find content that you love. This was
              my inspiration to made this concept. A ux experience where users
              can personalize their experience based on their taste.
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid
            className="project-picture-container"
            container
            justify="center"
            alignItems="center"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={controls}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <img
                className="project-vevo-music-picture"
                srcSet={`${PhotoVevoMusic} 1x, ${PhotoVevoMusic2x} 2x`}
                alt="Vevo Music user interface Screenshots"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

function ProjectXfinityStream() {
  const [ref, inView, entry] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(enterFromBottom);
    } else {
      controls.start(exitToBottom);
    }
  });
  return (
    <section
      ref={ref}
      className="project project-xfinity-stream xfinity-stream"
    >
      <Grid container spacing={0} justify="space-between" alignItems="center">
        <Grid className="flex-order-2" item xs={12} md={5}>
          <Grid
            className="project-picture-container"
            container
            justify="center"
            alignItems="center"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={controls}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <img
                className="project-xfinity-stream-picture"
                srcSet={`${PhotoXfinityStream} 1x, ${PhotoXfinityStream2x} 2x`}
                alt="Xfinity Stream TV application Screenshots"
              />
            </motion.div>
          </Grid>
        </Grid>

        <Grid className="flex-order-1" item xs={12} md={5}>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            <Typography variant="h3" paragraph>
              XFINITY STREAM
            </Typography>
            <Typography paragraph variant="body2">
              Lead Visual Designer (UX)
            </Typography>
            <Typography paragraph>
              Stream TV app was a company initiative to bring stream mobile
              experience on the big screen. I was responsible to lead visual and
              UX experience for Stream tv on Roku, and smart tvs like LG, and
              Samsung.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
}

export default function Projects() {
  const [ref, inView, entry] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(enterFromBottom);
    } else {
      controls.start(exitToBottom);
    }
  });

  return (
    <>
      <ProjectGoogleDuo />
      <ProjectXfinityStream />
      <ProjectVevoMusic />
    </>
  );
}
