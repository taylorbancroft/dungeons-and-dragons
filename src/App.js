import './App.css';
import React, { Fragment } from 'react';
import Classes from './components/Classes';
import Races from './components/Races';
import Spells from './components/Spells';
import Features from './components/Features';
import Equipment from './components/Equipment';
import Traits from './components/Traits';
import Languages from './components/Languages';
import Proficiencies from './components/Proficiencies';
import SubClasses from './components/SubClasses';
import SubRaces from './components/SubRaces';
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <p>Type "all" to see the full list.</p>
      <Classes />
      <SubClasses />
      <Races />
      <SubRaces />
      <Spells />
      <Features />
      <Equipment />
      <Traits />
      <Languages />
      <Proficiencies />
    </div>
  );
}

export default App;
