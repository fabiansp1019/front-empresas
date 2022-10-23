import React from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'


const presentacion = () => {

  return (
    <>

      <DynamicHeader />
      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
      </Suspense>


      <div className='feature-section'>
        <button>seccion de caracteristicas</button>
      </div>

      <div className='team-section'>
        <div className='team-section'>seccion del equipo</div>
      </div>

      <div className='footer'>
        <div>FOOTER</div>
      </div>
    </>
  )
}

export default presentacion