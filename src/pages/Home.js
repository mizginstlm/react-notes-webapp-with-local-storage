import NotesList from "../components/NotesList";
import {nanoid} from 'nanoid'
import { useContext, useEffect, useState } from 'react';
import Search from "../components/Search";
import AuthContext from "../contexts/AuthContext";



export default function Home({children}){
const [searchText,setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);
const [notes, setNotes] =useState([]);
const {currenUser } = useContext(AuthContext)
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('note-data'));
  if (savedNotes) {
    setNotes(savedNotes);
  }
},[])

useEffect(()=>{
  localStorage.setItem('note-data', JSON.stringify(notes));
},[notes]);

const addNote = (text) => {
    const date = new Date();

    const newNote = {
        id:nanoid(),
        text : text,
        date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=>note.id !== id);
  
  setNotes(newNotes);
}

  return(
  
     <div>
      <div className="container">
      <Search handleSearchNote={setSearchText}/>

      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
      handleAddNote ={addNote}
      handleDeleteNote= {deleteNote}
      />
     </div>
     </div>
    )
}

