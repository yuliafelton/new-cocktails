import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const styles = {
    floatingLabelFocusStyle: {
        color: "white"
    },
    inputRoot: {
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiInputBase-input": {
            color: "white",
        },
        "& .MuiIconButton-root": {
            color: "white",
        },
        "& .MuiFormLabel-root": {
            color: "grey",
        },
        "& .PrivateNotchedOutline-legendLabelled-15": {
            color: "white",
        },
        "& .makeStyles-floatingLabelFocusStyle-27": {
            color:"grey"
        }
    }
};

function SearchForm({onSelect, options, label}) {

    const useStyles = makeStyles((theme) => (styles));

    const classes = useStyles();

    return (
        <Autocomplete
            id="cocktails-search"
            classes={classes}
            freeSolo
            onChange={(event, value) => onSelect(value)}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle,
                    }}
                    label={label}
                    margin="normal"
                    variant="outlined"
                />
            )}
        />
    );
}

export default SearchForm;