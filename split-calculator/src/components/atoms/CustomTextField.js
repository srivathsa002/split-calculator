import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
    
    const { value, label, variant, handleInputChange } = props;
    
    return (
        <TextField
            value={value}
            label={label}
            variant={variant}
            onChange={(event) => handleInputChange(event.target.value)}
        />
    )
}

export default CustomTextField;
