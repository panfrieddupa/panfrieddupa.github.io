import React from "react"
import { Card } from 'react-bootstrap'
import './Portfolio.css'

function AboutCards({ ides }) {

    return (
        <Card className='Students'>
            <Card.Img variant='top' src={require(`../img/${ides.img}`)} />
            <Card.Body>
                <Card.Title className='card-title'>{ides.name}</Card.Title>
                <Card.Text className='card-text'>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AboutCards;