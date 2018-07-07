var app = angular.module("myApp", []);


app.controller("Ctrl", ['$scope',function($scope){


    $scope.drag = {
        visibility  : true,
        x           : 0,
        y           : 0
    };


    var results = {
        "title text" : "Title",
        "title color" : "red",
        "drag-area xValue" : 0,
        "drag-area yValue" : 0
    };

    vff.onUpdate(function(){
        try{
            $scope.$apply();
        } catch(e){}
    });

    window.onload = function(){

        var dragArea = vff('.drag-area');

        dragArea.onChange('dragging', function(val){
            console.log('Dragging: ', val);
        });
        dragArea.onChange('result.x', function(val){
            $scope.drag.x = val;
            $scope.$apply();
        });
        dragArea.onChange('result.y', function(val){
            $scope.drag.y = val;
            $scope.$apply();
        });

        dragArea.onChange('result', function(val){
            console.log(val); //TODO
        });

        dragArea.onChange(function(prop, val, path){
            // console.log("some value changed: ", prop, val, path);
        });

        console.log("mobile: ", vff.isMobile);
        console.log("controller: ", vff.isController);
    };


    vff.onEvent('test',function(e){
        console.log('Event received: ', e);
    }, {consolidate : true});


    window.template = $scope.template = vff.addTemplate('template', {
        num: 1,
        string : "Test string",
        object : {
            ui: 'dropdown',
            value: "",
            options: [1, 2, 3, 4, 5]
        }
    });


    $scope.lowerThird= {
        visibility: true,
        expand: true,
        driverName: 'Larson',
        driverNumber: 42,
        cameraTitle: 'ISO Cam 1',
        name: {
            ui: 'dropdown',
            value: "Jan",
            options: [
                "Jan",
                "Oxana",
                "Saimon"
            ]
        },
        number: {
            ui: 'dropdown',
            value: "",
            options: [1, 2, 3, 4, 5]
        },
        type: {
            ui: 'radio',
            value: "Beginner",
            options: [
                "beginner",
                "professional"
            ]
        },
        range: {
            ui:'range',
            visibility:true,
            enabled:true,
            value:0,
            min:-50,
            max:10,
            step:0.1
        },
        list: {
            ui:'list',
            value: "Beginner",
            options: [
                "beginner",
                "professional"
            ]
        },
        apiData: {
            test: "Some data"
        }
    };

    window.lt = $scope.lowerThird =  vff.addTemplate("lowerThird", $scope.lowerThird);

    vff.onEvent("lowerThird", function(data){
        if(data && data.name && data.name.value==="Saimon"){
            $scope.lowerThird.number.options = [66,77,88,99]
        }
    });



    setTimeout(function(){
        vff.emit({test: 3});

    }, 3000);




}]);


