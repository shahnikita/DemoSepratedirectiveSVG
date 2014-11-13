/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

var svgController = (function () {
    function svgController($scope, $resource) {
        var _this = this;
        this.$scope = $scope;
        this.$resource = $resource;
        //default
        $scope.colorPalette = ["#1111F3", "#06F406", "#F48703", "#FF3200", "#F4F40B", "#FFFFFF", "#000000"];
        $scope.strokePalette = [1, 2, 3, 4, 5, 7, 10];
        $scope.canvas = {
            height: '500',
            width: '500'
        };
        $scope.pathToolClick = function () {
            return _this.pathToolClick();
        };
        $scope.strokeEraserClick = function () {
            return _this.strokeEraserClick();
        };
        $scope.freeEraserClick = function () {
            return _this.freeEraserClick();
        };
        $scope.setStrokeColorChange = function (val) {
            return _this.setStrokeColor(val);
        };
        $scope.setStrokeWidthChange = function (val) {
            return _this.setStrokeWidth(val);
        };
        $scope.current_draw_element = null;
    }
    svgController.prototype.pathToolClick = function () {
        this.$scope.current_draw_element = "pen-Tool";
        //this.svgElement.setMode("path");
    };
    svgController.prototype.strokeEraserClick = function () {
        // this.svgElement.setMode("strokeEraser");
    };
    svgController.prototype.freeEraserClick = function () {
        // this.svgElement.setMode("freeEraser");
    };
    svgController.prototype.setStrokeColor = function (val) {
        //   this.svgElement.setStrokeColor(val);
    };
    svgController.prototype.setStrokeWidth = function (val) {
        //   this.svgElement.setStrokeWidth(val);
    };
    svgController.controllerId = "svgController";
    return svgController;
})();

// Update the app1 variable name to be that of your module variable
app.controller(svgController.controllerId, [
    '$scope', '$resource', function ($scope, $resource) {
        return new svgController($scope, $resource);
    }
]);
//# sourceMappingURL=svgController.js.map
