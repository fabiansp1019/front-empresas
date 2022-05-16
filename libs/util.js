const ayudas = {
  formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  },

  formatFecha(hoy) {
    let dia = hoy.getDay();
    let mes = hoy.getMonth() + 1;
    let agnio = hoy.getFullYear();

    // AAAA-MM-DD:
    let formato1 = `${agnio}-${mes}-${dia}`;
    //console.log(formato1);
    return formato1;
  },
};
export default ayudas;
