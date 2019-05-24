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
  // eslint-disable-next-line
    var className = this.state.isHidden ? 'easteregg':'treasure';
    return(
      <div className="aboutMeWrap" data-aos='fade-left'>
      <Container>
        <Row>
          <Col xl={{ span: 6, order: 1}} md={{ span: 10, offset: 1 }} sm={{ span: 12 }} xs={{ order: 2 }}>
            <p className="p-big">Hi again! <span role="img" aria-label="sparkles">✨ </span> </p>
            <br />
            <p className="p-medium" style={{ paddingBottom: 150}}>My name is Steph<span style={{opacity: 0.6}}>an</span>ie Vo and I’m from Munich.
            <br />
I’m currently studying Computer Science and Media at the
Stuttgart Media University, having focused on Web Development, Computer Graphics and UX.
Particularly interested in the relationship between people and technology and therefore also human-centered design.
 <br />So far I have worked at the <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="http://innovationhub.fleetboard.com/">Daimler Fleetboard Innovation Hub</a>,
 on university projects and projects outside of the classroom, where I really enjoyed working in interdisciplinary teams to solve challenges and deliver creative solutions.
<br /><br />
Other than that I really like swimming, cinema, Tame Impala, potatoes and The Legend of Zelda.
<br />
<br />
Liked what you've seen? Or want to know more? <a href="mailto:hello@stephievo.com">Say hello!</a>
<br /> Or have a look at my <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/19WsMza22zx-i2LW8pHzFY2KAQugqnPu1/view?usp=sharing">résumé</a>.
</p>
          </Col>
          <Col xl={{ span: 4, offset: 0, order: 2}} lg={{ span: 4, offset: 4}} md={{ span: 6, offset: 3 }} sm={{span: 8, offset: 2}} xs={{span: 10, offset: 1, order: 1}}>
            <img src={me} alt="Me" style={{ maxWidth: "100%", paddingTop: 20, marginBottom: 80}}/>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default About;
