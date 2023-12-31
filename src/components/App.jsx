import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note){
    setNotes(prevValue=>
      {return[...prevValue,note]}
      )
  }
  function delNote(id){
    setNotes(prevValue=>{
      return prevValue.filter((n,index)=>{return index !== id})})
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((not,index)=>
      {
        const id=index;
        return <Note key={index} 
            title={not.title}
            content = {not.content}
            deleteNote={()=>delNote(id)}
            />
      })}
      <Footer />
    </div>
  );
}

export default App;
