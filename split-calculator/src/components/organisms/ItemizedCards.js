import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import NoContent from '../molecules/NoContent';

const ItemizedCards = (props) => {

    const { handleAddItem } = props;

    return (
        <Box sx={{ padding: "40px" }}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item sx={{ minWidth: "450px" }}>
                    <Stack direction={"column"} alignItems={"stretch"} justifyContent={"center"} spacing={3}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography variant={"h6"} color={"textPrimary"}>
                                {"Itemized Costs"}
                            </Typography>
                            <Button variant={"contained"} color={"secondary"} onClick={() => handleAddItem()}>
                                {"Add Item"}
                            </Button>
                        </Stack>
                        <NoContent text={"Please add items to get started"} />
                    </Stack>
            </Grid>
            </Grid>
        </Box>
    )
}

export default ItemizedCards;
