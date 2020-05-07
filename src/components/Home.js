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
    <Container maxWidth="lg">
      <main>
        <BackToTopAnchor />
        <Hello />
        <SimpleIsBetter />
        <Projects />

        <section>Video Parallax Section</section>
        <Testimonials />
        <LetsTalk />
      </main>
    </Container>
  );
}
