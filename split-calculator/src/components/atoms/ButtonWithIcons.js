import { Button } from "@mui/material";
import React from "react";

const ButtonWithIcons = (props) => {
    const { icon, handleClick, variant, label, isDisabled } = props;
    return (
        <Button
            startIcon={icon}
            variant={variant}
            onClick={() => handleClick()}
            disabled={isDisabled}
        >
            {label}
        </Button>
    );
}

export default ButtonWithIcons;
