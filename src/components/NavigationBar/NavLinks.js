import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const myStyle = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.primary.main,
        color: '#f2fbff'
    }
}))
const NavLinkText = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    margin-right: 3em;
    margin-left: ${props => props.drawer ? '1.5em' : '0em'};
    font-weight: ${props => props.isActive ? 'bold' : 'normal'};
    opacity: ${props => props.isActive ? 1 : 0.5};
    cursor: pointer;
    :hover{
        opacity: 1
    };
    `
export default function NavLinks(props) {
    const classes = myStyle()
    const navLinksArr = ['ABOUT', 'PROJECTS', 'PUBLICATIONS', 'CONTACT']
    return (
        <Box display='flex' flexDirection={props.drawer ? 'column' : 'row'} className={classes.box}>
            {
                navLinksArr.map((navText, index) => {
                    return <a>
                        <NavLinkText
                            isActive={parseInt(props.activeIndex) === index}
                            drawer={props.drawer}
                            onClick={() => {
                                if (props.drawer)
                                    props.collapseFunction()
                            }}
                        >{navText}
                        </NavLinkText>
                    </a>
                })
            }
        </Box>
    )
}
