import { Link } from 'react-router-dom'

function NoteItem({note}) {
  return (
    <Link to={`/edit/${note.id}`} className="note rounded-md p-2 bg-gray-500 w-[190px] text-white lg:w-[398px]">
        <h4 className='p-2 bg-gray-300'>{note.title.length > 30 ? (note.title.substr(0,30)) + "..." : note.title}</h4>
        <p className=''>{note.date}</p>
    </Link>
  )
}

export default NoteItem