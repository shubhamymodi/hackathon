import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        MentorMate
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
    // minWidth: 120,
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    institute: "",
    iam: ""
  });
  const [password, setPassword] = React.useState("");
  const [passError, setPassError] = React.useState(false);
  const [note, setNote] = React.useState({
        fname:"", 
        lname: "",
        roll: "",
        email: "",
        password: "",
        institute:""
  })
  function changeHandler(event) {
    //event.preventdefault()
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    // event.preventdefault()
    console.log(event.target.value)
  }

  function submitHandler(e) {
    e.preventDefault();
    const { fname,
      lname, 
      roll, 
      email, 
      password, 
      institute } = note
    const data = {
      //email, 
      fname,
      lname, 
      roll, 
      email, 
      password, 
      institute
    }
    console.log(data)

    axios
      .post('http://localhost:9000/register/student', data)
      .then(response => {
        //let history = useHistory();
        console.log(response);
        if (response.status === 200) {
          console.log(response.status)
          // browserHistory.push('/');
          //history.push('localhost:3000/register')
          // window.location = "/postlist"
          window.location = "/student/dashboard"          
          localStorage.setItem("jwt", response.data.token)
          localStorage.setItem("user", response.config.data)
        }
        else {
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    console.log(state.iam);
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const confirmPassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const validatePassword = (event) => {
    if (event.target.value !== password) {
      setPassError(true);
      console.log("not match");
    } else {
      setPassError(false);
      console.log("match");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {/* <FormControl component="fieldset">
          <Radio row aria-label="position" name="position">
          <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Start"
          labelPlacement="start"
        />
            </Radio>
            </FormControl> */}

        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="fname"
                label="First Name"
                autoFocus
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandler}
              />
            </Grid>

            

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="number"
                label="Roll Number"
                name="roll"
                autoComplete="roll"
                onChange={changeHandler}
              />
            </Grid>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Institution
              </InputLabel>
              <Select
                native
                value={state.institute}
                onChange={handleChange}
                fullWidth
                required
                onChange={changeHandler}
                label="Institution"
                inputProps={{
                  name: "institute",
                  id: "outlined-age-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Nirma Institute of Technology</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // onChange={confirmPassword}
                onChange={changeHandler}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="current-password"
                onChange={validatePassword}
              />
              {passError ? (
                <div style={{ color: "red" }}>Passwords don't match</div>
              ) : null}
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // onSubmit={submitHandler}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
