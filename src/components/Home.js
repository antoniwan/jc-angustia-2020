import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hello from "./Hello";
import SimpleIsBetter from "./SimpleIsBetter";
import Projects from "./Projects";

const BackToTopAnchor = function () {
  return <div id="back-to-top-anchor"></div>;
};

export default function Home() {
  return (
    <Container maxWidth="lg">
      <main>
        <BackToTopAnchor />
        <Hello />
        <SimpleIsBetter />
        <Projects />

        <section>
          <Typography variant="h2" id="testimonials-anchor">
            Testimonials
          </Typography>
          <Typography paragraph>
            Here I’m sharing what collague are saying on{" "}
            <strong>LinkedIn</strong> about their experience working with me.
          </Typography>
        </section>

        <section>
          <Typography variant="h2" id="hire-anchor">
            Let's Talk
          </Typography>
          <Typography paragraph>
            If interested to work with me on your next project feel free to
            contact me, don't be shy. It would be my pleasure to work on the
            next big idea.
          </Typography>
        </section>
      </main>
    </Container>
  );
}
