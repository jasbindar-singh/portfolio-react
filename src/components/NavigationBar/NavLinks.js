import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import DataMap from '../../DataMap'

export default function NavLinks(props) {

    const myStyles = makeStyles((theme) => ({
        box: {
            backgroundColor: theme.palette.primary.main
        },
        navlink: {
            fontFamily: 'Roboto',
            fontSize: 14,
            textDecoration: 'none',
            color: DataMap.color.white,
            marginLeft: props.drawer ? '2em' : '0em',
            marginTop: props.drawer ? '1em' : '0em',
            marginBottom: props.drawer ? '1em' : '0em',
            marginRight: '3em',
            opacity: 0.5,
            "&:hover": {
                opacity: 1
            }
        }
    }))

    const classes = myStyles()

    return (
        <Box display='flex' flexDirection={props.drawer ? 'column' : 'row'} className={classes.box}>
            {
                DataMap.routes.map((navLink) => {
                    return <NavLink
                        to={navLink.route}
                        className={classes.navlink}
                        activeStyle={{ opacity: 1, fontWeight: 'bold' }}
                        exact
                        onClick={() => {
                            if (props.drawer)
                                props.collapseFunction()
                        }}
                    >{navLink.name}
                    </NavLink>
                })
            }
        </Box >
    )
}
