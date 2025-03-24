import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

function Notes({notes}) {
  const [showSearch,setShowSearch] = useState(false)

  const [text,setText] = useState("")
  const [filterNotes,setFilterNotes] = useState(notes)

  const handleSearch =() =>{
    setFilterNotes(notes.filter((note)=>{
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch,[text])


  return (
    <>
      <section className=" h-[100vh]  text-white relative">
        <header className="flex justify-around p-2">
         {!showSearch ? <h2 className="text-3xl font-bold ">QuickMemo</h2> :
          <input value={text} onChange={(e) => {setText(e.target.value);}} className="border rounded-md px-1" type="text" autoFocus placeholder='keyword...' />}
          <button onClick={()=>setShowSearch(!showSearch)} className="brightness-150 bg-[#223757] outline-none  text-white p-2.5 rounded-md inset-shadow-sm inset-shadow-gray-500/50">{showSearch ? <IoCloseSharp />  : <FaSearch />}</button>
        </header>

        <div className="flex flex-wrap justify-center p-2 gap-3 ">
          {filterNotes.length == 0 && <p>No notes found</p>}
        
          {
            filterNotes.map((note) => {
              return <NoteItem key={note.id} note={note}/>
            })
          }
        </div>
        <Link to={"/create"} className="animate-bounce p-4 text-3xl border border-b-[#0b0f16] rounded-md fixed bottom-2 right-2 bg-[#081d3c] inset-shadow-sm inset-shadow-gray-500/50 brightness-150"><FaPlus /></Link>
      </section>
    </>
  )
}

export default Notes