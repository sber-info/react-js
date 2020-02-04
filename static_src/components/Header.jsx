import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
// import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'; 
import '../../node_modules/bootstrap-css-only/css/bootstrap.min.css';
// import '../../node_modules/mdbreact/dist/css/mdb.css';
// import 'mdbootstrap';


export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return (
                <MDBContainer style={{ margin: '0', backgroundColor: '#0db8d2', maxWidth: '1396px' }}>
                    <MDBNavbar
                        color='light-blue lighten-4'
                        style={{ margin: '0', maxWidth: '1396px' }}
                        light
                    >

                        <MDBNavbarBrand>{'Чат ' + this.props.chatId}</MDBNavbarBrand>
                        <MDBNavbarToggler
                            onClick={this.toggleCollapse('navbarCollapse1')}
                        />
                        <MDBCollapse
                            id='navbarCollapse1'
                            isOpen={this.state.collapseID}
                            navbar
                        >
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to='/home/'>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='/link/'>Link</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='/profile/'>Profile</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>

                    </MDBNavbar>
                </MDBContainer>
        );
    }
}