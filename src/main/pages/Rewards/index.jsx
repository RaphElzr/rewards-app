import React, { useState, useEffect } from 'react';
import './styles.scss';

import Header from './../components/Header';
import RewardsCard from './../components/RewardsCard';
import RewardsModal from './../components/RewardsModal';
import { labels } from '../../constants';
import { RewardsService } from './../../services';

const Rewards = () => {
    const [rewardsList, setRewardsList] = useState([]);
    const [activeRewards, setActiveRewards] = useState();

    useEffect(() => {
        RewardsService.getRewards()
            .then((res) => {
                setRewardsList(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const renderRewards = () => {
        let rewardsEl = [];

        rewardsList.forEach((reward, index) => {
            rewardsEl.push(<RewardsCard key={index} rewards={reward} onClick={setActiveRewards} />);
        });

        return rewardsEl;
    };

    return (
        <div className='Rewards'>
            <Header title={labels.REWARDS_TITLE} />
            <div className='content'>{renderRewards()}</div>
            <RewardsModal rewards={activeRewards} onClose={() => setActiveRewards(undefined)} />
        </div>
    );
};

export default Rewards;
