import React, {Component, Fragment } from 'react'
import {Modal, Form, Button} from 'react-bootstrap';

export default class loginAuth extends Component {
    constructor(props){
        super(props)
        this.wrapper = React.createRef();
        this.state = {
            loginEmail: 'test@email.com' , // is a default user create for testing.
            loginPass : '1234567', 
            authenticationCheck : false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault(); 
        if(event.target[0].value === 'test@email.com' &&  event.target[1].value === '1234567' ){
            this.setState({loginEmail: '' , loginPass : ''})
            this.props.valid();
            this.props.onHide();
        }else {
               this.setState({authenticationCheck : true})
        }
      }
    render() {
        return(
            <Fragment>
                <Modal ref={this.wrapper} show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                       <Modal.Title id="example-custom-modal-styling-title">
                         Sign in!
                       </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id="loginEmail" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                                <Form.Text className="invalid-feedback">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="loginPass" value={this.state.loginPass} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Text className="invalid-feedback text-dark" style={this.state.authenticationCheck ? {"display":"block","marginBottom":"10px","fontWeight":"400"} : {'display': 'none'} }>
                                Please be Use this Email <b>test@email.com</b> and Password <b>1234567 </b>
                            </Form.Text>
                            <Button className="mybtn" variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </Modal.Body>
                   </Modal>
            </Fragment>
        )
    }
}

 