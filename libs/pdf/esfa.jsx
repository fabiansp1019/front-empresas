import React from "react";
// import Image from "next/image";

import { jsPDF } from "jspdf";
import headerSituacionFinanciera from "./ESFA/header";
import situacionFinanciera from "./ESFA/situacionFinanciera";
import headerResultadoIntegral from "./ERI/header"
import resultadoIntegral from "./ERI/resultadoIntegral";

const pdf = ({ data, nombre }) => {

  const onClic = () => {
    var doc = new jsPDF();
    let startY;
    /**
     * aqui se muestra la cabecera del balance general
     * y el estado de situacion financiera
    */
    startY = headerSituacionFinanciera(doc, data);
    startY += 10;
    startY = situacionFinanciera(doc, startY, data);
    startY += 10;

    /**
     * agregamos una nueva pagina para que el estado de resultados en otra pagina
    */
    doc.addPage();
    /**
     * aqui se muestra la cabecera del balance estado re resultados
     * y el estado de resultado integral
    */
     startY = headerResultadoIntegral(doc, data);
     startY += 10;
     startY = resultadoIntegral(doc, startY, data);
     startY += 10;

    window.open(doc.output("bloburl"), "_blank");
  };

  return (
    <div>
      <button className="btn-personalizado" onClick={onClic}>
        {nombre}
      </button>
    </div>
  );
};

export default pdf;