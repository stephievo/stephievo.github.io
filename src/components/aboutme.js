import React, { Component } from 'react';

import '../scss/main.scss';

import zelda from '../assets/zeldasecret.wav';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
  constructor () {
    super()
      this.state = {
        isHidden: true,
    }
  }

  toggleHidden () {
    var audio = new Audio(zelda)
    this.setState({
      isHidden: !this.state.isHidden
    });

    if (this.state.isHidden) {
      audio.play()
    }


  }
  render() {

    return(
      <div className="aboutMeWrap" data-aos='fade-left'>
      <Container>
        <Row>
          <Col lg={{ span: 7, offset: 1 }}>
            <p className="p-big">Hi again! <span role="img" aria-label="wavehand">🐒</span></p>
            <br />
            <p className="p-medium">My name is <span onClick={this.toggleHidden.bind(this)}>Steph{!this.state.isHidden && <span style={{opacity: 0.4}}>an</span>}ie</span> Vo and I’m from Munich.
            <br />
I’m currently studying Computer Science and Media at the
Stuttgart Media University, having focused on Web Development, Computer Graphics and UX. Particularly interested in the relationship between people and technology. So far I have worked at the <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="http://innovationhub.fleetboard.com/">Daimler Fleetboard Innovation Hub</a> and on student projects.
<br />
<br />
Liked what you've seen? <a href="mailto:hellostephievo@gmail.com">Say hello!</a></p>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default About;
