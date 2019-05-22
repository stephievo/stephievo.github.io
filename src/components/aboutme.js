import React, { Component } from 'react';

import '../scss/main.scss';

import me from '../assets/me.jpg';
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
      isHidden: false,
    });

    if (this.state.isHidden) {
      audio.play()
    }
  }

  render() {
    var className = this.state.isHidden ? 'easteregg':'treasure';
    return(
      <div className="aboutMeWrap" data-aos='fade-left'>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 1 }}>
            <p className="p-big">Hi again! </p>
            <br />
            <p className="p-medium">My name is Steph<span style={{opacity: 0.6}}>an</span>ie Vo and I’m from Munich.
            <br />
I’m currently studying Computer Science and Media at the
Stuttgart Media University, having focused on Web Development, Computer Graphics and UX.
Particularly interested in the relationship between people and technology and therefore also human-centered design.
 <br />So far I have worked at the <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="http://innovationhub.fleetboard.com/">Daimler Fleetboard Innovation Hub</a>,
 on student projects and projects outside of school, where I really enjoyed working in interdisciplinary teams to solve challenges and deliver creative solutions.
<br /><br />
Other than that I really like swimming, cinema, Tame Impala, potatoes and the Legend of Zelda.
<br />
<br />
Liked what you've seen? Or want to know more? <a href="mailto:hellostephievo@gmail.com">Say hello!</a>
<br /> Or have a look at my <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1wjAi21Kk07B9XlYiLY9urK8RKQeqtGI1/view?usp=sharing">résumé</a>.
</p>
          </Col>
          <Col lg={{ span: 3, offset: 1 }}>
            <img src={me} alt="Me" style={{ maxWidth: "100%", borderRadius: "50%", padding: 0, marginTop: 90, marginBottom: 80}}/>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default About;
