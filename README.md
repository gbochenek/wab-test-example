# wab-test-example

This repository contains a sample ESRI Web App Builder widget which takes the user to Dev Summit.

The widget is a seperately wrapped JSAPI widget written with unit tests for test driven development.  It was origanally scaffolded out using the ESRI Web App Builder Yeoman Generator (https://github.com/Esri/generator-esri-appbuilder-js) with ES2015 syntax enabled.

## Wrapping your widgets

Wrapping JSAPI widgets within the Web App Builder framework is a powerful way to increase your widget's portability and reduce complexity. The code within widgets/GoToDevSummit/Widget is minimal and only serves to pass Web App Builder events and properties on to the widget itself (which is located in widgets/GoToDevSummit/GoToDevSummit).

## Unit Tests and Test Drive Development

The number one rule for writing good unit tests is to avoid testing other people's code.  Doing so will keep your tests easy to write. If tests aren't easy to write, they will nont get written.

Wrapping a JSAPI widget instead of writing a widget inside Widget.js helps to achieve this principal, since we don't even load Web App Builder libraries during testing.

In order to avoid testing the ESRI JavaScript API, we use SinonJS (in this example) to mock any JSAPI classes or methods.  Instead of testing if the view has actually navigated to Palm Springs, we're testing that the SceneView's goTo function was called with the correct parameters.  

## Running Tests

To run this application's unit tests, clone this repo and run the following commands:

1. `npm install`
2. `grunt test`

For steps on syncing this application with your Web App Builder for Developers installation, see the documentated Grunt tasks in the ESRI Web App Builder Yeoman Generator (https://github.com/Esri/generator-esri-appbuilder-js)

## Technology Choices

This application was writting using Karma(https://karma-runner.github.io/2.0/index.html) as a test runner, Jasmine (https://jasmine.github.io/) as an assertion language, and the Grunt task runner (https://gruntjs.com/getting-started) to pull it all together. However, the principals applied are not technology specific and this appliccation can be modified to use your technology of choice.