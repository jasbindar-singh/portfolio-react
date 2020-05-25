import React from 'react'
import { makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'
import PostCard from '../../components/PostCard/PostCard'

const myStyles = makeStyles((theme) => ({
    postGrid: {
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        },
        width: '80%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1em',
        margin: '1em 0em 3em 0em'
    }
}))

export default function PostGrid() {
    const classes = myStyles()
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={classes.postGrid}>
                {
                    DataMap.post.slice(1).map((p, index) => {
                        return <PostCard index={index + 1} onClick={() => { window.open(p.link, '_blank') }} />
                    })
                }
            </div>
        </div>
    )
}
