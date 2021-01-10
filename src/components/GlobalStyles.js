import { createGlobalStyle } from 'styled-components'

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
    ul {
    list-style: none;
  }
    img{
        display:block;
    }
`
export default GlobalStyles
