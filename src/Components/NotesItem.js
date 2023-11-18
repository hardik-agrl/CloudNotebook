import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';


export default function NotesItem(props) {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const {note,updateNote }= props;
  
  return (
    
      
   
    <div className="card col-md-3 mx-3 my-3" >
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body">
    <div className='d-flex '>
    <h5 className="card-title">{note.title}</h5>
    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}} > </i>
    <i className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id)}}></i>
    </div>
    <p className="card-text">{note.description}</p>
    <span className="badge rounded-pill text-bg-warning">{note.tag}</span>

    {/* <p className="card-text">{note.tag}</p> */}
  </div>
</div>
  )
}
