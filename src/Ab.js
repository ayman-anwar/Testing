import React from "react";
import { Card, Container, Row, Col, Accordion, Image } from "react-bootstrap";
import "./About.css";

const Home = () => {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="welcome-heading">
                Welcome to Our Travel Website!
              </h2>

              <p className="welcome-paragraph">
                Welcome to our travel website! Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nulla ut fermentum quam. Ut
                facilisis luctus nulla, sit amet lobortis est vulputate non.
                Nullam scelerisque interdum nisl, eu volutpat lorem fringilla
                nec. Phasellus vehicula, justo eget pharetra iaculis, odio
                sapien cursus metus, et convallis ligula purus quis ex.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
                fermentum quam. Ut facilisis luctus nulla, sit amet lobortis est
                vulputate non. Nullam scelerisque interdum nisl, eu volutpat
                lorem fringilla nec. Phasellus vehicula, justo eget pharetra
                iaculis, odio sapien cursus metus, et convallis ligula purus
                quis ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla ut fermentum quam. Ut facilisis luctus nulla, sit amet
                lobortis est vulputate non. Nullam scelerisque interdum nisl, eu
                volutpat lorem fringilla nec. Phasellus vehicula, justo eget
                pharetra iaculis, odio sapien cursus metus, et convallis ligula
                purus quis ex.
              </p>
              {/* <p>Check out some of our featured destinations below:</p>  */}
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Image
              src="https://images.unsplash.com/photo-1524842495237-6abc737eae1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=746&q=80"
              className="image"
              fluid
            />
            ;
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="services-section contact-section-light">
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut fermentum quam. Ut facilisis luctus nulla, sit amet lobortis
                est vulputate non. Nullam scelerisque interdum nisl, eu volutpat
                lorem fringilla nec. Phasellus vehicula, justo eget pharetra
                iaculis, odio sapien cursus metus, et convallis ligula purus
                quis ex.
              </p>
              <p>Our services include:</p>
              <ul className="services-list">
                <li>Flight Bookings</li>
                <li>Hotel Reservations</li>
                <li>Custom Travel Packages</li>
                <li>Travel Insurance</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1505164294036-5fad98506d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlYXR1cmVzJTIwb2YlMjB0cmF2ZWwlMjB3ZWJzaXRlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Service 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1668095398258-a204bb6d2204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBicmVha2Zhc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Service 2</Card.Title>
                <Card.Text>
                  Vestibulum in lacus vitae turpis varius blandit ac quis arcu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Service 3</Card.Title>
                <Card.Text>
                  Proin euismod metus sit amet scelerisque. Ut eget erat eu mi
                  iaculis venenatis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&nbsp;Most Frequently asked questions:</p>
            <div className="contact-section-light">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Question #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Question #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="contact-section contact-section-light ">
              <h2 className="contact-heading">Contact Us</h2>
              <p>
                If you have any questions or inquiries, feel free to contact us
                using the information below:
              </p>
              <ul className="contact-details">
                <li>Email: contact@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 1234 Travel Street, City, Country</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
