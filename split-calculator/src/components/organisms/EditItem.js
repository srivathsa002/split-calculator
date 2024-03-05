import { Box, Button, Grid, InputAdornment, List, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate, useParams } from "react-router";
import NameCardListItem from "../molecules/NameCardListItem";
import { useDispatch, useSelector } from "react-redux";

const selectFriends = (state) => state.friends;
const selectItems = (state) => state.items;

// TODO: Refactor this component to reuse the same logic in AddItem
const EditItem = () => {

    const friendsList = useSelector(selectFriends);
    const itemsList = useSelector(selectItems);
    const { id } = useParams();

    const dispatch = useDispatch();

    const [itemName, setItemName] = useState("");
    const [itemCost, setItemCost] = useState("");
    const [itemTax, setItemTax] = useState("");
    const [friendsSelected, setFriendsSelected] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        let itemObj = itemsList.filter(item => item.id === id);
        console.dir("itemObj: ", itemObj);
        setItemName(itemObj[0].name);
        setItemCost(itemObj[0].cost);
        setItemTax(itemObj[0].tax);
        setFriendsSelected([...itemObj[0].friendsInvolved]);
    }, [friendsList, id, itemsList])

    const handleClear = () => {
        setItemName("");
        setItemCost("");
        setItemTax("");
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
            delete existingFriends[idx];
            setFriendsSelected([...existingFriends]);
        } else {
            setFriendsSelected([...existingFriends, id]);
        }
        // dispatch({
        //     type: "ALTER_IS_SELECTED",
        //     payload: id
        // });
    }

    const handleAddItem = () => {
        // dispatch({
        //     type: "ADD_NEW_ITEM",
        //     payload: {
        //         name: itemName,
        //         cost: itemCost,
        //         tax: itemTax,
        //         totalCost: Number(itemCost) * (1 + Number(itemTax)/100),
        //         friendsInvolved: [...friendsSelected],
        //     }
        // })
        dispatch({
            type: "EDIT_ITEM",
            payload: {
                id: id,
                name: itemName,
                cost: itemCost,
                tax: itemTax,
                totalCost: Number(itemCost) * (1 + Number(itemTax)/100),
                friendsInvolved: [...friendsSelected],
            }
        })
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
                            {friendsList.map((each, idx) => (
                                <NameCardListItem
                                    key={idx}
                                    nameObj={each}
                                    handleFriendSelection={() => handleSelectedFriend(each.id)}
                                    colorIdx={idx}
                                    isSelected={friendsSelected.includes(each.id)}
                                />
                            ))}
                        </List>
                        <Stack direction={"row"} justifyContent={"end"} alignItems={"center"} spacing={3}>
                            <Button variant={"contained"} color={"secondary"} onClick={() => handleClear()}>
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

export default EditItem;
