import React from "react";
import { Button } from "./Button";
import './HeroSection.css'
import '../App.css'


function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAIT</h1>
      <p>What are you wating for</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          WATCH TRAILER <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
