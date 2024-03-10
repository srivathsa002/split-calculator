import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import NoContent from "../molecules/NoContent";
import ItemCardListItem from "./ItemCardListItem";

const selectFriends = (state) => state.friends;
const selectItems = (state) => state.items;

const Items = () => {

    const navigate = useNavigate();
    const friendsList = useSelector(selectFriends);
    const itemsList = useSelector(selectItems);
    const dispatch = useDispatch();

    const [selectedItem, setSelectedItem] = useState("");

    const handleAddItem = () => {
        navigate("/split-calculator/items/addItem");
    };

    const getFriendsNames = (friendIds) => {
        let names = [];
        friendIds.forEach(each => names.push(friendsList.filter(friend => friend.id === each.id)[0].name));
        // friendsList.forEach(friend => friendIds.includes(friend.id) && names.push(friend.name));
        return names.join(", ");
    };

    const handleEditItem = () => {
        navigate(`/split-calculator/items/${selectedItem}/edit`);
    }

    const handleDeleteItem = () => {
        // navigate(`/split-calculator/items/edit/:id`);
        dispatch({
            type: "REMOVE_ITEM",
            payload: selectedItem,
        });
    }

    return (
        <Box sx={{ padding: "40px" }}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item sx={{ minWidth: "450px", maxWidth: "850px" }}>
                    <Stack direction={"column"} alignItems={"stretch"} justifyContent={"center"} spacing={3}>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography variant={"h5"} color={"textPrimary"}>
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
                                    <ItemCardListItem
                                        key={idx}
                                        handleItemSelection={() => setSelectedItem(item.id)}
                                        itemObj={item}
                                        isSelected={selectedItem === item.id}
                                        getFriendsNames={(ids) => getFriendsNames(ids)}
                                    />
                                ))
                        }
                        {
                            itemsList.length !== 0 &&
                                <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} spacing={2}>
                                    <Button variant={"contained"} color={"secondary"} onClick={() => handleEditItem()} disabled={selectedItem === ""} sx={{
                                        "&:hover": {
                                            backgroundColor: "#F0F5F5",
                                        }
                                    }}>
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
