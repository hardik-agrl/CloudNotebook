import React, { useState } from "react";
import NoteContext from "./notes/NoteContext";

// const NoteState = (props) => {
//   const inittext = [
//     // {
//     //   _id: "654be0ab2f7783ec6fc2744e",
//     //   user: "654bc29806eda546ea27aff7",
//     //   title: "Wake Up",
//     //   description: "I have to wake up early",
//     //   tag: "personal",
//     //   date: "2023-11-08T19:25:31.930Z",
//     //   __v: 0,
//     // },
//     // {
//     //   _id: "654be0ae2f7783ec6fcg27450",
//     //   user: "654bc29806eda546ea27aff7",
//     //   title: "Wake Up",
//     //   description: "I have to wake up early",
//     //   tag: "personal",
//     //   date: "2023-11-08T19:25:34.410Z",
//     //   __v: 0,
//     // },
//     // {
//     //   _id: "654be0ab2f778a3ec6fc2744e",
//     //   user: "654bc29806eda546ea27aff7",
//     //   title: "Wake Up",
//     //   description: "I have to wake up early",
//     //   tag: "personal",
//     //   date: "2023-11-08T19:25:31.930Z",
//     //   __v: 0,
//     // },
//     // {
//     //   _id: "654be0ae2f7783ec6fdc27450",
//     //   user: "654bc29806eda546ea27aff7",
//     //   title: "Wake Up",
//     //   description: "I have to wake up early",
//     //   tag: "personal",
//     //   date: "2023-11-08T19:25:34.410Z",
//     //   __v: 0,
//     // },
//     // {
//     //   _id: "654be0ab2f7f783ec6fc2744e",
//     //   user: "654bc29806eda546ea27aff7",
//     //   title: "Wake Up",
//     //   description: "I have to wake up early",
//     //   tag: "personal",
//     //   date: "2023-11-08T19:25:31.930Z",
//     //   __v: 0,
//     // },
//     // {
//     //   _id: "654be0ae2f7783ec6gfc27450",
//     //   user: "654bc29806eda546ea27aff7",
//     //   title: "Wake Up",
//     //   description: "I have to wake up early",
//     //   tag: "personal",
//     //   date: "2023-11-08T19:25:34.410Z",
//     //   __v: 0,
//     // },
//   ];

//   const [notes, setNotes] = useState(inittext);

//   //fetchallnotes
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
//       method: 'GET',
//       headers: {
        
//         "auth-token": localStorage.getItem('token')
//       }
//     });
//     const json = await response.json()
//     console.log(json)
//     setNotes(json)
//   }







//   // const getnotes = async()=>{
//   //   const response = await fetch('http://localhost:5000/api/notes/fetchallnotes', {
//   //     method: "GET", 
//   //     mode: "cors",
      
//   //     headers: {
        
//   //       "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
//   //     },
      
      
//   //   });
//   //   let json= await response.json(); 
//   //   console.log(json)
//   //   setNotes(json)
//   // }



//   //add a note
//   const addnote = async(title, description, tag) => {
//     const response = await fetch("http://localhost:5000/api/notes/createnote", {
//       method: "POST", 
//       mode: "cors",
      
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":localStorage.getItem('token')
//       },
      
//       body:  JSON.stringify(title,description,tag), 
//     });
//     const note= await response.json(); 
//     setNotes(notes.concat(note));
//      console.log(note)
     
//      //API CALL
//     //  let note = {
//     //    _id: "654be0aae2f7783ec6gfc27450",
//     //    user: "654bc29806eda546ea27aff7",
//     //    title: title,
//     //    description: description,
//     //    tag: tag,
//     //    date: "2023-11-08T19:25:34.410Z",
//     //    __v: 0,  
//     //   };
//   };
  
//   //deletenotes
//   const deletenote = async(id) => {
//     const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
//       method: "DELETE", 
//       mode: "cors",
      
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":localStorage.getItem('token')
//       },
//     });
//     const json = response.json(); 
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)


//     //   let json= await response.json(); 
//     //   console.log(json)
      
    
//     // const newNode = notes.filter((note) => {
//     //   return note._id !== id;
//     // });
//     // setNotes(newNode);
//   };

//   //edit a note
//   const editnote = async(id, title, description,tag) => {
    
//     const response = await fetch("http://localhost:5000/api/notes/updatenote/654be067122a8aca2e90ea0b", {
//       method: "PUT", 
//       mode: "cors",
      
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
//       },
      
//       body: JSON.stringify(title,description,tag), 
//     });
//     let json= await response.json(); 
//     console.log(json)

//     for (let index = 0; index < notes.length; index++) {
//         const element = notes[index];
//         if(element._id === id){
//             element.title = title;
//             element.description = description;
//             element.tag = tag;
//         }
        
//     }

//   };

//   return (
//     <NoteContext.Provider value={{ notes, addnote, deletenote, editnote,getNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   );
// };

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
  try {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });

    if (!response.ok) {
      // Handle non-successful responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    setNotes(json);
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
};

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    // const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteState;
