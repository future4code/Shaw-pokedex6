import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: aliceblue;
`
export const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color:#fa695e;
border-radius: 5px;
padding: 20px;
.Imagens{
    display: flex;
    align-items: center;
    border: 15px inset grey;
    border-radius: 5px 5px 5px 40px;
    width: 300px;
    height: 150px;
    margin: 10px;
    background-color: lightgrey;
    img{
        margin: auto;
        width: 100px;
    }
}
`
export const StatusContainer = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-around;
`
export const StatusBox = styled.div`
    display: flex;
    flex-direction: column;
`