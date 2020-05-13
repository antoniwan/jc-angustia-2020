import React, { useState, useEffect } from "react";
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

import { ReactComponent as Ellipse9 } from "../svg/particles/particle-Ellipse-9.svg";
import { ReactComponent as Ellipse10 } from "../svg/particles/particle-Ellipse-10.svg";
import { ReactComponent as Ellipse11 } from "../svg/particles/particle-Ellipse-11.svg";
import { ReactComponent as Group3 } from "../svg/particles/particle-Group-3.svg";
import { ReactComponent as Group4 } from "../svg/particles/particle-Group-4.svg";
import { ReactComponent as Group6 } from "../svg/particles/particle-Group-6.svg";
import { ReactComponent as Group7 } from "../svg/particles/particle-Group-7.svg";
import { ReactComponent as Group8 } from "../svg/particles/particle-Group-8.svg";
import { ReactComponent as Polygon5 } from "../svg/particles/particle-Polygon-5.svg";
import { ReactComponent as Rectangle18 } from "../svg/particles/particle-Rectangle-18.svg";
import { ReactComponent as Rectangle19 } from "../svg/particles/particle-Rectangle-19.svg";
import { ReactComponent as Rectangle21 } from "../svg/particles/particle-Rectangle-21.svg";
import { ReactComponent as Vector1 } from "../svg/particles/particle-Vector-1.svg";
import { ReactComponent as Vector2 } from "../svg/particles/particle-Vector-2.svg";

const particles = [
  {
    name: "Polygon11",
    src: Polygon11,
    height: 55,
    width: 55,
    initialTop: 1210.78,
    initialLeft: 380,
    speed: 160,
  },
  {
    name: "Polygon10",
    src: Polygon10,
    height: 27.32,
    width: 27.32,
    initialTop: 1622.73,
    initialLeft: 311,
    speed: 100,
  },
  {
    name: "Polygon9",
    src: Polygon9,
    height: 55,
    width: 55,
    initialTop: 1600,
    initialLeft: 1146,
    speed: 50,
    transform: `rotate(-26.51deg)`,
  },
  {
    name: "Vector4",
    src: Vector4,
    height: 46,
    width: 78,
    initialTop: 1260.74,
    initialLeft: 705,
    speed: 40,
    transform: `rotate(37.09deg)`,
  },
  {
    name: "Group24",
    src: Group24,
    height: 64,
    width: 64,
    initialTop: 642,
    initialLeft: 987,
    speed: 7,
  },
];

function TalkParticles() {
  const Yoffset = 1140;
  const Xoffset = 90;
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = function (e) {
    const { scrollTop } = e.target.scrollingElement;
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
        } = element;

        return (
          <element.src
            key={name}
            className={`talk-particle talk-particle-${name}`}
            style={{
              height: `${height}px`,
              width: `${width}px`,
              top: `${initialTop - Yoffset + scrollTop / speed}px`,
              left: `${initialLeft - Xoffset}px`,
              transform: `${transform}`,
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
    const errors = await executeFormValidation();
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

  return (
    <section className="lets-talk">
      <TalkParticles />
      <Grid container spacing={0} justify="center">
        <Grid className="" item xs={12} md={6}>
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
      <Grid container spacing={0} justify="center">
        <Grid className="" item xs={12} md={5}>
          <form className="lets-talk-form" noValidate autoComplete="off">
            {!loading ? (
              <>
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
              </>
            ) : (
              <CircularProgress size={50} />
            )}

            {!sent ? (
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
            ) : (
              <Alert severity="success">
                <strong>Thank you!</strong> I will contact you ASAP!
              </Alert>
            )}
          </form>
        </Grid>
      </Grid>
    </section>
  );
}
