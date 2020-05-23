import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

import DataMap from '../../DataMap'



export default function Button2(props) {
    const myStyles = makeStyles(() => ({
        button: {
            textTransform: 'none',
            color: DataMap.color.white,
            backgroundColor: DataMap.color.lightBlue,
            fontSize: 16,
            fontWeight: 500,
            transition: 'background-color 0.4s ease',
            '&:hover': {
                backgroundColor: DataMap.color.lightBlueContrast
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
