import React from 'react'
import { useContext } from 'react'
import noteContext from './context/noteContext'

function About() {
    const a=useContext(noteContext)
  return (
    <div>About {a.name} and my class is {a.section}</div>
  )
}

export default About