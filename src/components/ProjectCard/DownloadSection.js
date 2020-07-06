import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faGithub } from '@fortawesome/free-brands-svg-icons'

import DataMap from '../../DataMap'

const myStyles = makeStyles(() => ({
    downloadSectionContainer: {
        display: 'flex',
        justifySelf: 'end',
        height: '100%',
        justifyContent: 'end',
    },
    downloadButton: {
        display: 'flex',
        marginRight: '0.5em',
        alignSelf: 'end',
        padding: '0.3em',
        borderRadius: 3,
        marginBottom: '1em',
        height: '1.5em',
        alignItems: 'center',
        transition: 'background-color 0.4s ease',
        cursor: 'pointer',
        color: DataMap.color.blueGray,
        '&:hover': {
            backgroundColor: DataMap.color.blueGrayLight,
        }
    },
    downloadIcon: {
        marginRight: '0.5em',
        fontSize: '18px',
    }
}))

export default function DownloadSection(props) {
    const classes = myStyles()
    return (
        <div className={classes.downloadSectionContainer}>
            {
                props.googlePlay ? <div className={classes.downloadButton} onClick={() => window.open(props.googlePlay, '_blank')}>
                    <FontAwesomeIcon className={classes.downloadIcon} icon={faGooglePlay} />
                    Google Play
                </div> : <div />
            }
            {
                props.code ? <div className={classes.downloadButton} onClick={() => window.open(props.code, '_blank')}>
                    <FontAwesomeIcon className={classes.downloadIcon} icon={faGithub} />
                    Github
                </div> : <div />
            }
        </div >
    )
}
