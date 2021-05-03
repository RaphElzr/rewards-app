import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Image } from 'react-bootstrap';
import './styles.scss';

import { config, labels } from 'main/constants';
import { common } from 'main/services';

const RewardsModal = ({ rewards, onClose }) => {

    const renderExpiryNotice = (dateString) => {
        let daysDiff = common.daysDiff(dateString);

        if (daysDiff >= 0 && daysDiff <= config.EXPIRY_LIMIT) {
            return (
                <p><b>{labels.EXPIRES_IN + ' ' + daysDiff + ' ' + labels.DAYS}</b></p>
            );
        }
    }

    return (
        <>
            {rewards && (
                <Modal
                    show={rewards ? true : false}
                    onHide={() => onClose()}
                    centered
                    dialogClassName='RewardsModal'>
                    <Modal.Header closeButton>
                        <Modal.Title>{rewards.heading}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={rewards.image_url} alt={rewards.image_url} className='logo' />
                        <h4 className='text-secondary pt-3 pb-1'>{rewards.heading}</h4>
                        {renderExpiryNotice(rewards.usage_end_date)}
                        <p>{labels.EXPIRES_ON + ' ' + common.parseDateString(rewards.usage_end_date)}</p>
                        <p dangerouslySetInnerHTML={{ __html: rewards.body }} />
                    </Modal.Body>
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
