import React from 'react'
import { Box, makeStyles, Avatar } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import DataMap from '../../DataMap'

const myStyles = makeStyles(() => ({
    avatar: {
        backgroundColor: DataMap.color.darkBlue,
        fontSize: 17,
        height: '1.8em',
        width: '1.8em',
        marginRight: '0.9em',
        transition: 'background-color 0.4s ease',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: DataMap.color.darkBlueContrast
        }
    },
}))

export default function SocialLinks() {
    const classes = myStyles()
    return (
        <Box marginLeft='1em' display='flex'>
            <Avatar className={classes.avatar}>
                <FontAwesomeIcon
                    icon={faTwitter}
                    onClick={() => { window.open(DataMap.socialMedia.twitter, '_blank') }}
                />
            </Avatar>
            <Avatar className={classes.avatar}>
                <FontAwesomeIcon
                    icon={faLinkedinIn}
                    onClick={() => { window.open(DataMap.socialMedia.linkedin, '_blank') }}
                />
            </Avatar>
            <Avatar className={classes.avatar}>
                <FontAwesomeIcon
                    icon={faGithubAlt}
                    onClick={() => { window.open(DataMap.socialMedia.github, '_blank') }}
                />
            </Avatar>
            <Avatar className={classes.avatar}>
                <FontAwesomeIcon
                    icon={faFacebookF}
                    onClick={() => { window.open(DataMap.socialMedia.facebook, '_blank') }}
                />
            </Avatar>
            <Avatar className={classes.avatar}>
                <FontAwesomeIcon
                    icon={faInstagram}
                    onClick={() => { window.open(DataMap.socialMedia.instagram, '_blank') }}
                />
            </Avatar>
        </Box>
    )
}
