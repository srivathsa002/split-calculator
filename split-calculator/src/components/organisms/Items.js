import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import NoContent from "../molecules/NoContent";

const selectFriends = (state) => state.friends;
const selectItems = (state) => state.items;

const Items = () => {

    const navigate = useNavigate();
    const friendsList = useSelector(selectFriends);
    const itemsList = useSelector(selectItems);
    const dispatch = useDispatch();

    const [selectedItem, setSelectedItem] = useState("");

    const handleAddItem = () => {
        navigate("/items/addItem");
    };

    const getFriendsNames = (friendIds) => {
        console.log("getFriendName: " + friendIds);
        console.dir("list: ", friendsList);
        let names = [];
        friendsList.forEach(friend => friendIds.includes(friend.id) && names.push(friend.name));
        return names;
    };

    const handleEditItem = () => {
        navigate(`/items/:id/edit`);
    }

    const handleDeleteItem = () => {
        // navigate(`/items/edit/:id`);
        dispatch({
            type: "REMOVE_ITEM",
            payload: selectedItem,
        });
    }

    return (
        <Box sx={{ padding: "40px" }}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item sx={{ minWidth: "450px" }}>
                    <Stack direction={"column"} alignItems={"stretch"} justifyContent={"center"} spacing={3}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography variant={"h6"} color={"textPrimary"}>
                                {"Itemized Costs"}
                            </Typography>
                            <Button variant={"contained"} color={"primary"} onClick={() => handleAddItem()}>
                                {"Add Item"}
                            </Button>
                        </Stack>
                        {
                            itemsList.length === 0 ?
                                <NoContent text={"Please add items to get started"} />
                            :
                                itemsList.map((item, idx) => (
                                    <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={3} key={idx}>
                                        <div>{"Image"}</div>
                                        <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"} spacing={1}>
                                            <Typography variant={"body1"} color={"textPrimary"}>
                                                {item.name}
                                            </Typography>
                                            {console.dir("item: ", item)}
                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                {`Split with ${getFriendsNames(item.friendsInvolved)}`}
                                            </Typography>
                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                {`$ ${Number(item.totalCost).toFixed(4)}`}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                ))
                        }
                        {
                            itemsList.length !== 0 &&
                                <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} spacing={2}>
                                    <Button variant={"contained"} color={"secondary"} onClick={() => handleEditItem()} disabled={selectedItem === ""}>
                                        {"Edit"}
                                    </Button>
                                    {/* TODO: Add delete success snackbar toast*/}
                                    <Button variant={"contained"} color={"error"} onClick={() => handleDeleteItem()} disabled={selectedItem === ""}>
                                        {"Delete"}
                                    </Button>
                                </Stack>
                        }
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Items;
