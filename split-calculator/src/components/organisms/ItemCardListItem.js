import { ListItem, ListItemButton, ListItemIcon, Paper, Radio } from '@mui/material';
import React from "react";
import ItemCard from './ItemCard';
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const ItemCardListItem = (props) => {

    const { handleItemSelection, itemObj, isSelected, getFriendsNames } = props;


    return (
        <Paper elevation={isSelected ? 3 : 1} sx={{ borderRadius: "10px", margin: "6px" }}>
            <ListItem
                disablePadding
                // secondaryAction={isSelected && <CheckBoxOutlinedIcon color={"primary"} />}
                sx={{ borderRadius: "10px" }}
            >
                <ListItemButton onClick={() => handleItemSelection()} sx={{
                    "&:hover": {
                        backgroundColor: "#F0F5F5",
                    }
                }}>
                    <ListItemIcon>
                        <Radio
                            checked={isSelected}
                            onChange={handleItemSelection}
                        />
                    </ListItemIcon>
                    <ItemCard item={itemObj} getFriendsNames={getFriendsNames} />
                </ListItemButton>
            </ListItem>
        </Paper>
    )
}

export default ItemCardListItem;
