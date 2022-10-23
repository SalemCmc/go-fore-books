import React from 'react';
import PropTypes from 'prop-types';
import { getThumbnail } from '../../utils/helper';
// mui
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const BookCard=({ 
    data: {
        first_publish_year,
        publish_year,
        author_name,
        lcc_sort,        
        cover_i,
        title, 
    },   
    handleSelectItem,
    parentType,
}) => {

    return (

        <Card 
            sx={{
                flexDirection: 'column',               
                display: 'flex',
                height: '100%' 
            }}
        >
            <Box >
                <CardMedia
                    onClick={() => handleSelectItem(cover_i)}
                    image={getThumbnail(cover_i)}
                    component="img"                    
                    alt={title}
                    sx={{ 
                        maxHeight:'130px', 
                        width: '100px',
                        margin: 'auto',                     
                        p:'10px',
                    }}
                />
            </Box>
            <CardContent >
                <Typography gutterBottom variant="body1" >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {author_name}
                </Typography>
                {parentType === 'column'?
                    <>
                        <Typography variant="body2" color="text.secondary">
                            {`first publication year: : ${first_publish_year || publish_year && publish_year[0]}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {`ISBN: ${lcc_sort}`}
                        </Typography>
                    </>
                    :
                    null                
                }
            </CardContent>
        </Card>

    );
}
 
BookCard.propTypes = {
    data: PropTypes.shape({
        first_publish_year: PropTypes.number,
        publish_year: PropTypes.array,
        author_name: PropTypes.array,
        lcc_sort: PropTypes.string,
        cover_i: PropTypes.number,
        title: PropTypes.string,
    }),
    handleSelectItem: PropTypes.func,
    parentType: PropTypes.string,    
};

export default BookCard;

