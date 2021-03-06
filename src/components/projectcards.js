import React, { Component } from 'react';

import '../scss/main.scss'

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class ProjectCards extends Component {
  render() {
    return(
      <div>
      <CardDeck className="carddeck">

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

      <Link to="/tiptap" data-aos='fade-up'>
      <Card className="card card-tiptap">
        <Card.Body>
          <Card.Title className="cardtitle">TipTap</Card.Title>
          <Card.Text>
          <small className="text-muted">
            Front-End Development, Rapid Prototyping
          </small>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>

      <Link to="/exitgames" data-aos='fade-up'>
      <Card className="card card-exitgames">
        <Card.Body>
          <Card.Title className="cardtitle">Exit Games (WIP)</Card.Title>
          <Card.Text>
          <small className="text-muted">
            User Research, UX Design, Digital Illustration
          </small>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>

      <Link to="/fleetboard" data-aos='fade-up'>
      <Card className="card card-fleetboard">
        <Card.Body>
          <Card.Title className="cardtitle">Fleetboard Design System</Card.Title>
          <Card.Text>
          <small className="text-muted">
            Front-End Development
          </small>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>

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

      </CardDeck>
      </div>
    )
  }
}

export default ProjectCards;
