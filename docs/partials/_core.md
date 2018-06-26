# Core

## addTemplate
```javascript
// Registering a template through the vff global 
var headerData = {
    title : "This is a title",
    subtitle : "This is a subtitle"    
};
vff.addTemplate(headerData);
```
```html
<!-- Registering a template with html attribute -->
<div vff-template="Header">
  <h1 vff-name="title">This is a title</h1>
  <h2 vff-name="subtitle">This is a subtitle</h1>
</div>
```


Register the object as a template in VFF

There are a couple of ways to register a vff template


## getPages
```javascript
vff.getPages();
```
Get all the project pages (for now, mainly used to build home screen overlays)

## onUpdate

### unused

## getQueryParams
```javascript
vff.getQueryParams();
```
Get the project query params (can’t use window.location.search because the overlay can be opened in an iframe)

## send
### unused
## request
### unused
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
Name - string - element name should be at least two words, dash separated (i.e vff-telestrator) **should consider auto “vff-” prefix

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
