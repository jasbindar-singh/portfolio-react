import React from 'react'
import { makeStyles, Avatar } from '@material-ui/core'

import DataMap from '../../DataMap'

const myStyles = makeStyles((theme) => ({
    contactShowcase: {
        [theme.breakpoints.down('sm')]: {
            padding: '3em 0em',
            justifyContent: 'center',
        },
        display: 'flex',
        alignItems: 'center',
        padding: '3em 0em 3em 5em',
        backgroundColor: DataMap.color.lightBlue,
        '& h1': {
            color: DataMap.color.white,
            margin: '0em 0em'
        }
    }
}))

export default function Showcase() {
    const classes = myStyles()
    return (
        <div className={classes.contactShowcase}>
            <h1>Contact</h1>

        </div>
    )
}
