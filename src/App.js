import React, { Component } from 'react'
import Profil from "./Profile";
import "./App.css";
// class component.
class App extends Component {
  constructor(){
    super();
    this.state={
      show: false,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Bienvenue Sur Mon Profil</h1>
        <p>Pour plus d'informatios, cliquer ci-dessous</p>
        <button onClick={()=>this.setState({show: !this.state.show})}>Voir</button>
        {this.state.show && <Profil/> }
        
      </div>
    )
  }
}


export default App

