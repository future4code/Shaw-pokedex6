import styled from "styled-components";

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
    background-color:#fa695e;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
    h2{
        margin: 0;
    }
    .Imagens{
        display: flex;
        align-items: center;
        border: 15px inset grey;
        border-radius: 5px 5px 5px 40px;
        width: 300px;
        height: 150px;
        margin: 10px;
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
    .types{
        display: flex;
        p{
            margin: 10px 15px;
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