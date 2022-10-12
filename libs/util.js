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
    return formato1;
  },
  capitalizarText(str){
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  },
  splitFecha(hoy) {
    // formatea fechas que viene un string
    let dia = hoy?.split("T")[0]

    return dia;
  },
  location (){
    return 'http://localhost:4000/'
  }
};
export default ayudas;
