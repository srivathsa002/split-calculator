import { AppBar, Avatar, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../atoms/Logo';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router';

const Header = () => {

    const navigate = useNavigate();

    const handleButtonClick = (buttonText) => {
        if (buttonText === "home") {
            navigate("/");
        } else if (buttonText === "items") {
            navigate("/items");
        } else {
            navigate("/splitSummary");
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position={"static"} color={"transparent"} sx={{ padding: "8px 16px" }}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                        <Logo />
                        <Typography variant="h6" color={"textPrimary"}>
                            {"SplitEase"}
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={4}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2}>
                            <Button variant={"text"}>
                                <Typography variant={"body1"} color={"textPrimary"} onClick={() => handleButtonClick("home")}>
                                    {"Home"}
                                </Typography>
                            </Button>
                            <Button variant={"text"} onClick={() => handleButtonClick("items")}>
                                <Typography variant={"body1"} color={"textPrimary"}>
                                    {"Items"}
                            </Typography>
                            </Button>
                            <Button variant={"text"} onClick={() => handleButtonClick("summary")}>
                                <Typography variant={"body1"} color={"textPrimary"}>
                                    {"Summary"}
                                </Typography>
                            </Button>
                        </Stack>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>SS</Avatar>
                    </Stack>
                </Stack>
            </AppBar>
        </Box>
    );
};

export default Header;
