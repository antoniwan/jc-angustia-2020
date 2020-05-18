import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

function Slide({ recommendationCopy, writtenBy, writtenByTitle }) {
  return (
    <div>
      <Grid container spacing={0} justify="center">
        <Grid className="simple-is-better-content" item xs={12} md={9}>
          <Typography
            className="testimonial-quote"
            id="testimonials-anchor"
            align="center"
            paragraph
          >
            “{recommendationCopy}”
          </Typography>
          <Typography className="testimonial-person" paragraph align="center">
            {writtenBy}
          </Typography>
          <Typography className="testimonial-person-title" align="center">
            {writtenByTitle}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

function TestimonialsCarousel() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      statusFormatter={(current, total) => false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
              className={`indicator indicator-selected`}
            />
          );
        }
        return (
          <li
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
            className={`indicator`}
          />
        );
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <Fab
            className="arrow-previous control-arrow control-prev"
            onClick={onClickHandler}
            title={label}
            color="secondary"
            size="medium"
            aria-label="Previous testimonial"
          >
            <NavigateBeforeIcon />
          </Fab>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <Fab
            className="arrow-next control-arrow control-next"
            onClick={onClickHandler}
            title={label}
            color="secondary"
            size="medium"
            aria-label="Next testimonial"
          >
            <NavigateNextIcon />
          </Fab>
        )
      }
    >
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
        recommendationCopy={`“Juan is tremendously reliable and creative designer. His broad skill set in design, UX, social media management and art direction, make him an excellent fit in any team.”`}
        writtenBy={`Jorge Suarez`}
        writtenByTitle={`Senior Product Manager at Webflow`}
      />
    </Carousel>
  );
}

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

      <TestimonialsCarousel />
    </section>
  );
}
