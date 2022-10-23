import Feature from "./feature";

//{ headline, subheadline, features, scrollAnchorId }
export default function Features({ headline, subheadline, features, scrollAnchorId }) {
  const textoPrincipal = 'Nuestros servicios'
  const textoSecundario = 'A continuacion podras ver nuestro portafolio de servicios, podras tomar los que adapten a tus necesidades.'
  const categorias = [
    {
      titulo: 'Impuesto de Renta Personas Naturales',
      description: 'Nosotros te asesoramos al momento de presentar el impuesto de renta y complementarios',
      icono: ''
    },
    {
      titulo: 'Impuesto de Renta Personas Juridicas',
      description: 'Nosotros te asesoramos si lo que nececitas es presentar unicamente este impuesto',
      icono: ''
    },
    {
      titulo: 'Informacion Exogena',
      description: 'Nosotros presentamos la informacion exogena por ti, dejalo en nuestras manos.',
      icono: ''
    },
    {
      titulo: 'Regimen simple de tributacion',
      description: 'si perteneces a este regimen y lo unico que nececitas es presentar el anticipo bimestral, nosotros lo haremos por ti.',
      icono: ''
    },

  ]
  return (
    <section id={'scrollAnchorId'} className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-10">
            <div className="section-title mb-60">
              <h2 className="mb-20">{textoPrincipal}</h2>
              <p>{textoSecundario}</p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              {categorias.map((feature, index) => (
                <Feature
                  key={index}
                  headline={feature?.titulo}
                  description={feature?.description}
                  icon={feature?.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}