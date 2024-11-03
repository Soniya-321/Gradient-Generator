import {Component} from 'react'
import {
  Maincontainer,
  MainHeading,
  DirectionPara,
  UlContainer,
  FormContainer,
  ColorContainer,
  ColorPara,
  InputContainer,
  Input,
  Button,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirectionId: gradientDirectionsList[0].value,
    backgroundGradient: `linear-gradient(to ${gradientDirectionsList[0].value}, #8ae323, #014f7b)`,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {color1, color2, activeDirectionId} = this.state

    this.setState({
      backgroundGradient: `linear-gradient(to ${activeDirectionId}, ${color1}, ${color2})`,
    })
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  changeGradient = value => {
    const {backgroundGradient, activeDirectionId, color1, color2} = this.state
    this.setState({
      activeDirectionId: value,
      backgroundGradient: `linear-gradient(to ${activeDirectionId}, ${color1}, ${color2})`,
    })
  }
  render() {
    const {color1, color2, activeDirectionId, backgroundGradient} = this.state
    console.log(activeDirectionId, backgroundGradient)
    return (
      <Maincontainer
        background={backgroundGradient}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <DirectionPara>Choose Direction</DirectionPara>
        <UlContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              gradientList={each}
              changeGradient={this.changeGradient}
              isActive={each.value === activeDirectionId}
            />
          ))}
        </UlContainer>
        <DirectionPara>Pick the Colors</DirectionPara>
        <FormContainer onSubmit={this.onSubmitForm}>
          <ColorContainer>
            <InputContainer>
              <ColorPara>{color1}</ColorPara>
              <Input
                type="color"
                value={color1}
                onChange={this.onChangeColor1}
                bgColor={color1}
                placeholder=""
              />
            </InputContainer>
            <InputContainer>
              <ColorPara>{color2}</ColorPara>
              <Input
                type="color"
                value={color2}
                onChange={this.onChangeColor2}
                bgColor={color2}
                placeholder=""
              />
            </InputContainer>
          </ColorContainer>
          <Button type="submit">Generate</Button>
        </FormContainer>
      </Maincontainer>
    )
  }
}

export default GradientGenerator
