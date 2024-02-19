import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const CustomSelect = (props) => {

    const { labelId, label, value, onOptionChange, itemsList } = props;

    // This is a dropdwon for Tax selection.
    return (
        <FormControl>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                value={value}
                label={label}
                onChange={onOptionChange}
            >
                {itemsList.map(each => <MenuItem value={each.value}>{each.label}</MenuItem>)}
            </Select>
        </FormControl>
        
    )
}

export default CustomSelect;
