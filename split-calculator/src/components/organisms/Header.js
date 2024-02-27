import { AppBar, Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../atoms/Logo';
import { deepPurple } from '@mui/material/colors';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={"static"} color={"transparent"} sx={{ padding: "8px 10px" }}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                        <Logo />
                        <Typography variant="h6" color={"primary"}>
                            {"SplitEase"}
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                        <Typography variant={"h6"} color={"primary"}>
                            {"Home"}
                        </Typography>
                        <Typography variant={"h6"} color={"primary"}>
                            {"Items"}
                        </Typography>
                        <Typography variant={"h6"} color={"primary"}>
                            {"Summary"}
                        </Typography>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>SS</Avatar>
                    </Stack>
                </Stack>
            </AppBar>
        </Box>
    );
};

export default Header;
