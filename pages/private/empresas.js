import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EMPRESAS } from "../../graphql/queries";
import Layout from "../../components/Layout";

const Empresas = () => {
  const { loading, error, data } = useQuery(GET_EMPRESAS);
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  console.log(data);
  return (
    <Layout>
      <ul>
        {data.empresas.map((empresa) => {
          return <li>{empresa.razonSocial}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default Empresas;
