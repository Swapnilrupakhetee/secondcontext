import React from 'react'
import { useContext } from 'react'
import noteContext from './context/noteContext'

function About() {
    const a=useContext(noteContext)
  return (
    <>
    <div>About {a.state.name} and my class is {a.state.section}</div>
    
    </>
  )
}

export default About