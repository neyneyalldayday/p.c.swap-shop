import React from 'react'
import {Container, Pcpic} from './CardElements'

const Pcard = (props) => {
    return (
        <Container>
            <Pcpic src={props.image} />                      
        </Container>
    )
}

export default Pcard
