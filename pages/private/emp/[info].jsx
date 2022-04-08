import React from 'react'
import { useRouter } from 'next/router'
import LayoutP from '../../../components/Layoutprivate'
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_EMPRESA
} from "../../../graphql/queries";

 const info = () => {
   const { query } = useRouter()
   console.log(query.info);

   const { data, loading, error } = useQuery(GET_EMPRESA, {
    variables: {
      id: query.info
    },
  });



    

    if (loading) {
      return "loading";
    }
    if (error) {
      return <NoAutorizado />;
    }
    console.log(data);
 



  return (
    <LayoutP>
      <div>
        <h1>{data.empresa.razonSocial}</h1>
      </div>
    </LayoutP>
  )
}


export default info
