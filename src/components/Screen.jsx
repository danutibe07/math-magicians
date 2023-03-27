import React from 'react';
import propTypes from 'prop-types';

const Screen = ({ result }) => <p id="bottom-value">{result}</p>;
Screen.propTypes = { result: propTypes.string.isRequired };

export default Screen;
