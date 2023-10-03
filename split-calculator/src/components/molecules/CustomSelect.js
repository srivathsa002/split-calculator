import { FormControl, Select } from "@mui/material";
import React from "react";

const CustomSelect = (props) => {

    const { labelId, label, value } = props;

    // TODO: Select incomplete!!
    return (
        <FormControl>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                value={value}
            />
        </FormControl>
        
    )
}

export default CustomSelect;
