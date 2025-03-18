
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import EditNote from './pages/EditNote'
import CreateNote from './pages/CreateNote'
import dummy from "./dummy"
import { useEffect, useState } from 'react'


function App() {
  const [notes,setNotes] = useState( [])
  console.log(notes);

  return (
    <>
      <Routes>
        <Route path='/' element={<Notes notes={notes}/>}/>
        <Route path='/create' element={<CreateNote setNotes={setNotes}/>}/>
        <Route path='/edit/:id' element={<EditNote/>}/>
      </Routes>
    </>
  )
}

export default App
