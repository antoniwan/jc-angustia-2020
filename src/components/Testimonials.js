import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

function Slide({ recommendationCopy, writtenBy, writtenByTitle }) {
  return (
    <div>
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={6}>
          <Typography className="testimonial-quote" align="center" paragraph>
            “{recommendationCopy}”
          </Typography>
          <Typography
            className="testimonial-person"
            gutterBottom
            align="center"
          >
            {writtenBy}
          </Typography>
          <Typography
            className="testimonial-person-title"
            align="center"
            variant="body2"
          >
            {writtenByTitle}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

function TestimonialsCarousel() {
  const thisSlider = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    thisSlider.current.slickNext();
  };

  const previous = () => {
    thisSlider.current.slickPrev();
  };

  return (
    <div className="testimonials-slider-wrapper">
      <Slider ref={thisSlider} className="testimonials-slider" {...settings}>
        <Slide
          recommendationCopy={`Juan is rockstar in many regards. His passion for pushing toward a solution that is both effective and elegant is evident in every project he applies himself to – big or small.`}
          writtenBy={`Jonathan Zweifler`}
          writtenByTitle={`Innovation Strategy at Comcast NBCUniversal`}
        />
        <Slide
          recommendationCopy={`Juan is an extremely talented individual that is not afraid of any visual challenge. His high energy, and "no problem" attitude make him a great candidate for any team.`}
          writtenBy={`Alberto Orsini`}
          writtenByTitle={`Sr. Manager, Product Design at Royal Caribbean Cruises Ltd.`}
        />
        <Slide
          recommendationCopy={`Juan is a hard worker and very talented in the fast-paced online world. We work together on several Interactive projects and he's a genuine team player.`}
          writtenBy={`Isis Zeledon`}
          writtenByTitle={`Interactive and Visual Designer`}
        />
        <Slide
          recommendationCopy={`Juan is tremendously reliable and creative designer. His broad skill set in design, UX, social media management and art direction, make him an excellent fit in any team.`}
          writtenBy={`Jorge Suarez`}
          writtenByTitle={`Senior Product Manager at Webflow`}
        />
      </Slider>
      <div className="custom-arrows">
        <Fab className="next-arrow" size="large" onClick={next}>
          <NavigateNextIcon />
        </Fab>
        <Fab className="prev-arrow" size="large" onClick={previous}>
          <NavigateBeforeIcon />
        </Fab>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  const section = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const item = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });

  return (
    <section className="testimonials">
      <motion.div
        ref={ref}
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        variants={section}
      >
        <Grid container spacing={0} justify="center" id="testimonials-anchor">
          <Grid className="simple-is-better-content" item xs={12} md={6}>
            <motion.div variants={item}>
              <Typography variant="h1" align="center" paragraph>
                Testimonials
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography paragraph align="center">
                Check out what others are saying about me.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div variants={item}>
          <TestimonialsCarousel />
        </motion.div>
      </motion.div>
    </section>
  );
}
