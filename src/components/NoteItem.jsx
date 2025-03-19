import { Link } from 'react-router-dom'

function NoteItem({note}) {
  return (
    <Link to={`/edit/${note.id}`}
    className="note flex flex-col justify-between rounded-[1rem] p-2 max-h-[130px] gap-[3px] bg-gray-900 w-[185px]   drop-shadow-xl text-white lg:w-[398px] inset-shadow-sm inset-shadow-gray-500/50">
        <h4  className=' p-1 max-h-[30px] rounded-[10px]  bg-gray-700 shadow-2xl inset-shadow-sm inset-shadow-gray-500/50 shadow-gray-500/50'>{note.title.length > 30 ? (note.title.substr(0,30)) + "..." : note.title}</h4>
        <p  className='bg-graay-600 h-[60px] p-1  max-h-[70px] overflow-hidden inset-shadow-sm  inset-shadow-gray-500/50 rounded-xl'>{note.details}</p>
        <p className='text-[11px] '>{note.date}</p>
    </Link>
  )
}

export default NoteItem