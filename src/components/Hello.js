import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import JC1x from "../images/photo-jc.png";
import JC2x from "../images/photo-jc-2x.png";

export default function Hello() {
  return (
    <section className="hello">
      <Grid container spacing={0}>
        <Grid className="hello-content" item xs={9} md={6}>
          <div className="hello-content">
            <Typography variant="h1" id="hello-anchor" gutterBottom>
              Hey,
              <br /> I'm Juan Angustia.
            </Typography>
            <Typography paragraph>
              A Visual Designer at Google, who loves to create simple designs
              that inspire and engage people, an{" "}
              <strong>aspiring writing</strong>, <strong>fashion lover</strong>,
              and also a proud <strong>Afro-Latino</strong>.
            </Typography>
            <Button variant="contained" color="primary" disableElevation>
              About me
            </Button>
          </div>
        </Grid>
        <Grid item xs={3} md={6}>
          <img
            className="hello-image"
            srcSet={`${JC1x} 1x, ${JC2x} 2x`}
            alt="Juan Carlos Angustia, cool dude who dresses nice"
          />
        </Grid>
      </Grid>
    </section>
  );
}
