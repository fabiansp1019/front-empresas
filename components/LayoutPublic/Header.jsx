import { useEffect, useState, useRef } from 'react'

import Image from 'next/image'

import MainMenu from './main-menu/menu-principal'

export default function HeaderSection() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false)
  const navbarAreaEl = useRef(null)

  const mainMenu = [
    {
        url: 'nosotros',
        label: 'Nosotros'
    },
    {
        url: 'servicios',
        label: 'Servicios'
    },
    {
        url: 'contacto',
        label: 'Contacto'
    }
  ]

  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', fixNavBar)

    return () => {
      window.removeEventListener('scroll', fixNavBar)
    }
  }, [])

  return (
    <header className="header">
      <div
        ref={navbarAreaEl}
        className={`navbar-area ${isNavbarSticky ? 'sticky' : ''}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/proyecto1-8c4a6.appspot.com/o/logo%20png%20-%20impuesti.png?alt=media&token=a953a357-0ee6-44c7-8721-71d0480d546b"
                    alt="Logo"
                    width={180}
                    height={45}
                  />
                </a>
                <MainMenu mainMenuLinks={mainMenu} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}