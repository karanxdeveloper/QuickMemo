
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import EditNote from './pages/EditNote'
import CreateNote from './pages/CreateNote'
import dummy from "./dummy"
import { useEffect, useState } from 'react'


function App() {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  console.log(notes);

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  return (
    <>
      <Routes>
        <Route path='/' element={<Notes notes={notes}/>}/>
        <Route path='/create' element={<CreateNote setNotes={setNotes}/>}/>
        <Route path='/edit/:id' element={<EditNote notes={notes} setNotes={setNotes}/>}/>
      </Routes>
    </>
  )
}

export default App
