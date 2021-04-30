import React, { useState, useEffect } from 'react';
import './styles.scss';

import Header from './../components/Header';
import RewardsCard from './../components/RewardsCard';
import RewardsModal from './../components/RewardsModal';
import SearchInput from '../components/SearchInput';
import { labels, regexp } from '../../constants';
import { common, RewardsService } from './../../services';

const Rewards = () => {
    const [rewardsList, setRewardsList] = useState([]);
    const [search, setSearch] = useState('');
    const [activeRewards, setActiveRewards] = useState();

    useEffect(() => {
        RewardsService.getRewards()
        .then((res) => {
            const { data } = res;

            if (search.length > 0) {
                let newRewardsList = [];
                let searchList = search.split(regexp.SPACE);
    
                data.forEach((item) => {
                    let hasMatch = true;

                    searchList.forEach((search) => {
                        search = search.toLowerCase();
                        
                        hasMatch = hasMatch && (
                            common.parseHtml(item.heading).toLowerCase().includes(search) || 
                            common.parseHtml(item.body).toLowerCase().includes(search)
                            );
                    });
    
                    if (hasMatch) newRewardsList.push(item);
                });
    
                setRewardsList(newRewardsList);
            } else {
                setRewardsList(data);
            }

        }).catch((err) => {
            console.error(err);
        });

    }, [search]);

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
            <div className='content'>
                <SearchInput placeholder={labels.SEARCH_REWARDS} onSearch={setSearch} />
                {renderRewards()}
            </div>
            <RewardsModal rewards={activeRewards} onClose={() => setActiveRewards(undefined)} />
        </div>
    );
};

export default Rewards;
