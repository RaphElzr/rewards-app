import { api } from '..';

const getRewards = () => {
    return api.get('rewards.json');
};

const RewardsService = {
    getRewards
};

export default RewardsService;
