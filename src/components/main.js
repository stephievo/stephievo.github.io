import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';

import TipTap from './projects/tiptappage';
import DepressiveThinking from './projects/depressivethinkingpage';
import LFGRedesign from './projects/lfgredesign';
import ExitGames from './projects/exitgames';
import Fleetboard from './projects/fleetboard';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/lfgredesign" component={LFGRedesign} />
    <Route path="/tiptap" component={TipTap} />
    <Route path="/depressivethinking" component={DepressiveThinking} />
    <Route path="/exitgames" component={ExitGames} />
    <Route path="/fleetboard" component={Fleetboard} />
  </Switch>
)

export default Main;
