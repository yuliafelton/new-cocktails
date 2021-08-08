import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: '#3f51b5',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#b10741',
            },
            '&.MuiInputBase-input': {
                color: 'white',
            }
        },
        '& .MuiInputBase-input': {
            color: 'white',
        },
    },
}));

export default function RegularInputForm({label, onChange}) {
    const classes = useStyles();

    const handleChange = change => {
        if (onChange instanceof Function) {
            onChange(change.target?.value);
        }
    };

    return (
        <div>
            <label style={{"color": "white"}}>{label}:</label>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic"
                           onChange={handleChange}
                           variant="outlined" />
            </form>
        </div>
    );
}