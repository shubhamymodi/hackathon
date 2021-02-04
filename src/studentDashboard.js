import {React, useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import axios from "axios"
import NotificationsIcon from '@material-ui/icons/Notifications';

import StudentDetails from "./studentDetails"
import Example from './card';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        MentorMate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100%)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 200,
  },
}));

export default function StudentDashboard() {
  const classes = useStyles();
  const [post, setPost] = useState("");
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    axios.get('http://localhost:9000/allpost')
        // headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": "Bearer " + localStorage.getItem("jwt")
        // },
    
        .then(res => {
            console.log(res)
            //const {data}=res.data.images
            console.log(res.config)
            
            //this.setState({ posts: res.data.images })
            setPost(res.data.posts[0])
        })
        .catch(err => {
            console.log(err)
        })

}, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={ classes.appBarShift}>
        <Toolbar className={classes.toolbar}>
          
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} >
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <StudentDetails/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              {/* <Paper className={classes.paper}> */}
                {/* <Orders /> */}
                
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>

                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
                <Example id = {post._id} subject={post.subject} institute={post.institute} comment={post.comments}/>
              {/* </Paper> */}
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}