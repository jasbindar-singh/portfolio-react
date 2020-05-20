import React from 'react'
import { Paper, makeStyles, Avatar, Box } from '@material-ui/core'

import DataMap from '../../DataMap'

let project

const myStyles = makeStyles((theme) => ({
    containerBox: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '25%'
    },
    projectImageBox: {
        height: '13em',
        backgroundImage: project.image,
    },
    projectDescriptionBox: {
        
    }
}))

export default function ProjectCard(props) {
    project = DataMap.project[props.index]
    const classes = myStyles()
    return (
        <Paper className={classes.containerBox} elevation={3}>
            <div className={classes.projectImageBox}>

            </div>
            <Box className={classes.projectDescriptionBox}>

            </Box>
        </Paper>
    )
}
