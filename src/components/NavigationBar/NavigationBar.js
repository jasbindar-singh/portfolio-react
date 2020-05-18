import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Hidden, Collapse } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'

export default function NavigationBar() {
    const [collapseOpen, setCollapseOpen] = useState(false)
    return (
        <div>
            <AppBar position='fixed' elevation={0}>
                <Box display='flex' flexDirection='column'>
                    <Toolbar variant='dense'>
                        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                            <SocialLinks />
                            <Hidden mdUp>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    style={{ fontSize: 22, cursor: 'pointer' }}
                                    onClick={() => { setCollapseOpen(!collapseOpen) }} />
                            </Hidden>
                            <Hidden smDown>
                                <NavLinks />
                            </Hidden>
                        </Box>
                    </Toolbar>
                    <Hidden mdUp>
                        <Collapse in={collapseOpen} style={{zIndex: 99 }}>
                            <NavLinks drawer collapseFunction={setCollapseOpen} />
                        </Collapse>
                    </Hidden>
                </Box>
            </AppBar>
            <Toolbar variant='dense'></Toolbar>

        </div>
    )
}