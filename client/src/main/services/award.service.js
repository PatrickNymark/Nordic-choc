import axios from 'axios';

export const awardService = {
    getAll,
};

/**
 * Get all awards
 */
function getAll() {
    return axios.get('/api/awards').then(response => {
        return response.data;
    });
}