var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider) {

    var loginState = {
        name: 'login',
        url: '/',
        template: '<h3 class="loginPage_title">Amazing app</h3><p class="loginPage_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto distinctio ipsa odit omnis veniam voluptatem. Asperiores assumenda corporis dolorem exercitationem expedita inventore quidem quisquam rerum! Animi dolor, sed.</p><button class="loginPage_btn" ng-onlick="">Traveller</button><button class="loginPage_btn">Guide</button></button>'
    };

    var helloState = {
        name: 'hello',
        url: '/hello',
        templateUrl: ''
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(loginState);
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});