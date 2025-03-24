import { Link } from 'react-router-dom'

function NoteItem({note}) {
  return (
    <Link to={`/edit/${note.id}`}
    className="note flex flex-col justify-between  border-b-[#0b0f16] border rounded-[0.5rem] p-2 max-h-[130px] gap-[3px] bg-gradient-to-b from-[#0d3875] to-[#0b0f16] w-[180px] drop-shadow-xl text-white lg:w-[398px] inset-shadow-sm inset-shadow-gray-500/50">
        <h4  className=' p-1 max-h-[30px] rounded-[4px]  bg-[#213f74] shadow-2xl inset-shadow-sm inset-shadow-gray-500/50 shadow-gray-500/50'>{note.title.length > 30 ? (note.title.substr(0,30)) + "..." : note.title}</h4>
        <p  className=' h-[60px] p-1  max-h-[70px]  overflow-hidden rounded-xl'>{note.details}</p>
        <p className='text-[11px] '>{note.date}</p>
    </Link>
  )
}

export default NoteItem