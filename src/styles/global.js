import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {

  --color-primary: #27AE60;
  --color-primary-2: #93D7AF;
  --color-primary-3: #27AE6010;
  --color-secondary: #EB5757;
 
  --grey-100: #333333;
  --grey-50: #828282;
  --grey-20: #E0E0E0;
  --grey-10: #999999;
  --grey-0: #F5F5F5;

  --color-negative: #E60000;
  --color-warning: #FFCD07;
  --color-positive: #168821;
  --color-info: #155BCB;

  
  --font-size-1: 1.5rem; //26px
  --font-size-2: 1.3rem; //22px
  --font-size-3: 1.1rem; //18px
  --font-size-4: 1rem; //16px
  --font-size-5: 0.8rem; //14px
  --font-size-6: 0.7rem; // 12px

  --border-radius: 8px;
  --border-radius-2: 5px;

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 400;
}

main {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;

    @media (max-width: 560px) {
     flex-direction: column;
     align-items: center;
     justify-content: center;
    }
}

    body{
    font-family: 'Inter', sans-serif;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Inter', sans-serif;
    }

    @media (max-width: 680px) {
    .div-logo {
      display: none;
    }
  }

`;
