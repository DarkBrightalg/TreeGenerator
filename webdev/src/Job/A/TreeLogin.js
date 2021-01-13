import styled from "styled-components"
import * as color from "../Style/Colors"
import { ReactComponent as Logo } from "../Assets/Logo.svg"
import Champ from "../C/Champ"
import Bouton from "../C/Bouton"

const TreeLogin = () => {
  return (
    <LoginContainer>
      <Header>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      <FormContainer>
        <Champ type="email" placeholder="email" />
        <Champ type="password" placeholder="password" />
        <BoutonContainer>
          <Bouton>log in</Bouton>
        </BoutonContainer>
      </FormContainer>
    </LoginContainer>
  )
}
export default TreeLogin

//styling

const BoutonContainer = styled.div`
  margin-top: 4rem;
`
const FormContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  width: 7rem;
`
const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`
const LoginContainer = styled.div`
  width: 35rem;
  background-color: ${color.darkgreen};
  color: ${color.lightgreen};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`
