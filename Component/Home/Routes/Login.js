import React from 'react';
import { Col, Row, Button, Modal, FormGroup, Label, Input, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom"
class Modale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>

                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle} >
                        <Link to="/user/user/" style={{textDecoration : "none", color : "white"}}>
                        Login
                        
                        </Link>
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>


            </div>
        );
    }
}



export default Modale;