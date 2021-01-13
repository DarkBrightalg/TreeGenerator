import styled from "styled-components"
import * as color from "../Style/Colors"
const ProjListItem = ({ children }) => {
  return (
    <ProjListItemContainer>
      <Puce />
      <Title>{children}</Title>
    </ProjListItemContainer>
  )
}

export default ProjListItem

//styled
const Title = styled.span`
  font-size: 1.7rem;
  color: ${color.lightblue};
  font-weight: 200;
`
const Puce = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${color.gold};
  border-radius: 10rem;
  margin-right: 2rem;
  margin-left: 2rem;
`
const ProjListItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
