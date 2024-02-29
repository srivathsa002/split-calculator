import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const theme = createTheme({
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        primary: {
            main: "#1AE5D1"
        },
        secondary: {
            main: "#F0F5F5"
        },
        error: {
            main: "#D32F2F"
        },
        warning: {
            main: "#ED6C02"
        },
        info: {
            main: "#0288D1"
        },
        success: {
            main: "#2E7D32"
        },
        grey: {
            ...defaultTheme.palette.grey,
        },
        contrastThreshold: 3,
        // getContrastText: f L(),
        // augumentColor: f R(),
        tonalOffset: 0.2,
        // divider: rgba(0, 0, 0, 0.12),
        background: {
            paper: "#FFF",
            default: "#FFF"
        },
        text: {
            primary: "#121717",
            secondary: "#638785",
            disabled: "rgba(0, 0, 0, 0.38)",
        }
    },
});

