import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
export default function ButtonActions({
    primaryBtn,
    secondaryBtn,
    handleActionPrimary,
    handleActionSecondary,
}) {
    const mobileMatched = useMediaQuery('(max-width: 768px)');

    return (
        <div style={{ minWidth: mobileMatched ? '120px' : '155px' }}>
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

            {mobileMatched ? (
                <IconButton aria-label="delete">
                    <DeleteIcon style={{ color: '#d9534f' }} />
                </IconButton>
            ) : (
                <Button
                    variant="contained"
                    size="small"
                    onClick={handleActionSecondary}
                    style={{ background: '#d9534f', color: '#ffffff' }}
                >
                    {secondaryBtn}
                </Button>
            )}
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
