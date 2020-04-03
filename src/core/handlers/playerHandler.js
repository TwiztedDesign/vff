
function deviceChange(data){
    window.vff.isMobile = data.device === 'mobile';
}

module.exports = {
    deviceChange
};

