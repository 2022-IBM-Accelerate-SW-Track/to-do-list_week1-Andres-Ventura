import React, { Component } from 'react';
import './About.css';
import photo from '../assets/image.jpg';
  
export default class About extends Component {
  
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={photo}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Andres Ventura</div>
        <div className="brief_description">
         <p>Hi 👋, My name is Andres but most people just call me Andy. In my free time, 
           I like to make websites and have recently become interested in making games 
           as well. I'm an entrepreneur at heart and I'm always looking for ways to create 
           something new or be a part of something much bigger than myself.</p>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}