let app = angular.module("myApp", []);


app.controller("Ctrl", [function(){

    // Text
    vff.registerControl('js.text', 'lorem ipsum');

    // Number
    vff.registerControl('js.number', 1);

    // Boolean
    vff.registerControl('js.boolean', true);

    // Dropdown
    vff.registerControl('js.drowpdown', 'two', {
        ui : {
            type: 'dropdown',
            options : ['one', 'two', 'three']
        }
    });
    vff.registerControl('js.drowpdownObject', 3, {
        ui : {
            type: 'dropdown',
            options :{'one': 1, 'two': 2, 'three': 3}
        }
    });

    // Radio
    vff.registerControl('js.radio', 'two', {
        ui : {
            type: 'radio',
            options : ['one', 'two', 'three']
        }
    });
    vff.registerControl('js.radioObject', 1, {
        ui : {
            type: 'radio',
            options : {'one': 1, 'two': 2, 'three': 3}
        }
    });


    // Multiselect
    vff.registerControl('js.multiselect', ['one', 'two'], {
        ui : {
            type: 'multiselect',
            options : ['one', 'two', 'three','four', 'five']
        }
    });


    vff.registerControl('js.multiselectAdvanced', ["1","3","5"], { //TODO doesn't work with numbers
        ui : {
            type: 'multiselect',
            config: {
                search : true,
                itemsInView : 5
            },
            options : {1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five'} //TODO this should be label:value and not value:label
        }
    });

    // Pulse
    vff.registerControl('js.pulse', true, {
        ui : {
            type: 'pulse',
            label : 'Push button'
        }});

}]);


