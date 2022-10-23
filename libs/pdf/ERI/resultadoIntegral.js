import helpers from '../../util'
import newPage from '../newPage'
import header from './header';
const resultadoIntegral = (doc, startY, data, empresa) => {
  //ITERACION PRINCIPAL DONDE SE COLOCARAN LAS CLASES

  let filasCodigos = 10;
  let filaDescripcion = 30;
  let filaValores1= 130;
  let filaValores2= 166;
  let filaValores3= 200;
  let cantidadLetrasCuenta = 30;

  data?.map((clase) => {

    if((clase.saldo1 + clase.saldo2 + clase.saldo3)>0){
    startY += 5;
    if (
      clase.clase == '4' ||
      clase.clase == '5' ||
      clase.clase == '6' ||
      clase.clase == '7'
    ) {
      // var claseactual = clase.clase
      doc.setFontSize(11)
      doc.setFont("courier", "bold");
      doc.text(helpers.capitalizarText(clase?.nombre.substr(0, cantidadLetrasCuenta)), filaDescripcion, startY);
      doc.text(String(clase?.clase), filasCodigos, startY);
      doc.setFont("courier", "normal");
      // doc.text(String(data.saldoPorClase.find(cls => cls?.clase == clase.clase)?.saldoTotal), 100, startY);
      startY += 5;




      // ITERACION PARA PONER LOS GRUPOS
      data?.find(cls => cls.clase == clase.clase).grupos.map((grupo)=>{




        /* busca saldo por cada grupo para preparar condicional que impedira imprimir
          los grupos de las cuentas que no tengan saldo
        */
        // let saldoDelGrupo = data.saldosPorGrupo.find(grp => grp?.grupo == grupo?.grupo)?.saldo
          if ((grupo?.saldo1 + grupo?.saldo2 + grupo?.saldo3) > 0){
          startY += 5;
            doc.setFontSize(6)
            doc.setFont("courier", "bold");
            doc.text('N'+ (String(grupo.grupo.substr(0,2))), filasCodigos+13, startY);
            doc.setFont("courier", "normal");
            doc.setFontSize(11)

          doc.text(helpers.capitalizarText(grupo?.nombre.substr(0, cantidadLetrasCuenta)), filaDescripcion, startY);
          doc.text(String(grupo?.grupo), filasCodigos, startY);
          // doc.text(String(helpers.formatNumber(saldoDelGrupo)), 150, startY, {align: "right"});
          }


          //  ITERACION PARA LAS CUENTAS
          let primerDato = grupo?.cuentas?.length
          grupo.cuentas.map((cuenta, key)=>{
          /*
          busca saldo por cada grupo para preparar condicional que impedira imprimir
          los cuentas de las cuentas que no tengan saldo
          */
        // let saldosPorCuentas = data.saldosPorCuentas.find(cta => cta?.cuenta == cuenta?.cuentas)?.saldo

            if ((cuenta?.saldo1 + cuenta?.saldo2 + cuenta?.saldo3) > 0){

                    /**
       * crea una nueva hoja se puso en los grupos para que si pasa del tamaño de la hoja 
       * cree una nueva
      */
      startY = newPage(doc, startY, 40, header);
      if(startY == 75){
        header(doc, empresa)
      }


            startY += 5;

            doc.text(helpers.capitalizarText(cuenta?.nombre.substr(0, cantidadLetrasCuenta)), filaDescripcion, startY);
            doc.text(String(cuenta?.cuenta), filasCodigos, startY);
            doc.text(String(helpers.formatNumber(cuenta?.saldo1)), filaValores1, startY, {align: "right"});
            doc.text(String(helpers.formatNumber(cuenta?.saldo2)), filaValores2, startY, {align: "right"});
            doc.text(String(helpers.formatNumber(cuenta?.saldo3)), filaValores3, startY, {align: "right"});
            }



            /*  ***********************************************************************************
            aqui va los totales que se forman despues de haber iterado todos las cuentas
            se marcara el valor total de cada grupo de la cuenta  .substr(0, cantidadLetrasCuenta)
            */
            if ((cuenta?.saldo1 + cuenta?.saldo2 + cuenta?.saldo3) > 0){
              if((key+1) == primerDato){
                let texto = 'Total ' + helpers.capitalizarText(grupo?.nombre)
                startY += 5;
                doc.setFont("courier", "bold");
                doc.text(texto.substr(0, cantidadLetrasCuenta), filaDescripcion, startY);
                doc.text(String(helpers.formatNumber(grupo?.saldo1)), filaValores1, startY, {align: "right"});
                doc.text(String(helpers.formatNumber(grupo?.saldo2)), filaValores2, startY, {align: "right"});
                doc.text(String(helpers.formatNumber(grupo?.saldo3)), filaValores3, startY, {align: "right"});
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
      doc.text('TOTAL ' + clase?.nombre.substr(0, cantidadLetrasCuenta).toUpperCase(), filaDescripcion, startY);
      doc.text(String(helpers.formatNumber(clase?.saldo1)), filaValores1, startY, {align: "right"});
      doc.text(String(helpers.formatNumber(clase?.saldo2)), filaValores2, startY, {align: "right"});
      doc.text(String(helpers.formatNumber(clase?.saldo3)), filaValores3, startY, {align: "right"});
      doc.setFont("courier", "normal");
      startY += 5;


    }
  }
  });

  startY += 10;
  let utilidad1 = data?.find(x=> x.clase == 4).saldo1 - data?.find(x=> x.clase == 5).saldo1 - data?.find(x=> x.clase == 6).saldo1 - data?.find(x=> x.clase == 7).saldo1
  let utilidad2 = data?.find(x=> x.clase == 4).saldo2 - data?.find(x=> x.clase == 5).saldo2 - data?.find(x=> x.clase == 6).saldo2 - data?.find(x=> x.clase == 7).saldo2
  let utilidad3 = data?.find(x=> x.clase == 4).saldo3 - data?.find(x=> x.clase == 5).saldo3 - data?.find(x=> x.clase == 6).saldo3 - data?.find(x=> x.clase == 7).saldo3

  doc.setFont("courier", "bold");
  doc.text('UTILIDAD ANTES DE IMPUESTO', filaDescripcion, startY);
  doc.text(String(helpers.formatNumber(utilidad1)), filaValores1, startY, {align: "right"});
  doc.text(String(helpers.formatNumber(utilidad2)), filaValores2, startY, {align: "right"});
  doc.text(String(helpers.formatNumber(utilidad3)), filaValores3, startY, {align: "right"});
  // startY += 5;
  // doc.text('IMPUESTO', filaDescripcion, startY);
  // doc.text(String(helpers.formatNumber()), filaValores, startY, {align: "right"});
  // doc.text(String(helpers.formatNumber(data?.valores_adicionales?.impuesto)), filaValores, startY, {align: "right"});
  // doc.text(String(helpers.formatNumber(data?.valores_adicionales?.impuesto)), filaValores, startY, {align: "right"});
  // startY += 5;
  // doc.text('TOTAL UTILIDAD DESPUES DE IMPUESTO', filaDescripcion, startY);
  // doc.text(String(helpers.formatNumber(data?.valores_adicionales?.utilidadDespuesDeImpuesto)), filaValores, startY, {align: "right"});
  // doc.setFont("courier", "normal");

  return startY;
};

export default resultadoIntegral;
