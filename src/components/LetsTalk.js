import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import debounce from "lodash/debounce";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { ValidateEmail } from "../utils/email";
import { ReactComponent as Polygon9 } from "../svg/particles/particle-Polygon-9.svg";
import { ReactComponent as Polygon10 } from "../svg/particles/particle-Polygon-10.svg";
import { ReactComponent as Polygon11 } from "../svg/particles/particle-Polygon-11.svg";
import { ReactComponent as Vector4 } from "../svg/particles/particle-Vector-4.svg";
import { ReactComponent as Group24 } from "../svg/particles/particle-Group-24.svg";
import { ReactComponent as Ellipse15 } from "../svg/particles/particle-Ellipse-15.svg";
import { ReactComponent as Group23 } from "../svg/particles/particle-Group-23.svg";
import { ReactComponent as Group25 } from "../svg/particles/particle-Group-25.svg";
import { ReactComponent as Ellipse12 } from "../svg/particles/particle-Ellipse-12.svg";
import { ReactComponent as Group11 } from "../svg/particles/particle-Group-11.svg";
import { ReactComponent as Group20 } from "../svg/particles/particle-Group-20.svg";
import { ReactComponent as Group10 } from "../svg/particles/particle-Group-10.svg";
import { ReactComponent as Rectangle37 } from "../svg/particles/particle-Rectangle-37.svg";
import { ReactComponent as Rectangle38 } from "../svg/particles/particle-Rectangle-38.svg";
import { ReactComponent as Rectangle21 } from "../svg/particles/particle-Rectangle-21.svg";

const particles = [
  {
    name: "Polygon11",
    source: Polygon11,
    height: 55,
    width: 55,
    initialTop: 1210.78,
    initialLeft: 380,
    speed: 160,
  },
  {
    name: "Polygon10",
    source: Polygon10,
    height: 27.32,
    width: 27.32,
    initialTop: 1622.73,
    initialLeft: 311,
    speed: 100,
  },
  {
    name: "Polygon9",
    source: Polygon9,
    height: 55,
    width: 55,
    initialTop: 1600,
    initialLeft: 1146,
    speed: 50,
    transform: `rotate(26.51deg)`,
  },
  {
    name: "Vector4",
    source: Vector4,
    height: 46 * 2,
    width: 78 * 2,
    initialTop: 1260.74 + 100,
    initialLeft: 705 - 50,
    speed: 40,
    transform: `rotate(37.09deg)`,
  },
  {
    name: "Group24",
    source: Group24,
    height: 64,
    width: 64,
    initialTop: 642 + 150,
    initialLeft: 987 - 50,
    speed: 7,
  },
  {
    name: "Ellipse15",
    source: Ellipse15,
    height: 22,
    width: 22,
    initialTop: 1191,
    initialLeft: 125,
    speed: 40,
  },
  {
    name: "Group23",
    source: Group23,
    height: 69,
    width: 71.07,
    initialTop: 1317 + 50,
    initialLeft: 274 + 50 * 2,
    speed: 100,
    transform: `rotate(40.87deg)`,
  },
  {
    name: "Group25",
    source: Group25,
    height: 36,
    width: 38,
    initialTop: 1225,
    initialLeft: 1260,
    speed: 100,
    transform: `rotate(-27deg)`,
  },
  {
    name: "Rectangle21",
    source: Rectangle21,
    height: 2.77,
    width: 37,
    initialTop: 1392,
    initialLeft: 1076.36,
    speed: 50,
    transform: `rotate(-141.65deg)`,
    background: `black`,
  },
  {
    name: "Rectangle38",
    source: Rectangle38,
    height: 11.25,
    width: 36.89,
    initialTop: 1372,
    initialLeft: 1272.36,
    speed: 100,
    transform: `rotate(56.31deg)`,
  },
  {
    name: "Group10",
    source: Group10,
    height: 36,
    width: 38,
    initialTop: 1532,
    initialLeft: 157.43 - 150,
    speed: 50,
    transform: `rotate(-49.11deg)`,
  },
  {
    name: "Group20",
    source: Group20,
    height: 64,
    width: 64,
    initialTop: 1793,
    initialLeft: 113,
    speed: 120,
  },
  {
    name: "Ellipse12",
    source: Ellipse12,
    height: 22,
    width: 22,
    initialTop: 1482,
    initialLeft: 286,
    speed: 10,
  },
  {
    name: "Group11",
    source: Group11,
    height: 69,
    width: 71,
    initialTop: 1428,
    initialLeft: 1228.15 + 100,
    speed: 50,
    transform: `rotate(180.87deg)`,
  },
  {
    name: "Rectangle37",
    source: Rectangle37,
    height: 11.25,
    width: 37,
    initialTop: 1885,
    initialLeft: 1274,
    speed: 100,
    transform: `rotate(56.31deg)`,
  },
];

