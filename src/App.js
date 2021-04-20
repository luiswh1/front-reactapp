import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/globals';

export default function App() {
    return(
        <React.Fragment>
            <GlobalStyle />
            <Routes />
        </React.Fragment>
    )
}