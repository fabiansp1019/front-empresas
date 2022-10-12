import helpers from '../../util'
import newPage from '../newPage'
import header from './header';
const resultadoIntegral = (doc, startY, data) => {
  //ITERACION PRINCIPAL DONDE SE COLOCARAN LAS CLASES

  let filasCodigos = 20;
  let filaDescripcion = 40;
  let filaValores= 180;

  data?.lista.map((clase) => {
    let saldoDeLaClase = data.saldoPorClase.find(cls => cls?.clase == clase.clase)?.saldo;

    if(saldoDeLaClase > 0){

    startY += 5;
    if (
      clase.clase == '4' ||
      clase.clase == '5' ||
      clase.clase == '6' ||
      clase.clase == '7'
    ) {
      // var claseactual = clase.clase
      doc.setFont("courier", "bold");
      doc.text(helpers.capitalizarText(clase?.nombre), filaDescripcion, startY);
      doc.text(clase?.clase, filasCodigos, startY);
      doc.setFont("courier", "normal");
      // doc.text(String(data.saldoPorClase.find(cls => cls?.clase == clase.clase)?.saldoTotal), 100, startY);
      startY += 5;




      // ITERACION PARA PONER LOS GRUPOS
      data.lista.find(cls => cls.clase == clase.clase).grupos.map(grupo=>{
      /**
       * crea una nueva hoja se puso en los grupos para que si pasa del tamaño de la hoja 
       * cree una nueva
      */

      startY = newPage(doc, startY, 40, header);

        /* busca saldo por cada grupo para preparar condicional que impedira imprimir
          los grupos de las cuentas que no tengan saldo
        */
        let saldoDelGrupo = data.saldosPorGrupo.find(grp => grp?.grupo == grupo?.grupo)?.saldo
          if (saldoDelGrupo > 0){
          startY += 5;
          doc.text(helpers.capitalizarText(grupo?.nombre), filaDescripcion, startY);
          doc.text(grupo?.grupo, filasCodigos, startY);
          // doc.text(String(helpers.formatNumber(saldoDelGrupo)), 150, startY, {align: "right"});
          }


          //  ITERACION PARA LAS CUENTAS
          let primerDato = grupo?.cuentas?.length
          grupo.cuentas.map((cuenta, key)=>{
          /*
          busca saldo por cada grupo para preparar condicional que impedira imprimir
          los cuentas de las cuentas que no tengan saldo
          */
        let saldosPorCuentas = data.saldosPorCuentas.find(cta => cta?.cuenta == cuenta?.cuentas)?.saldo

            if (saldosPorCuentas > 0){
            startY += 5;
            doc.text(helpers.capitalizarText(cuenta?.nombre), filaDescripcion, startY);
            doc.text(cuenta?.cuentas, filasCodigos, startY);
            doc.text(String(helpers.formatNumber(saldosPorCuentas)), filaValores, startY, {align: "right"});

            }



            /*  ***********************************************************************************
            aqui va los totales que se forman despues de haber iterado todos las cuentas
            se marcara el valor total de cada grupo de la cuenta
            */
            if (saldoDelGrupo){
              if((key+1) == primerDato){
                startY += 5;
                doc.setFont("courier", "bold");
                doc.text('Total ' + helpers.capitalizarText(grupo?.nombre), filaDescripcion, startY);
                doc.text(String(helpers.formatNumber(saldoDelGrupo)), filaValores, startY, {align: "right"});
                doc.setFont("courier", "normal");
                startY += 5;
              }
          }

          })


      })



      /*  ***********************************************************************************
      aqui va los totales que se forman despues de haber iterado todos los grupos y todas las
      cuentas
      */
      startY += 7;
      doc.setFont("courier", "bold");
      doc.text('TOTAL ' + clase?.nombre.toUpperCase(), filaDescripcion, startY);
      doc.text(String(helpers.formatNumber(saldoDeLaClase)), filaValores, startY, {align: "right"});
      doc.setFont("courier", "normal");
      startY += 5;


    }
  }
  });
  startY += 10;
  doc.setFont("courier", "bold");
  doc.text('TOTAL UTILIDAD ANTES DE IMPUESTO', filaDescripcion, startY);
  doc.text(String(helpers.formatNumber(data?.valores_adicionales?.utilidad)), filaValores, startY, {align: "right"});
  startY += 5;
  doc.text('IMPUESTO', filaDescripcion, startY);
  doc.text(String(helpers.formatNumber(data?.valores_adicionales?.impuesto)), filaValores, startY, {align: "right"});
  startY += 5;
  doc.text('TOTAL UTILIDAD DESPUES DE IMPUESTO', filaDescripcion, startY);
  doc.text(String(helpers.formatNumber(data?.valores_adicionales?.utilidadDespuesDeImpuesto)), filaValores, startY, {align: "right"});
  doc.setFont("courier", "normal");

  return startY;
};

export default resultadoIntegral;
