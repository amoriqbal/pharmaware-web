import {Tab,Tabs,AppBar,Paper,Toolbar} from "@material-ui/core";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component{

  constructor(props)
  {

    super(props);

    this.state={
      tval:props.tval||0,
    };
  }
  render(){
    const tabChanger=(event,newval)=>{
      console.log("tab changed:"+newval);
    };
    return(
      <AppBar component="div" position="static" style={{marginTop:"30px"}}>
      <Toolbar>
        <Paper variant="outlined" style={{borderWidth:"3px",margin:"-40px 20px -40px 0px", edgeRadius:"10px"}}><h1 style={{color:"#3F51B5",paddingRight:"20px",paddingLeft:"20px"}}>Pharmaware</h1></Paper>
        <Tabs component="div" value={this.state.tval}>
          <Tab label="Home" component={Link} to="/" index={0}/>
          <Tab label="About" component={Link} to="/about" index={1}/>
          <Tab label="Privacy Policy" component={Link} to="/ppolicy" index={2}/>
        </Tabs>
      </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
