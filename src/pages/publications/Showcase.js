import React from 'react'
import { makeStyles, Box, Avatar, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt, faStackOverflow, faMediumM } from '@fortawesome/free-brands-svg-icons'


import DataMap from '../../DataMap'

const myStyles = makeStyles((theme) => ({
    publicationContainer: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3em 0em',
        },
        display: 'flex',
        padding: '3em 0em 2em 6em',
        backgroundColor: DataMap.color.lightBlue
    },
    pubImage: {
        height: '8em',
        width: '8em',
    },
    pubDesc: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            alignItems: 'center'
        },
        display: 'flex',
        flexDirection: 'column',
        color: DataMap.color.white,
        marginLeft: '1.5em',
        '& h1': {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                marginTop: '0.5em'
            },
            margin: '0em 0em'
        },
        '& p': {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                width: '100%'
            },
            fontFamily: "'Baloo Bhaina 2'",
            fontSize: 20,
            width: '60%',
            lineHeight: '1.5em',
            marginTop: '0.5em'
        },
        '& ul': {
            display: 'flex',
            listStyle: 'none',
            margin: '0em 0em',
            padding: '0em 0em',
            '& li': {
                backgroundColor: DataMap.color.lightBlueContrast,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2em',
                width: '1.8em',
                marginRight: '0.7em',
                borderRadius: 3,
                transition: 'background-color 0.4s ease',
                '&:hover': {
                    backgroundColor: DataMap.color.darkBlueContrast,
                }
            },
        },
    },
    pubIcon: {
        height: '1em',
        width: '1em'
    }
}))

export default function Showcase() {
    const classes = myStyles()
    const btnArr = [
        DataMap.socialMedia['twitter'],
        DataMap.socialMedia['linkedin'],
        DataMap.socialMedia['github'],
        DataMap.socialMedia['stackoverflow'],
        DataMap.socialMedia['medium'],
    ]
    const btnIcon = [
        <FontAwesomeIcon icon={faTwitter} className={classes.pubIcon} />,
        <FontAwesomeIcon icon={faLinkedinIn} className={classes.pubIcon} />,
        <FontAwesomeIcon icon={faGithubAlt} className={classes.pubIcon} />,
        <FontAwesomeIcon icon={faStackOverflow} className={classes.pubIcon} />,
        <FontAwesomeIcon icon={faMediumM} className={classes.pubIcon} />,
    ]
    return (
        <Box className={classes.publicationContainer}>
            <Avatar src={DataMap.about.image} className={classes.pubImage} />
            <Box className={classes.pubDesc}>
                <h1>Ibtesam Ansari's Publications</h1>
                <p>I write about android and hybrid app development. You can follow me via the various channels below:</p>
                <ul>
                    {
                        btnArr.map((item, index) => {
                            return <li className={classes.pubAvatar}>
                                {btnIcon[index]}
                            </li>
                        })
                    }
                </ul>
            </Box>
        </Box>
    )
}
