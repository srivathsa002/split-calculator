import { ListItem, ListItemButton, Paper } from '@mui/material';
import React from "react";
import NameCard from './NameCard';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const NameCardListItem = (props) => {

    const { handleFriendSelection, nameObj, isSelected, colorIdx } = props;



    // const [isItemSelected, setIsItemSelected] = useState(nameObj.isSelected);


    return (
        <Paper elevation={isSelected ? 3 : 1} sx={{ borderRadius: "10px", margin: "6px" }}>
            <ListItem
                disablePadding
                // TODO: Cannot hover on actionButton. Render conditionally
                secondaryAction={isSelected && <CheckBoxOutlinedIcon color={"primary"} />}
                sx={{ borderRadius: "10px" }}
            >
                <ListItemButton onClick={() => handleFriendSelection()}>
                    <NameCard name={nameObj.name} colorCode={colorIdx} isName={true} displayAvatar={true} />
                </ListItemButton>
            </ListItem>
        </Paper>
    )
}

export default NameCardListItem;
