import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


export default class Example extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleFirstName">First Name</Label>
                    <Input type="text" name="FirstName" id="FirstName" placeholder="First Name" />

                </FormGroup>
                <FormGroup>
                    <Label for="exampleLastName">Last Name</Label>
                    <Input type="text" name="LastName" id="exampleLastName" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDateBirth"> Date of birth</Label>
                    <Input type="text" name="DateBirth" id="DateBirth" placeholder="enter your date birth " />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail"> Email</Label>
                    <Input type="text" name="Email" id="exampleEmail" placeholder="enter your email " />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePhone"> Password </Label>
                    <Input type="text" name="Password" id="examplepassword" placeholder="Password " />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePhone"> Phone</Label>
                    <Input type="text" name="Phone" id="examplePhone" placeholder="enter your phone number " />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAdress"> Adress</Label>
                    <Input type="text" name="Adress" id="exampleAdress" placeholder="enter your Adress" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleOccupation"> Occupation</Label>
                    <Input type="text" name="Occupation" id="exampleOccupation" placeholder="" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleMotivation">Motivation</Label>
                    <Input type="text" name="Motivation" id="exampleMotivation" />
                </FormGroup>

                <Row>
                    <Col xs={6} md={4}>
                        <img alt="" src="/https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/account-512.png" rounded />
                    </Col>

                </Row>

                <FormGroup>
                    <Label for="examplePieceIdentity">Pièce d'identité</Label>
                    <Input type="file" name="PieceIdentity" id="examplePieceIdentity" />

                </FormGroup>
                <FormGroup>
                    <Label for="exampleCV">Curriculum Vitae</Label>
                    <Input type="file" name="CV" id="exampleCV" />

                </FormGroup>
                <FormGroup>
                    <Label for="exampleB3"> bulletin 3</Label>
                    <Input type="file" name="B3" id="exampleB3" />
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
            </Label>
                </FormGroup>
                <Button>Retour</Button>                   <Button>Suivant</Button>

            </Form>
        );
    }
}
