// import React from 'react'
import React,{ useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

export default function About() {
  const a = useContext(noteContext)
  return (
    <div>
      this is about {a.name}
    </div>
  )
}
