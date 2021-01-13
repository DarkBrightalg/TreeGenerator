import styled from "styled-components"
import * as color from "../Style/Colors"
import { ReactComponent as Logo } from "../Assets/Logo.svg"
import Champ from "../C/Champ"
import Bouton from "../C/Bouton"
import ProjListItem from "../C/ProjListItem"
const TreePage = () => {
  return (
    <TreeContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      <Title>Nouveau projet</Title>
      <FormContainer>
        <Champ type="text" placeholder="nom du nouveau projet" />
      </FormContainer>
      <Bouton>Crée</Bouton>
      <Title>Liste des projets</Title>
      <ProjListItem>New think</ProjListItem>
    </TreeContainer>
  )
}
export default TreePage

//styling

const FormContainer = styled.div`
  margin-bottom: 1rem;
`
const Title = styled.span`
  font-weight: 200;
  font-size: 2rem;
  color: ${color.lightblue};
  margin-left: 1rem;
  margin-top: 1rem;
`

export const LogoContainer = styled.div`
  width: 7rem;
`
export const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
export const TreeContainer = styled.div`
  width: 35rem;
  background-color: ${color.darkgreen};
  color: ${color.lightgreen};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`
