import * as React from 'react'
import SliderControl from './SliderControl'
import SliderItem from './SliderItem'

const Slider = ({ content }) => {
  const [sliderHasMoved, setSliderHasMoved] = React.useState(false) // boolean tracking if slider has moved from its initial position
  const [sliderMoveDirection, setSliderMoveDirection] = React.useState(null) // direction of movement of slider
  const [sliderMoving, setSliderMoving] = React.useState(false) // boolean for animation of slider
  const [movePercentage, setMovePercentage] = React.useState(0) // amount to offset slider
  const [lowestVisibleIndex, setLowestVisibleIndex] = React.useState(0) // lowest visible index of slider items
  const [itemsInRow, setItemsInARow] = React.useState(5) // number of items to be displayed across screen
  const totalItems = content.length

  // handle window resize and sets items in row
  const handleWindowResize = (e) => {
    if (window.innerWidth > 1440) {
      setItemsInARow(6)
    } else if (window.innerWidth >= 1000) {
      setItemsInARow(5)
    } else if (window.innerWidth < 1000) {
      setItemsInARow(4)
    }
  }

  React.useEffect(() => {
    handleWindowResize(window)
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  // render the slider contents
  const renderSliderContent = () => {
    // slider content made up of left, mid, and right portions to allow continous cycling
    const left = []
    const mid = []
    const right = []
    // gets the indexes to be displayed
    for (let i = 0; i < itemsInRow; i++) {
      // left
      if (sliderHasMoved) {
        if (lowestVisibleIndex + i - itemsInRow < 0) {
          left.push(totalItems - itemsInRow + lowestVisibleIndex + i)
        } else {
          left.push(i + lowestVisibleIndex - itemsInRow)
        }
      }

      // mid
      if (i + lowestVisibleIndex >= totalItems) {
        mid.push(i + lowestVisibleIndex - totalItems)
      } else {
        mid.push(i + lowestVisibleIndex)
      }

      // right
      if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
        right.push(i + lowestVisibleIndex + itemsInRow - totalItems)
      } else {
        right.push(i + lowestVisibleIndex + itemsInRow)
      }
    }
    // combine left, mid, right to have all indexes
    const combinedIndex = [...left, ...mid, ...right]
    console.log('combined index', combinedIndex)

    // add on leading and trailing indexes for peek image when sliding
    if (sliderHasMoved) {
      const trailingIndex =
        combinedIndex[combinedIndex.length - 1] === totalItems - 1 ? 0 : combinedIndex[combinedIndex.length - 1] + 1

      combinedIndex.push(trailingIndex)
    }

    const leadingIndex = combinedIndex[0] === 0 ? totalItems - 1 : combinedIndex[0] - 1
    combinedIndex.unshift(leadingIndex)

    const sliderContents = []
    for (let index of combinedIndex) {
      sliderContents.push(
        <SliderItem content={content[index]} key={`${content[index].id}-${index}`} width={100 / itemsInRow} />,
      )
    }

    // adds empty divs to take up appropriate spacing when slider at initial position
    if (!sliderHasMoved) {
      for (let i = 0; i < itemsInRow; i++) {
        sliderContents.unshift(<div className="slider-item" style={{ width: `${100 / itemsInRow}%` }} key={i} />)
      }
    }

    return sliderContents
  }

  // handle previous control
  const handlePrev = () => {
    // get the new lowest visible index
    let newIndex
    if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
      newIndex = 0
    } else if (lowestVisibleIndex - itemsInRow < 0) {
      newIndex = totalItems - itemsInRow
    } else {
      newIndex = lowestVisibleIndex - itemsInRow
    }

    // get the move percentage
    let newMovePercentage
    if (lowestVisibleIndex === 0) {
      newMovePercentage = 0
    } else if (lowestVisibleIndex - newIndex < itemsInRow) {
      newMovePercentage = ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100
    } else {
      newMovePercentage = 0
    }

    setSliderMoving(true)
    setSliderMoveDirection('left')
    setMovePercentage(newMovePercentage)

    setTimeout(() => {
      setLowestVisibleIndex(newIndex)
      setSliderMoving(false)
      setSliderMoveDirection(null)
      setMovePercentage(0)
    }, 750)
  }

  // handle previous control
  const handleNext = () => {
    // get the new lowest visible index
    let newIndex
    if (lowestVisibleIndex === totalItems - itemsInRow) {
      newIndex = 0
    } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
      newIndex = totalItems - itemsInRow
    } else {
      newIndex = lowestVisibleIndex + itemsInRow
    }

    // get the move percentage
    let newMovePercentage
    if (newIndex !== 0) {
      newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100
    } else {
      newMovePercentage = 100
    }

    setSliderMoving(true)
    setSliderMoveDirection('right')
    setMovePercentage(newMovePercentage)

    setTimeout(() => {
      setLowestVisibleIndex(newIndex)
      setSliderMoving(false)
      setSliderMoveDirection(null)
      setMovePercentage(0)
    }, 750)

    if (!sliderHasMoved) {
      setSliderHasMoved(true)
    }
  }

  if (!content.length) {
    return null
  }

  // style object to determine movement of slider
  let style = {}
  if (sliderMoving) {
    let translate = ''
    if (sliderMoveDirection === 'right') {
      translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`
    } else if (sliderMoveDirection === 'left') {
      translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`
    }

    style = {
      transform: translate,
      transitionDuration: '750ms',
    }
  } else {
    style = {
      transform: `translateX(-${100 + (sliderHasMoved ? 100 / itemsInRow : 0)}%)`,
    }
  }

  return (
    <div className="slider">
      {sliderHasMoved && <SliderControl arrowDirection={'left'} onClick={handlePrev} />}
      <div className="slider-content" style={style}>
        {renderSliderContent()}
      </div>

      <SliderControl arrowDirection={'right'} onClick={handleNext} />
    </div>
  )
}

export default Slider
