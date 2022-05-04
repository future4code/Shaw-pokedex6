import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-flow:  wrap;
  
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  border: solid 1px black;
  align-items: center;
  margin: 10px;
  padding: 5px;
  background-color: azure;
  img {
    width: 120px;
  }
`;