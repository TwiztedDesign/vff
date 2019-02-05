# Introduction

VFF is lightweight JavaScript library built to create graphic overlays for Videoflow. VFF exposes properties in your HTML overlay to the Videoflow player. This way, when an overlay is loaded in Videoflow player,
the properties that were registered via VFF will be visible to the user in the controller and the user will be able to change those properties from the controller or via the API. Simple put, VFF turns your HTML to a template.

VFF also has a set of global function that are design to help you control the project from within the overlay. For example, you can use those global functions to call another page in the project, or to know that container is currently hosting
the project. For example, you might want to display more data if the project is loaded in a controller and less data if the project is loaded on a regular or a mobile page.

VFF is extensible, the extensions are designed to add extra functionality that otherwise would not be available in traditional HTML workflows. For example a drawing surface that would allow users to draw on top of the overlay.


# Getting Started

## Create your overlay app
An overlay in videoflow is a static web application, that will be loaded on top of your video content, or over a transparent background in case the underlying video is a 3rd party player. You can use your favorite framework to write all the logic
you need for your overlay, but in addition you'll need to add the VFF lib. A basic structure of an overlay should have three components:
- HTML - The markup of the structure and the layout of the overlay
- Javascript - The logic and the behavior of the content
- CSS - The look of the overlay

## Include the VFF lib
Add the following code in your HTML header

```html
<script src="https://rawgit.com/TwiztedDesign/vff/master/dist/vff.js"></script>
```

## Create your first template
A template is a group of properties that are related to the same logical object. For example a template can be a "Lower Third" or a "Side Panel". You can add as many templates as needed and structure them in any way you see fit.
```html
<!-- Register the template by using the "vff-template" attribute -->
<div vff-template="lowerThird">
    <!-- Register each property of the template by using the "vff-name" attribute -->
    <h1 vff-name="title">This is a title</h1>
    <h2 vff-name="subTitle">This is a subtitle</h1>
</div>
```

Here we used two attributes "vff-template" and "vff-name". The "vff-template" declares a template by name, in this case it's "lowerThird". Then inside that template, we declare two properties by using "vff-name".
Note that spaces are not allowed, but Videoflow will separate the names based on the Camel Case of the string, so "lowerThird" will be shown "Lower Third" and "subTitle" will shown as "Sub Title" in Videoflow Controller.
While adding templates and properties can be easily done in the HTML, for a more complex control over your content is recommended to add the templates and their properties via JavaScript.

## Publish your content
In order to use your newly created overlay, you need to host it in a publicly available accessible location, for example Netlify. Once you project has been published, you can add it as an overlay by pusing the url of your
project to the "Overlay" filed of you project. Here is the full basic core:
```html
<html>
    <header>
        <script src="https://rawgit.com/TwiztedDesign/vff/master/dist/vff.js"></script>
    </header>
    <body>
        <div vff-template="lowerThird">
            <h1 vff-name="title">This is a title</h1>
            <h2 vff-name="subTitle">This is a subtitle</h1>
        </div>
    </body>
</html>
```

# VFF Global

After including the vff script in your html file, a "vff" object is set on the window object.

## Methods
|       Method     | Details                                                                                             |
|------------------|-----------------------------------------------------------------------------------------------------|
| registerTemplate(**name**, **data**)| Registers a template in the VFF and returns a template object<br>**name** - _string_ - name of the template<br>**data** - _object_ - data of the template|
| getTemplate(**name**)               | Returns a registered template by name<br>**name** - _string_ - name of the template to return|
| getTemplates()                      | Returns an array of all the registered templates|


# Templates
Once the VFF lib is registered, it generates a global object that you can access from anywhere in your code. The global object "vff" contains all the functions and the properties you need to generate templates and control your overlay.
The "vff" object also contains events that will be fired based on various conditions, such as a change in a data that arrives from an external source like a controller or an API call.


