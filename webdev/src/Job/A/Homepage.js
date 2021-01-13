import GlobalStyle from "../Style/global"
import styled from "styled-components"
import TreeLogin from "../A/TreeLogin"
import TreePage from "../A/TreePage"
import ProjDetails from "./ProjDetails"
import * as color from "../Style/Colors"
const Homepage = () => {
  return (
    <div>
      <GlobalStyle />
      <HomePageContainer>
        <ProjDetails />
      </HomePageContainer>
    </div>
  )
}

export default Homepage

export const HomePageContainer = styled.div`
  background-color: ${color.darkgreen};
  display: flex;
  justify-content: center;
  height: 100vh;
`
