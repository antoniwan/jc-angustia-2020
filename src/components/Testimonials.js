import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={6}>
          <Typography
            variant="h2"
            id="testimonials-anchor"
            align="center"
            paragraph
          >
            Testimonials
          </Typography>
          <Typography paragraph align="center">
            Here I’m sharing what collague are saying on{" "}
            <strong>LinkedIn</strong> about their experience working with me.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
