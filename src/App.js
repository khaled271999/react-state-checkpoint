import { Component } from 'react';
import './App.css';
import Person from './component/Person';
import { Button, Container, Navbar } from 'react-bootstrap';

export default class App extends Component {
constructor(props){
  super(props)
  this.state={show:false}
}

handleclick=()=>this.setState({show:!this.state.show})

  render(){
  return (
    <div className="App">
          <Navbar bg='dark'>
      <Container>
          <Navbar.Brand > <h1 style={{color:'white'}}>checkpoint STATE</h1> </Navbar.Brand>
        </Container>
          <Button variant="secondary" size="lg" onClick={this.handleclick}>show/hide</Button>
      </Navbar>
      {this.state.show?<Person/>:null}      
    </div>
  );
}
}
