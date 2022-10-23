
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './loading';

// mui
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TablePagination from '@mui/material/TablePagination';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const GridList=({ 
    handleChangeRowsPerPage,
    rowsPerPageOptions,    
    handleChangePage,
    rowsPerPage,
    defaultview,
    totalItems,
    children,    
    loading,
    items,
    page,
})=> {
    const [view, setView] = useState(defaultview || 'row');  // GRID BY DEFAULT

    const handleChangeView = (event, selectedView) => {
        if(selectedView){
            setView(selectedView);          
        }
    };

    return (
        <>
            <Stack
                justifyContent="flex-start"
                alignItems="center"            
                direction="row"
                spacing={2}
            >
                <ToggleButtonGroup
                    onChange={handleChangeView}
                    aria-label="Platform"
                    color="primary"
                    value={view}                    
                    size="small"
                    exclusive                    
                >    
                    <ToggleButton value="row" >
                        <Tooltip
                            title="Show Grid view"
                            placement="top"                            
                            arrow 
                        >
                            <ViewModuleIcon />
                        </Tooltip>
                    </ToggleButton>                
                    <ToggleButton value="column"> 
                        <Tooltip 
                            title="Show List view"
                            placement="top"                            
                            arrow  
                        >
                            <ViewListIcon />
                        </Tooltip>
                    </ToggleButton>    
                </ToggleButtonGroup>

                <Typography 
                    color="text.secondary" 
                    variant="span"
                >
                    {`${totalItems} items founded`}
                </Typography>  

            </Stack>


            <Divider light sx={{ mt: '10px' }} />
            { loading?
                <Loading />
                :
                <Box 
                    sx={{ 
                        flexGrow: 1,
                        mt: 5,
                        mb: 5,
                    }}
                >
                    <Grid 
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        spacing={{ xs: 1, md: 2 }}                        
                        direction={view}
                        container
                    >
                        {items && items.map((item) => 
                            <Grid item
                                xs={12}
                                sm={4}
                                md={3} 
                                key={item.key}
                            >
                                {React.cloneElement(children, {data: item, parentType: view})}
                            </Grid>
                        )}
                    </Grid>
                </Box>
            }

            <Divider light />

            <TablePagination
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                count={totalItems}
                component="div"
                page={page}
            />
        </>
    );
}

GridList.propTypes = {

    handleChangeRowsPerPage: PropTypes.func,
    rowsPerPageOptions: PropTypes.array,
    handleChangePage: PropTypes.func,
    rowsPerPage: PropTypes.number,
    defaultview: PropTypes.string,
    totalItems: PropTypes.any,
    children: PropTypes.any, 
    loading: PropTypes.bool,
    items: PropTypes.array,
    page: PropTypes.number,   
};
 
export default GridList;

