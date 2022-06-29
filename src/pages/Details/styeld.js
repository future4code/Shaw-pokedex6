import styled from "styled-components";

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
      case "flying":
        return "linear-gradient(rgb(48, 167, 215), lightgrey)";
      default:
        return "azure";
    }
  };

export const MainContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
`
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#fc584c;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
    font-family: 'Orbitron', sans-serif;
    h2{
        margin: 0 15px;
        margin-top: 20px;
        margin-bottom: 10px;
        align-self: flex-start;
    }
    h3{
        align-self: flex-start;
        margin: 0px 15px;
        margin-bottom: 10px;
    }
    p{
        align-self: flex-start;
        margin: 5px 15px;
    }
    .Spheres{
        align-self: start;
        height: 50px;
    }
    .Sphere{
        width: 50px;
        height: 50px;
        background-image: radial-gradient(closest-side at 35% 35%,lightblue, blue);
        border-radius: 30px;
        border: 5px solid lightgray;
        align-self: start;
        position: relative;
        right: 10px; 
    }
    .Sphere1{
        width: 20px;
        height: 20px;
        background-image: radial-gradient(closest-side at 35% 35%, #ffa9a9, red);
        border-radius: 30px;
        border: 1px solid black;
        align-self: start;
        position: relative;
        bottom: 60px;
        left: 70px; 
        margin: 0;
    }
    .Sphere2{
        width: 20px;
        height: 20px;
        background-image: radial-gradient(closest-side at 35% 35%, #fff2cc, yellow);
        border-radius: 30px;
        border: 1px solid black;
        align-self: start;
        position: relative;
        bottom: 82px;
        left: 100px;
        margin: 0;
    }
    .Sphere3{
        width: 20px;
        height: 20px;
        background-image: radial-gradient(closest-side at 35% 35%, #d9ead3, green);
        border-radius: 30px;
        border: 1px solid black;
        align-self: start;
        position: relative;
        bottom: 104px;
        left: 130px;
        margin: 0;
    }
    .out{
        width: 30px;
        height: 30px;
        position: relative;
        bottom: 55px;
        align-self: flex-end;
        border-radius: 35px;
        border: 1px solid black;
        padding: 5px 10px;
        margin-bottom: 5px;
        font-weight: bold;
        background-image: radial-gradient(closest-side at 50% 35%, red 90%, white);
    }
    .types{
        display: flex;
        align-items: center ;
        align-self: flex-start;
        margin: 0px 10px;
        margin-bottom: 5px;
        margin-top: 15px;
        h2{
        margin: 0;
        align-self: center;
        }
    }
    .add-remove{
        margin: 5px 5px;
        margin-top: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        font-family: 'Orbitron', sans-serif;
        font-weight: bold;
        color: white;
        background-color:#131313;
    }
    @media screen and (min-device-width:320px) and (max-device-width:425px){
        width: 80%;
        .types{
            width: 85%;
            h2{
                font-size: 1.2rem;
            }
        }
    }
`
export const Type = styled.p`
    margin: 5px 5px;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    background: ${({ color }) => colorType(color)};
`
export const Display = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 15px inset grey;
    border-radius: 5px 5px 5px 40px;
    .Imagens{
        display: flex;
        align-items: center;
        width: 300px;
        height: 150px;
        background-color: lightgrey;
        .img1{
            margin: 25px 5px 0 25px;
            width: 100px;
        }
        .img2{
            margin: 0px 5px 25px 60px;
            width: 80px;
        }
    }
    .NameNumber{
        display: flex;
        justify-content: center;
        background-color: #999999;
        width: 100%;
        border-radius: 0px 0px 0px 23px;
        p{
            margin: 5px 10px;
        }
    }
    @media screen and (min-device-width:320px) and (max-device-width:425px){
        width: 80%;
        .Imagens{
            width: 100%;
            .img1{
                margin: 25px 5px 0 5%;
                width: 40%;
            }
            .img2{
                margin: 0px 5px 25px 20%;
                width: 30%;
            }
        }
    }
`

export const StatusContainer = styled.div`
    width: 320px;
    display: flex;
    justify-content: start;
    background-color: lightblue;
    border-radius: 15px;
    margin: 5px 0; 
    @media screen and (min-device-width:320px) and (max-device-width:425px){
        width: 95%;
    }
`
export const StatusBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px; 
    margin-right: 10px;
    p{
        margin: 5px 5px; 
    }
    @media screen and (min-device-width:320px) and (max-device-width:425px){
        margin: 0 5px;
        margin-right: 3%;
        p{
            font-size: 0.8rem;
        }
    }
`