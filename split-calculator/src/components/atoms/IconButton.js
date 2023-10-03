import { Button } from "@mui/material";
import React from "react";

const ButtonWithIcons = (props) => {
    const { icon, handleClick, variant, label } = props;
    return (
        <Button startIcon={icon} variant={variant} onClick={handleClick}>
            {label}
        </Button>
    );
}

export default ButtonWithIcons;
