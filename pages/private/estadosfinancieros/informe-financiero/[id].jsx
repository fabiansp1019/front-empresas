import React, { useEffect, useState } from "react";
import axios from "axios";
import LayoutPrivate from "../../../../components/Layoutprivate";
import libs from "../../../../libs/util";
import { myGet } from "../../../../libs/fetchApi";
import Esfa from "../../../../libs/pdf/esfa"
import Nav_Estados_Financieros from "../../../../components/Empresas/estadosFinancieros/Nav_Estados_Financieros";



const id = ({data}) => {

  return (
    <LayoutPrivate nav={<Nav_Estados_Financieros />}>

        <Esfa data={data} nombre={'Generar informe financiero'} />

    </LayoutPrivate>
  );
};

export async function getServerSideProps(ctx) {
  // const json = await myGet("api/listarclases", ctx);
  const token = ctx?.req?.cookies?.__session;
  const id = ctx?.params?.id

  const req = await axios({
    method: "post",
    url: libs.location() + "api/listarclases",
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: {
      dataId: id,
    },
  });

  // console.log(req.data)
  return { props: { data: req.data } };
}

export default id;
