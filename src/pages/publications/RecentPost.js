import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap.js'
import Button2 from '../../components/Button/Button2'

const myStyles = makeStyles((theme) => ({
    recentPostContainer: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: 'auto',
        },
        position: 'relative',
        display: 'flex',
        width: '80%',
        minHeight: '18em',
        margin: '3em 0em 2em 0em'
    },
    recentPostDesc: {
        marginBottom: '1em',
        flex: 2,
        padding: '0em 1em',
        '& h3': {
            fontSize: 20,
            fontWeight: 500,
            color: DataMap.color.lightBlue,
        },
        '& p': {
            fontSize: 16,
            color: DataMap.color.lightGray2,
            lineHeight: '1.5em'
        }
    },
    recentChip: {
        position: 'absolute',
        width: 'auto',
        top: 10,
        left: 10,
        backgroundColor: DataMap.color.green,
        color: DataMap.color.white,
        borderRadius: 3,
        fontWeight: 700,
        padding: '0.5em',
    }
}))

export default function RecentPost() {
    const classes = myStyles()
    const post = DataMap.post[0]
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={3} className={classes.recentPostContainer}>
                <div style={{ maxHeight: '18em', flex: 3 }}>
                    <img src={post.image} style={{ height: '100%', width: '100%' }} />
                </div>
                <div className={classes.recentPostDesc}>
                    <div className={classes.recentChip} >
                        Recent
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <Button2 buttonText="Read more" onClick={() => { window.open(post.link, '_blank') }} />
                </div>
            </Paper>
        </div>

    )
}
