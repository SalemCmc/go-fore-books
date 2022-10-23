
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Loading=()=> {

    return (
        <Box 
            sx={{ 
                mt:'25%',
                mb:'25%' 
            }}
        >
            <Typography gutterBottom variant="body1" >
                Loading... 
            </Typography>
            <LinearProgress />
            <Typography gutterBottom variant="body1" >
                Please Wait... 
            </Typography>
        </Box>
    );
}
 
export default Loading;

