import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

import DataMap from '../../DataMap'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const myStyles = makeStyles((theme) => ({
    projectGridContainer: {
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        },
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        rowGap: '1.5em',
        columnGap: '3.5em',

    },
    singleProjectCard: {
        maxWidth: '19em',
    }
}))

function getRelevantProjects(sIndex, projectList) {
    let arr = []
    if (sIndex == 0) {
        projectList.forEach((_, index) => {
            arr.push(index)
        })
    } else {
        const tech = DataMap.project.techStack[sIndex]
        projectList.forEach((project, index) => {
            if (project.techStack.includes(tech))
                arr.push(index)
        })
    }

    return arr
}

export default function ProjectGrid(props) {
    const classes = myStyles()
    const projects = getRelevantProjects(props.selected, DataMap.project.projectList)
    console.log(projects)
    return (
        <Box display='flex' justifyContent='center' alignItems='center' margin='1em 0em 3em 0em'>
            <Box className={classes.projectGridContainer}>
                {
                    projects.map((index) => {
                        return <Box className={classes.singleProjectCard}>
                            <ProjectCard index={index} />
                        </Box>
                    })
                }
            </Box>
        </Box>
    )
}
