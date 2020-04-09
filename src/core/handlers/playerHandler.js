
function deviceChange(data){
    window.vff.isMobile = data.device === 'mobile';
    if(window.vff.isMobile){
        window.document.body.classList.add('vff-mobile');
    } else {
        window.document.body.classList.remove('vff-mobile');
    }
}

function playerStatus(data){
    window.vff._playerStatus = data;
    //todo handle time change, handle status change
}

module.exports = {
    deviceChange,
    playerStatus
};

