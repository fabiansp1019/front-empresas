import React, { useEffect } from 'react'
import Layout from '../../components/Layoutprivate'
import {useAuth} from '../../libs/auth'
import libs from '../../libs/util'

const listado = ({users}) => {

 

  useEffect(()=>{
    console.log(users)
  },[])

  return (
    <Layout>
      <h1>Listado de usuarios</h1>
    </Layout>
  )
}



export default listado