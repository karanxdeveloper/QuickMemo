
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Notes from './pages/Notes'
import EditNote from './pages/EditNote'
import CreateNote from './pages/CreateNote'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Notes/>}/>
        <Route path='/create' element={<CreateNote/>}/>
        <Route path='/edit/:id' element={<EditNote/>}/>
      </Routes>
    </>
  )
}

export default App
