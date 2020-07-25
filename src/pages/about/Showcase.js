import React from 'react'
import { Box, makeStyles, Avatar, useTheme, useMediaQuery } from '@material-ui/core'

import DataMap from '../../DataMap'
import Button1 from '../../components/Button/Button1'

const myStyles = makeStyles((theme) => ({
    containerBox: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DataMap.color.lightBlue,
        width: '100%',
        padding: '3em 0'
    },
    profileImage: {
        height: '12em',
        width: '12em',
    },
    aboutBox: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '0em',
            padding: '1em',
            alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {
            width: '55%',
        },
        marginLeft: '3em',
        '& h4': {
            color: DataMap.color.white,
            fontFamily: 'Roboto',
            fontWeight: 'lighter',
            fontSize: 21,
            margin: '0em 0em',
        },
        '& h1': {
            [theme.breakpoints.down('sm')]: {
                fontSize: 45,
            },
            fontSize: 55,
            lineSpacing: '0.5em',
            margin: '0em 0em',
            color: DataMap.color.white,
        },
        '& p': {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center'
            },
            color: DataMap.color.white,
            lineHeight: '1.6em',
            marginTop: '0.3em',
            '& a': {
                textDecoration: 'none',
                color: DataMap.color.darkBlueContrast2
            },
        }
    },
}))

export default function Showcase() {
    const classes = myStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box className={classes.containerBox}>
            <Avatar
                className={classes.profileImage}
                variant='rounded'
                src={DataMap.about.image} />
            <Box className={classes.aboutBox}>
                <h4>Hello, my name is</h4>
                <h1>Ibtesam Ansari</h1>
                <p>I'm a full-stack developer interested in frontend and backend development for scalable android apps. I write about android development on <a href={DataMap.socialMedia.medium} target='_blank'>medium</a>. Want to know how I may help your project? Check out my
                <a href='/projects'> projects </a>
                and
                <a href={DataMap.about.resume} target='_blank'> resume </a>
                .
                </p>
                <Button1
                    buttonText='Hire Me'
                    onClick={() => { window.location = '/contact' }} expand={matches} />
            </Box>
        </Box>
    )
}
