import { Box, Button, Grid, InputAdornment, List, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate } from "react-router";
import NameCardListItem from "../molecules/NameCardListItem";
import { useDispatch, useSelector } from "react-redux";

const selectFriends = (state) => state.friends;

const AddItem = () => {

    const friendsList = useSelector(selectFriends);

    const dispatch = useDispatch();

    const [itemName, setItemName] = useState("");
    const [itemCost, setItemCost] = useState("");
    const [itemTax, setItemTax] = useState("");
    const [friendsSelected, setFriendsSelected] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect => friendsSelected: ", friendsSelected);
    }, [friendsSelected])

    const handleClear = () => {
        setItemName("");
        setItemCost("");
        setItemTax("");
        setFriendsSelected([]);
        navigate("/items");
    }

    const handleTaxInput = (value) => {
        if(!isNaN(Number(value))) {
            setItemTax(value);
        }
    }

    const handleCostInput = (value) => {
        if(value === "")
            setItemCost("");
        // TODO: Still buggy => Enter 1.232 and try to edit by placing cursor before decimal point and press backspace
        let regexp = /^(?:\d|\d{2,})(?:\.\d{0,4})?$/;
        regexp.test(value) && setItemCost(value);
    }

    const handleSelectedFriend = (id) => {
        let existingFriends = [...friendsSelected];
        let idx = existingFriends.findIndex(each => each === id);
        if (idx !== -1) {
            existingFriends.splice(idx, 1);
            setFriendsSelected([...existingFriends]);
        } else {
            setFriendsSelected([...existingFriends, id]);
        }
        
        // dispatch({
        //     type: "ALTER_IS_SELECTED",
        //     payload: id
        // });
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const handleAddItem = () => {
        // console.log("Inside Add Item:::::");
        // console.log("selected friends: " + friendsSelected.length);
        let totalCost = parseFloat((Number(itemCost) * (1 + Number(itemTax)/100)).toFixed(2));
        // console.log("total Cost: " + totalCost);
        let splitAmount = totalCost/(friendsSelected.length);
        // console.log("split amount: " + splitAmount);
        splitAmount *= 100;
        // console.log("split amount multiplied by 100: " + splitAmount);
        splitAmount = Math.floor(splitAmount)/100;
        // console.log("final split amount: " + splitAmount);
        let difference = parseFloat((totalCost - splitAmount*(friendsSelected.length)).toFixed(2));
        // console.log("difference: " + difference);
        while(!Number.isInteger(difference)) {
            difference *= 10;
        }
        // console.log("difference after while loop: " + difference);

        let choiceArr = [...Array(friendsSelected.length).keys()];
        // console.log("choice array of friendIndexes: ", choiceArr);
        let copyOfChoiceArr = choiceArr.slice();
        // console.log("choice array of copied indexes: ", copyOfChoiceArr);
        let randomArr = [];

        // TODO: Handle uneven split divide using random assignment
        // diff -> No. of times 0.01 should be added
        // Pick random index "diff" times
        for (let i = 0; i < difference; i++) {
            let randIdx = getRandomInt(copyOfChoiceArr.length);
            // console.log("random index round " + i + ": ", randIdx);
            randomArr.push(friendsSelected[randIdx]);
            copyOfChoiceArr.splice(randIdx, 1);
            // console.log("choice array of copied indexes updated: ", copyOfChoiceArr);
        }

        // console.log("final random choices array: ", randomArr);
        let friendsInvolved = [];
        friendsSelected.forEach(friend =>
            friendsInvolved.push({
                id: friend,
                splitAmount: difference === 0 ? splitAmount : randomArr.includes(friend) ? parseFloat((splitAmount + 0.01).toFixed(2)) : splitAmount,
            })
        )
        // console.log("Friends Involved that is to be dispatched: ", friendsInvolved);
        dispatch({
            type: "ADD_NEW_ITEM",
            payload: {
                name: itemName,
                cost: itemCost,
                tax: itemTax,
                friendsInvolved: [...friendsInvolved],
                totalCost,
            }
        })
        // dispatch({
        //     type: "RESET_FRIEND_IS_SELECTED",
        // })
        navigate("/items");
    }

    return (
        <Box sx={{ padding: "40px" }}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Grid item sx={{ minWidth: "450px" }}>
                    <Stack direction={"column"} alignItems={"stretch"} justifyContent={"center"} spacing={3}>
                        <Typography variant="h5" color={"textPrimary"} textAlign={"center"}>
                            {"Add Item Details"}
                        </Typography>
                        <TextField
                            id="input-for-item"
                            label={"Item"}
                            placeholder={"Enter item name"}
                            value={itemName}
                            onChange={(event) => setItemName(event.target.value)}
                            variant={"outlined"}
                            sx={{ minWidth: "-webkit-fill-available" }}
                            autoFocus
                        />
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={1}>
                            <TextField
                                id="input-for-item-cost"
                                label={"Cost"}
                                placeholder={"0.00"}
                                value={itemCost}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AttachMoneyIcon sx={{color: "#000"}} />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={(event) => handleCostInput(event.target.value)}
                                variant={"outlined"}
                                // sx={{ minWidth: "-webkit-fill-available" }}
                            />
                            <TextField
                                id="input-for-tax"
                                label={"Tax"}
                                placeholder={"Tax Percentage"}
                                value={itemTax}
                                onChange={(event) => handleTaxInput(event.target.value)}
                                variant={"outlined"}
                                // sx={{ minWidth: "-webkit-fill-available" }}
                            />
                        </Stack>
                        <Typography variant={"h6"} color={"textPrimary"}>
                            {"Friends Involved"}
                        </Typography>
                        <List>
                            {friendsList.map((friend, idx) => (
                                <NameCardListItem
                                    key={idx}
                                    nameObj={friend}
                                    handleFriendSelection={() => handleSelectedFriend(friend.id)}
                                    colorIdx={idx}
                                    isSelected={friendsSelected.includes(friend.id)}
                                />
                            ))}
                        </List>
                        <Stack direction={"row"} justifyContent={"end"} alignItems={"center"} spacing={3}>
                            <Button variant={"contained"} color={"secondary"} onClick={() => handleClear()} sx={{
                                "&:hover": {
                                    backgroundColor: "#F0F5F5",
                                }
                            }}>
                                {"Cancel"}
                            </Button>
                            <Button variant={"contained"} color={"primary"} onClick={() => handleAddItem()}>
                                {"Save"}
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AddItem;
