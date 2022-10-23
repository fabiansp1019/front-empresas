import React from 'react'

const Seccion2 = () => {
    const image = 'https://img.freepik.com/vector-gratis/concepto-deuda-vector-doodle-auditoria-fiscal_53876-126426.jpg?w=740&t=st=1666498570~exp=1666499170~hmac=39ae4f6bc9e0a1086af958ff96745e1a379c3a5cbcde436d0b9585dc6242ceb5'
    const imagePosition = 'left'
    const textoPrincipal = 'ButterCMS is your content backend'
    const textoSecundario = 'Butter has three core content solutions: Pages, Posts, and Collections. Combine this with advanced capabilities like localization, Write API, multi-site + multi-env and Butter is your centralized content backend no matter how much content youre managing.'
    return (
        // <div>
        //     <div className='cta-section'>
        //         <button>seccion de la cuenta</button>
        //     </div>
        // </div>
        <section id={'scrollAnchorId'} className="cta-section">
			<div className="container">
				<div className="row">
					{image && (imagePosition === "left") && (
						<div className="col-lg-6 order-last order-lg-first">
							<div className="left-image cta-image ">
								<img src={image}
									layout="responsive"
									height="400px"
									width="600px"
									alt=""
								/>
							</div>
						</div>
					)}
					<div className="col-lg-6">
						<div className="cta-content-wrapper">
							<div className="section-title">
								<h2 className="mb-20">{textoPrincipal}</h2>
								<div
									dangerouslySetInnerHTML={{ __html: textoSecundario }}
								/></div>
							<a href={'buttonUrl'} className="main-btn btn-hover border-btn mt-30">{'buttonLabel'}</a>
						</div>
					</div>
					{image && (imagePosition === "right") && (
						<div className="col-lg-6">
							<div className="right-image cta-image text-lg-end">
								<Image src={image}
									layout="responsive"
									height="400px"
									width="600px"
									alt=""
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section >
    )
}

export default Seccion2