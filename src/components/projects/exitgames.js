import React, { Component } from 'react';


import '../../scss/main.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class ExitGames extends Component {
  render() {
    return(
      <div className="projectPageWrap" data-aos="fade-up">
        <h1>Exit Games (WIP)</h1>
        <p className="subtitle">Researching the best ways a passenger can exit an autonomous shuttle in the near future  - An interdisciplinary project.</p>
        <div className="projectBanner">
        </div>

        <div className="projectContent">
        <Container>

        <Row>
          <Col className="cell" lg={{ span: 7, offset: 1 }} data-aos='fade-up'>
          <p> "Exit Games" (working title) is an interdisciplinary project currently taking place at Stuttgart Media University.
          Students from Media Business, Computer Science and Media and Mobile Media have come together to tackle a challenge
          that might not be that far in the future anymore. Autonomous shuttles are on the rise and with them a lot of unexplored topics.
          <br />
          <br />
          <i>This project is still ongoing and work here does not necessarily represent the end result.</i>
          </p>
          </Col>
          <Col className="cell" lg={3} data-aos='fade-up'>
          <h3>My role</h3>
          <br />
          <p>User Research
          <br />
          UX Design
          <br />
          Digital Illustration
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Starting point</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>
            In the not so far future autonomous shuttles will populate our neighborhoods.
            But there are still some problems to be solved before they hit the road:
            Not only from a technological and a legal perspective,
            also from a user interaction and acceptance point of view. In this project,
            we will take a closer at the question: How do we get off one of these vehicles?
            <br />
            <br />
            This question arises as autonomous shuttles will be transporting groups of people and
            will not stop at predefined stations, but pick up and drop off their passengers where they want it.
            So, how can we make sure, exiting the vehicle is safe (e.g. other pedestrians or bicycles crossing)?
            How do we inform the customers that they will arrive soon? How do we wake up sleeping customers without disturbing other passengers?
            <br />
            <br />
            The goal of the project is to develop an innovative concept for the exit situation of a shared autonomous vehicle.
            It's supposed to consider the moments before exiting
            the shuttle and the process itself. It will probably include some sort of mobile app
            or tablets that are installed in the car, but possibly also components that address other sensory channels like
            moving car seats, door handles, LEDs or other lighting components, smart clothes or sound.
            <br />
            <br />
            Use case: Shared and pooled vehicles with ~ 6 seats (car/van/bus)
            <br />
            <br />
            We approached the problem by first defining the value proposition, then gaining user insights and refining user flows.
          </p>
          </Col>
        </Row>


        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Research</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> In the very first week our research team got the chance to attend the internal expo day
          at <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="https://www.arena2036.de/de/"> ARENA2036 </a>,
          a research facility on campus that focuses on innovation in mobility. Corporate partners and professionals from the industry
          were attending, the perfect crowd for us in this case.

          Goal: understanding user expections, needs, and motivations --Guerilla interviews
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Deliverables</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> Coming soon!
          </p>
          </Col>
        </Row>


        </Container>
        </div>

        <div className="otherprojects">

        <h3>Check out other projects</h3>
        <CardDeck className="carddeck">

        <Link to="/tiptap" data-aos='fade-up'>
        <a href="/tiptap">
        <Card className="card card-tiptap">
          <Card.Body>
            <Card.Title className="cardtitle">TipTap</Card.Title>
            <Card.Text>
            <small className="text-muted">
              Front-End Development, Rapid Protoyping
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

export default ExitGames;
