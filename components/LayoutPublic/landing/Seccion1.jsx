import React from 'react'
import Image from "next/image"

const Seccion1 = () => {
    const nombrePrincipal = 'Welcome to your ButterCMS Proof of Concept'
    const nombreSecundario = 'Use this app as your own proof of concept to explore Butters capabilities for yourself. When youre ready, host this app and invite your team to try it out all well!'
    const image = 'https://firebasestorage.googleapis.com/v0/b/proyecto1-8c4a6.appspot.com/o/Imagen1.png?alt=media&token=5183094f-ac3b-44fd-afb7-45d7b5a2eee5'   
    const urlLogin = '/login'
    const urlCrearCuenta = 'buttonUrl'
    return (
        <section id={'scrollAnchorId'} className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="hero-content">
                            <h1>{nombrePrincipal}</h1>
                            <p>{nombreSecundario}</p>

                            <a href={urlLogin} className="main-btn btn-hover">{'Login'}</a>
                            <a href={urlCrearCuenta}>Nececitas una cuenta?</a>
                        </div>
                    </div>
                    {image && <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="hero-image text-center text-lg-end">
                            <img src={image}
                                layout="responsive"
                                height="400px"
                                width="400px"
                                alt=""
                            />
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Seccion1