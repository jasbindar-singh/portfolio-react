import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'



export default function Button1(props) {
    const myStyles = makeStyles(() => ({
        button: {
            textTransform: 'capitalize',
            color: DataMap.color.white,
            backgroundColor: DataMap.color.darkBlue2,
            fontSize: 16,
            fontWeight: props.fontWeight ? props.fontWeight : 'bolder',
            padding: props.isFooter ? '0.2em 1em' : '0.4em 1.4em',
            transition: 'background-color 0.4s ease',
            '&:hover': {
                backgroundColor: DataMap.color.darkBlueContrast
            },
            width: props.expand ? '90%' : '',
        }
    }))
    const classes = myStyles()
    return (
        <Button className={classes.button} onClick={() => { props.onClick() }}>
            {props.buttonText}
        </Button>
    )
}
