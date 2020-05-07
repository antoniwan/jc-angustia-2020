import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function LetsTalk() {
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
            <TextField
              required
              id="form-name"
              label="Full name"
              placeholder="Juan Doe"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              required
              id="form-email"
              label="Email"
              placeholder="juan.doe@gmail.com"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
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
            />
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
            >
              Send message
            </Button>
          </form>
        </Grid>
      </Grid>
    </section>
  );
}
