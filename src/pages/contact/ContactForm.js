import React, { useState } from 'react'
import { makeStyles, TextField, Button, Snackbar, Slide } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import firebase from '../../Firebase'

import DataMap from '../../DataMap'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [messageErr, setMessageErr] = useState(false)
    const [open, setOpen] = useState(false)
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
            },
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
        },
        contactSubmitButton: {
            textTransform: 'none',
            color: DataMap.color.white,
            backgroundColor: DataMap.color.lightBlue,
            fontSize: 16,
            fontWeight: 500,
            padding: '0.2em 0.5em',
            transition: 'background-color 0.4s ease',
            '&:hover': {
                backgroundColor: DataMap.color.lightBlueContrast
            },
        }
    }))()

    let ref = firebase.firestore().collection('CONTACT')

    function handleSubmit(e) {
        e.preventDefault()

        if (name === '') {
            setNameErr(true)
            return
        }
        else
            setNameErr(false)

        if (e.target.value === '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr(true)
            return
        }
        else
            setEmailErr(false)

        if (message === '') {
            setMessageErr(true)
            return
        }
        else
            setMessageErr(false)


        if (name === '' || email === '' || message === '' || nameErr || emailErr || messageErr)
            return



        ref.add({
            name: name,
            email: email,
            message: message
        }).then((_) => {
            setName('')
            setEmail('')
            setMessage('')
            setNameErr(false)
            setEmailErr(false)
            setMessageErr(false)
            setOpen(true)
        })


    }

    return (
        <form className={classes.contactFormContainer}
            onSubmit={handleSubmit}>
            <h1>Get In Touch</h1>
            <div className={classes.nameEmailContainer}>
                <TextField
                    variant='outlined'
                    label='Name'
                    name="name"
                    defaultValue={name}
                    error={nameErr}
                    value={name}
                    className={classes.nameField}
                    required
                    onChange={(e) => setName(e.target.value)}
                    size='small' />
                <TextField
                    variant='outlined'
                    label='Email'
                    name="email"
                    value={email}
                    defaultValue={email}
                    error={emailErr}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.emailField}
                    size='small' />
            </div>
            <TextField
                className={classes.textField2}
                label="Enter your message"
                error={messageErr}
                multiline
                required
                value={message}
                name="message"
                defaultValue={message}
                onChange={(e) => setMessage(e.target.value)}
                size="medium"
                rows={13}
                variant='outlined'
            />
            <Button className={classes.contactSubmitButton} type="submit" >Send it</Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                TransitionComponent={Slide}
                key={Slide.name}
                onClose={() => { setOpen(false) }}>
                <Alert variant="filled" severity="success">
                    Got it! I will get back to you soon.
                </Alert>
            </Snackbar>
        </form>
    )
}
