import React, { Component } from 'react';


import '../../scss/main.scss'
import meetings from '../../assets/fleetboard/meetings.png';
import implement from '../../assets/fleetboard/implement.png';
import integrate from '../../assets/fleetboard/integrate.png';
import screenshot from '../../assets/fleetboard/fleetboardscreen.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Fleetboard extends Component {
  render() {
    return(
      <div className="projectPageWrap" data-aos="fade-up">
        <h1>Fleetboard Design System</h1>
        <p className="subtitle">Bringing Fleetboard's new design guidelines to life - One of my tasks as an intern.</p>
        <div className="projectBanner projectBanner-fleetboard">
        </div>

        <div className="projectContent">
        <Container>

        <Row>
          <Col className="cell" lg={{ span: 7, offset: 1 }} data-aos='fade-up'>
          <p>Fleetboard is a subsidiary company of the Daimler AG based in Stuttgart which
          focused on the digitization and innovation in logistics.
          In the course of my studies I had the chance to intern at their
          <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="http://innovationhub.fleetboard.com/"> innovation hub </a> in the startup hotspot Berlin.
          Aside from assisting in several different projects and going to a hackathon in Finland, one of my tasks was implementing a new design system.
          <br />
          <br />
          <i>This project was still being worked on when I left and work here does not necessarily represent the final result.
          Also the majority of the designs is confidential so they are not shown here.</i>
          </p>
          </Col>
          <Col className="cell" lg={3} data-aos='fade-up'>
          <h3>My Role</h3>
          <br />
          <p>Front-End Development</p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>The purpose</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>The design system I'm describing here was a preliminary UI toolkit for a
          running Fleetboard project which was in the process of getting a redesign.
          A more complete design system with a much bigger scope (as in THE Fleetboard design system) was still a work in progress,
          so the one I worked on was like the baby version or the pioneer for testing. The purpose of both was to sum up the entire
          visual language and design guidelines for Fleetboard products and were meant to be merged at some point.
          The department had a styleguide until now but wanted to
          transition to a interactive application which offered the atoms and components with code and all, hence the design system.
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>The workflow</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> From here on my work consisted these steps:
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
        <Col lg={4}>
          <img src={meetings} alt="Meetings with the designers to discuss current designs, changes to the old ones or the need for new ones." style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
          <img src={implement} alt="Implementing the atoms and components and getting them approved by my supervisors." style={{ maxWidth: "100%"}} />
          </Col>
            <Col lg={4}>
          <img src={integrate} alt="Integrating the atoms and components into an existing project or updating them." style={{ maxWidth: "100%"}}/>
          </Col>
        </Row>


        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          </Col>
          <Col className="cell" lg={7}>
          <p>
           The result was an easy to use, modern design system with a clean web interface.
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <img src={screenshot} alt="Screenshot of the design system" />
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Learnings</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>Being part of this project taught me how to use SASS and BEM, how to work in a fairly big interdisciplinary team across
          several rooms and how to contribute to a large scale product, all skills that still matter in my profession.
          </p>
          </Col>
        </Row>

        </Container>
        </div>

        <div className="otherprojects">

        <h3>Check out other projects</h3>
        <CardDeck className="carddeck">

        <Link to="/depressivethinking" data-aos='fade-up'>
        <Card className="card card-depression">
          <Card.Body>
            <Card.Title className="cardtitle">Depressive thinking patterns</Card.Title>
            <Card.Text>
            <small className="text-muted">
              Digital Illustration
            </small>
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>

        <Link to="/lfgredesign" data-aos='fade-up'>
              <Card className="card card-lfg">
                <Card.Body>
                  <Card.Title className="cardtitle">LFG website redesign</Card.Title>
                  <Card.Text>
                  <small className="text-muted">
                    User Research, UX/UI Design, Visual Design
                  </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
        </CardDeck>
        </div>
        </div>
      )
    }
  }

export default Fleetboard;
