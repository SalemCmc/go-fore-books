
import noimg from '../media/noimg.PNG'

export const getThumbnail = (id) => {
    return id? `http://covers.openlibrary.org/b/id/${id}-S.jpg` : noimg;
};

export const getCoverImg = (id) => {  
    return `http://covers.openlibrary.org/b/id/${id}-L.jpg`;  // not able to use base URL...
}; 