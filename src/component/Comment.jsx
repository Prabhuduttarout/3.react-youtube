import { CircleUser } from 'lucide-react'

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className='flex gap-2 bg-gray-50 px-2.5 py-1 rounded'>
      <CircleUser height={30} width={30} />
      <div>
        <h3 className='font-semibold'>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
