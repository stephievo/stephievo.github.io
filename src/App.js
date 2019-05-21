import React, { Component } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';
import './App.scss';

class App extends Component {

  componentDidMount(){
    AOS.init({
      duration : 900
    })
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
