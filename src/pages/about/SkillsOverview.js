import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'
import SkillCard from '../../components/SkillCard/SkillCard'

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
            [theme.breakpoints.down('sm')]: {
                width: '90%'
            },
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
            fontFamily: "'Baloo Bhaina 2'"
        }
    },
    skillList: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: '5em',
        marginBottom: '2em',
        justifyContent: 'space-evenly',
        width: '100%'
    }
}))

export default function SkillsOverview() {
    const classes = myStyles()
    return (
        <Box className={classes.containerBox}>
            <h1>Skills Overview</h1>
            <p>I have been developing android apps for 2+ years. I have started working with Flutter framework recently. Below is a quick overview of my main technical skills set and tools I use. Want to find out more about my skills? </p>
            <a href={DataMap.about.resume} target='_blank'>Check out my resume</a>
            <Box className={classes.skillList}>
                <SkillCard skillName='frontend' />
                <SkillCard skillName='backend' />
                <SkillCard skillName='others' />
            </Box>
        </Box>
    )
}
