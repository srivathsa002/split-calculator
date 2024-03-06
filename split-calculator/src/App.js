import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/organisms/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/theme';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const App = () => {

    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();


    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect])

    if(isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated &&
            <div className="app">
                <ThemeProvider theme={theme}>
                    <Header />
                    <Outlet />
                </ThemeProvider>
            </div>
    );
}

export default App;
