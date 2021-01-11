import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        
    }
    body{
        font-family:"Montserrat",sans-serif;
        width:100%;
        background:#F3F8FB;
    }
    h2{
        font-size:2rem;
        text-align:center;
        font-weight:lighter;
    }
    h3{
        font-size:1.3rem;
    }
    h4{
        color:#323232;
        font-weight:200;
    }
    p{
        font-size:0.9rem;
        color:#707E93;
        font-weight:lighter;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    button{
        cursor: pointer;
    }
    i{
        cursor: pointer;
        font-size: 0.8em;
        border-radius: 50%;
        color:white;
        text-align: center;
        padding: 5px;

    }
    ul {
    list-style: none;
  }
    img{
        display:block;
    }

`
export const GridForm = styled.form`
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 30px 10px;
  text-align: center;
`
export const UserGrid = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  filter: drop-shadow(4px 3px 10px rgba(205, 205, 205, 0.38));
  padding: 15px 30px;
  grid-gap: 5px;
`

export default GlobalStyles
