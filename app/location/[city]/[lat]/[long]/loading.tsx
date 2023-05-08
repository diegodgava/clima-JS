import { SunIcon } from '@heroicons/react/solid'
import React from 'react'

function Loading() {
  return (
    <div className='bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen
    flex flex-col items-center justify-center text-slate-500'>

        <SunIcon className='h-24 w-24 aniimate-bounce text-yellow-500'
            color='yellow'
        />
        <h1 className='text-6xl font-bold text-center mb-10 animate-pulse'>Carrregando informações de clima</h1>

    </div>
  )
}

export default Loading