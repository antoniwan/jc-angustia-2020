import React from "react";
import Container from "@material-ui/core/Container";
import Hello from "./Hello";
import SimpleIsBetter from "./SimpleIsBetter";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import LetsTalk from "./LetsTalk";

const BackToTopAnchor = function () {
  return <div id="back-to-top-anchor"></div>;
};

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <BackToTopAnchor />
        <Hello />
        <SimpleIsBetter />
        <Projects />
      </Container>

      <Container maxWidth="lg">
        <section>Video Parallax Section</section>
        <Testimonials />
        <LetsTalk />
      </Container>
    </main>
  );
}
