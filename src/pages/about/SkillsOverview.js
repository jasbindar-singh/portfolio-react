import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'

const myStyles = makeStyles((theme) => ({
    containerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        '& h1': {
            fontSize: 30,
            color: DataMap.color.lightGray
        },
        '& p': {
            width: '65%',
            textAlign: 'center',
            fontSize: 18,
            lineHeight: '1.5em',
            color: DataMap.color.lightGray2,
            margin: '0em 0em 0.5em 0em',
        },
        '& a': {
            textDecoration: 'none',
            color: DataMap.color.darkBlue2,
            fontSize: 18,
            fontFamily: "Baloo Bhaina 2"
        }
    }
}))

export default function SkillsOverview() {
    const classes = myStyles()
    return (
        <Box className={classes.containerBox}>
            <h1>Skills Overview</h1>
            <p>I have 2 months of experience in building android applications for two different companies. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my skills? </p>
            <a href={DataMap.about.resume}>Check out my resume</a>
        </Box>
    )
}
