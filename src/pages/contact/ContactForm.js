import React, { useState } from 'react'
import { makeStyles, TextField } from '@material-ui/core'


import DataMap from '../../DataMap'
import Button1 from '../../components/Button/Button2'

export default function ContactForm() {
    let name = ''
    let email = ''
    let message = ''
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [messageErr, setMessageErr] = useState(false)
    const classes = makeStyles((theme) => ({
        contactFormContainer: {
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginBottom: '2em',
            width: '50%',
            '& h1': {
                textAlign: 'center',
                marginTop: '1.5em',
                fontSize: 28,
                fontWeight: 500,
                color: DataMap.color.lightGray,
            }
        },
        nameEmailContainer: {
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                gridTemplateColumns: '1fr',
            },
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '1em'
        },
        nameField: {
            flex: 1,
            marginBottom: '1.5em',
            backgroundColor: '#ffffff',
            '& label.Mui-focused': {
                color: nameErr ? '#eb4034' : DataMap.color.darkBlue,
            },
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: nameErr ? '' : DataMap.color.lightGray3,
                },
                '&.Mui-focused fieldset': {
                    borderColor: nameErr ? '#eb4034' : DataMap.color.darkBlue2,
                },
            },
        },
        emailField: {
            flex: 1,
            marginBottom: '1.5em',
            backgroundColor: '#ffffff',
            '& label.Mui-focused': {
                color: emailErr ? '#eb4034' : DataMap.color.darkBlue,
            },
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: emailErr ? '' : DataMap.color.lightGray3,
                },
                '&.Mui-focused fieldset': {
                    borderColor: emailErr ? '#eb4034' : DataMap.color.darkBlue2,
                },
            },
        },
        textField2: {
            backgroundColor: '#ffffff',
            marginBottom: '1.5em',
            '& label.Mui-focused': {
                color: messageErr ? '#eb4034' : DataMap.color.darkBlue,
            },
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: messageErr ? '' : DataMap.color.lightGray3,
                },
                '&.Mui-focused fieldset': {
                    borderColor: messageErr ? '#eb4034' : DataMap.color.darkBlue2,
                },
            },
        }
    }))()

    function formSubmitted() {
        if (name === '' || email === '' || message === '' || nameErr || emailErr || messageErr)
            return
    }

    return (
        <div className={classes.contactFormContainer}>
            <h1>Get In Touch</h1>
            <div className={classes.nameEmailContainer}>
                <TextField
                    variant='outlined'
                    label='Name'
                    defaultValue={name}
                    error={nameErr}
                    className={classes.nameField}
                    required
                    onChange={(e) => {
                        name = e.target.value
                        if (name === '')
                            setNameErr(true)
                        else
                            setNameErr(false)
                    }}
                    size='small' />
                <TextField
                    variant='outlined'
                    label='Email'
                    defaultValue={email}
                    error={emailErr}
                    required
                    onChange={(e) => {
                        email = e.target.value
                        if (email === '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
                            setEmailErr(true)
                        else
                            setEmailErr(false)
                    }}
                    className={classes.emailField}
                    size='small' />
            </div>
            <TextField
                className={classes.textField2}
                label="Enter your message"
                error={messageErr}
                multiline
                defaultValue={message}
                onChange={(e) => {
                    message = e.target.value
                    if (message === '')
                        setMessageErr(true)
                    else
                        setMessageErr(false)
                }}
                size="medium"
                rows={13}
                variant='outlined'
            />
            <Button1 buttonText='Send it' onClick={() => { formSubmitted() }} />
        </div>
    )
}