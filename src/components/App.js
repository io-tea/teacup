import React, {Component} from 'react';
import CupsPage from './CupsPage';

import AppBar from 'material-ui/AppBar';
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
                    <CupsPage/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
