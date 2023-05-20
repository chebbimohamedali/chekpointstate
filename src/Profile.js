import React, { Component } from 'react';
import image from "./img.png";


// class component.

class Profile extends Component {
    constructor(){
        super();
        // Implement a state for class containing 
        this.state={
            fullName:"Chebbi Mohamed Ali",
            profession: "Developpeur Web « full stack »",
            bio: "Je suis développeur web, je fais de la programmation back-end et front-end, et de la configuration et gestion de serveurs.",
            imgSrc: image,
            interTemp:0
        };
      
    }
    // shows the time interval
    componentDidMount() {
      this.timerId = setInterval(() => {
        this.setState({ interTemp: this.state.interTemp + 1 });
      }, 1000);
    }

  render() {
    return (
      <div>
       <img src={this.state.imgSrc} alt=""/>
       <h2>{this.state.fullName}</h2>
        <h3>{this.state.profession}</h3>
        <p>{this.state.bio}</p>
        <h4>{this.state.interTemp}</h4>
            
      </div>
    )
  }
}

export default Profile



