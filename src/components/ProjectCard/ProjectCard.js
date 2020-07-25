import React, { useState } from 'react'
import { Paper, makeStyles, Box, Chip } from '@material-ui/core'

import DataMap from '../../DataMap'
import DownloadSection from './DownloadSection'


export default function ProjectCard(props) {
    const project = DataMap.project.projectList[props.index]
    const [hover, setHover] = useState(false)
    const myStyles = makeStyles((theme) => ({
        projectCard: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '3em',
                minWidth: '18em',
                height: 'auto'
            },
            display: 'flex',
            flexDirection: 'column',
            width: '25%',
            minWidth: '20em',
            height: props.about ? 'auto' : '100%'
        },
        projectImageBox: {
            height: '13em',
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            '& img': {
                height: '100%',
                width: '100%',
                filter: hover ? 'brightness(100%)' : 'brightness(90%)',
            },
            '& h1': {
                position: 'absolute',
                fontSize: '38px',
                fontFamily: "'Baloo Bhaina 2'",
                fontWeight: 500,
                color: DataMap.color.white,
                display: hover ? 'none' : 'block'
            }
        },
        projectOverlay: {
            position: 'absolute',
            backgroundColor: project.themeColor,
            height: '100%',
            width: '100%',
            color: DataMap.color.white,
            opacity: '0.9',
            padding: '1.5em 1.5em',
            top: hover ? '0%' : '100%',
            textOverflow: 'ellipsis',
            transition: 'top 0.5s ease',
            '& h4': {
                padding: '0em 0em',
                margin: '1em 1em',
                fontSize: 18
            },
            '& p': {
                padding: '0em 0em',
                margin: '1em 1em',
                lineHeight: '1.5em'
            },
        },
        projectDescriptionBox: {
            position: 'relative',
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            '& h3': {
                textDecoration: 'none',
                color: DataMap.color.lightGray2,
                fontWeight: 500,
                cursor: 'default',
                fontSize: 22,
                margin: '0.5em 0em'
            },
            '& ul': {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                width: '90%',
                margin: '0em 0em 10em 0em',
                padding: '0em 0em',
                rowGap: '0.4em',
                columnGap: '0em',
                marginBottom: '1em',
                listStyle: 'none',
            },

        },
        techChip: {
            backgroundColor: DataMap.color.blueGray,
            color: DataMap.color.white,
            marginLeft: '10px'
        },
    }))
    const classes = myStyles()
    return (
        <Paper className={classes.projectCard} elevation={3}>
            <div
                className={classes.projectImageBox}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}>
                <img src={project.image} alt='Project Image'/>
                <h1>{project.name}</h1>
                <div className={classes.projectOverlay}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </div>
            </div>
            <Box className={classes.projectDescriptionBox}>
                <h3>{project.category}</h3>
                <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {
                        project.techStack.map(tech => {
                            return <li>
                                <Chip
                                    label={tech}
                                    size='small'
                                    className={classes.techChip} />
                            </li>
                        })
                    }
                </ul>
                <DownloadSection code={project.code} googlePlay={project.googlePlay} />
            </Box>
        </Paper>
    )
}
