import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Projects() {
  return (
    <>
      <section className="project project-google-duo">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Google Duo</Typography>
            <Typography gutterBottom>Visual Designer (UX)</Typography>
            <Typography paragraph>
              Simple, high quality video calls on Android phones, iPhones,
              tablets, computers, and Smart Displays.
            </Typography>
            <Button variant="contained" color="primary" disableElevation>
              See more
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            Image
          </Grid>
        </Grid>
      </section>

      <section className="project xfinity-stream">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            Image
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3">XFINITY STREAM</Typography>
            <Typography gutterBottom>Lead Visual Designer (UX)</Typography>
            <Typography paragraph>
              Stream TV app was a company initiative to bring stream mobile
              experience on the big screen. I was responsible to lead visual and
              UX experience for Stream tv on Roku, and smart tvs like LG, and
              Samsung.
            </Typography>
          </Grid>
        </Grid>
      </section>

      <section className="project vevo-music">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">VEVO MUSIC</Typography>
            <Typography gutterBottom>Product Designer</Typography>
            <Typography paragraph>
              Sometimes it’s difficult to find content that you love. This was
              my inspiration to made this concept. A ux experience where users
              can personalize their experience based on their taste.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            Image
          </Grid>
        </Grid>
      </section>
    </>
  );
}
