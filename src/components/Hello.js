import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import debounce from "lodash/debounce";
import { ReactComponent as A } from "../svg/graphic-A.svg";
import { ReactComponent as AwBottomLine } from "../svg/graphic-A-bottom-line.svg";
import JC1x from "../images/photo-jc.png";
import JC2x from "../images/photo-jc-2x.png";
import { enterFromLeft, exitToLeft } from "../utils/animations";

const AboutMeModal = function ({ isOpen, handleClose }) {
  const onClose = function (e) {
    console.log(e);
  };
  return (
    <Dialog
      fullWidth={false}
      maxWidth={"lg"}
      open={isOpen}
      onBackdropClick={handleClose}
      onEscapeKeyDown={handleClose}
      onClose={onClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can set my maximum width and whether to adapt or not.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default function Hello() {
  const [modalOpen, setModalOpen] = useState(false);
  const [aTranslation, setaTranslation] = useState(0);
  const [aOutlineTranslation, setaOutlineTranslation] = useState(0);
  const [jcTranslation, setjcTranslation] = useState(0);
  const [ref, inView, entry] = useInView();
  const controls = useAnimation();

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setaOutlineTranslation((-100 * scrollTop) / 1000);
    setaTranslation((+200 * scrollTop) / 1000);
    setjcTranslation((-50 * scrollTop) / 1000);
  };

  const handleClick = function (e) {
    setModalOpen(true);
  };

  const handleClose = function (e) {
    setModalOpen(false);
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener("scroll", debounce(handleScroll, 1));
      controls.start(enterFromLeft);
    } else {
      window.removeEventListener("scroll", handleScroll);
      controls.start(exitToLeft);
    }
  });

  return (
    <section className="hello" ref={ref}>
      <AboutMeModal isOpen={modalOpen} handleClose={handleClose} />
      <Grid container spacing={0}>
        <Grid className="hello-content" item xs={9} md={5}>
          <motion.div
            className="hello-content"
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            <Typography variant="h1" id="hello-anchor" gutterBottom>
              Hello there!
              <br />
              I'm Juan Angustia.
            </Typography>
            <Typography paragraph>
              A Visual Designer at{" "}
              <strong>
                <a
                  href="https://students.googleblog.com/2020/02/my-path-to-google-juan-angustia-visual.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </strong>
              , who loves to create simple designs that inspire and engage
              people. I'm an{" "}
              <strong>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  entrepeneur,
                </a>
              </strong>{" "}
              <strong>
                <a
                  href="https://medium.com/@angustia/a-latino-college-dropout-at-google-5eb2d0629710"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  writer
                </a>
              </strong>
              ,{" "}
              <strong>
                <a
                  href="https://www.instagram.com/p/B7JBE0ogWne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  urban fashion lover
                </a>
              </strong>
              , and proud Afro-Latino.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleClick}
            >
              See more
            </Button>
          </motion.div>
        </Grid>
        <Grid item xs={3} md={7}>
          <div className="hello-graphics">
            <motion.div
              className="hg-jc-photo"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <img
                className="hello-picture"
                srcSet={`${JC1x} 1x, ${JC2x} 2x`}
                alt="Juan Carlos Angustia, cool dude who dresses nice"
                style={{ transform: `translate(${jcTranslation}px)` }}
              />
            </motion.div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <A
                className="hello-a"
                style={{ transform: `translate(${aTranslation}px)` }}
              />
            </motion.div>

            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 20,
              }}
            >
              <AwBottomLine
                className="hello-a-bottom-line"
                style={{ transform: `translate(${aOutlineTranslation}px)` }}
              />
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
