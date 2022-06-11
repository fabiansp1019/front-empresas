import jsPDF from "jspdf";
import "jspdf-autotable";
 
export default function GeneratePDF({estadosFinancieros}) {
  function generate() {
    const doc = new jsPDF();
    const person = [{name:"brayan", age:"9", address:"cl 57 2820"}];
    doc.autoTable({
      head: [["", "", ""]],
      body: estadosFinancieros.map(({ clase, nombre, address }) => {
        return [clase, nombre, address];
      }),
    });
 
    doc.save("persons.pdf");
  }
 
  return (
    <div>
      <button onClick={generate} type="primary">
        Download PDF
      </button>
    </div>
  );
}