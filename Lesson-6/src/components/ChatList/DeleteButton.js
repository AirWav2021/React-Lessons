import { useCallback } from "react";
import { Button } from "@mui/material";

const DeleteButton = ({ id, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(id);
    }, [onClick, id]);

    return <Button onClick = { handleClick } > X </Button>
};

export default DeleteButton;