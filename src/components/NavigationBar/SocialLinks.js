import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const myStyles = makeStyles(() => ({
    socialIcon: {
        fontSize: 17,
        marginRight: '1.8em',
        cursor: 'pointer',
    },
}))

export default function SocialLinks() {
    const classes = myStyles()
    return (
        <Box marginLeft='1em'>
            <FontAwesomeIcon icon={faTwitter} className={classes.socialIcon} onClick={() => { window.open('https://www.google.com', '_blank') }} />
            <FontAwesomeIcon icon={faLinkedinIn} className={classes.socialIcon} onClick={() => { window.open('https://www.google.com', '_blank') }} />
            <FontAwesomeIcon icon={faGithubAlt} className={classes.socialIcon} onClick={() => { window.open('https://www.google.com', '_blank') }} />
            <FontAwesomeIcon icon={faFacebookF} className={classes.socialIcon} onClick={() => { window.open('https://www.google.com', '_blank') }} />
            <FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} onClick={() => { window.open('https://www.google.com', '_blank') }} />
        </Box>
    )
}
