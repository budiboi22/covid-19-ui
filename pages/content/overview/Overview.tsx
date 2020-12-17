import React from 'react'

const Overview:React.FC = () => {
  return (
    <section id="overview" className="relative w-full content-center items-center flex bg-gradient-to-b from-background sm:py-10">
      <div className="container mx-auto w-full sm:w-3/4">
        <img src="svg/overview.svg" className="sm:absolute sm:top-8 sm:right-0 sm:w-1/2" />
        <div className="m-auto w-1/2 text-center sm:text-left sm:mx-0 sm:mt-20 md:mt-14 lg:mt-24 xl:mt-40">
          <h2 className="text-baseRed-50 font-bold md:text-xl lg:text-2xl">COVID-19 Alert</h2>
          <h3 className="text-baseGreen-100 font-bold md:text-2xl xl:text-5xl xl:leading-tight">Stay at Home Quarantine To Stop Corona Virus</h3>
          <p className="text-baseGreen-125 text-xs pb-2 md:py-2 lg:text-base lg:py-4 xl:py-10">There is no specific medicine to prevent or treat Coronavirus disease (Covid-19), people may need supportive to care</p>
          <a id="btnHelp" href="/#" className="inline-block border border-baseRed-100 text-white bg-baseRed-100 hover:bg-white hover:text-baseRed-100 rounded-full py-2 px-8 xl:py-4 xl:px-14">Let Us Help</a> 
        </div>                                                    
      </div>
    </section>
  )
}

export default Overview