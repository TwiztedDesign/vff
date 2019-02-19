import {vffData} from '../vffData.js';

function handleVFData(data) {
    if(data.mode){
        window.vff.mode = data.mode;
    }
    vffData.onReady();
}

module.exports = {
    handleVFData : handleVFData
};

