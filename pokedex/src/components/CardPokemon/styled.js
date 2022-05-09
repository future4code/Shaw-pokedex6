import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-flow:  wrap;
  font-family: 'Orbitron', sans-serif;
`;

const colorType = color => {
  switch (color) {
    case "fire":
      return "#f8a753";
    case "grass":
      return "#9bcc50";
    case "water":
      return "#4592c4";
    case "normal":
      return "#a4acaf";
    case "bug":
      return "#729f3f";
    case "poison":
      return "#b97fc9";
    default:
      return "azure";
  }
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  height: 320px;
  border-radius: 10px;
  align-items: center;
  margin: 10px;
  padding: 5px;
  background-color: ${({ color }) => colorType(color)};
  color: whitesmoke;
  transition: 0.3s;
  button{
    border: none;
    border-radius: 10px;
    padding: 10px 7px;
    margin: 2px;
    font-family: 'Orbitron', sans-serif;
    font-size: 12px;
    color: #eeeeee;
    background-color: rgba(0,0,0,0.2);
  }
  .imagen{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 180px;
    background-color: #eeeeee;
    border-radius: 15px;
    img {
      transition: 0.3s;
      width: 140px;
      height: 140px;
    }
  }
  .number{
    margin-top: 0;
    margin-bottom: 0px;
    margin-right: 5px;
    align-self: flex-end;
    font-size: 18px ;
    font-weight: bold;
  }
  :hover{
    transition: 0.3s;
    transform: scale(1.05);
    img {
      transition: 0.3s;
      width: 170px;
      height: 170px;
    }
  }
`;