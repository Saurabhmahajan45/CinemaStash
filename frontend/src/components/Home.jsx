import React from "react";
import { Button, Container,Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/Home.css";
import avengers from '../assets/avengers.png';

export default function Home(){
    const navigate = useNavigate();

  return (
    <div>
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
          <Button className="mt-3" id="explore"  onClick={() => navigate("/movies")}>
            Explore Movies →
          </Button>
        </Container>
      </div>
    </div>

    

     <Container className="my-5">
        <h3 className="text-center mb-4 ">Upcoming Movies</h3>
        <Row className="g-4">
          {[
            {
              title: "Final Destination: Bloodlines",
              img: "https://imgs.search.brave.com/Rvwi-ZHM1nTJUNwWp6tknAi0TF7kWP494CaqK7tBebs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16YzNPV0Zo/WldJdE1URTJZeTAw/TjJObUxUZzFZVGt0/TkdWbE5EWTBPRFE1/WWpObFhrRXlYa0Zx/Y0djQC5qcGc",
              desc: "2025 ‧ Horror/Mystery ‧ 1h 50m"
            },
            {
              title: "Spider-Man: No Way Home",
              img: "https://imgs.search.brave.com/Xm6mnk7kJiFMdk_LbuS5ZtxvINGZq7YJh8oHCZEMqnc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MC8wMC9TcGlkZXIt/TWFuX05vX1dheV9I/b21lX3Bvc3Rlci5q/cGcvNTEycHgtU3Bp/ZGVyLU1hbl9Ob19X/YXlfSG9tZV9wb3N0/ZXIuanBn",
              desc: "2021 ‧ Action/Fantasy ‧ 2h 39m",
            },
            {
              title: "Intersteller",
              img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
              desc: " 2014 ‧ Sci-fi/Adventure ‧ 2h 49m",
            },
             {
              title: "F1",
              img: "https://imgs.search.brave.com/iQZBdyrAh-5l8yT2UiR1rIf51zTTgPD4jQy0aqaWOyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HSTBNREk0/TmpFdE9XVTNaUzAw/T0RReUxXRmhZVGd0/TkdZeE0yWmtNMlEy/WWpFM1hrRXlYa0Zx/Y0djQC5qcGc",
              desc: "2025 ‧ Sport/Action ‧ 2h 35m",
            },
          ].map((offer, index) => (
            <Col md={2} key={index}>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={offer.img}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.desc}</Card.Text>
                  {/* <Button variant="warning" className="rounded-pill">
                    Book Now
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      </div>

  );
};