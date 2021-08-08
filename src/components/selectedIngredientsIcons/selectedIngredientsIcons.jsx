import React, { useCallback } from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteIngredient} from "../../store/appSlice";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(0.5),
        margin: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    outlined: {
        color: "white",
        },
    inputRoot: {
        "& .MuiChip-root": {
            color: "white",
        }
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));


function SelectedIngredientsIcons() {
    const classes = useStyles();

    const selectedIngredients = useSelector(state => state.app.selectedIngredients);
    const dispatch = useDispatch();

    const handleDelete = useCallback((ingredientToDelete) => {
        dispatch(deleteIngredient(ingredientToDelete));
    },[dispatch]);

    if (!selectedIngredients) {
        return null;
    }


    return (
        <Paper component="ul" className={classes.root}>
            {selectedIngredients.map((ingredient) => {
                return (
                    <li key={ingredient}>
                        <Chip
                            label={ingredient}
                            color="secondary"
                            style={{color:'white', border: '1px solid white'}}
                            onDelete={() => handleDelete(ingredient)}
                            className={classes.chip}
                            variant="outlined"
                        />
                    </li>
                );
            })}
        </Paper>
    );
}


export default SelectedIngredientsIcons;
