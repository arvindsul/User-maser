import React,{useState}from 'react'
import {Card, Container, Form,Row ,Col,Button,Image,Check} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { register } from '../actions/userActions';

const Register = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        first_name:'',
        last_name:'',
        gender:'',
        email:'',
        password:'',
        password:'',
        conf_password:''  
    });
    const data = useSelector(state=>state.userSignin)
    
    const history = useHistory();
    const onChangeHandler =(e)=>{
      setUser({...user, [e.target.name]:e.target.value});
      
     
      console.log('calling');
    }
    const onSubmitHandler =(e)=>{
         e.preventDefault();
        alert('submmit data');
        dispatch(register(user))
        history.push('/login');
    }
    return (
    <div >
         <h1 className="spane">Register Form</h1>
         <Link to='/login'>Click For Login</Link>
        <Form  onSubmit={onSubmitHandler}>
        <Row>
        <Col>
        <Form.Label >First Name:</Form.Label>
        <Form.Control type="text" name="first_name" onChange={(e)=>onChangeHandler(e)} 
        placeholder="Enter First"
        value={user.first_name}
        />
        </Col>
        <Col>
        <Form.Label >Last Name :</Form.Label>
        <Form.Control type="text" name="last_name" onChange={(e)=>onChangeHandler(e)} 
        placeholder="Enter Last"
        value={user.last_name}/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Form.Label as="legend" column sm={2}>
        Gender :
      </Form.Label>
       <Row>
       <Col>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          id="male"
          onChange={(e)=>onChangeHandler(e)}
          value={user.gender}
        />
        </Col>
        <Col>
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          id="female"
          onChange={(e)=>onChangeHandler(e)}
          value={user.gender}
        />
        </Col>
        </Row>
        </Col>
        <Col>
        <Form.Label >Email</Form.Label>
         <Form.Control type="email" name="email" 
         onChange={(e)=>onChangeHandler(e)} 
         placeholder="Enter Email"
         value={user.email}/>
         </Col>
        </Row>
        <Row>
        <Col>
        <Form.Label >Password</Form.Label>
         <Form.Control type="password" name="password" onChange={(e)=>onChangeHandler(e)}
          placeholder="Enter Password"
          value={user.password}/>
        </Col>
        <Col>
        <Form.Label >Confirm Password</Form.Label>
         <Form.Control type="password" name="conf_password" onChange={(e)=>onChangeHandler(e)}
          placeholder="COnfirm Password"
          value={user.conf_password}
          />
        </Col>
        </Row>
        <Row>
        <Form.Group>
        <Button variant="primary" type="submit" className="register">
               register
        </Button>
        </Form.Group>
        </Row>
    </Form>
</div>
    )
}

export default Register
