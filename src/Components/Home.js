import React, { useState } from 'react'
import Notes from './Notes'
import { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

export default function Home() {
  const context = useContext(noteContext);
  const {addNote} = context;

  const[note,setNote] = useState({title:"",description:"",tag:""})
    const onSubmit=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    }
    // const[text,setText] = useState("");
    
    const onchange=(e)=>{
      setNote({...note, [e.target.name]: e.target.value})
    }

    

  return (
    <div>
        <h2 className='my-3'> Write Notes</h2>
      <form onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text"  className="col-3 form-control " id="title" name='title' onChange={onchange} value={note.title} aria-describedby="emailHelp" />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onchange} value={note.description}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control"  name='tag' onChange={onchange} value={note.tag} id="tag"/>
  </div>
  
  <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-success">Add Note</button>
</form>
      <Notes/>
      
    </div>
  )
}
