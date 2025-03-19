import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import useCreateDate from "../hooks/useCreateDate"

function CreateNote({setNotes}) {

  const [title,setTitle] = useState("")
  const [details,setDetails] = useState("")
  const date = useCreateDate()
  const navigate = useNavigate()

  function handleSubmit(){
    if(!title || !details){
      navigate("/")
    }


    if(title && details){
      const note = { 
        "id": uuid(),
        "title":title,
        "details":details,
        "date":date
      }
      setNotes(prevNotes => [note, ...prevNotes])
      navigate("/")
      console.log(note);
    }


    
  }

  return (
    <>
      <section className="text-white p-3 bg-[#1b1d30] h-[100vh]">
        <header className="flex justify-around h-[5%] ">
          <Link className="p-3 text-2xl flex justify-center items-center bg-gray-700 text-center rounded-md brightness-150 inset-shadow-sm inset-shadow-gray-500/50" to={"/"}><FaArrowLeft /></Link>
          <button onClick={handleSubmit} className="btn text-2xl p-3 rounded-md flex justify-center items-center bg-gray-700 brightness-150 inset-shadow-sm inset-shadow-gray-500/50">Save</button>
        </header>
        <form className="create flex flex-col h-[95%] gap-[2px]  mt-2">
            <input onChange={(e)=>setTitle(e.target.value)} value={title}  className="inset-shadow-sm inset-shadow-gray-500/50 p-3 text-2xl brightness-150 outline-none h-[5%] bg-gray-700 rounded-xl" type="text" placeholder="Title..." autoFocus />
            <textarea onChange={(e)=>setDetails(e.target.value)} value={details} className="inset-shadow-sm inset-shadow-gray-500/50 p-3 text-2xl outline-none h-[95%] bg-gray-600 rounded-xl" placeholder="Details..."></textarea>
        </form>
      </section>
    </>
  )
}

export default CreateNote