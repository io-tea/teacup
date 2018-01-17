import React, {Component} from 'react';
import CupsPage from './CupsPage';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import {blue, yellow, red} from 'material-ui/colors';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        accent: yellow,
        error: red,
        type: 'light'
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar position="static" style={{ marginBottom: 20 }}>
                        <Toolbar>
                            <Typography type="title" color="inherit">ioTea</Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={16} style={{ padding: 20 }}>
                        <Grid item lg={6} xs={12}>
                            <Paper style={{ padding: 20 }}>
                                <CupsPage/>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
