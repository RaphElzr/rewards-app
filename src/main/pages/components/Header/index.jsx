import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = (props) => {
    const { title } = props;

    return (
        <div className='Header'>
            <h1>{title}</h1>
        </div>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired
};
