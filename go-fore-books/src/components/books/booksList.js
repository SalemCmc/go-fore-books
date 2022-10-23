
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBooks } from '../../actions/booksActions';
// const
import { SHOW_BOOKS_PER_PAGE } from '../../utils/constants';
// mui
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
// components
import Search from '../../components/common/search';
import GridList from '../common/gridList';
import BookModal from './bookModal';
import Toast from '../common/toast';
import BookCard from './bookCard';

const BooksList=({
    searchBooks, 
    searchesponse: {
        totalItems,        
        loading,
        items,
        error,
    }
})=> {

    const [selectedItem, setSelectedItem] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState(100);   // SHOW_BOOKS_PER_PAGE[0]  // it is not logical, but it is mandatory in the task...    
    const [searchParam, setSearchParam] = useState('*');
    const [page, setPage] = useState(0);

    useEffect(() => {
        searchBooks(searchParam, page, rowsPerPage);
    
    }, []);

    const handleChangePage = (event, newPage) => {
        searchBooks(searchParam, newPage, rowsPerPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        searchBooks(searchParam, page, event.target.value);
    };

    const handleSearch =(searchParam) => {
        searchBooks(searchParam, 0, rowsPerPage);
        setSearchParam(searchParam);
        setPage(0);
    }

    return (

        <Container 
            sx={{
                minHeight: '100vh',               
                pt: '34px',
                pb: '34px',
            }} 
        >
            <Search handleSearch={handleSearch}/>
            <Divider light sx={{ mb: '10px', mt: '34px' }} />
            <GridList  
                handleChangeRowsPerPage={handleChangeRowsPerPage} 
                rowsPerPageOptions={SHOW_BOOKS_PER_PAGE}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}   
                totalItems={totalItems} 
                defaultview="row"            
                loading={loading}
                items={items}
                page={page}                        
            >
                <BookCard handleSelectItem={setSelectedItem}/>
            </GridList>
            <BookModal selectedItem={selectedItem} handleCloseModal={setSelectedItem}/>
            <Toast message={error?.message} type="error" />
        </Container>

    );
}

BooksList.propTypes = {
    searchBooks: PropTypes.func,
    searchesponse: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        items: PropTypes.array.isRequired,
        totalItems: PropTypes.number,
        error: PropTypes.any,
    })
};

const mapStateToProps = state => ({
    searchesponse: state.search
});
  
const mapDispatchTopProps = {searchBooks };

export default connect(mapStateToProps, mapDispatchTopProps)(BooksList);
