// Write your code
import {Component} from 'react'
import {LiItem, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientList, changeGradient, isActive} = props
  const {value, displayText} = gradientList

  const onClickLiItem = () => {
    changeGradient(value)
  }

  return (
    <LiItem>
      <DirectionBtn isActive={isActive} onClick={onClickLiItem}>
        {displayText}
      </DirectionBtn>
    </LiItem>
  )
}

export default GradientDirectionItem
