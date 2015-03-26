var pirateApp = angular.module("pirateSharingApp", ["ngRoute"]);

pirateApp.config(function ($routeProvider) {
    $routeProvider
        .otherwise({ controller: "PirateListController", templateUrl: "app/partials/404.html" });
});