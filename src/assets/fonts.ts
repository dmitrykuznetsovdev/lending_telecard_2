import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Bold';
    src: url('./fonts/ProximaNovaBold.ttf') format('opentype');
}

@font-face {
    font-family: 'Regular';
    src: url('./fonts/ProximaNova.ttf') format('opentype');
}

@font-face {
    font-family: 'GilroyHeavy';
    src: url('./fonts/GilroyHeavy.otf') format('opentype');
}

@font-face {
    font-family: 'GilroySemiBold';
    src: url('./fonts/GilroySemiBold.otf') format('opentype');
}

@font-face {
    font-family: 'GilroyBold';
    src: url('./fonts/GilroyBold.otf') format('opentype');
}

@font-face {
    font-family: 'GilroyRegular';
    src: url('./fonts/GilroyRegular.otf') format('opentype');
}

@font-face {
    font-family: 'GilroyMedium';
    src: url('./fonts/GilroyMedium.otf') format('opentype');
}
`;
