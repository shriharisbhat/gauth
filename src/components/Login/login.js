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
import { validateEmail, validatePassword } from "../../config/validation";
import { Strings } from "config";
// import Background from "../assets/images/koala.jpg";

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

export class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    name_err: null,
    email_err: null,
    pwd_err: null,
    disabled: true
  };

  isDisabled() {
    let emailIsValid = false;
    let passwordIsValid = false;

    // email validation
    if (this.state.email === "") {
      this.setState({
        email_err: null
      });
    } else {
      if (validateEmail.test(this.state.email)) {
        emailIsValid = true;
        this.setState({
          email_err: null
        });
      } else {
        this.setState({
          email_err: Strings.loginOrRegister.emailErr
        });
      }
    }

    // password validation
    if (this.state.password === "" || !this.state.password) {
      this.setState({
        pwd_err: null
      });
    } else {
      if (validatePassword.test(this.state.password)) {
        passwordIsValid = true;
        this.setState({
          pwd_err: null
        });
      } else {
        this.setState({
          pwd_err: Strings.loginOrRegister.pwdErr
        });
      }
    }

    if (emailIsValid && passwordIsValid) {
      this.setState({
        disabled: false
      });
    }
  }

  onChangeValue = (event, type) => {
    const value = event.target.value;
    const nextState = {};
    nextState[type] = value;
    this.setState(nextState, () => {
      this.isDisabled();
    });
  };

  render() {
    const { classes } = this.props;
    console.log("state", this.state);
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
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={Strings.loginOrRegister.emailLabel}
              name="email"
              autoComplete="email"
              autoFocus
              error={this.state.email_err ? true : false}
              helperText={this.state.email_err}
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
              error={this.state.pwd_err ? true : false}
              helperText={this.state.pwd_err}
              onChange={e => this.onChangeValue(e, "password")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
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

export default withStyles(styles)(Login);
