import React from 'react';
import { getCoverImg } from '../../utils/helper';
import PropTypes from 'prop-types';
// mui
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';

const BookModal=({ 
    handleCloseModal,
    selectedItem,
})=> {

    return (

        <Dialog 
            onClose={()=>handleCloseModal(null)}
            open={!!selectedItem}            
            fullWidth
        >
            <IconButton
                onClick={()=>handleCloseModal(null)}
                aria-label="close"               
                sx={{
                    backgroundColor: 'black',
                    border: '1px solid gray',
                    position: 'absolute',   
                    color: 'white',                                                       
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
  
            <Box 
                alt={selectedItem}
                src={getCoverImg(selectedItem)}
                component="img"                
            />
        </Dialog>
    );
}

BookModal.propTypes = {
    handleCloseModal: PropTypes.func,
    selectedItem: PropTypes.number,
};
export default BookModal;

