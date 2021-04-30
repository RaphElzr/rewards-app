import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import './styles.scss';
import { labels, config } from 'main/constants';
import { common } from 'main/services';

const RewardsCard = ({ rewards, onClick }) => {
    const { image_url, heading, body } = rewards;
    const rewardsEl = useRef(null);

    useEffect(() => {
        let innerText = rewardsEl.current.innerText;

        if (innerText.length > config.BODY_LIMIT) {
            rewardsEl.current.innerText = innerText.substring(0, config.BODY_LIMIT) + '...';
        }
    });

    const renderExpiryNotice = (dateString) => {
        let daysDiff = common.daysDiff(dateString);

        if (daysDiff > 0 && daysDiff <= config.EXPIRY_LIMIT) {
            return (
                <div><b>{labels.EXPIRES_IN + ' ' + daysDiff + ' ' + labels.DAYS}</b></div>
            );
        }
    }

    const renderExpiry = (dateString) => {
        return (
            <>
                {renderExpiryNotice(dateString)}
                <span>{labels.EXPIRES_ON + ' ' + common.parseDateString(dateString)}</span>
            </>
        )
    }

    return (
        <Container fluid className='RewardsCard'>
            <Row className='flex-row'>
                <Col xs={12} sm={3} className='align-self-center'>
                    <Image src={image_url} alt={image_url} className='logo' />
                </Col>
                <Col className='pt-5 pb-2'>
                    <h4 className='text-secondary'>{heading}</h4>
                    <div className='expiry-tag'>
                        {renderExpiry(rewards.usage_end_date)}
                    </div>
                    <p className='details' ref={rewardsEl} dangerouslySetInnerHTML={{ __html: body }}></p>
                    <div className='expiry-tag-inline'>
                        {renderExpiry(rewards.usage_end_date)}
                    </div>
                    <Button block className='view-button' onClick={() => onClick(rewards)}>
                        {labels.DETAILS}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default RewardsCard;

RewardsCard.propTypes = {
    rewards: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};
