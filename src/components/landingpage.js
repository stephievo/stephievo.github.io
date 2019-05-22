import React, { Component } from 'react';

import ProjectCards from './projectcards';

import zelda from '../assets/zeldasecret.wav';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../App.scss';
import '../scss/main.scss'



class Landing extends Component {

  constructor(props){
    super(props)
      this.state = {
        isHidden: true,
    }
   //creates a reference for your element to use
   this.projects = React.createRef()
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


  handleOnClick = (event) => {
    //.current is verification that your element has rendered
    if(this.projects.current){
        this.projects.current.scrollIntoView({
           behavior: "smooth",
           block: "nearest"
        })
    }
  }

  render() {

    var className = this.state.isHidden ? 'easteregg':'treasure';
    return(
      <div>
        <div className="landingWrap" data-aos='fade-left'>

          <div className="bannerWrap">
            <Container>
              <Row>
                <Col lg={{ span: 7, offset: 1}}>
                  <p className="p-big">Hi! <span role="img" aria-label="wavehand">👋 </span>
                  I’m <span className={className} onClick={this.toggleHidden.bind(this)}>Steph{!this.state.isHidden && <span className="treasure">an</span>}ie</span>, a Computer Science student with a knack for design.<br />
                  Currently at Stuttgart Media University.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div class="mouseWrap" onClick={this.handleOnClick} >
            <div class="mousey">
              <div class="scroller"></div>
            </div>
          </div>
        </div>

        <div ref={this.projects} className="projectsWrap" id="cards">
          <ProjectCards/>
        </div>
    </div>
    )
  }
}

export default Landing;
