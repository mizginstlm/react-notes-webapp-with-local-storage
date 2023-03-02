import NotesList from "../components/NotesList";
import {nanoid} from 'nanoid'
import { useEffect, useState } from 'react';
import Search from "../components/Search";
import Header from "../components/Header";


export default function Home(){
const [searchText,setSearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);
const [notes, setNotes] =useState([
  {
    id: nanoid(),
    text: 'This is my first note!',
    date: '15/04/2021',
  },
  {
    id: nanoid(),
    text: 'This is my first note!',
    date: '15/04/2021',
  }
]);

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
  
     <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
    <Header handleToggleDarkMode={setDarkMode} />
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

