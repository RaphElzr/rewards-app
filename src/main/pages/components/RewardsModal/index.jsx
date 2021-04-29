import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import './styles.scss';

const RewardsModal = ({ rewards, onClose }) => {
    return (
        <>
            {rewards && (
                <Modal
                    show={rewards}
                    onHide={() => onClose()}
                    centered
                    dialogClassName='RewardsModal'>
                    <Modal.Header closeButton>
                        <Modal.Title>{rewards.heading}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default RewardsModal;

RewardsModal.propTypes = {
    rewards: PropTypes.object,
    onClose: PropTypes.func
};
