import React from "react";
import { Button, Container } from "react-bootstrap";
import "../assets/css/Home.css";
import avengers from '../assets/avengers.png';

export default function Home(){
  return (
    <div className="hero-section">
      <div className="overlay">
        <Container className="text-light hero-content">
          <img src = {avengers} className="studio-logo "/>
          <p className="mt-3 mb-1 text-secondary small">
            Action | Adventure | Sci-Fi &nbsp; 📅 2019 &nbsp; ⏱️ 3h 1m
          </p>
          <p className="hero-desc mt-3">
            After the devastating events of Avengers: Infinity War (2018), <br/>
            the universe is in ruins. With the help of remaining allies, <br/>
            the Avengers assemble once more in order to reverse Thanos' <br/>
            actions and restore balance to the universe.
          </p>
          <Button className="mt-3" id="explore">
            Explore Movies →
          </Button>
        </Container>
      </div>
    </div>
  );
};


