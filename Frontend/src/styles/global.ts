import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
      --white: #fff;
      --black: #201f1b;
      --light-black: #454545;
      --orange: #ff5e1e;
      --danger: #f32013;
    }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body{
      background: var(--black);
      -webkit-font-smoothing: antialised;
    }
    body, input, textarea, button{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
      font-weight: 700;
    }
    button{
      cursor: pointer;
    }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`
