// eslint-disable-next-line no-undef
export const baseURL = process.env.REACT_APP_BASE_URL; 
import { 
    SEARCH_ITEMS_STARTED,
    SEARCH_ITEMS_SUCCESS,
    SEARCH_ITEMS_ERROR,
} from './types'

export const searchBooks = (searchParam = '*', page, rowsPerPage) => dispatch => {

    dispatch({
        type: SEARCH_ITEMS_STARTED,
        searchType: 'books',
    });
    
    fetch(`${baseURL}/search.json?q=${searchParam}&page=${page+1}&limit=${rowsPerPage}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong...');
        })
        .then(data =>{
            dispatch({
                type: SEARCH_ITEMS_SUCCESS,
                totalItems: data.num_found,                
                items: data.docs,
            });
        })
        .catch(error => {
            dispatch({
                type: SEARCH_ITEMS_ERROR,
                error:error,
            });
        });
}