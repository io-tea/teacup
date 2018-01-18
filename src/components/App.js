import React, {Component} from 'react';
import CupsPage from './CupsPage';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import {blue, yellow, red} from 'material-ui/colors';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';

import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

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
                    <AppBar position="static" className={"app-bar"}>
                        <Toolbar>
                            <IconButton color="contrast" aria-label="Menu" className={"menu-button"}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography type="title" color="inherit" className={"flex"}>IOTea</Typography>
                            <IconButton color="contrast" aria-label="Menu">
                                <AccountCircle/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <CupsPage/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
