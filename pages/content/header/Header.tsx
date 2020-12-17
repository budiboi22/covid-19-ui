import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    const navMenuDiv = document.getElementById("nav-content")
    const navMenu = document.getElementById("nav-toggle")

    document.onclick = check
    function check(e: { target: any }) {
      const target = (e && e.target) || (event && event.srcElement)

      if (!checkParent(target, navMenuDiv)) {
        if (checkParent(target, navMenu)) {
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden")
          } else {
            navMenuDiv.classList.add("hidden")
          }
        } else {
          navMenuDiv.classList.add("hidden")
        }
      }
    }
    function checkParent(t: { parentNode: any }, elm: HTMLElement) {
      while (t.parentNode) {
        if (t == elm) return true
        t = t.parentNode;
      }
      return false
    }
  }, [])

  return (
    <header id="header">
      <nav id="nav" className="sticky w-full top-2 bg-background">
        <div className="w-80 container mx-auto flex flex-wrap content-between justify-between mt-0 py-2 sm:w-3/4">   
          <div className="flex items-center">
            <h1>
              <a href="/"> 
                <div className="flex align-middle">
                  <img src="/svg/logo.svg" />
                </div>
              </a>
            </h1>
          </div>
          <div className="flex sm:hidden">
            <button id="nav-toggle" className="flex items-center p-1 text-baseRed-100">
              <FontAwesomeIcon icon={faBars} className="h-8" />
            </button>
          </div>
          <div className="sm:flex sm:items-center hidden" id="nav-content">
            <ul className="list-reset sm:flex justify-center flex-1 items-center ml-2">
              <li className="mr-6 hover:underline">
                <a className={`text-baseGreen-100 inline-block py-2 px-2 no-underline hover:text-baseRed-50 ${router.pathname === "#overview" || router.pathname === "/"  ? ' text-baseRed-100' : ''}`} href="#overview">Overview</a>
              </li>
              <li className="mr-6 hover:underline">
                <a className={`text-baseGreen-100 inline-block py-2 px-2 no-underline hover:text-baseRed-50 ${router.pathname === "#contagion" ? ' text-baseRed-100' : ''}`} href="#contagion">Contagion</a>
              </li>
              <li className="mr-6 hover:underline">
                <a className={`text-baseGreen-100 inline-block py-2 px-2 no-underline hover:text-baseRed-50 ${router.pathname === "#symptomps" ? ' text-baseRed-100' : ''}`} href="#symptomps">Symptomps</a>
              </li>
              <li className="mr-6 hover:underline">
                <a className={`text-baseGreen-100 inline-block py-2 px-2 no-underline hover:text-baseRed-50 ${router.pathname === "#prevention" ? ' text-baseRed-100' : ''}`} href="#prevention">Prevention</a>
              </li>
              <li>
                <a id="nav-contact" href="/#" className="inline-block border border-baseRed-50 text-baseRed-50 hover:bg-baseRed-100 hover:text-white rounded-full lg:mt-0 py-2 px-8">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
