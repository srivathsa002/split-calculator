import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';
import {theme} from "./utils/theme";
// import MainTemplate from './components/templates/MainTemplate';
import Structure from './components/templates/Structure';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container disableGutters={true} maxWidth={false}>
        <Structure />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
