import {isMobile} from '../utils/helpers';

const classes = {
    'fill'  : 'vff-fill',
    'fit'   : 'vff-fit'
};

function readDeviceOrientation(){
    //We are using this method in order no to use window.orientation
    //window.orientation gives different results on Android and iOS
    let screenOrientation = window.innerWidth > window.innerHeight? 'landscape' : 'portrait';
    let orientation = ((window.screen.orientation && window.screen.orientation.type.indexOf('portrait') >= 0) || screenOrientation === 'portrait')? 'Portrait' : 'Landscape';
    return orientation;
}

function resizeHandler(){
    let sizing = '';
    try {
        sizing = window.vff._playerStatus[`overlaySizing${isMobile? readDeviceOrientation(): ''}`];
    } catch (e) {
        //no status yet
    }
    Object.values(classes).forEach(c => {
        window.document.body.classList.remove(c);
    });
    window.document.body.classList.add(classes[sizing]);
}


module.exports = {
    init : ()=>{
        window.addEventListener('resize', ()=>{
            resizeHandler();
        });
        resizeHandler();
    }
};
