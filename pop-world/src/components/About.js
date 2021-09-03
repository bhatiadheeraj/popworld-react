import React from "react";
import { Container, Card, CardDeck } from "react-bootstrap";

import Developer from "./Developer";
import Footer from "./Footer.js";
import "./About.css";
const About = () => {
  return (
    <div>
      <Container>
        {/* About Card */}
        <Card id="about-card">
          <Card.Header id="about-header">About</Card.Header>
          <Card.Body>
            <Card.Text>
              POP! WORLD is an application built to introduce students to
              population genetics. Population genetics traditionally has been a
              field requiring intimate knowledge of mathematics and biology, the
              aim of POP! WORLD is to provide students an easy way to experience
              evolution in near real-time.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* 3 Update Cards */}

        <CardDeck id="update-cards">
          {/* 1st Update Card */}

          <Card id="update">
            <Card.Img
              variant="top"
              src="../../assets/update_pic_1.jpg"
              className="update-pic" // This class is not being used anywhere
            />
            <Card.Header id="update-header-1">You're in control</Card.Header>
            <Card.Body>
              <Card.Text>
                POP! WORLD allows students to run genetic simulations quickly
                and painlessly, simply by manipulating variables within the app.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 2nd Update Card */}

          <Card id="update">
            <Card.Img
              variant="top"
              src="../../assets/update_pic_2.jpg"
              className="update-pic" // This class is not being used anywhere
            />
            <Card.Header id="update-header-2">
              It's about exploration
            </Card.Header>
            <Card.Body>
              <Card.Text>
                POP! WORLD is about discovering the concepts and mechanics
                behind evolution, by experimenting with populations inside the
                app. This allows students to see evolution in action, in near
                real-time.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 3rd Update Card */}

          <Card id="update">
            <Card.Img
              variant="top"
              src="../../assets/update_pic_3.jpg"
              className="update-pic"
            />
            <Card.Header id="update-header-3">It's fast!</Card.Header>
            <Card.Body>
              <Card.Text>
                POP! WORLD doesn't require hours or days of intensive
                calculation. Thanks to the processing power of the cloud
                simulations are quick!
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        {/* 2 Professor Cards */}

        <CardDeck id="professor-cards">
          {/* 1st Professor */}

          <Card id="professor">
            <Card.Img
              variant="top"
              src="../../assets/jessica.jpg"
              id="profile-pic"
            />
            <Card.Body>
              <Card.Title>Dr. Jessica Poulin</Card.Title>
              <Card.Text>Dr. Jessica Poulin's bio goes here.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Biological Sciences</small>
            </Card.Footer>
          </Card>

          {/* 2nd Professor */}

          <Card id="professor">
            <Card.Img
              variant="top"
              src="../../assets/bina.png"
              id="profile-pic"
            />
            <Card.Body>
              <Card.Title>Dr. Bina Ramamurthy</Card.Title>
              <Card.Text>Dr. Bina Ramamurthy's bio goes here</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Computer Science and Engineering
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <Developer />
      </Container>
      <Footer />
    </div>
  );
};

export default About;
