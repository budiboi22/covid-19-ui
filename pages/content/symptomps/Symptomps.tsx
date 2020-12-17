import React from 'react'

const Symptomps:React.FC = () => {
  return (
    <section id="symptomps">
      <div className="container text-center content-center mx-auto my-8 w-full sm:my-14 sm:w-3/4 lg:my-20">
        <div className="w-full">
          <h2 className="text-baseRed-50 font-bold md:text-xl lg:text-2xl">Covid-19</h2>
          <h3 className="text-baseGreen-100 font-bold md:text-2xl xl:text-5xl xl:leading-tight">Symptomps</h3>
          <p className="text-baseGreen-125 text-xs w-1/2 mx-auto md:pt-2 lg:text-base lg:pt-4 xl:pt-10">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory</p>  
        </div>
        <div className="w-11/12 sm:w-3/5 mx-auto">
          <img src="svg/symptomps.svg" />
        </div>
      </div>
    </section>
  )
}

export default Symptomps
