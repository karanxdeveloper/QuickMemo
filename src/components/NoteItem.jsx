import { Link } from 'react-router-dom'

function NoteItem({note}) {
  return (
    <Link to={`/edit/${note.id}`} className="note flex flex-col justify-between rounded-[1rem] p-2 max-h-[130px] bg-gray-900 w-[190px] text-white lg:w-[398px]">
        <h4 className='p-1 max-h-[30px] rounded-[6px]  bg-gray-700 '>{note.title.length > 30 ? (note.title.substr(0,30)) + "..." : note.title}</h4>
        <p className='bg-graay-600 h-[60px]  max-h-[70px] overflow-hidden'>{note.details}</p>
        <p className='text-[11px]'>{note.date}</p>
    </Link>
  )
}

export default NoteItem