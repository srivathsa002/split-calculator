import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/organisms/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';

const App = () => {

    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <Header />
                <Outlet />
            </ThemeProvider>
        </div>
    );
}

export default App;
