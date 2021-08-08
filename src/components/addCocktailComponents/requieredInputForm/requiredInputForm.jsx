import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
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
        '& .MuiInputLabel-outlined': {
            color: 'lightgray',
        },
        '& .MuiInputBase-input': {
            color: 'white',
        }
    },
    label: {
        color: 'white',
    }
}));

function RequiredInputForm({label, value, onChange}) {
    const classes = useStyles();

    const handleChange = change => {
        if (onChange instanceof Function) {
            onChange(change.target?.value);
        }
    };

    return (
        <div>
            <label className={classes.label}>{label}:</label>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    onChange={handleChange}
                    id="outlined-required"
                    label="required"
                    defaultValue={value}
                    variant="outlined"
                />
            </form>
        </div>
    );
}

export default RequiredInputForm;