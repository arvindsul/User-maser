import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../App.css'
import {Card, Container, Form,Row ,Col,Button,Image} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {

const data = useSelector(state=>state.userSignin)

    return (
        <div className="login_imag">
        {JSON.stringify(data)}
        <Image src={process.env.PUBLIC_URL+"/images/user_login.jpg"} fluid></Image>
        <Form className="form_login">
            <Row>
            <Form.Group>
            <Form.Label name="user_name">User Name</Form.Label>
            <Form.Control type="text" name="user_name" value="" placeholder="Enter name"/>
             </Form.Group>
            </Row>
            <Row>
            <Form.Group>
            <Form.Label name="email">Email</Form.Label>
             <Form.Control type="email" name="email" value="" placeholder="Enter Email"/>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group>
            <Form.Label name="password">Password</Form.Label>
             <Form.Control type="password" name="password" value="" placeholder="Enter Password"/>
             </Form.Group>
            </Row>
            <Row>
            <Button variant="primary" type="submit">
                   Login
            </Button>
            </Row>
        </Form>
        </div>
    )
}
export default Login;
