import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'

const myStyles = makeStyles((theme) => ({
    projectShowcaseContainer: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            padding: '1em 1em'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        padding: '1em 6.5em',
        backgroundColor: DataMap.color.lightBlue,
        color: DataMap.color.white,
        '& h1': {
            margin: '1em 0em 0.5em 0em',
        },
        '& h3': {
            margin: '0em 0em 0.8em 0em',
            fontFamily: "'Baloo Bhaina 2'",
            textAlign: 'center',
            lineHeight: '1.5em',
            fontWeight: 400,
            fontSize: 20,
        }
    }
}))

export default function Showcase() {
    const classes = myStyles()
    return (
        <Box className={classes.projectShowcaseContainer}>
            <h1>Projects</h1>
            <h3>All my projects to show you what I can offer and how I work</h3>
        </Box>
    )
}
