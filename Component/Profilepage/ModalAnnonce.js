import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ModalAnnonce extends React.Component {
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
                <Button color="danger" onClick={this.toggle}>Ajouter une annonce</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Veuillez remplir les champs</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="exampleEmail">Ajouter le titre de l'annonce</Label>
                            <Input />
                            <Label for="exampleText">Ajouter une description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                            <Label for="exampleNumber">Prix horaire en dinars</Label>
                            <Input
                                type="number"
                                name="number"
                                id="exampleNumber"
                                placeholder="prix par heure en dinars tunisien"
                            />
                            <Label for="exampleDate">Date </Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                            />
                            <Label for="exampleSelect">Selectionnez le type de l'annonce</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option></option>
                                <option>Garde enfants</option>
                                <option>Garde animaux</option>
                                <option>Assistance personnes agées</option>

                            </Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Enregistrer </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalAnnonce;