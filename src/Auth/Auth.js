import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup />
                </Col>
                <Col md="6" className="login-col">
                    <Login />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;