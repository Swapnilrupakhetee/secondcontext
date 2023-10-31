import React from 'react';
import './App.css';
import NoteState from './context/noteState';



function App() {
  return (
    <div className="App">
      <NoteState>
        <h1>Hi my name is no</h1>

      </NoteState>
      
    </div>
  );
}

export default App;
