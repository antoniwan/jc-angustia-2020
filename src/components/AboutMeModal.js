import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Photo from "../images/photo-jc-sitting.png";
import Photo2x from "../images/photo-jc-sitting-2x.png";

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
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
      <DialogContent>
        <Grid container alignItems="flex-start" justify="flex-end">
          <img
            className="aboutme-image"
            srcSet={`${Photo} 1x, ${Photo2x} 2x`}
            alt="Handsome afro-latino with cool glasses, sitting on a stool, smiling into the sun"
          />
          <Grid item xs={7} style={{ zIndex: "1", paddingBottom: "1rem" }}>
            <Typography paragraph variant="h1">
              I am Juan Angustia
            </Typography>
            <Typography paragraph>
              <strong>
                Visual Designer with a decade of experience; specializing in
                UI/UX, wireframing, and prototyping.
              </strong>
            </Typography>
            <Typography paragraph>
              I was born and raised in Constanza, a small town surrounded by
              beautiful mountains in the Dominican Republic. In the year 2004,
              before I ever dreamed of joining Google, I went to college at the
              Universidad Autónoma de Santo Domingo (UASD) to study Advertising.
              However, I did not finish my degree because the school did not
              offer classes that sparked my interest. Instead, I decided to
              continue teaching myself the things that I loved. I wrote an
              article about it on Medium.
            </Typography>
            <Typography paragraph>
              In the Design & Technologie fields, I have 10 years of experience
              working on projects for diverse brands such as Comcast,
              MasterCard, Copa Airlines, Clorox Company, and among others.
            </Typography>
            <Typography paragraph>
              Today, I work in <strong>Google Duo</strong>, where I try to
              incorporate UX, visual design, motion, and front end prototyping.
              But in my free time I love to work on personal projects such as
              <strong>Dominicana TV</strong>, a streaming app on Roku that
              allows the Dominican community in the United States and Europe to
              watch local Dominican TV channels and radio stations live and
              free. Also, I love to take photos and make videos, like the short
              film “El Camino”.
            </Typography>
            <Typography paragraph>
              As a product designer I believe in the simplicity of things: good
              product, UX, visual, and interaction not only solves problems but
              also creates an emotional experience for people by bringing
              emotion in each visual interaction.
            </Typography>
            <Typography paragraph>
              Throughout my career, I have learned that the product is most
              successful when we put people first and listen to them. As a
              designer, my goal is always to find a way to learn about people's
              needs and create emotional designs that connect, engage, and
              deliver.
            </Typography>
            <Typography paragraph>
              You want to know more, I invite you to read; My path to Google
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AboutMeModal;
