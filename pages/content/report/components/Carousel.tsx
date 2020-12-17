import React from "react"
import Slider from "react-slick"
import ClipLoader from "react-spinners/ClipLoader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function formatNumber(num:number): string {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Carousel:React.FC<any> = ({ data }) => {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      swipeToSlide: true
    };

    return (
      <div>
        <h5 className="text-baseGreen-100 font-bold md:text-xl xl:text-3xl mb-4">Live Reports</h5>
        <Slider {...settings}>
          {data?.length === 0 && <ClipLoader />}
          {data?.length > 0 && data.map((row: any) => (
            <div>
              {row.map((item: any) => (
                <div className="container flex justify-between mb-1">
                  <div className="flex content-center my-auto">
                    <div className="w-10">
                      <img src={item.countryInfo.flag} className="h-4"/>
                    </div>
                    <h6 className="text-baseGreen-100 text-left font-bold text-xs sm:text-sm xl:text-base">{item.country}</h6>
                  </div>
                  <div className="flex content-center my-auto">
                    <span className="text-baseGreen-100 text-right text-xs font-bold mr-2 sm:text-sm xl:text-base">{formatNumber(item.active)}</span>
                    <FontAwesomeIcon icon={item.active < 1000 ? faCaretDown : faCaretUp} className={`h-4 ${item.active < 1000 ? 'text-green-500' : 'text-baseRed-100'} sm:h-4 xl:h-8 `} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  export default Carousel