import { createGlobalStyle } from 'styled-components';
import imagem from './images/fundo.jpg'


export default createGlobalStyle `
    body {
        background-image: url(${imagem});
        font-family: 'Arial';
        color: #FFFFFF
    }
`