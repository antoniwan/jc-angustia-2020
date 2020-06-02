import React, { useRef } from "react";
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
        <Grid className="simple-is-better-content" item xs={12} md={9}>
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
        <Fab className="next-arrow" onClick={next}>
          <NavigateNextIcon />
        </Fab>
        <Fab className="prev-arrow" onClick={previous}>
          <NavigateBeforeIcon />
        </Fab>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <Grid container spacing={0} justify="center" id="testimonials-anchor">
        <Grid className="simple-is-better-content" item xs={12} md={6}>
          <Typography variant="h1" align="center" paragraph>
            Testimonials
          </Typography>
          <Typography paragraph align="center">
            Check out what others are saying about me.
          </Typography>
        </Grid>
      </Grid>

      <TestimonialsCarousel />
    </section>
  );
}
