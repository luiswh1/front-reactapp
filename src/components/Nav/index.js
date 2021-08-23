import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function NavBar() {
    return(
        <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        #VouSerMeta
          </Typography>
                </Toolbar>
            </AppBar>
    )
}