import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/NoteItem";

function Notes({notes}) {
  return (
    <>
      <section className="bg-black h-[100vh] text-white relative">
        <header className="flex justify-around p-2">
          <h2 className="text-3xl font-bold ">QuickMemo</h2>
          {/* <input className="border rounded-md px-1" type="text" autoFocus placeholder='keyword...' /> */}
          <button className="bg-gray-600 border text-white p-2.5 rounded-md"><FaSearch /></button>
        </header>

        <div className="container flex flex-wrap justify-center p-2 gap-3">
          {
            notes.map((note) => {
              return <NoteItem key={note.id} note={note}/>
            })
          }
        </div>
        <Link to={"/create"} className="p-4 text-3xl rounded-md absolute bottom-2 right-2 bg-gray-600"><FaPlus /></Link>
      </section>
    </>
  )
}

export default Notes