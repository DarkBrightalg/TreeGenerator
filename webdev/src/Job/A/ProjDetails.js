import styled from "styled-components"
import { ReactComponent as Logo } from "../Assets/Logo.svg"
import * as color from "../Style/Colors"
const ProjDetails = () => {
  return (
    <ProjDetailsContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      <Title>Nom du projet</Title>
    </ProjDetailsContainer>
  )
}

const Title = styled.span`
  font-weight: 200;
  font-size: 2rem;
  color: ${color.lightblue};
  margin-left: 1rem;
  margin-top: 1rem;
`

export default ProjDetails
const LogoContainer = styled.div`
  width: 7rem;
`
const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`
const ProjDetailsContainer = styled.div`
  width: 35rem;
  background-color: ${color.darkgreen};
  color: ${color.lightgreen};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`
