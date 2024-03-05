import { Box, Grid } from '@mui/material'
import React from 'react'
import SplitSummary from '../organisms/SplitSummary';
import Summary from '../organisms/Summary';

const SummaryTemplate = () => {
    return (
        <Box sx={{ padding: "40px" }}>
            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"flex-start"} spacing={4}>
                <Grid item xs={8}>
                    <SplitSummary />
                </Grid>
                <Grid item xs={4}>
                    <Summary />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SummaryTemplate;
