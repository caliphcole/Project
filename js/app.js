/**
 * Created by ColeCaliph on 9/11/2016.
 */
var app = angular.module("myApp",['ngRoute']);


app.config(function ($routeProvider){
    $routeProvider.when('/', {
        controller: 'MainController',
        templateUrl: './index.html'
    })});