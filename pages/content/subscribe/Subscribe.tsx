import React from 'react'

const Subscribe:React.FC = () => {
  return (
    <section id="subscribe" className="relative w-full bg-background py-4 sm:py-10 lg:py-0">
    <div className="container mx-auto w-full content-center items-center flex sm:w-3/4">
      <div className="w-full text-center">
        <h4 className="text-baseGreen-75 font-bold md:text-2xl xl:text-5xl xl:leading-tight">Have Question in Mind?</h4>
        <h5 className="text-baseGreen-75 font-bold md:text-2xl xl:text-5xl xl:leading-tight">Let Us Help You</h5>
        <div className="flex justify-between bg-white rounded-full border border-gray-100 w-4/5 sm:w-3/5 mx-auto p-2 mt-8"> 
          <input type="text" className="w-full ml-4 text-baseGreen-25 focus:outline-none" placeholder="snmonydemo@gmail.com" />
          <button className="border rounded-full py-1 px-5 bg-baseRed-75 text-white text-base hover:opacity-70 sm:py-2 sm:px-8">Send</button>
        </div>
      </div>
      <img src="svg/bg-footer.svg" className="-z-10 absolute bottom-0 right-0 h-full sm:z-auto" />
    </div>
  </section>
  )
}

export default Subscribe
