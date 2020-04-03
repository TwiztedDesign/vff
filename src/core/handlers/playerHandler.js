
function deviceChange(data){
    console.log("Device Change", data);
    vff.isMobile = data.device === 'mobile'
}

module.exports = {
    deviceChange
};

