import {vffData} from '../vffdata.js';

function queryParams(data) {
    vffData.addQueryParams(data);
}

module.exports = {
    queryParams : queryParams
};

