import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    //base font-size
$base-font-size: 1rem;
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Raleway', sans-serif;
  font-size: $base-font-size;
  @media (min-width: 1100px) {
    font-size: $base-font-size * 1.3;
  }
  @media (min-width: 1366px) {
    font-size: $base-font-size * 1.5;
  }
  @media (min-width: 2560px) {
    font-size: $base-font-size * 2;
  }
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
    //SMALL TABLETS

@media screen and (max-width: 620px) {
  body {
    font-size: $base-font-size * 1.1;
    } 
  }
`
export const GridForm = styled.form`
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 30px 10px;
  text-align: center;

  @media screen and (max-width: 620px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`
export const UserGrid = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  filter: drop-shadow(4px 3px 10px rgba(205, 205, 205, 0.38));
  padding: 15px 30px;
  grid-gap: 5px;
`
export const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
`
export const EditForm = styled(GridForm)`
  z-index: 80;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  padding: 40px 15px;

  label {
    color: #323232;
    grid-column: 1/3;
  }

  input {
    font-size: 1em;
    padding: 3px 5px;
    color: #707e93;
    border: solid 1px rgba(187, 187, 187, 0.8);
    border-radius: 3px;
  }
  button {
    background: #4b74ff;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 0;
    grid-row: 6/7;
    grid-column: 2/4;
  }
  i {
    position: absolute;
    color: black;
    top: 5px;
    right: 15px;
    font-size: 1.5em;
  }
`
export const CreateBtn = styled.button`
  background: #ea4c89;
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  color: white;
  font-weight: bold;
`
export default GlobalStyles
