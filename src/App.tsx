import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Grid from '@mui/material/Grid';

function App() {
    return (
        <div className="App">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Home></Home>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
