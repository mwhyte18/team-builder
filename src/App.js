import './App.css';
import React, { useState } from 'react';

import MemberForm from './components/MemberForm'
import Team from './components/Team'

function App() {
  const [team, setTeam] = useState([]);

  const addNewMember = member => {
    setTeam([...team, member])
  }
  return (
    <div className="App">
      <div className="top">
      <h1>Meet the Team</h1>
      <MemberForm addNewMember={addNewMember} />
      </div>
      <Team team={team} />
    </div>
  );
}


export default App;
