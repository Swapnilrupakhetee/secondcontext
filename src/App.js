import React from 'react';
import './App.css';
import NoteState from './context/NoteState';
import About from './About';



function App() {
  return (
    <div className="App">
      <NoteState>
        <h1>Hi my name is no</h1>
        <About/>

      </NoteState>
      
    </div>
  );
}

export default App;
