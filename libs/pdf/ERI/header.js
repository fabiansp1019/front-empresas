
const header = (doc, data) => {
    let startY = 5;
  //configuracion de letra e imagen
    const url = "https://res.cloudinary.com/dz7jl3nbg/image/upload/v1659536608/ayc_ve1zdz.jpg";
    doc.setFont('courier','normal');
    doc.setFontSize(11);

    doc.addImage(url, "JPEG", 110, startY, 72, 46, "medium");
    startY += 15;
    doc.text(data?.empresa?.razonSocial.toUpperCase() + " ", 70, startY, {align: "center"}); // 41
    startY += 5;
    doc.text(String(data?.empresa?.nit) + " - " + String(data?.empresa?.digitoVerificacion) + " ", 70, startY, {align: "center"}); // 41
    startY += 5;
    doc.text('ESTADO DE RESULTADOS INTEGRAL', 70, startY, {align: "center"}); //10
    startY += 5;
    doc.text("A DICIEMBRE 31 DEL 2021", 70, startY, {align: "center"}); // 41
    startY += 5;

    doc.text("cifras expresadas en pesos COP", 70, startY, {align: "center"}); // 41
    startY += 5;


    return startY;
  };

  export default header;