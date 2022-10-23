
const header = (doc, empresa) => {

  let fila1 = 115;
  let fila2 = 150;
  let fila3 = 185;
  let startY = 5;
  //configuracion de letra e imagen
  const url = empresa?.logo || "https://res.cloudinary.com/dz7jl3nbg/image/upload/v1665623717/imgs/mb_lnizzo.jpg";
  doc.setFont('courier', 'normal');
  doc.setFontSize(11);

  doc.addImage(url, "JPEG", 110, startY, 72, 46, "medium");
  startY += 15;
  doc.setFont("courier", "bold");
  doc.text(empresa?.razonSocial.toUpperCase() + " ", 70, startY, { align: "center" }); // 41
  doc.setFont("courier", "normal");
  startY += 5;
  doc.text(String(empresa?.nit) + " - " + String(empresa?.digitoVerificacion) + " ", 70, startY, { align: "center" }); // 41
  startY += 5;
  doc.text('ESTADO DE RESULTADOS INTEGRAL', 70, startY, { align: "center" }); //10
  startY += 5;
  doc.text("cifras expresadas en pesos COP", 70, startY, { align: "center" }); // 41
  startY += 5;

  doc.setFont("courier", "bold");
  doc.text(empresa?.estadosFinancieros?.aniio1, fila1, startY + 20, { align: "center" }); // 41
  doc.text(empresa?.estadosFinancieros?.aniio2, fila2, startY + 20, { align: "center" }); // 41
  doc.text(empresa?.estadosFinancieros?.aniio3, fila3, startY + 20, { align: "center" }); // 41
  doc.setFont("courier", "normal");
  doc.text(empresa?.estadosFinancieros?.mes1i?.toUpperCase(), fila1, startY + 25, { align: "center" }); // 41
  doc.text(empresa?.estadosFinancieros?.mes2i?.toUpperCase(), fila2, startY + 25, { align: "center" }); // 41
  doc.text(empresa?.estadosFinancieros?.mes3i?.toUpperCase(), fila3, startY + 25, { align: "center" }); // 41

  doc.text(empresa?.estadosFinancieros?.mes1f?.toUpperCase(), fila1, startY + 30, { align: "center" }); // 41
  doc.text(empresa?.estadosFinancieros?.mes2f?.toUpperCase(), fila2, startY + 30, { align: "center" }); // 41
  doc.text(empresa?.estadosFinancieros?.mes3f?.toUpperCase(), fila3, startY + 30, { align: "center" }); // 41

  startY += 10;


  return startY;
};

export default header;