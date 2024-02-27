import React from "react";
import AppBar from '@mui/material/AppBar';
import { Grid, Typography } from "@mui/material";

const Header = (props) => {

    const { title } = props;

    return (
        <AppBar position="sticky">
            <Grid container direction={"row"}  justifyContent="flex-start" alignItems="center" spacing={2}>
                <Grid item>
                    <img src="./assets/logo.png" alt={"Split Calculator Logo"} width={20} height={20} />
                </Grid>
                <Grid item>
                    <Typography variant="h5">{title}</Typography>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;
