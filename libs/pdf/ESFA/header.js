import { loadFile, extractImageFromDataUrl } from "jspdf";
const header = (doc, data) => {

   const intento = "https://res.cloudinary.com/dz7jl3nbg/image/upload/v1665623717/imgs/mb_lnizzo.jpg"

  console.log(data?.empresa?.logo)
    let startY = 5;
  //configuracion de letra e imagen
    // const url = data?.empresa?.logo || "https://res.cloudinary.com/dz7jl3nbg/image/upload/v1665623717/imgs/mb_lnizzo.jpg";
    doc.setFont('courier','normal');
    doc.setFontSize(11);

    doc.addImage(intento, "JPEG", 110, startY, 72, 46, "medium");
    startY += 15;
    doc.text(data?.empresa?.razonSocial.toUpperCase() + " ", 70, startY, {align: "center"}); // 41
    startY += 5;
    doc.text(String(data?.empresa?.nit) + " - " + String(data?.empresa?.digitoVerificacion) + " ", 70, startY, {align: "center"}); // 41
    startY += 5;
    doc.text('ESTADO DE SITUACION FINANCIERA', 70, startY, {align: "center"}); //10
    startY += 5;
    doc.text("A DICIEMBRE 31 DEL 2021", 70, startY, {align: "center"}); // 41
    startY += 5;

    doc.text("cifras expresadas en pesos COP", 70, startY, {align: "center"}); // 41
    startY += 5;


    // data?.lista.map(clase => {
    //   startY += 5;
    //   doc.text(clase?.nombre, 10, startY);
    // })







    return startY;
  };

  export default header;