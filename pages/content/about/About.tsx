import React from 'react'

const About:React.FC = () => {
  return (
    <section id="about" className="relative w-full py-4 sm:py-10 lg:py-0">
      <div className="container mx-auto w-full content-center items-center flex sm:w-3/4">
        <div className="w-full hidden mx-auto sm:mr-10 sm:flex">
          <img src="/svg/about.svg" />
        </div>
        <div className="w-3/4 text-center mx-auto sm:ml-10 sm:text-left">
          <img src="/svg/about.svg" className="sm:hidden" />
          <h2 className="text-baseRed-50 z-40 font-bold md:text-xl lg:text-2xl">What is Covid-19</h2>
          <h3 className="text-baseGreen-100 font-bold md:text-2xl xl:text-5xl xl:leading-tight">Corona Virus</h3>
          <p className="text-baseGreen-125 text-xs pb-2 md:py-2 lg:text-base lg:py-4 xl:py-10">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</p>
          <a id="btnLearnMore" href="/#" className="inline-block border border-baseRed-25 text-baseRed-100 bg-baseRed-25 hover:bg-white hover:text-baseRed-100 rounded-full py-2 px-8 xl:py-4 xl:px-16">Learn More</a> 
        </div>
        <img src="svg/bg-about.svg" className="hidden absolute bottom-0 right-0 sm:block h-1/2" />
      </div>
    </section>
  )
}

export default About
