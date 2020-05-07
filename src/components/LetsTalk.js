import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { ValidateEmail } from "../utils/email";

export default function LetsTalk() {
  const [loading, setLoading] = useState(false);
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

    if (!errors) {
      setLoading(true);
      // Send the form
      //setLoading(false);
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
    <section>
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
        <Grid className="" item xs={12} md={4}>
          <form className="lets-talk-form" noValidate autoComplete="off">
            {!loading ? (
              <>
                <TextField
                  required
                  name="name"
                  id="form-name"
                  label="Full name"
                  placeholder="Juan Doe"
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
                />
                <TextField
                  required
                  name="email"
                  id="form-email"
                  label="Email"
                  placeholder="juan.doe@gmail.com"
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
                />
              </>
            ) : (
              <CircularProgress size={50} />
            )}

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
          </form>
        </Grid>
      </Grid>
    </section>
  );
}
