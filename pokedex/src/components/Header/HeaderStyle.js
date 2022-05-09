import styled from "styled-components";
import dexClose from '../../assets/img/dexClose.png'
import dexOpen from '../../assets/img/dexOpen.png'

export const Container = styled.div`
   display: flex;
   height: 15vh;
   align-items: center;
   background-image: linear-gradient(rgb(48, 167, 215), transparent);
   .logo{
      position: absolute;
      left: 40%; 
      width: 280px ;
   }
   div{
   display: flex;
   align-items: center;
   }
`
export const ButtonHome = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: end;
   height: 11vh;
   width: 100px;
   cursor: pointer;
   margin-left: 25px;
   background-image: url(${dexClose});
   background-size: 80px 75px;
   background-repeat: no-repeat;
   background-position: 70% 15%;
   img{
      width: 80px;
   }
   button{
      border: none;
      background-color: inherit;
      font-family: 'Orbitron', sans-serif;
      font-weight: bold;
      font-size: 18px;
   }
   :hover{
      background-image: url(${dexOpen});
      background-size: 80px 75px;
      background-repeat: no-repeat;
      background-position: 70% 15% ;
   }
`
export const ButtonDex = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: 15vh;
   width: 150px;
   margin-left: 25px;
   cursor: pointer;
   button{
      border: none;
      background-color: inherit;
      font-family: 'Orbitron', sans-serif;
      font-weight: bold;
      font-size: 18px;
   }
   img{
      width: 90px;
   }
`