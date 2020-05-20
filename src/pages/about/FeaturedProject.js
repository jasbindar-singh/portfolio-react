import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

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
        }
    },
    projectList: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '80%',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1.5em',
        marginBottom: '3em',
        justifyContent: 'space-evenly',
        width: '100%'
    }
}))

export default function FeaturedProject() {
    const classes = myStyles()
    return (
        <Box className={classes.containerBox}>
            <h1>Featured Projects</h1>
            <Box className={classes.projectList}>
                <ProjectCard index={0} />
            </Box>
        </Box>
    )
}
