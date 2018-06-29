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

# Templates
Once the VFF lib is registered, it generates a global object that you can access from anywhere in your code. The global object "vff" contains all the functions and the properties you need to generate templates and control your overlay.
The "vff" object also contains events that will be fired based on various conditions, such as a change in a data that arrives from an external source like a controller or an API call.

## Adding templates (JavaScript)
```javascript
// Registering the template object
var lowerThird = {
    title       : "This is a title",
    subTitle    : "This is a subtitle"
};
// Register the object as a template
var lowerThird = vff.addTemplate("Lower Third", lowerThird);
```
The above code will generate the same result as the code we used in the "Getting Started" example in the HTML file. The name of the template is the object name, and the properties of the template as the object properties.
The function "addTemplate" will return a template object that will contain functions for events and additional data. Note that when registering the template via js, you can specify any name you want for the template,
the first pram is the name of the template as it would be displayed in the controller (Lower Third) and the second param is the object that will be used to contain the data of the template.

## Working with Frameworks
VFF will update the registered object on any change, you can then bind you template object directly to the DOM using your favorite framework, here are a few examples using different frameworks:

### AngularJS
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
```javascript
angular.module('tfApp', [])
    .controller('lowerThirdController', ['$scope', function($scope) {
        // Registering the template object on the scope
        $scope.lowerThird = {
            title       : "This is a title",
            subTitle    : "This is a subtitle"
        };
        // Register the object as a template
        var lowerThird = vff.addTemplate("Lower Third", lowerThird);
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
var lowerThird = vff.addTemplate("Lower Third", lowerThird);
```
The controller will still show only the "Title" and the "Sub Title" properties. It will ignore any objects that are not primitives unless they follow a specific structure that describes a UI element such as a dropdown.
While the property "stockData" will not be shown by the controller, it will still be active and available.

You can still access it via the Videoflow API. This is useful when you have to display a lot of data from a 3rd party source.
You will not see it in the controller and will not be able to edit the data, since it arrives for an external source via the API, but you will still be able to use the data in your overlay app.
Your entire template can be viewed as an object at any time in the data dashboard of the controller.

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
var lowerThird = vff.addTemplate("Lower Third", lowerThird);

vff.onEvent("lowerThird", function(data){
    // Respond to the event
    var d = new Date(data.__timecode__);
    alert("New data received on " + d.toString());
});
```
The "data" object of the function carries the template object with extra property for the time code (__timecode__).

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
## emit
```javascript
vff.emit(payload);
```
Emit gfx event to all open players **no fully working yet
## onEvent
```javascript
vff.onEvent(template, cb, options)
vff.onEvent(cb, options)
```

# Player control

## go
```javascript
vff('pagename', timecode)
```
Go to page

* target - ***string*** - target page name
* timecode - ***int*** - ***optional*** - target time if the target page is video



# Visibility

## show
```javascript
vff.show(template)
```
Set "visibility" property in the template to true

* template - _string_ - the name of the template

## hide
```javascript
vff.hide(template)
```
Set "visibility" property in the template to false

* template - _string_ - the name of the template

## toggle
```javascript
vff.toggle(template)
```
Toggle "visibility" property in the template

* template - _string_ - the name of the template


# Globals

## isMobile

## isController



[![travis build](https://img.shields.io/travis/TwiztedDesign/vff.svg)](https://travis-ci.org/TwiztedDesign/vff)
![version](https://img.shields.io/npm/v/vff.svg)
![downloads](https://img.shields.io/npm/dt/vff.svg)
![MIT License](https://img.shields.io/github/license/TwiztedDesign/vff.svg)