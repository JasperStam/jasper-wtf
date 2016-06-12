import React, { PropTypes } from 'react';

const Download = ({ url }) => (
    <div>
        <a href={`static/${url}`} target="_blank">Download - {url} </a>
    </div>
);

Download.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Download;