function TalkParticles({ disableMovement }) {
  const Yoffset = 1140;
  const Xoffset = 90;
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    if (!disableMovement) {
      window.addEventListener("scroll", debounce(handleScroll, 3));
    }
  });

  return (
    <div className="talk-particles">
      {particles.map((element) => {
        const {
          name,
          height,
          width,
          initialTop,
          initialLeft,
          transform,
          speed,
          background,
        } = element;

        return (
          <element.source
            preserveAspectRatio="xMidYMid meet"
            key={name}
            className={`talk-particle talk-particle-${name}`}
            style={{
              height: `${height}px`,
              width: `${width}px`,
              top: `${initialTop - Yoffset + scrollTop / speed}px`,
              left: `${initialLeft - Xoffset}px`,
              transform: `${transform}`,
              background: `${background}`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function LetsTalk() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();
  const [message, setMessage] = useState("");
  const [ref, inView] = useInView({ threshold: 0.15 });
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
        y: { ease: "easeInOut", duration: 0.15 },
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
      transition: {
        y: { ease: "easeInOut", duration: 0.15 },
      },
    },
  };

  const handleChange = function (event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "message":
        return setMessage(value);
      default:
        return false;
    }
  };

  const handleFormSubmit = async function (e) {
    const errors = executeFormValidation();
    const db = window.firebase.firestore();

    if (!errors) {
      setLoading(true);
      db.collection("messages")
        .add({
          name: name,
          email: email,
          message: message,
          date: new Date(),
        })
        .then(function (docRef) {
          setLoading(false);
          setSent(true);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          setLoading(false);
          setSent(false);
        });

      return;
    }

    return false;
  };

  const executeFormValidation = function () {
    let foundError = false;
    setNameError();
    setEmailError();

    if (name.length <= 0) {
      setNameError(`Please enter your name`);
      foundError = true;
    } else if (name.length <= 3) {
      setNameError(`Please enter your full name`);
      foundError = true;
    }

    if (email.length <= 0) {
      setEmailError(`Please enter an email`);
      foundError = true;
    } else if (!ValidateEmail(email)) {
      setEmailError(`Please enter a valid email`);
      foundError = true;
    }

    return foundError;
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });

  return (
    <section className="lets-talk">
      <TalkParticles disableMovement={false} />
      <motion.div
        ref={ref}
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        variants={section}
      >
        <Grid container spacing={0} justify="center">
          <Grid className="" item xs={12} md={7}>
            <motion.div variants={item}>
              <Typography variant="h1" align="center" paragraph>
                Let's Talk
              </Typography>
            </motion.div>

            <motion.div variants={item}>
              <Typography paragraph align="center">
                If interested to work with me on your next project feel free to
                contact me, don't be shy. It would be my pleasure to work on the
                next big idea.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Grid container spacing={0} justify="center">
          <Grid className="" item xs={12} md={5}>
            <form
              className="lets-talk-form"
              noValidate
              autoComplete="off"
              id="hire-anchor"
            >
              {!loading ? (
                <>
                  <motion.div variants={item}>
                    <TextField
                      required
                      name="name"
                      id="form-name"
                      label="Full name"
                      placeholder={!sent ? `Jane Doe` : name}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      value={name.value}
                      onChange={handleChange}
                      helperText={nameError}
                      error={!!nameError}
                      disabled={sent}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <TextField
                      required
                      name="email"
                      id="form-email"
                      label="Email"
                      placeholder={!sent ? `jane.doe@gmail.com` : email}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      value={email.value}
                      onChange={handleChange}
                      helperText={emailError}
                      error={!!emailError}
                      disabled={sent}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <TextField
                      name="message"
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      value={message}
                      onChange={handleChange}
                      disabled={sent}
                    />
                  </motion.div>
                </>
              ) : (
                <CircularProgress size={50} />
              )}

              {!sent ? (
                <motion.div variants={item}>
                  <Button
                    className="form-submit-button"
                    variant="contained"
                    color="primary"
                    disableElevation
                    fullWidth
                    size="large"
                    onClick={handleFormSubmit}
                    disabled={loading}
                  >
                    {!loading ? `Send message` : `Sending...`}
                  </Button>
                </motion.div>
              ) : (
                <Alert severity="success">
                  <strong>Thank you!</strong> I will contact you ASAP!
                </Alert>
              )}
            </form>
          </Grid>
        </Grid>
      </motion.div>
    </section>
  );
}
