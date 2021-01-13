import styled from "styled-components"
import * as color from "../Style/Colors"
const Champ = ({ type, placeholder, width }) => {
  return <CustomInput type={type} placeholder={placeholder} width={width} />
}

export default Champ

//styling
export const CustomInput = styled.input`
  background-color: ${color.lightgreen};
  color: ${color.darkgreen};
  font-size: 1.6rem;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 3rem;
  border-radius: 10rem;
  text-align: center;
  border: none;
`
