import React, { Component } from 'react';


import '../../scss/main.scss'

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
        <div className="projectBanner">
        </div>

        <div className="projectContent">
        <Container>

        <Row>
          <Col className="cell" lg={{ span: 7, offset: 1 }} data-aos='fade-up'>
          <p>Fleetboard is a subsidiary company of the Daimler AG based in Stuttgart which
          focused on the digitization and innovation in logistics.
          In the course of my studies I had the chance to intern at their
          <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="http://innovationhub.fleetboard.com/"> innovation hub </a> in the startup hotspot Berlin.
          Aside from assisting in several different projects and going to a hackathon in Finland, one of my tasks was implementing the new design system.
          <br />
          <br />
          <i>This project was still being worked on when I left and work here does not necessarily represent the final result.</i>
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
          <p>Coming soon!
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>The workflow</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>Also coming soon!
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Learnings</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>It's coming soon, I promise!
          </p>
          </Col>
        </Row>

        </Container>
        </div>

        <div className="otherprojects">

        <h3>Check out other projects</h3>
        <CardDeck className="carddeck">

        <Link to="/lfgredesign" data-aos='fade-up'>
        <a href="/lfgredesign">
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
        </a>
        </Link>

        <Link to="/depressivethinking" data-aos='fade-up'>
        <a href="/depressivethinking">
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
        </a>
        </Link>

        </CardDeck>
        </div>
        </div>
      )
    }
  }

export default Fleetboard;
