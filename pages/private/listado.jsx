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

export async function getStaticProps(context) {
  // const { getAuthHeaders } = useAuth();
  // const req = await axios({
  //   method: "post",
  //   url: libs.location() + "api/user",
  //   headers: getAuthHeaders(),
  // });

  // const users = req.data;


  // const session = await getSession(context)

  const req = context.req;

  console.log("typeof req.cookies:"+ typeof req);

  return {
    props: {
       "test"
    }
  }
}

export default listado