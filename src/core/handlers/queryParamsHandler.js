import {vffData} from '../vffData.js';

function queryParams(data) {
    vffData.addQueryParams(data);
}

module.exports = {
    queryParams : queryParams
};

