import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
const useStyles = makeStyles(theme => ({
    heading: {
        display: 'flex',
        fontWeight: 'bold',
        justifyContent: 'space-between',

    }
}))


function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.heading}>
                    <Typography variant="h4">ţ๏๏ď๏</Typography>
                    <Typography variant="h6">αѕ𝓖ₐᖇ ☠</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
