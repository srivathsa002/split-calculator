import { Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Stack } from '@mui/system'
import React from 'react'

const NoContent = ({text}) => {
    return (
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
            <Typography variant={"h6"} color={grey["A900"]}>
                {"Uh-Oh!!"}
            </Typography>
            <Typography variant={"body2"} color={"textSecondary"}>
                {text}
            </Typography>
        </Stack>
    )
}

export default NoContent