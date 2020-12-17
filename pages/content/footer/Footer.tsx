import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faVimeoV, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer:React.FC = () => {
  return (
    <footer className="bg-background">
      <div className="w-3/4 container mx-auto flex flex-wrap content-center	justify-between py-2 lg:py-8">
        <div className="mx-auto lg:mx-0 lg:my-auto">
          <img src="/svg/logo.svg" />
        </div>
        <div className="mx-auto w-full text-center lg:mx-0 lg:my-auto lg:w-max">
          <ul className="grid grid-flow-row auto-rows-max mx-auto md:inline-grid md:grid-flow-col md:auto-cols-max md:gap-x-8">
            <li className="text-baseGreen-100 hover:text-baseRed-50">
              <a href="#">Overview</a>
            </li>
            <li className="text-baseGreen-100 hover:text-baseRed-50">
              <a href="#">Symptomps</a>
            </li>
            <li className="text-baseGreen-100 hover:text-baseRed-50">
              <a href="#">Prevention</a>
            </li>
            <li className="text-baseGreen-100 hover:text-baseRed-50">
              <a href="#">Treatment</a>
            </li>
          </ul>  
        </div>
        <div className="mx-auto mt-4 lg:mx-0 lg:my-auto">
          <ul className="inline-grid grid-cols-4 gap-x-8">
            <li>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-baseGreen-100 h-5" /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-redYoutube h-5" /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faVimeoV} className="text-baseGreen-100 h-5" /></a>
            </li>
            <li>  
              <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-baseGreen-100 h-5" /></a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-baseGreen-50 text-sm pb-2">2020 &copy; All right reserved by pixelspark.co</p>
    </footer>
  )
}

export default Footer
