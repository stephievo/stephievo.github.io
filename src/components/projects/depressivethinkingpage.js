import React, { Component } from 'react';

import '../../scss/main.scss';

import sketches from '../../assets/depressive/depressionsketch.JPG';
import allornothing from '../../assets/depressive/allornothing.png';
import mentalfilter from '../../assets/depressive/mentalfilter.png';
import emotionalreasoning from '../../assets/depressive/emotionalreasoning.png';
import disqualifying from '../../assets/depressive/disqualifying.png';
import jumping from '../../assets/depressive/jumping.png';
import overgeneralization from '../../assets/depressive/overgeneralization.png';
import labeling from '../../assets/depressive/labeling.png';
import should from '../../assets/depressive/should.png';
import personalization from '../../assets/depressive/personalization.png';
import maxmin from '../../assets/depressive/maxmin.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class DepressiveThinking extends Component {
  render() {
    return(
      <div className="projectPageWrap" data-aos="fade-up">
        <h1>Depressive thinking patterns</h1>
        <p className="subtitle">Explaining cognitive distortions in illustrations.</p>
        <div className="projectBanner projectBanner-depression">

        </div>

        <div className="projectContent">
        <Container>

        <Row>
          <Col className="cell" lg={{ span: 7, offset: 1 }}>
          <p> In the scope of a school project I had to research and present thinking patterns or so called cognitive distortions that are associated with depression.
          To clarify what those patterns exactly do to one who suffers from them I decided to make simplified depictions.
          </p>
          </Col>
          <Col className="cell" lg={3}>
          <h3>Personal Project</h3>
          <br />
          <p>Digital Illustration
          </p>
          </Col>
        </Row>

        <Row>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Tools</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>Pencil and paper, Adobe Illustrator.
          </p>
          </Col>
        </Row>

        <Row>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>My approach</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> Usually a person's mind should have a healthy mix of negative and positive thoughts. With cognitive distortions
          they fall out of balance and in this case the negative aspects gain more weight and significance.
          To give those thoughts shape I opted for really simple symbols which are interchangeable, Xs and Os.
          From here on it was quite a straight forward approach by taking the cognitive distortions by their literal definition
          and depicting them with the symbols.
          <br />
          <br />
          For the colors, according to Google the "Depression Awareness Color" is green.
          The presented green shade omitted some kind of calmness and healing power to me (which is not bad) but I wanted the
          illustrations to be a bit more fresh and stimulating so I went for a minty green/turqoise mix. The cold purple should
          represent the opposite.

          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
        <Col className="cell align-self-end" lg={{ span: 7, offset: 4 }}>
          <img src={sketches} alt="Sketches" style={{ maxWidth: "100%"}}/>
        </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col lg={4}>
            <img src={allornothing} alt="All or nothing" style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
            <img src={maxmin} alt="Maximizing and minimizing" style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
            <img src={disqualifying} alt="Disqualifying the positive" style={{ maxWidth: "100%"}}/>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col lg={4}>
            <img src={emotionalreasoning} alt="Emotional reasoning" style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
            <img src={jumping} alt="Jumping to conclusions" style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
            <img src={labeling} alt="Emotional reasoning" style={{ maxWidth: "100%"}}/>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col lg={4}>
            <img src={should} alt="All or nothing" style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
            <img src={overgeneralization} alt="Overgeneralization" style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
              <img src={personalization} alt="Personalization" style={{ maxWidth: "100%"}}/>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col lg={4}>
            <img src={mentalfilter} alt="Mental filter" style={{ maxWidth: "100%"}} />
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

        <Link to="/tiptap" data-aos='fade-up'>
        <a href="/tiptap">
        <Card className="card card-tiptap">
          <Card.Body>
            <Card.Title className="cardtitle">TipTap</Card.Title>
            <Card.Text>
            <small className="text-muted">
              Front-End Development
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

export default DepressiveThinking;
