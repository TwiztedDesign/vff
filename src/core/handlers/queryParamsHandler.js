import {vffData} from '../vffData.js';

function queryParams(data) {
    vffData.addQueryParams(data);

    if(data && data.cursor && data.cursor === '0'){
        document.styleSheets[0].addRule('*', 'cursor: none !important');
    }
}

module.exports = {
    queryParams : queryParams
};

