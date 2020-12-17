import React, { useState, useEffect } from 'react'
import Carousel from './components/Carousel'

function chunk(array: [], size: number): any[] {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

const Report:React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
      .then(response => response.json())
      .then(data => {
        const chuckedData = chunk(data, 6)
        setData(chuckedData)
      });
  }, []);

  return (
    <section id="report" className="bg-gradient-to-t from-background -z-10">
      <div className="container flex justify-between mx-auto pb-14 sm:w-3/4">
        <div className="w-4/5 hidden mx-auto h-50 xl:w-4/6 xl:flex" />
        <div className="w-4/5 mx-auto text-center mx-auto p-8 shadow-lg sm:text-left xl:w-2/6">
          <Carousel data={data} />
        </div>
      </div>
    </section>
  )
}

export default Report
