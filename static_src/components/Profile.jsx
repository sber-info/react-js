import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    render() {
        return (
            <div className='layout'>
                <h1>Profile</h1>
                <Link to='/'>Back</Link>
            </div>
        )
    };
};