import styled from "styled-components"
import * as color from "../Style/Colors"

export default function Bouton({ children }) {
  return <CustomBouton>{children}</CustomBouton>
}

//styling
export const CustomBouton = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.lightblue};
  background-color: ${color.gold};
  border-radius: 10rem;
  cursor: pointer;
`
