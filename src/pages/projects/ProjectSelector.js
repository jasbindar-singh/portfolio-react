import React from 'react'
import { Box, makeStyles, Button } from '@material-ui/core'

import DataMap from '../../DataMap'

const myStyles = makeStyles(() => ({
    projectSelectorContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2em 0em 2em 0em'
    },
    techButtonSelected: {
        margin: '0em 0.5em',
        backgroundColor: DataMap.color.lightBlue,
        color: DataMap.color.white,
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: DataMap.color.lightBlue,
        },
    },
    techButtonNotSelected: {
        margin: '0em 0.5em',
        textTransform: 'none',
        boxShadow: 'none',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        color: DataMap.color.lightGray
    }
}))

export default function ProjectSelector(props) {
    const techStack = DataMap.project.techStack
    const classes = myStyles()
    return (
        <Box className={classes.projectSelectorContainer}>
            {
                techStack.map((tech, index) => {
                    return <Button
                        className={index == props.selected ? classes.techButtonSelected : classes.techButtonNotSelected}
                        onClick={() => { props.setSelected(index) }}>
                        {tech}
                    </Button>
                })
            }
        </Box>
    )
}
