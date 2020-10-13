import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:70px;
    background: #F0EEA5;
    border-bottom:5px solid #53934d;    
    display: flex;
    position: fixed-top;
`

export const LeftSide = styled.div`
    width:50%;
    height:70px;

    display:flex;
    align-items: center;
    padding-left:1%;
    img {
        width:25%;
    }
`

export const RightSide = styled.div`
    width:50%;
    height:70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right:30px;
    

    a {
        color: #53934d;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #000;
        }
    }   

    #notification {
        
        background: none;
        border: none;
        cursor:pointer;
        
        img {
            width:20%;
        }

        span {
            background: #FFF;
            color: #EE6B26;
            padding: 3px 7px;
            border-radius:50%;
            position: relative;
            top: -15px;
            right: 10px;
        }

        &:hover {
            opacity: 0.5;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 5%;
        color: #FFF;
    }

    button {
        font-size: 16px;
        color: #53934d;    
    }
   
`