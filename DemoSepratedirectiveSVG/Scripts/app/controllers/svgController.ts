/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />




// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface IsvgControllerScope extends ng.IScope {
    canvas: {
        height: string;
        width: string;
    };
    defaultStroke: {
        color: string;
        width: string;
        fill: string;
    };
    current_draw_element: string;
    colorPalette: Array<string>;
    strokePalette: Array<number>;
    pathToolClick: () => void;
    strokeEraserClick: () => void;
    freeEraserClick: () => void;
    setStrokeColorChange: (val) => void;
    setStrokeWidthChange: (val) => void;
}

interface IsvgController {
    
}

class svgController implements IsvgController {
    static controllerId: string = "svgController";
    
    constructor(private $scope: IsvgControllerScope, private $resource: ng.resource.IResourceService) {
        //default
        $scope.colorPalette = ["#1111F3", "#06F406", "#F48703", "#FF3200", "#F4F40B", "#FFFFFF", "#000000"];
        $scope.strokePalette = [1, 2, 3, 4, 5, 7, 10];
        $scope.canvas = {
            height: '500',
            width: '500'
        };
        $scope.pathToolClick = () => this.pathToolClick();
        $scope.strokeEraserClick = () => this.strokeEraserClick();
        $scope.freeEraserClick = () => this.freeEraserClick();
        $scope.setStrokeColorChange = (val) => this.setStrokeColor(val);
        $scope.setStrokeWidthChange = (val) => this.setStrokeWidth(val);
        $scope.current_draw_element = null;
    }
    private pathToolClick() {
        this.$scope.current_draw_element = "pen-Tool";
        //this.svgElement.setMode("path");
    }
    private strokeEraserClick() {
       // this.svgElement.setMode("strokeEraser");
    }
    private freeEraserClick() {
       // this.svgElement.setMode("freeEraser");
    }
    private setStrokeColor(val) {
     //   this.svgElement.setStrokeColor(val);
    }
    private setStrokeWidth(val) {
     //   this.svgElement.setStrokeWidth(val);
    }
    
}

// Update the app1 variable name to be that of your module variable
app.controller(svgController.controllerId, ['$scope', '$resource', ($scope,$resource) =>
    new svgController($scope, $resource)
]);
