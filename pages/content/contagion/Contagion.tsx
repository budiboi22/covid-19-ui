import React from 'react'

const Contagion:React.FC = () => {
  return (
    <section id="contagion">
      <div className="container static text-center content-center mx-auto w-full my-8 sm:w-3/4 sm:my-0">
        <div className="w-full">
          <h2 className="text-baseRed-50 font-bold md:text-xl lg:text-2xl">Covid-19</h2>
          <h3 className="text-baseGreen-100 font-bold md:text-2xl xl:text-5xl xl:leading-tight">Contagion</h3>
          <p className="text-baseGreen-125 text-xs pb-2 w-1/2 mx-auto md:py-2 lg:text-base lg:py-4 xl:py-10">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</p>  
        </div>
        {/* <img src="svg/bg-contagion.svg" className="absolute -z-10" /> */}
        <div className="sm:flex sm:space-x-4 sm:mt-4">
          <div className="cursor-pointer mx-auto w-4/5 shadow-lg p-8 my-2 sm:w-1/3 sm:my-0">
            <img src="/svg/air-transmision.svg" className="h-2/5 mx-auto mb-4 lg:h-3/5" />
            <h4 className="text-baseGreen-100 font-bold text-sm lg:text-xl lg:py-2">Air Transmission</h4>
            <p className="text-baseGreen-125 text-xs lg:text-sm">Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify</p>
          </div>
          <div className="cursor-pointer mx-auto w-4/5 shadow-lg p-8 my-2 sm:w-1/3 sm:my-0">
            <img src="/svg/human-contact.svg" className="h-2/5 mx-auto mb-4 lg:h-3/5" />
            <h4 className="text-baseGreen-100 font-bold text-sm lg:text-xl lg:py-2">Human Contacts</h4>
            <p className="text-baseGreen-125 text-xs lg:text-sm">Washing your hands is one of thesimplest ways you can protect</p>
          </div>
          <div className="cursor-pointer mx-auto w-4/5 shadow-lg p-8 my-2 sm:w-1/3 sm:my-0">
            <img src="/svg/contain-object.svg" className="h-2/5 mx-auto mb-4 lg:h-3/5"/>
            <h4 className="text-baseGreen-100 font-bold text-sm lg:text-xl lg:py-2">Containted Objects</h4>
            <p className="text-baseGreen-125 text-xs lg:text-sm">Use the tissue while sneezing,In this way, you can protect your droplets.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contagion
