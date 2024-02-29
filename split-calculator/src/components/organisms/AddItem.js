import { Box, Button, Grid, InputAdornment, List, ListItem, ListItemButton, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useNavigate } from "react-router";
import NameCard from "../molecules/NameCard";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AddItem = (props) => {

    const { handleAddItem } = props;

    const [itemName, setItemName] = useState("");
    const [itemCost, setItemCost] = useState("");
    const [itemTax, setItemTax] = useState("");
    const [isSelected, setIsSelected] = useState(false);

    const navigate = useNavigate();

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
                                onChange={(event) => setItemCost(event.target.value)}
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
                            <Paper elevation={isSelected ? 3 : 1} sx={{ borderRadius: "10px" }}>
                                <ListItem
                                    disablePadding
                                    // TODO: Cannot hover on actionButton. Render conditionally
                                    secondaryAction={<CheckCircleIcon color={"primary"} />}
                                    sx={{ borderRadius: "10px" }}
                                >
                                    <ListItemButton onClick={() => setIsSelected(!isSelected)}>
                                        <NameCard name={"Srivathsa Muthyala"} colorCode={0} />
                                    </ListItemButton>
                                </ListItem>
                            </Paper>
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

export default AddItem;
