import { Link } from 'react-router-dom'

function NoteItem({note}) {
  return (
    <Link to={`/edit/${note.id}`} className="note flex flex-col justify-between rounded-md p-1 max-h-[130px] bg-blue-900 w-[190px] text-white lg:w-[398px]">
        <h4 className='p-2 max-h-[60px]  bg-blue-700 '>{note.title.length > 30 ? (note.title.substr(0,30)) + "..." : note.title}</h4>
        <p className='bg-blue-600  max-h-[70px] overflow-hidden'>{note.details}</p>
        <p className='bg-blue-400'>{note.date}</p>
    </Link>
  )
}

export default NoteItem