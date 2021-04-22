import React from 'react';
import Buttons from './Buttons';
import PropTypes from 'prop-types';

const MainBord = () => {
    return (
        <div className="main">
            <Buttons />
        </div>
    )
}

MainBord.propTypes = {
    Buttons: PropTypes.func,
}

export default MainBord;