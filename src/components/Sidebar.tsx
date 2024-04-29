import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-2 space-y-3 text-white'>
      <div className='py-2 border-2 rounded-xl flex'><p className='mx-auto my-auto'> Me.</p> </div>
      <div className='size-12 border-2 rounded-xl flex'><p className='mx-auto my-auto'> Skill</p> </div>
      <div className='size-12 border-2 rounded-xl flex'><p className='mx-auto my-auto'> Projects</p> </div>

    </div>
  )
}

export default Sidebar
