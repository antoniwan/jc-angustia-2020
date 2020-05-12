import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PhotoGoogleDuo from "../images/photo-google-duo.png";
import PhotoGoogleDuo2x from "../images/photo-google-duo-2x.png";
import PhotoVevoMusic from "../images/photo-vevo-music.png";
import PhotoVevoMusic2x from "../images/photo-vevo-music-2x.png";
import PhotoXfinityStream from "../images/photo-xfinity-stream.png";
import PhotoXfinityStream2x from "../images/photo-xfinity-stream-2x.png";

export default function Projects() {
  return (
    <>
      <section className="project project-google-duo">
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justify="center" alignItems="center">
              <img
                className="project-google-duo-picture"
                srcSet={`${PhotoGoogleDuo} 1x, ${PhotoGoogleDuo2x} 2x`}
                alt="Google Duo Screenshots on multiple devices"
              />
            </Grid>
          </Grid>
        </Grid>
      </section>

      <section className="project project-xfinity-stream xfinity-stream">
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Grid container justify="center" alignItems="center">
              <img
                className="project-xfinity-stream-picture"
                srcSet={`${PhotoXfinityStream} 1x, ${PhotoXfinityStream2x} 2x`}
                alt="Xfinity Stream TV application Screenshots"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
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
          </Grid>
        </Grid>
      </section>

      <section className="project project-vevo-music vevo-music">
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justify="center" alignItems="center">
              <img
                className="project-vevo-music-picture"
                srcSet={`${PhotoVevoMusic} 1x, ${PhotoVevoMusic2x} 2x`}
                alt="Vevo Music user interface Screenshots"
              />
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
