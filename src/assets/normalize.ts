import { createGlobalStyle } from 'styled-components';
import MobileDetect from 'mobile-detect';
import { COLORS } from '@holism/core';

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = !!md.mobile();

export const GlobalStyle = createGlobalStyle`
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
                                                              
    html, body {
      height: 100%;
      box-sizing: border-box;
      ${
        isMobile
          ? `
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;`
          : ''
      }
    }     
    
    body {   
      margin: 0;
      padding: 0;
      height: 100%;           
      color: ${COLORS.night};      
      background-color: #FFFFFF;
      font-family: Regular, sans-serif !important;        
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;   
    }
  
    #root {
      min-height: 100%;
      height: 100%;
      overflow-x: hidden;         
    }     
    
    #ModalContainer {
      position: absolute;
      z-index: 100;
    }   
    
    h1, h2, h3, h4, h5, h6 {
      font-family: Bold, sans-serif;
      margin: 0;
    } 
    
    
    h1 {
      font-size: 1.75rem;
    }
    
    h2 {
      font-size: 1.375rem;
    }
    
    h3 {
      font-size: 1.125rem;
    }
    
    h4 {
      font-size: 1rem;
    }
    
    h5 {
      font-size: 0.875rem;
    }
    
    h6 {
      font-size: 0.725rem;
    }  
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
        
    .hidden {
        display: none;
    }        
    
    a {
      color: ${COLORS.blueDark};
      cursor: pointer;
      text-decoration: none;
    }  

    p {
     color: ${COLORS.greyMouse};
     font-size: 1.125rem;
     margin: 0;
     padding: 0;
    }  
    
    .form {
        width: 20rem;
    }
    
    pre {
      margin: 0;
      padding: 0;
    }                                   
`;
