import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
    return (
        <form action="" className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={novaTarefa}
            />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    );
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}