import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'
// import Image from "../images/ezra-jeffrey-comeau-Zj_JLGZBvgg-unsplash.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image:{
    backgroundImage: "red",
    height:'100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // style={{ backgroundColor: "#1a0033" }}
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();

  const changeView = (nextview) =>{
    props.changeView(nextview)
  }

  const Logout = () =>{
    localStorage.removeItem("collegename")
    props.history.replace({pathname:"/"})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#f44336'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span style={{cursor:"pointer"}} onClick={()=>changeView('Post')}>{localStorage.getItem("collegename")}</span>
          </Typography>
          <Button color="inherit" onClick={()=>changeView('Placement')}>Placement</Button>
          <Button color="inherit">Clubs</Button>
          <Button color="inherit">Alumini</Button>
          <Button onClick={Logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar)
