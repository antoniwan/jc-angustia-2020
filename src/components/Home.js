import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <main>
        <div id="back-to-top-anchor"></div>

        <section>
          <Typography variant="h2">Hey, I'm Juan Angustia.</Typography>
          <Typography paragraph>
            A Visual Designer at Google, who loves to create simple designs that
            inspire and engage people, an <strong>aspiring writing</strong>,{" "}
            <strong>fashion lover</strong>, and also a proud{" "}
            <strong>Afro-Latino</strong>.
          </Typography>
          <Button variant="contained" color="primary" disableElevation>
            About me
          </Button>
        </section>

        <section>
          <Typography variant="h2">Simple Is Better</Typography>
          <Typography paragraph>
            On my 9 years of career. I had the previlege to work with talented
            designers in comsumer products that simplify millions of people’s
            life.
          </Typography>
          <Typography>
            <strong>I would like to show you some of them.</strong>
          </Typography>
        </section>

        <section>
          <Typography variant="h3">Google Duo</Typography>
          <Typography gutterBottom>Visual Designer (UX)</Typography>
          <Typography paragraph>
            Simple, high quality video calls on Android phones, iPhones,
            tablets, computers, and Smart Displays.
          </Typography>
          <Button variant="contained" color="primary" disableElevation>
            See more
          </Button>
        </section>

        <section>
          <Typography variant="h3">XFINITY STREAM</Typography>
          <Typography gutterBottom>Lead Visual Designer (UX)</Typography>
          <Typography paragraph>
            Stream TV app was a company initiative to bring stream mobile
            experience on the big screen. I was responsible to lead visual and
            UX experience for Stream tv on Roku, and smart tvs like LG, and
            Samsung.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">VEVO MUSIC</Typography>
          <Typography gutterBottom>Product Designer</Typography>
          <Typography paragraph>
            Sometimes it’s difficult to find content that you love. This was my
            inspiration to made this concept. A ux experience where users can
            personalize their experience based on their taste.
          </Typography>
        </section>

        <section>
          <Typography variant="h2">Testimonials</Typography>
          <Typography paragraph>
            Here I’m sharing what collague are saying on{" "}
            <strong>LinkedIn</strong> about their experience working with me.
          </Typography>
        </section>

        <section>
          <Typography variant="h2">Let's Talk</Typography>
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