## Methods
|        Method      | Details                                                                                               |
|--------------------|-------------------------------------------------------------------------------------------------------|
| $element()         | Returns the DOM element of the template if exists                                                     |
| $on(**callback**, **options**)  | triggers callback when data for the template arrives<br>**callback** - _function(**data**)_ - data handler<br>**options** - _object(optional)_ - options object (described [here](#options))|
| $on(**path**, **callback**, **options**)| trigger callback when data for the **path** in the template arrives<br>**path** - _string_ - dot delimited string that describes a path in the template<br>**callback** - _function(**data**)_ - data handler<br>**options** - _object(optional)_ - options object (described [here](#options))|
| $emit(**payload**) | Emits a message to every player with the same project<br>**payload** - _object_ - data to be sent     |


## options
|        Property    | Type      |  Default   | Details                                                                                         |
|--------------------|-----------|------------|-------------------------------------------------------------------------------------------------|
| changeOnly         | _Boolean_ | *true*     | trigger callback only if dat is changed |



## Adding templates (JavaScript)
```javascript
// Registering the template object
var lowerThird = {
    title       : "This is a title",
    subTitle    : "This is a subtitle"
};
// Register the object as a template
var lowerThird = vff.registerTemplate("Lower Third", lowerThird);
```
The above code will generate the same result as the code we used in the "Getting Started" example in the HTML file. The name of the template is the object name, and the properties of the template as the object properties.
The function "registerTemplate" will return a template object that will contain functions for events and additional data. Note that when registering the template via js, you can specify any name you want for the template,
the first pram is the name of the template as it would be displayed in the controller (Lower Third) and the second param is the object that will be used to contain the data of the template.

## Working with Frameworks
VFF will update the registered object on any change, you can then bind you template object directly to the DOM using your favorite framework, here are a few examples using different frameworks:

### AngularJS
### angular.js
HTML
```html
<html>
    <header>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"></script>
        <script src="https://rawgit.com/TwiztedDesign/vff/master/dist/vff.js"></script>
    </header>
    <body ng-app="tfApp">
        <div ng-controller="lowerThirdController">
            <h1>{{lowerThird.title}}</h1>
            <h2>{{lowerThird.subTitle}}</h1>
        </div>
    </body>
</html>
```
Javascript
```javascript
angular.module('tfApp', [])
    .controller('lowerThirdController', ['$scope', function($scope) {
        // Registering the template object on the scope
        $scope.lowerThird = {
            title       : "This is a title",
            subTitle    : "This is a subtitle"
        };
        // Register the object as a template
        var lowerThird = vff.registerTemplate("Lower Third", lowerThird);
        }
    ]);
```
<!--### React
    ///TODO
### Vue
    ///TODO-->

## Complex objects as templates
So far we have looked at simple objects with only primitives as properties, but what will we see if we register the following object as a template:

```javascript
// Registering the template object
var lowerThird = {
    title       : "This is a title",
    subTitle    : "This is a subtitle",
    stocksData  : [
        {
            name    : "APPL",
            value   : "$75"
        },
        {
            name    : "GOOG",
            value   : "$65"
        }
    ]
};
// Register the object as a template
var lowerThird = vff.registerTemplate("Lower Third", lowerThird);
```
The controller will still show only the "Title" and the "Sub Title" properties. It will ignore any objects that are not primitives unless they follow a specific structure that describes a UI element such as a dropdown.
While the property "stockData" will not be shown by the controller, it will still be active and available.

You can still access it via the Videoflow API. This is useful when you have to display a lot of data from a 3rd party source.
You will not see it in the controller and will not be able to edit the data, since it arrives for an external source via the API, but you will still be able to use the data in your overlay app.
Your entire template can be viewed as an object at any time in the data dashboard of the controller.

## Custom UI Elements
So far we have been adding only primitive objects to our template. In the previous example have added two strings. Additional primitives you can add are numbers and booleans. In addition to the primitive types
you can also create custom objects that will be used to extend the UI elements that can be used in the template. Normally objects are not shown in the UI of the controller, unless you follow the UI element object structure.

```javascript
var myTemplate = {
    myDropdown : {
        ui          : 'dropdown',
        value       : 'USA',
        options     : [
            'USA',
            'Canada',
            'Mexico',
            'UK'
        ]
    }
}
```
The above example will create a template, with a single ui element, that will be presented as a dropdown box, with the options 'USA', 'Canada', 'Mexico' & 'UK' to choose from, and 'USA' as the default selected value.
When you make another selection from the drop down, the "value" property will be updated. Keep that in mind when binding your elements to the template object.
The key part here is the "ui" property. Without the ui property & without the appropriate ui value, this object would have been ignored by the controller and you would not see it in the UI.

### Dropdown
```javascript
var myTemplate = {
    myDropdown : {
        //Declare the type of the ui element
        ui          : 'dropdown',
        //Bind your element to the value property
        value       : 'USA',
        options     : [
            'USA',
            'Canada',
            'Mexico',
            'UK'
        ]
    }
}
```
### Radio Group
```javascript
var myTemplate = {
    myRadioGroup : {
        //Declare the type of the ui element
        ui          : 'radio',
        //Bind your element to the value property
        value       : 'USA',
        options     : [
            'USA',
            'Canada',
            'Mexico',
            'UK'
        ]
    }
}
```

### Range Slider
```javascript
var myTemplate = {
    mySlider : {
        //Declare the type of the ui element
        ui        : 'range',
        //Bind your element to the value property
        value       : '0',
        min         : -50,
        max         : 10,
        step        : 0.1
    }
}
```

## Template Events
When the template get new data for the controller or the API an event is triggered, this event can be used to added extra functionality as a response to the new data. For example, to trigger an animation.
We will register a new function for the event on our "Lower Third" template:
```javascript
// Registering the template object
var lowerThird = {
    title       : "This is a title",
    subTitle    : "This is a subtitle",
};
// Register the object as a template
var lowerThird = vff.registerTemplate("Lower Third", lowerThird);

lowerThird.onData(function(data){
    // Respond to the event
    var d = new Date(data.__timecode__);
    alert("New data received on " + d.toString());
});
```
The "data" object of the function carries the template object with extra property for the time code (__timecode__).

A template can emit a message which will be received by all opened Videoflow players.

```javascript
var lowerThird = vff.getTemplate("lowerThird");
lowerThird.emit({"title" : "Breaking News"});
```

The code above will emit a message from the "lowerThird" template with a new title.
It will be received in all of the open Videoflow players and the title will be changed.
Any appropriate "onData" listeners will be triggered;

The received message
```json
{
  "overlay": "the overlay url",
  "template": "template name",
  "data": {
    "title": "Breaking News"
  },
  "query": {//query params from the emitting project
    "param1" : "value1"
  },
  "origin": "origin url",
  "channel": "lowerThird"
}
```



## getPages
```javascript
vff.getPages();
```
Get all the project pages (for now, mainly used to build home screen overlays)


## getQueryParams
```javascript
vff.getQueryParams();
```
Get the project query params (can?t use window.location.search because the overlay can be opened in an iframe)

<!--
## extend
```javascript
vff.extend(name, extension)
```
Extend the vff global object
## define
```javascript
vff.define(name, element)
```
Define a vff custom element  
Name - string - element name should be at least two words, dash separated (i.e vff-telestrator) **should consider auto ?vff-? prefix
-->

# Player control

## go
```javascript
vff('pagename', timecode)
```
Go to page

* target - ***string*** - target page name
* timecode - ***int*** - ***optional*** - target time if the target page is video


# Globals

## isMobile

**boolean**


## isController

**boolean**

## mode

**String:** _normal_ | _controller-preview_ | _controller-program_

[![travis build](https://img.shields.io/travis/TwiztedDesign/vff.svg)](https://travis-ci.org/TwiztedDesign/vff)
![version](https://img.shields.io/npm/v/vff.svg)
![downloads](https://img.shields.io/npm/dt/vff.svg)
![MIT License](https://img.shields.io/github/license/TwiztedDesign/vff.svg)