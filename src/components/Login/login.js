import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { checkValidity } from "../../config/validation";
import { Strings } from "config";
import { UserService } from "service";
// import Background from "../assets/images/koala.jpg";

export class Login extends Component {
  state = {
    email: {
      value: "",
      validation: {
        required: true,
        email: true
      },
      valid: false,
      touched: false
    },
    password: {
      value: "",
      validation: {
        required: true,
        password: true
      },
      valid: false,
      touched: false
    }
  };

  onChangeValue = (event, type) => {
    const updatedForm = {
      ...this.state
    };

    const updatedFormElement = {
      ...updatedForm[type]
    };

    updatedFormElement.value = event.target.value;
    updatedForm[type] = updatedFormElement;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    this.setState({ ...updatedForm });
  };

  handleLoginClick = event => {
    event.preventDefault();
    const data = {};
    data.username = this.state.email.value;
    data.password = this.state.password.value;
    UserService.signIn(data).then(
      response => {
        console.log("response from signIn", response);
      },
      error => {
        console.log("error from sign In", error);
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs" className={classes.background}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {Strings.general.signIn}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={this.handleLgoinClick}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={Strings.loginOrRegister.emailLabel}
              name="email"
              autoComplete="off"
              autoFocus
              error={this.state.email.touched && !this.state.email.valid}
              helperText={
                this.state.email.touched && !this.state.email.valid
                  ? Strings.loginOrRegister.emailErr
                  : ""
              }
              onChange={e => this.onChangeValue(e, "email")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={Strings.loginOrRegister.passwordLabel}
              type="password"
              id="password"
              autoComplete="current-password"
              error={this.state.password.touched && !this.state.password.valid}
              helperText={
                this.state.password.touched && !this.state.password.valid
                  ? Strings.loginOrRegister.pwdErr
                  : ""
              }
              onChange={e => this.onChangeValue(e, "password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={
                this.state.email.valid && this.state.password.valid
                  ? false
                  : true
              }
              className={classes.submit}
            >
              {Strings.general.signIn}
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  {Strings.loginOrRegister.forgetPwd}
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2">
                  {Strings.loginOrRegister.registerLink}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  background: {
    // backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    paddingBottom: "20px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});
export default withStyles(styles)(Login);
