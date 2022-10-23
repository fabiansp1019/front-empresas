import Feature from "./feature";

//{ headline, subheadline, features, scrollAnchorId }
export default function Features({ headline, subheadline, features, scrollAnchorId }) {
  const textoPrincipal = 'This page is built using ButterCMS Components'
  const textoSecundario = 'This page is an example of utilizing Butter Components which allow you to build dynamic landing pages by choosing Components from a Component Library. Reuse and reorder Components in any way you want!'
  const categorias = [
    {
      titulo: 'Components on this page',
      description: 'This sample page has four component types: hero, two column with image, features, and testimonials.',
      icono: ''
    },
    {
      titulo: 'Build your own',
      description: 'This page is just an example set of Components. You can build your own custom Component library!',
      icono: ''
    },
    {
      titulo: 'Infinite possibilities',
      description: 'Build carousels, call to actions, testimonials, and much more. Theres infinite flexbility.',
      icono: ''
    },
    {
      titulo: 'Reorder them',
      description: 'Components are great because you can reorder them from your Butter dashboard',
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