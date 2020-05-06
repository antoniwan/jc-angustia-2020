import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function SimpleIsBetter() {
  return (
    <section className="simple-is-better">
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={7}>
          <Typography
            variant="h2"
            id="projects-anchor"
            align="center"
            paragraph
          >
            Simple Is Better
          </Typography>
          <Typography paragraph align="center">
            On my 9 years of career. I had the previlege to work with talented
            designers in comsumer products that simplify millions of people’s
            life.
          </Typography>
          <Typography align="center">
            <strong>I would like to show you some of them.</strong>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
