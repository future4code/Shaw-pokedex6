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
      width: 250px ;
      @media screen and (min-device-width:320px) and (max-device-width:425px){
         left: 30%; 
         width: 200px ;
      }
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
   height: 10vh;
   width: 100px;
   cursor: pointer;
   margin-left: 20px;
   background-image: url(${dexClose});
   background-size: 75px 70px;
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
      font-size: 1rem;
   }
   :hover{
      background-image: url(${dexOpen});
      background-size: 80px 75px;
      background-repeat: no-repeat;
      background-position: 70% 15% ;
   }
   @media screen and (min-device-width:320px) and (max-device-width:425px){
      margin-left: 0px;
      background-size: 60px 55px;
      background-position: 60% 15%;
      button{
         font-size: 0.9rem;
      }
      :hover{
         background-size: 60px 55px;
         background-position: 60% 15%;
      }
   }
`
export const ButtonDex = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: 10vh;
   width: 150px;
   margin-left: 20px;
   cursor: pointer;
   button{
      border: none;
      background-color: inherit;
      font-family: 'Orbitron', sans-serif;
      font-weight: bold;
      font-size: 1rem;
   }
   img{
      width: 80px;
   }
   @media screen and (min-device-width:320px) and (max-device-width:425px){
      width: 100px;
      margin-left: 0px;
      button{
         font-size: 0.8rem;
      }
      img{
         width: 60px;
      }
   }
`