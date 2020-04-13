import React,{Component} from  'react';
import Header from "./Header";
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Box from "@material-ui/core/Box";
import SearchForm from './SearchForm';
//import Panel from "@material-ui/core/Panel";

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Route exact path="/">
          <Box>
            <Header id="headr" tval={0}/>
            <SearchForm/>
          </Box>
        </Route>
        <Route path="/about">
          <Box>
            <Header id="headr" tval={1}/>
            <p>This is all about this site</p>
          </Box>
        </Route>
        <Route path="/ppolicy">
          <Box>
            <Header id="headr" tval={2}/>
          </Box>
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
