let app = angular.module("myApp", []);


app.controller("Ctrl", ['$scope',function($scope){

document.querySelector('.videobox').signalingServer = 'https://www.google.com';

    let c = vff.registerControl("header.title", "text")
        // .before((text, next) => {
        //     // next(text.toUpperCase());
        // })
        .on(event => {
           console.log('Direct(title) : ', event.data);
        });

    vff.on('', event =>{
        console.log('Global : ', event.data);
    });
    vff.on('header', event =>{
        console.log('Namespace : ', event.data);
    });
    vff.on('header.title', event =>{
        console.log('Control : ', event.data);
    });


    vff.registerControl('header.sub','subtitle')
    // .before((text, next) => {
    //     next(text.toUpperCase());
    // })
    .on(event => {
        console.log('Direct(sub) : ', event.data);
    });





    let events = 0;
    let nba1 = vff.registerControl("nba1.clock", '');
    nba1.before((data, next) => {
        next(Math.max(data, nba1.getValue()));
    }).on(event => {
        let timecode = event.data;
        document.querySelector('#clock1').innerText = new Date(+timecode).toLocaleTimeString();
        events++;
        // console.log(events);
    },{throttle : false});
    vff.registerControl("nba2.clock", '').on(event => {
        let timecode = event.data;
        let date = new Date(+timecode);
        document.querySelector('#clock2').innerText = date.toLocaleTimeString() + " " + date.getMilliseconds();
    }, {throttle : false});
    vff.registerControl("nba3.clock", '').on(event => {
        let timecode = event.data;
        let date = new Date(+timecode);
        document.querySelector('#clock3').innerText = date.toLocaleTimeString() + " " + date.getMilliseconds();
    }, {throttle : false});


vff.registerControl("bind", "bounded value");



}]);


