import React, { useState } from 'react'
import { Box, Paper, makeStyles, ListItem, ListItemIcon } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import DataMap from '../../DataMap'
import Button2 from '../../components/Button/Button2'

export default function PostCard(props) {
    const [hover, setHover] = useState(false)
    const post = DataMap.post[props.index]
    const classes = makeStyles((theme) => ({
        postCard: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '3em',
                minWidth: '19em'
            },
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            minWidth: '20em',
            maxWidth: '40%',
        },
        postImageBox: {
            height: '13em',
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            '& img': {
                height: hover ? '105%' : '100%',
                width: hover ? '105%' : '100%',
                position: 'absolute',
                objectFit: 'cover',
                filter: hover ? 'brightness(80%)' : 'brightness(100%)',
                transition: 'all 0.7s ease'
            },
        },
        postButton: {
            position: 'absolute',
        },
        postDescription: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            padding: '1em 1.5em',
            '& a': {
                textDecoration: 'none',
                color: DataMap.color.lightBlue,
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: 22,
                margin: '0.5em 0em'
            },
            '& span': {
                display: 'flex',
                alignItems: 'center',
                '& h5': {
                    color: DataMap.color.lightGray3,
                    fontWeight: 400,
                    fontSize: 14,
                    margin: '0em 0.5em',
                }
            },
            '& p': {
                color: DataMap.color.lightGray2,
                fontSize: 17,
                lightHeight: '1.5em'
            }
        }
    }))()

    return (
        <Paper className={classes.postCard}>
            <div
                className={classes.postImageBox}
                style={{ backgroundImage: post.image }}
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}>
                <img src={post.image} />
                {
                    hover ? <Button2 buttonText='Read More' onClick={() => { props.onClick() }} classes={classes.postButton} /> : <div />
                }
            </div>
            <Box className={classes.postDescription}>
                <a href={post.link} target='_blank'>{post.title}</a>
                <span>
                    <FontAwesomeIcon icon={faClock} color={DataMap.color.lightGray3} />
                    <h5>{post.date}</h5>
                </span>
                <p>{post.description}</p>
            </Box>
        </Paper>
    )
}
