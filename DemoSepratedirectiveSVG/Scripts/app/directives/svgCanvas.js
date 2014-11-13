/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />

var svgCanvas = (function () {
    function svgCanvas($rootScope, $compile) {
        this.$rootScope = $rootScope;
        this.$compile = $compile;
        this.restrict = "AEC";
        this.replace = true;
        this.template = '<svg ng-attr-height={{canvas.height}} ng-attr-width={{canvas.width}}></svg>';
        this.link = function (scope, element, attrs) {
            scope.$watch('current_draw_element', function (newValue, oldValue) {
                if (newValue != null) {
                    //element.attr(newValue, '');
                    var k = this.$compile("<svg ng-attr-height={{canvas.height}} ng-attr-width={{canvas.width}} " + newValue + "></svg>")(scope);
                    element.append(k);
                    //angular.element(element).html(k);
                }
            });
        };
    }
    svgCanvas.directiveId = "svgCanvas";
    return svgCanvas;
})();

// Update the app1 variable name to be that of your module variable
app.directive(svgCanvas.directiveId, [
    '$rootScope', '$compile', function ($rootScope, $compile) {
        return new svgCanvas($rootScope, $compile);
    }
]);
//# sourceMappingURL=svgCanvas.js.map
