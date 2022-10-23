import React from 'react';
import './App.css';
import BooksList from './components/books/booksList';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BooksList />
            </ThemeProvider>
        </div>
    );
}

export default App;
