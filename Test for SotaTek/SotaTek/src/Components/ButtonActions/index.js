import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function ButtonActions({
    primaryBtn,
    secondaryBtn,
    handleActionPrimary,
    handleActionSecondary,
}) {
    return (
        <div>
            <Button
                variant="contained"
                size="small"
                onClick={handleActionPrimary}
                style={{
                    background: '#00bcd4',
                    color: '#ffffff',
                    marginRight: '5px',
                }}
            >
                {primaryBtn}
            </Button>
            <Button
                variant="contained"
                size="small"
                onClick={handleActionSecondary}
                style={{ background: '#d9534f', color: '#ffffff' }}
            >
                {secondaryBtn}
            </Button>
        </div>
    );
}

ButtonActions.propTypes = {
    primaryBtn: PropTypes.string,
    secondaryBtn: PropTypes.string,
    handleActionPrimary: PropTypes.func,
    handleActionSecondary: PropTypes.func,
};

ButtonActions.defaultProps = {
    primaryBtn: 'Detail',
    secondaryBtn: 'Remove',
};
