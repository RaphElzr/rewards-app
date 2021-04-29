import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import './styles.scss';
import { labels } from 'main/constants';

const RewardsCard = ({ rewards, onClick }) => {
    const { image_url, heading, body } = rewards;

    return (
        <div className='RewardsCard'>
            <Container fluid>
                <Row>
                    <Col sm={12} md={3}>
                        <Image src={image_url} alt={image_url} className='logo' />
                    </Col>
                    <Col>
                        <div>{heading}</div>
                        <span className='details' dangerouslySetInnerHTML={{ __html: body }}></span>
                        <Button block className='view-button' onClick={() => onClick(rewards)}>
                            {labels.DETAILS}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RewardsCard;

RewardsCard.propTypes = {
    reward: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};
