import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

function CreateNote() {
  return (
    <>
      <section className="text-white p-3 bg-black h-[100vh]">
        <header className="flex justify-around h-[5%] ">
          <Link className="p-3 text-2xl flex justify-center items-center bg-gray-500 text-center rounded-md" to={"/"}><FaArrowLeft /></Link>
          <button className="btn text-2xl p-3 rounded-md flex justify-center items-center bg-gray-500">Save</button>
        </header>
        <form className="create flex flex-col h-[95%] bg-blue-800 mt-2">
            <input className="p-3 text-2xl outline-none h-[5%] bg-purple-600" type="text" placeholder="Title..." autoFocus />
            <textarea className="p-3 text-2xl outline-none h-[95%] bg-gray-400" placeholder="Details..."></textarea>
        </form>
      </section>
    </>
  )
}

export default CreateNote