import React from 'react'
import { Avatar, makeStyles, Paper } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt, faStackOverflow, faMediumM } from '@fortawesome/free-brands-svg-icons'

import ShowCase from './Showcase'
import DataMap from '../../DataMap'
import ContactForm from './ContactForm'

const myStyles = makeStyles((theme) => ({
    contactAvatar: {
        height: '4em',
        width: '4em',
        margin: '3em 0em 0em 0em'
    },
    contactCardContainer: {
        [theme.breakpoints.down('sm')]: {
            margin: '0 0'
        },

    },
    contactCard: {
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
        display: 'flex',
        flexDirection: 'column',
        padding: '1em 0em',
        margin: '1em 0em',
        width: '50%',
        '& p': {
            [theme.breakpoints.down('sm')]: {
                width: '80%',
                textAlign:'center'
            },
            lineHeight: '1.5em',
            color: DataMap.color.lightGray2,
            margin: '1em 2em',
            '& a': {
                textDecoration: 'none',
                color: DataMap.color.lightBlue,
                cursor: 'pointer',
            }
        },
        '& h5': {
            [theme.breakpoints.down('sm')]: {
                margin: '0em 1em'
            },
            color: DataMap.color.lightGray,
            fontSize: 16,
            margin: '0em 0em',
            textAlign: 'center',
        }
    },
    contactIconList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactIcon: {
        padding: '0.7em 0.5em',
        color: DataMap.color.white,
        borderRadius: 3,
        marginRight: '1em',
        cursor: 'pointer'
    }
}))

function socialIconOnClick(name) {
    window.open(DataMap.socialMedia[name], '_blank')
}

export default function Contact() {
    const classes = myStyles()
    return (
        <div>
            <ShowCase />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Avatar src={DataMap.about.image} className={classes.contactAvatar} />
                <Paper className={classes.contactCard}>
                    <p>
                        I'm currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my <a href='/projects'> projects </a> and my <a href={DataMap.about.resume} target='_blank'>resume</a>.
                    </p>
                    <h5>You can also find me on the following channels </h5>
                    <ul className={classes.contactIconList}>
                        <FontAwesomeIcon icon={faTwitter} className={classes.contactIcon} style={{ backgroundColor: DataMap.color.lightBlue }} onClick={() => { socialIconOnClick('twitter') }} />
                        <FontAwesomeIcon icon={faLinkedinIn} className={classes.contactIcon} style={{ backgroundColor: DataMap.color.darkBlue2 }} onClick={() => { socialIconOnClick('linkedin') }} />
                        <FontAwesomeIcon icon={faGithubAlt} className={classes.contactIcon} style={{ backgroundColor: DataMap.color.lightGray2 }} onClick={() => { socialIconOnClick('github') }} />
                        <FontAwesomeIcon icon={faStackOverflow} className={classes.contactIcon} style={{ backgroundColor: DataMap.color.orange }} onClick={() => { socialIconOnClick('stackoverflow') }} />
                        <FontAwesomeIcon icon={faMediumM} className={classes.contactIcon} style={{ backgroundColor: DataMap.color.green }} onClick={() => { socialIconOnClick('medium') }} />
                    </ul>
                </Paper>
                <ContactForm />
            </div>

        </div>
    )
}
