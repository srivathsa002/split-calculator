import { AccountCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Box, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NameCard from '../molecules/NameCard';
import NoContent from '../molecules/NoContent';

const HomeCard = () => {

    const [friendsList, setFriendsList] = useState([]);
    const [input, setInput] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleOnInputChange = (value) => {
        setInput(value);
        setIsDisabled(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFriendsList([...friendsList, input]);
        setInput("");
    }

    const handleRemoveFriend = (idx) => {
        let curFriends = [...friendsList];
        curFriends.splice(idx, 1);
        setFriendsList([...curFriends]);
    }

    useEffect(() => {
        if(input.trim() === "")
            setIsDisabled(true);
    }, [input])

    return (
        <Box sx={{ padding: "40px" }}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item sx={{ minWidth: "400px" }}>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"stretch"} spacing={4}>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                            <Typography variant={"h5"} color={"textPrimary"}>
                                {"Split a cost with friends"}
                            </Typography>
                            <Typography variant={"body2"} color={"textSecondary"}>
                                {"Add people you want to split costs with"}
                            </Typography>
                        </Stack>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <TextField
                                id="input-with-icon-textfield"
                                label={"Friends Involved"}
                                placeholder={"Add people by name"}
                                value={input}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle sx={{color: "#000"}} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={(event) => handleSubmit(event)}
                                                edge={"end"}
                                                disabled={isDisabled}
                                                sx={{color: "#000"}}
                                            >
                                                <CheckCircleOutlinedIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(event) => handleOnInputChange(event.target.value)}
                                variant={"outlined"}
                                sx={{ minWidth: "-webkit-fill-available" }}
                                autoFocus
                            />
                        </form>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"stretch"} spacing={2}>
                            <Typography variant={"h5"} color={"textPrimary"}>
                                {"Friends"}
                            </Typography>
                            {
                                friendsList.length !== 0 ?
                                    friendsList.map((each, idx) => (
                                        <Stack key={idx} direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={8}>
                                            <NameCard name={each} colorCode={idx} />
                                            <IconButton
                                                onClick={() => handleRemoveFriend(idx)}
                                                color={"inherit"}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Stack>
                                        )
                                    ) : (<NoContent text={"Please add your friends to get started :)"} />)
                            }
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeCard;
