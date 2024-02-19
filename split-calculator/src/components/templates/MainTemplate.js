import { Box, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../organisms/CustomCard";
import NamesCard from "../organisms/NamesCard";

const MainTemplate = () => {
    return (
        <Box>
            <Grid container direction={"column"} justifyContent={"center"}>
                <Grid item>
                    <NamesCard />
                </Grid>
                <Grid item>
                    <Grid container direction={"column"} justifyContent={"center"}>
                        <Grid item>
                            <CustomCard />
                        </Grid>
                        <Grid item>
                            <CustomCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainTemplate;
