import { AccountCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { grey } from '@mui/material/colors';
import NameCard from '../molecules/NameCard';

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
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"} spacing={6}>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"} spacing={1}>
                        <Typography variant={"h4"} color={"primary"}>
                            {"Split a cost with friends"}
                        </Typography>
                        <Typography variant={"body2"} color={grey[600]}>
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
                                        <AccountCircle color={"primary"} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={(event) => handleSubmit(event)}
                                            edge={"end"}
                                            disabled={isDisabled}
                                            color={"primary"}
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
                        <Typography variant={"h4"} color={"primary"}>
                            {"Friends"}
                        </Typography>
                        {
                            friendsList.length !== 0 ?
                                friendsList.map((each, idx) => (
                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={12}>
                                        <NameCard name={each} colorCode={idx} key={idx} />
                                        <IconButton
                                            onClick={() => handleRemoveFriend(idx)}
                                            color={"primary"}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>
                                    )
                                ) : (
                                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                                        <Typography variant={"h5"} color={"primary"}>
                                            {"Uh-Oh!!"}
                                        </Typography>
                                        <Typography variant={"body2"}>
                                            {"Please add your friends to get started :)"}
                                        </Typography>
                                    </Stack>
                                )
                        }
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default HomeCard;
