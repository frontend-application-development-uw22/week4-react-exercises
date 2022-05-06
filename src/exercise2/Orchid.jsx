import React from 'react';
import PropTypes from 'prop-types';

// Here's a URL to get you started
const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';

export default function Orchid({ borderColor }) {
    return (
        <img
            src={orchidImageUrl}
            alt="orchid"
            style={{ borderColor, borderWidth: '5px', borderStyle: 'solid', width: '200px' }}
        />
    );
}

Orchid.propTypes = {
    borderColor: PropTypes.string.isRequired
};