import React from 'react'
import { Box, makeStyles, Card, CardContent, Avatar, Paper, List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import DataMap from '../../DataMap'

const myStyles = makeStyles((theme) => ({
    containerBox: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '4em',
            minWidth: '20em'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        minWidth: '25%',
        position: 'relative',
        paddingBottom: '2em',
        '& h3': {
            textTransform: 'capitalize',
            color: DataMap.color.lightGray,
            fontWeight: 500,
            marginTop: '2.5em',
            fontSize: 20,
            marginBottom: '0em',
        }
    },
    skillIcon: {
        height: '3.5em',
        width: '3.5em',
        backgroundColor: DataMap.color.lightBlue,
        position: 'absolute',
        top: 0,
        marginTop: '-1.5em',
        '& img': {
            height: '60%',
            width: '60%',
        }
    },
    skillListItem: {
        padding: '0.1em 0em',
    },
    skillListIcon: {
        color: DataMap.color.lightBlue
    },
}))

export default function SkillCard(props) {
    const classes = myStyles()
    return (
        <Paper className={classes.containerBox} elevation={3}>
            <Avatar className={classes.skillIcon}>
                <img src={DataMap.skill[props.skillName].icon}></img>
            </Avatar>
            <h3>{props.skillName}</h3>
            <List style={{ alignSelf: 'flex-start', marginLeft: '3em' }}>
                {
                    DataMap.skill[props.skillName].list.map(skill => {
                        return <ListItem className={classes.skillListItem} >
                            <ListItemIcon className={classes.skillListIcon} style={{ minWidth: 30 }}>
                                <FontAwesomeIcon icon={faCheck} />
                            </ListItemIcon>
                            <ListItemText style={{ color: DataMap.color.lightGray2 }}>
                                {skill}
                            </ListItemText>
                        </ListItem>
                    })
                }
            </List>
        </Paper>
    )
}
