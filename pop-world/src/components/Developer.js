import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Developer.css";

const Developers = () => {
  return (
    <Container>
      {/* About Card */}
      <Card id="developer-card">
        <Card.Header id="developer-header">Technology & Developers</Card.Header>
        <Card.Body>
          <Card.Text>
            This webapp is built with React.js, Node.js, and React-Bootstrap and
            is hosted using the Google Cloud Platform.
            <br />
            Developed By - Aunik Ahmed and Shubham Badola
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Developers;
