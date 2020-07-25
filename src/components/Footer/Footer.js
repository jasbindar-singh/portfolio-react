import React from 'react'
import { Box, makeStyles, Avatar } from '@material-ui/core'

import DataMap from '../../DataMap'
import Button1 from '../../components/Button/Button1'

const myStyles = makeStyles((theme) => ({
    footerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        padding: '2em 0em',
        backgroundColor: DataMap.color.lightBlue,
        '& h2': {
            fontSize: 28,
            color: DataMap.color.white,
            textAlign: 'center',
            margin: '0.2em 0em',
        },
        '& p': {
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
            width: '65%',
            color: DataMap.color.white,
            textAlign: 'center',
            marginTop: '0em',
            lineHeight: '1.5em',
            '& a': {
                textDecoration: 'none',
                color: DataMap.color.darkBlueContrast2,
                cursor: 'pointer',
            }
        }
    },
    footerAvatar: {
        width: '3.7em',
        height: '3.7em',
    }
}))

export default function Footer() {
    const classes = myStyles()
    return (
        <Box className={classes.footerContainer}>
            <Avatar src={DataMap.about.image} className={classes.footerAvatar} />
            <h2>Interested in hiring me for your project?</h2>
            <p>
                Looking for a full-stack developer to build your mobile app or deploy your app to the playstore? To start an initial chat, just drop me an email at  <a href='mailto:ibtesamansari070@gmail.com?subject=Discuss a project' target='_blank'> ibtesamansari070@gmail.com </a>  or use  <a href='/contact'>  the form on the contact page  </a> .
            </p>
            <Button1 isFooter buttonText={"Let's Talk"} fontWeight={500} onClick={() => { window.location = '/contact' }} />
        </Box>
    )
}
