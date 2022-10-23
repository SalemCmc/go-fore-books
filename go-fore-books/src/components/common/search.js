
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// mui
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Search=({ handleSearch})=> {

    const [searchParam, setSearchParam] = useState('');

    const handleChange = (e)=> {
        setSearchParam(e.target.value)  
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchParam);
            setSearchParam('');
        }   
    }

    const handleOnClick = ()=> {
        handleSearch(searchParam);
        setSearchParam(''); 
    }

    return (
        <Box >
            <TextField
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="Search Books"               
                onChange={handleChange}
                value={searchParam}
                size="small"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton 
                                disabled={!searchParam.length} 
                                onClick={handleOnClick}                                                                
                                type="button"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func,
};
 
export default Search;

