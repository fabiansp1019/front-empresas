import React, { useEffect } from 'react'
import axios from "axios";
import libs from "../../libs/util";
import Layout from '../../components/Layoutprivate'


const usuarios = ({users}) => {

  return (
    <Layout>
      <ul>
        {users?.map(u=>(
          <li key={u._id}>{u?.username + " ----- " + u?.email + " ---- " + u?.createdAt}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  // const json = await myGet("api/listarclases", ctx);
  const token = ctx?.req?.cookies?.__session;
  const req = await axios({
    method: "get",
    url: libs.location() + "api/users",
    headers: {
      authorization: `Bearer ${token}`,
    }
  });

  return { props: { users: req.data } };
}



export default usuarios