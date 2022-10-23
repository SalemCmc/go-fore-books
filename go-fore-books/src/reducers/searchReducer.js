import { 
    SEARCH_ITEMS_STARTED,
    SEARCH_ITEMS_SUCCESS,
    SEARCH_ITEMS_ERROR,
} from '../actions/types'

const initialState = {
    searchType: '',
    totalItems: 0,    
    loading: true,
    error: null,
    items: [],
};



export default function (state = initialState, action) {
    switch (action.type) {
    case SEARCH_ITEMS_SUCCESS:
        return { 
            ...state,
            totalItems: action.totalItems,            
            items: action.items,
            loading: false,
            error: null 
        };
      
    case SEARCH_ITEMS_STARTED:
        return { 
            ...state,
            searchType: action.searchType,
            loading: true,
            error: null,
        };

    case SEARCH_ITEMS_ERROR:
        return { 
            ...state,
            error: action.error,            
            loading: false,
        };

    default: return state;
    }
}