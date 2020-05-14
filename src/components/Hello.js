import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { ReactComponent as A } from "../svg/graphic-A.svg";
import { ReactComponent as AwBottomLine } from "../svg/graphic-A-bottom-line.svg";
import JC1x from "../images/photo-jc.png";
import JC2x from "../images/photo-jc-2x.png";

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
  const [scrollTop, setScrollTop] = useState(0);
  const [aTranslation, setaTranslation] = useState(0);
  const [aOutlineTranslation, setaOutlineTranslation] = useState(0);

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setScrollTop(scrollTop);
    setaOutlineTranslation((-100 * scrollTop) / 1000);
    setaTranslation((+200 * scrollTop) / 1000);
  };

  const handleClick = function (e) {
    setModalOpen(true);
  };

  const handleClose = function (e) {
    setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <section className="hello">
      <AboutMeModal isOpen={modalOpen} handleClose={handleClose} />
      <Grid container spacing={0}>
        <Grid className="hello-content" item xs={9} md={6}>
          <div className="hello-content">
            <Typography variant="h1" id="hello-anchor" gutterBottom>
              Hey, I'm Juan Angustia.
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
              people, an{" "}
              <strong>
                <a
                  href="https://medium.com/@angustia/a-latino-college-dropout-at-google-5eb2d0629710"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aspiring writer
                </a>
              </strong>
              ,{" "}
              <strong>
                <a
                  href="https://www.instagram.com/p/B7JBE0ogWne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fashion lover
                </a>
              </strong>
              , and also a proud Afro-Latino.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleClick}
            >
              About me
            </Button>
          </div>
        </Grid>
        <Grid item xs={3} md={6}>
          <div className="hello-graphics">
            <img
              className="hello-picture"
              srcSet={`${JC1x} 1x, ${JC2x} 2x`}
              alt="Juan Carlos Angustia, cool dude who dresses nice"
            />
            <A
              className="hello-a"
              style={{ transform: `translate(${aTranslation}px)` }}
            />
            <AwBottomLine
              className="hello-a-bottom-line"
              style={{ transform: `translate(${aOutlineTranslation}px)` }}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
