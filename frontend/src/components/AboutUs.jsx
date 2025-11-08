import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import gauravPhoto from "../assets/gaurav.jpg";
import saurabhPhoto from "../assets/saurabh.jpg";
import nandiniPhoto from "../assets/nandini.jpg"; 
import '../assets/css/About.css';

export function AboutUs() {
  const team = [
    {
      name: "Saurabh Mahajan",
      role: "Full Stack Developer",
      description: "Handled frontend design and backend API integration.",
      photo: saurabhPhoto,
    },
    {
      name: "Gaurav Sontakke",
      role: "UI/UX Designer",
      description: "Designed user-friendly interfaces and responsive layouts.",
      photo : gauravPhoto,
    },
    {
      name: "Nandini Wahane",
      role: "Backend Developer",
      description: "Built and optimized server-side logic and database.",
      photo: nandiniPhoto,
    },
  ];

  return (
    <div className="about-page">
      <Container className="about-container">
        <h2 className="mb-4 fw-bold" >About Our Project</h2>
        <p className="mb-5 fs-5">
          Our project, <b>CinemaStash</b> is your one-stop platform to discover, review, rate, and book movies effortlessly. Users can explore movies, leave ratings and reviews, and book tickets, while admins can manage movies, bookings, and reviews. Built with React, Node.js, Express, and MySQL, Cinema Stash combines simplicity, speed, and a modern interface for the ultimate movie experience.
        </p>

        <h3 className="mb-4 fw-semibold">Meet Our Team</h3>
        <Row className="justify-content-center">
          {team.map((member, index) => (
            <Col key={index} md={4} className="d-flex justify-content-center mb-4">
              <Card className="team-card text-center p-3 rounded-4" style={{ width: "19rem" }}>
                <Card.Img
                  variant="top"
                  src={member.photo}
                  className="rounded-circle mx-auto"
                />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}