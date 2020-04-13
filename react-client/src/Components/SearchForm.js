import React, {Component} from 'react';
import {Paper,Input,TextField,Button,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Table,TableCell,TableRow,TableBody,TableContainer,TableHead} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import axios from 'axios';

class SearchForm extends Component{
  searchTextChange(event){
    this.setState({
      searchText:event.target.value,
    });
  }

  async searchSubmit(event){
    event.preventDefault();
    console.log("form submitted");
    var sRes=await axios.post("/api/search",{
      search:this.state.searchText
    });
    //console.log(sRes);
    //console.log("form submitted");
    this.setState({
      searchRes:sRes.data
    });
  }

  constructor(props){
    super(props);
    this.searchTextChange=this.searchTextChange.bind(this);
    this.searchSubmit=this.searchSubmit.bind(this);
    this.searchRes=this.searchRes.bind(this);
    this.state={
      searchRes:null
    };
  }

  searchRes(){
    if((!this.state)||(!this.state.searchRes))
      return;
    //return this.onePanel(JSON.stringify(this.state.searchRes));
    //console.log(this.state.searchRes);
    var items=[];
    if(this.state.searchRes!==null){
      for (var compos in this.state.searchRes) {
        items.push(this.onePanel(this.state.searchRes[items.length],items.length));
        console.log(compos);
      }
      return items;
    }
  }
  onePanel(compos,key){
    return(
      <ExpansionPanel key={key}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p>{compos.name}</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          {this.onePanelDetails(compos)}

        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  onePanelDetails(compos){
    if(compos.Products.length===0)
      return;
    return(
      <TableContainer component={Paper} variant="outlined">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medicine</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {compos.Products.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mrp}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
  render()
  {

    return(
      <div>
      <Paper style={{marginTop:'20px',paddingTop:'50px',paddingBottom:'50px',backgroundColor:'#3F51B5',borderRadius:"30px"}} variant="outlined">
      <form align="center" noValidate autoComplete="off" onSubmit={this.searchSubmit}>
        <TextField name="search" placeholder="Composition" style={{width:"30%", backgroundColor:'#ffffff',borderRadius:"5px"}} onChange={this.searchTextChange} variant="outlined"/><br/>
        <Button type="submit" name="submit" style={{marginTop:'20px',backgroundColor:'#ffffff',borderRadius:"5px"}} variant="outlined">Search</Button>
      </form>
      </Paper>
      <Paper style={{marginTop:'20px'}} variant="outlined">
      {this.searchRes()}
      </Paper>
      </div>
    );
  }
}

export default SearchForm;
