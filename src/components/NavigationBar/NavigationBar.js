import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Hidden } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'


export default function NavigationBar() {
    const [collapseOpen, setCollapseOpen] = useState(false)
    const collapseFunction = (collapseStatus) => {
        setCollapseOpen(collapseStatus)
    }

    return (
        <div>
            <AppBar position='fixed' elevation={0}>
                <Toolbar variant='dense'>
                    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                        <SocialLinks />
                        <Hidden mdUp>
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 22, cursor: 'pointer' }} onClick={() => { collapseFunction(!collapseOpen) }} />
                        </Hidden>
                        <Hidden smDown>
                            <NavLinks />
                        </Hidden>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar variant='dense'></Toolbar>
            <Hidden mdUp smDown={!collapseOpen}>
                <NavLinks drawer collapseFunction={collapseFunction} />
            </Hidden>
        </div>
    )
}