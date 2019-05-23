import React, { Component } from 'react';


import '../../scss/main.scss';
import goal1 from '../../assets/lfg/lfggoal1.png';
import goal2 from '../../assets/lfg/lfggoal2.png';
import goal3 from '../../assets/lfg/lfggoal3.png';

import voice1 from '../../assets/lfg/voice1.png';
import voice2 from '../../assets/lfg/voice2.png';
import voice3 from '../../assets/lfg/voice3.png';

import cardsorting from '../../assets/lfg/cardsorting.jpg';
import wireframes from '../../assets/lfg/lfgwireframes.jpg';
import comparison from '../../assets/lfg/comparison.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class LFGRedesign extends Component {
  render() {
    return(
      <div className="projectPageWrap" data-aos="fade-up">
        <h1>LFG website redesign</h1>
        <p className="subtitle">Taking a closer look at the design and information architecture of a high school homepage - A case study.</p>
        <div className="projectBanner projectBanner-lfg">
        </div>

        <div className="projectContent">
        <Container>

        <Row>
          <Col className="cell" lg={{ span: 7, offset: 1 }} data-aos='fade-up'>
          <p> The Lion-Feuchtwanger-Gymnasium (LFG) is a high school that covers 5th grade to 12th grade.
          Besides basic school related information and important documents <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="https://lfg.musin.de/"> their website</a> provides content on school life, projects
          and recent activities. In this case study I analysed the information architecture and UX
          and redesigned it according to the users'/personas' needs.
          <br />
          <br />
          <i>This is an unsolicited redesign and the outcome is not affiliated with the institution in question.</i>
          </p>
          </Col>
          <Col className="cell" lg={3} data-aos='fade-up'>
          <h3>Personal Project</h3>
          <br />
          <p>User Research
          <br />
          UX/UI Design
          <br />
          Visual Design
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>My goals</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> For this redesign I had the following objectives in mind before I even started:
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
        <Col lg={4}>
          <img src={goal1} alt="Give the website a new UI and look." style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
          <img src={goal2} alt="Restructure the information architecture." style={{ maxWidth: "100%"}} />
          </Col>
            <Col lg={4}>
          <img src={goal3} alt="Improve the overall user experience for visitors." style={{ maxWidth: "100%"}}/>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          </Col>
          <Col className="cell" lg={7}>
          <p>
            The scope I intended for the prototype was supposed to be around 3 user flows.
          </p>
          </Col>
        </Row>


        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Shaping the problem</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p>
          To understand what I am trying to solve I took a closer look at the website. What was it trying to achieve? Why would people want to go on the website?
          <br />
          <br />
          Through a content audit I got an overview of the site's structure, size and depth of levels.
          Seeing what already existed and understanding the relationship between content groups was necessary
          to restructure it in the later steps.
          One thing that could be noticed right away, was that there were some duplicate nodes in the tree
          that could be deleted or merged and arranged more clearly.
          <br />
          <br />
          A heuristic evaluation showed some inconsistencies in the design language and visual aspects.
          Important information is not visible on first sight or deeply hidden in subpages.
          <br />
          <br />
          There was already plenty of room for improvement at this point. Since my goal was not to simply design a
          new school website but to improve the UX and raise a visitor's satisfaction I had to find out what
          the user actually wanted.
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>User research</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> I conducted interviews with actual and potential users of the website to formulate the main purpose and needs.
          The target groups consisted of current students, parents and parents considering the school for their children.
          Prominent pain points were:
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
        <Col lg={4}>
          <img src={voice1} alt="It's hard to find the info I was looking for." style={{ maxWidth: "100%"}}/>
          </Col>
          <Col lg={4}>
          <img src={voice2} alt="It took me long to reach the page I needed." style={{ maxWidth: "100%"}} />
          </Col>
            <Col lg={4}>
          <img src={voice3} alt="Stuff I actually want to see is not on the page." style={{ maxWidth: "100%"}}/>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          </Col>
          <Col className="cell" lg={7}>
          <p>
            A lot of the interviewees complained about the messy navigation. The navigation bar didn't make it clear on which page
            the visitor currently was and what sublevels were available. Links were not distinguishable from the rest of the page and in general there wasn't much of a visual hierarchy.
            Users who visited the page for the first time and don't know the school don't have a way to quickly find out what it's about.
            <br />
            <br />
            The majority of the pain points could be tackled with an information architecture revision and topic prioritization.
            They were preventing the website from fulfilling its purpose of being a useful tool for providing critical information.
            With card sorting I could gather expectations from the test persons for the content and navigation.
            Comparing those with existing school websites helped me restructure the page.
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
        <Col className="cell align-self-end" lg={{ span: 7, offset: 4 }}>
          <img src={cardsorting} alt="card sorting with the users" style={{ maxWidth: "100%"}}/>
        </Col>
        </Row>

        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Implementing findings of research</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> With a new information architecture for the navigation, I started designing and protoyping the landing page and the user flows for
          reaching the contact page, the school profile and the school calendar.
          The start page now displayes a welcoming banner, cards with the school's focal points, upcoming events and current news so the visitor
          does not have to search for the most relevant info. But there's a search function in the navigation just in case they are looking for
          something specific.
          Contact information could be gathered from the footer or the separate contact page, accessible from the navigation bar with dropdown menus.
          Pages would have breadcrumbs and a header so visitors would not get lost.
          <br />
          <br />
          I had the test persons try out the prototype regularly to review changes I had made and tried to get feedback for improvement.
          The majority were satisfied with the results.
          <br />
          <br />
          Have a look at the <a className="textdecoration--none" target="_blank" rel="noopener noreferrer" href="https://xd.adobe.com/view/9e369747-30df-46af-7a5a-898b25eb0367-e807/?hints=off">Adobe Xd prototype</a>!<br />
          <br />
          </p>
          <p style={{fontSize: 15}}>
          Paths:<br />
          Home &gt; Schule &gt; Schulprofil &gt; different tabs<br />
          Home &gt; Aktuelles &gt; Terminplan or button in table on front page<br />
          Home &gt; Kontakt or button in footer
          </p>
          </Col>
        </Row>

        <Row data-aos='fade-up'>
        <Col className="cell align-self-end" lg={{ span: 7, offset: 4 }}>
          <img src={wireframes} alt="Wireframes" style={{ maxWidth: "100%"}}/>
        </Col>
        </Row>

        <Row data-aos='fade-up'>
          <img src={comparison} alt="Comparison of the original website and my redesign" />
        </Row>


        <Row data-aos='fade-up'>
          <Col className="cell" lg={{ span: 3, offset: 1 }}>
          <h2>Learnings</h2>
          </Col>
          <Col className="cell" lg={7}>
          <p> Throughout this project I had to keep in mind that instead of trying to create a website
          I should concentrate on designing a better way for users to get necessary information.

          As someone who started with front end development I sometimes drift into that spiral
          where I think of features that would fit in the project but then I snap back and have to focus on the users and what THEY want.
          Putting post its everywhere that say "Focus on the user and all else will follow." helps!
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

export default LFGRedesign;
