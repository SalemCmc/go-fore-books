import React, {useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';


const Toast=({
    message,
    type
})=> {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if(message){
            setOpen(true);
        }
    }, [message]);

    return (
        <Snackbar
            autoHideDuration={6000} 
            onClose={handleClose}
            open={open}         
        >     
            <MuiAlert  
                elevation={6} variant="filled" 
                sx={{ width: '100%' }}             
                onClose={handleClose}
                severity={type}             
            >
                {message}
            </MuiAlert>
        </Snackbar>
    );
}

Toast.propTypes = {
    type: PropTypes.string.isRequired,    
    message: PropTypes.string,
};

export default Toast;

