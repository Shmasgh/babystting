import React from 'react';
import { Button, Fade } from 'reactstrap';
import './User.css'
import ModalAnnonce from './ModalAnnonce'
import UserAds from '../Ads/UserAds'
import { Link } from 'react-router-dom'


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }
    render() {
        return (
            <div>

                <ModalAnnonce />
                <Button color="primary" onClick={this.toggle} >
                    <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
                        7el om il liste
                        </Link>
                </Button>{' '}

                <Button color="primary">Modifier mon profil</Button>{' '}

                <Button color="primary" onClick={this.toggle}>Mes Annonces</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <UserAds />
                </Fade>

            </div>


        )
    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}