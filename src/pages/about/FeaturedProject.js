import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Button2 from '../../components/Button/Button2'

const myStyles = makeStyles((theme) => ({
    featuredProjectContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em 0em 2em 0em',
        '& h1': {
            fontSize: 30,
            color: DataMap.color.lightGray
        }
    },
    projectList: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '80%',
            alignItems: 'center',
            marginBottom: '1em'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: '1.5em',
        marginBottom: '3em',
        justifyContent: 'space-evenly',
        width: '100%'
    }
}))

export default function FeaturedProject() {
    const classes = myStyles()
    return (
        <Box className={classes.featuredProjectContainer}>
            <h1>Featured Projects</h1>
            <Box className={classes.projectList}>
                <ProjectCard index={0} />
                <ProjectCard index={1} />
                <ProjectCard index={2} />
            </Box>
            <Button2 buttonText='View all projects' onClick={() => { window.location = '/projects' }} />
        </Box>
    )
}
