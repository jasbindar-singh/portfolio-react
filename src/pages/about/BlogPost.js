import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'
import Button2 from '../../components/Button/Button2'
import PostCard from '../../components/PostCard/PostCard'

export default function BlogPost() {
    const classes = makeStyles((theme) => ({
        blogPostContainer: {
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
        blogList: {
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                width: '80%',
                alignItems: 'center',
                marginBottom: '1em'
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'strech',
            marginTop: '1.5em',
            marginBottom: '3em',
            justifyContent: 'space-evenly',
            width: '100%',
        }
    }))()
    return (
        <Box className={classes.blogPostContainer}>
            <h1>Latest Blog Post</h1>
            <Box className={classes.blogList}>
                <PostCard index={0} onClick={() => { window.open(DataMap.post[0].link, '_blank') }} />
                <PostCard index={1} onClick={() => { window.open(DataMap.post[0].link, '_blank') }} />
            </Box>
            <Button2 buttonText='View all posts' onClick={() => { window.location = '/publications' }} />
        </Box>
    )
}
