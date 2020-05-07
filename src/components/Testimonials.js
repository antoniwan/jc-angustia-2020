import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Testimonials() {
  return (
    <section>
      <Typography variant="h2" id="testimonials-anchor">
        Testimonials
      </Typography>
      <Typography paragraph>
        Here I’m sharing what collague are saying on <strong>LinkedIn</strong>{" "}
        about their experience working with me.
      </Typography>
    </section>
  );
}
