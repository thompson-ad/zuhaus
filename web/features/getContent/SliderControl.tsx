import * as React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

const SliderControl = ({ arrowDirection, onClick }) => {
  return (
    <div className={`slider-control ${arrowDirection}`}>
      <div className="slider-control-arrow" onClick={onClick}>
        {arrowDirection === 'right' ? <BsChevronRight /> : <BsChevronLeft />}
      </div>
    </div>
  )
}

export default SliderControl
