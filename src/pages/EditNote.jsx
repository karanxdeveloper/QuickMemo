import { Link, useNavigate, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import useCreateDate from "../hooks/useCreateDate";
import Swal from "sweetalert2";

function EditNote({notes,setNotes}) {

  const {id} = useParams()
  const note = notes.find((item)=> item.id == id)
  const [title,setTitle] = useState(note.title)
  const [details,setDetails] = useState(note.details)
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleSave = (e)=>{
    e.preventDefault();
    if(title && details){
      const newNote = {...note, title,details,date}

      const newNotes = notes.map((item)=>{
        if(item.id == id){
          item = newNote;
        }
        return item
      })
      setNotes(newNotes)
    }
    navigate("/")
  }

  const handleDelete = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
    popup: "custom-swal-popup"}
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const newNotes = notes.filter((item)=>{
          return item.id != id;
         })
         setNotes(newNotes)
         navigate("/")
      }
    });



    
  }
  
  return (
    <>
      <section className="text-white p-3 bg-gradient-to-b from-[#0d3875] to-[#0b0f16] h-[100vh]">
        <header className="flex justify-around h-[5%] ">
          <Link className="p-3 text-2xl flex justify-center items-center bg-[#081d3c] text-center rounded-md brightness-150 inset-shadow-sm inset-shadow-gray-500/50" to={"/"}><FaArrowLeft /></Link>
          <button onClick={handleSave} className="btn text-2xl p-3 rounded-md flex justify-center items-center bg-[#081d3c] brightness-150 inset-shadow-sm inset-shadow-gray-500/50">Save</button>
          <button onClick={handleDelete} className="btn text-2xl p-3 rounded-md flex justify-center items-center bg-gradient-to-b to-[#d12323]  border border-b-[#4c0926] brightness-150 inset-shadow-sm inset-shadow-gray-500/50"><FaTrash /></button>
        </header>
        <form className="create flex flex-col h-[95%] gap-[2px] mt-2">
            <input onChange={(e)=>{setTitle(e.target.value)}} value={title} className="inset-shadow-sm inset-shadow-gray-500/50 p-3 text-2xl brightness-150 outline-none h-[5%] bg-[#213f74] rounded-xl" type="text" placeholder="Title..." autoFocus />
            <textarea onChange={(e)=>{setDetails(e.target.value)}} value={details} className="inset-shadow-sm inset-shadow-gray-500/50 p-3 text-2xl outline-none h-[95%] border border-b-[#0b0f16] rounded-xl" placeholder="Details..."></textarea>
        </form>
      </section>
    </>
  )
}

export default EditNote