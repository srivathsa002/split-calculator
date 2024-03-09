import { AccountCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Box, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NameCard from '../molecules/NameCard';
import NoContent from '../molecules/NoContent';
import { useDispatch, useSelector } from 'react-redux';

const selectFriends = (state) => state.friends;

const HomeCard = () => {

    const dispatch = useDispatch();

    const friends = useSelector(selectFriends);

    const [input, setInput] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleOnInputChange = (value) => {
        setInput(value);
        setIsDisabled(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput("");
        dispatch({
            type: "ADD_NEW_FRIEND",
            payload: input
        });
    }


    // TODO: Don't allow friend to be removed, if a friend is associated to atleast 1 item.
    const handleRemoveFriend = (id) => {
        let curFriends = [...friends];
        curFriends.splice(id, 1);
        dispatch({
            type: "REMOVE_FRIEND",
            payload: id
        });
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
                                friends.length !== 0 ?
                                    friends.map((each, idx) => (
                                        <Stack key={idx} direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={8}>
                                            <NameCard name={each.name} colorCode={idx} displayAvatar={true} />
                                            <IconButton
                                                onClick={() => handleRemoveFriend(each.id)}
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
