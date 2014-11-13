/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />




// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface IsvgCanvas extends ng.IDirective {
   
}

interface IsvgCanvasScope extends ng.IScope {
    
}

class svgCanvas implements IsvgCanvas {
    static directiveId: string = "svgCanvas";
    restrict: string = "AEC";
    replace: boolean = true;
    template: string = '<svg ng-attr-height={{canvas.height}} ng-attr-width={{canvas.width}}></svg>';
      

    constructor(private $rootScope, private $compile) {
    }

    link = (scope, element, attrs) => {
        scope.$watch('current_draw_element', function (newValue, oldValue) {
            if (newValue != null) {
                //element.attr(newValue, '');
                var k = this.$compile("<svg ng-attr-height={{canvas.height}} ng-attr-width={{canvas.width}} " + newValue + "></svg>")(scope);
                element.append(k);
                //angular.element(element).html(k);
            }
        })
    }
}

// Update the app1 variable name to be that of your module variable
app.directive(svgCanvas.directiveId, ['$rootScope', '$compile', ($rootScope, $compile) =>
    new svgCanvas($rootScope, $compile)
]);
