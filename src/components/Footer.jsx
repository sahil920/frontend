import React from 'react'
import "../index.css"
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className='text-center'>
                        <span > copyright &copy; Sahil</span>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Footer