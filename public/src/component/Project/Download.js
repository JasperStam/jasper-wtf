import React, { PropTypes } from 'react';

const Download = ({ url }) => (
    <a href={`static/${url}`} target="_blank">Download - {url} </a>
);

Download.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Download;
