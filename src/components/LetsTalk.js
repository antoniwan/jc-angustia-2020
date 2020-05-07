import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function LetsTalk() {
  return (
    <section>
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={6}>
          <Typography variant="h2" id="hire-anchor" align="center" paragraph>
            Let's Talk
          </Typography>
          <Typography paragraph align="center">
            If interested to work with me on your next project feel free to
            contact me, don't be shy. It would be my pleasure to work on the
            next big idea.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
