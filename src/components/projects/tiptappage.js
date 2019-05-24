import React, { Component } from 'react';


import '../../scss/main.scss'
import hacknext from '../../assets/tiptap/hacknext.jpg';
import prototype from '../../assets/tiptap/PrototypeScreen.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class TipTap extends Component {
  render() {
    return(
      <div className="projectPageWrap" data-aos="fade-up">
        <h1>TipTap</h1>
        <p className="subtitle">Rethinking retirement for young people - A hackathon winning project.</p>
        <div className="projectBanner projectBanner-tiptap">
        </div>

        <div className="projectContent">
        <Container>

        <Row>
          <Col className="cell" lg={{ span: 7, offset: 1 }} data-aos='fade-up'>
          <p> <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="http://tiptap.cool/"> TipTap </a> is an idea that was born at an <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="https://www.hacknext.de/"> insurtech hackathon</a> back in March.
          I was part of an team who developed a concept for an app that made saving for retirement a bit more fun.
          Our team of 5 people met for the first time at the hackathon venue and consisted of developers, designers and a business ninja.
          <br />
          <br />
          <i>This project is still ongoing and work here does not necessarily represent the final product.</i>
          </p>
          </Col>
          <Col className="cell" lg={3} data-aos='fade-up'>
          <h3>My Role</h3>
          <br />
          <p>Front-End Development
          <br />
          Rapid Protoyping</p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>The problem</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>One of the hackathon's challenges was to "rethink retirement". Nowadays, most young people don't really
          plan ahead financially for their future and tend to live in the moment. Subjects like "retirement" and "insurance"
          can be quite intimidating or boring for them. I am also guilty of that...
          So how could we make this (actually quite important) process more attractive and accessible for them?
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Our solution</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>Our answer was: micropayments!
          <br />
          Since the younger generation usually doesn't scare away from "normal" expenses,
          it could be easier to convince them to make smaller payments along with their regular shopping.
          <br />
          We decided to build a cross platform app and included gamified features to make the saving more playful.
          The user would pay a small extra amount on his purchases and "tip" himself by clicking on bubbles.
          An API read the user's bank data and could sort the expenses into appropriate groups.
          My task was to implement the frontend for the demo. I used React Native for the implementation.
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <img src={prototype} alt="TipTap Prototype Screen" style={{ maxWidth: 250}} />
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>The outcome</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>
          28 hours of work, amazing design and a convincing pitch earned TipTap 1st place at the competition.
          It was not the first time that micropayments were mentioned in context with retirement savings but
          our fun and fresh approach was quite popular.
          <br />
          It was extremely interesting to work on a concept that tackled a problem that I myself would also be facing one day.
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>

          <img src={hacknext} alt="hacknext winner" />
        </Row>

        <p className="subtitle">Group photo of our team (X-Men) with the judges. Source: Hacknext's Instagram</p>

        </Container>
        </div>

        <div className="otherprojects">

        <h3>Check out other projects</h3>
        <CardDeck className="carddeck">

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

        </CardDeck>
        </div>
        </div>
      )
    }
  }

export default TipTap;
