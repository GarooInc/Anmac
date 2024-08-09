"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3BottomRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll"


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Medicamentos', href: '/medicamentos' },
  { name: 'Impacto', href: '/impacto' },
  { name: 'Recursos', href: '/recursos'},
  { name: 'Noticias', href: '/noticias'},
  { name: 'Contacto', href: '/contacto'},
]

const NavBar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 ">
        <nav className="flex items-center justify-between md:justify-center p-4 lg:px-8 w-full" aria-label="Global">
          <div className="flex flex-row-reverse lg:hidden justify-between w-full">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="h-8 w-8 text-blue_anmac" aria-hidden="true" />
            </button>
            <a href="/" className="-m-1.5 p-0">
            <img
                className="w-40"
                src="/assets/images/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-row justify-between items-center lg:gap-x-24 lg:w-full">
            <a href="/" className="-m-1.5 p-0">
              <img
                className="w-40"
                src="/assets/images/logo.png"
                alt=""
              />
            </a>
            <div className="flex items-center justify-between gap-10">
              {navigation.map((item) => (
                    <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-md leading-6 cursor-pointer p-2 rounded-lg font-inter flex items-center">
                        <span className={` font-montserrat  hover:text-grayish font-inter flex items-center ${item.name === 'Contacto' ? 'bg-blue_anmac text-white px-4 py-2 rounded-full' : 'text-black'}`}>{item.name}</span>
                    </Link>
                ))}
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="w-40"
                  src="/assets/images/logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-blue_anmac"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="font-montserrat -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue_anmac hover:bg-gray-500 cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
