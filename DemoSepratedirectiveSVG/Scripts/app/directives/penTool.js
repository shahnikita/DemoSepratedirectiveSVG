/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />

var penTool = (function () {
    function penTool($rootScope, penServices) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.penServices = penServices;
        this.restrict = "AE";
        this.link = function (scope, element, attrs) {
            _this.penServices.setSVGRoot(element);
            element.on('mousedown', function (event) {
                _this.createdElement = _this.penServices.mouseDown(event);
            });
            element.on('mouseup', function (event) {
                _this.penServices.mouseUp(event, _this.createdElement);
            });
            element.on('mousemove', function (event) {
                _this.penServices.mouseMove(event, _this.createdElement);
            });
        };
    }
    penTool.directiveId = "penTool";
    return penTool;
})();

// Update the app1 variable name to be that of your module variable
app.directive(penTool.directiveId, [
    '$rootScope', 'penServices', function ($rootScope, penServices) {
        return new penTool($rootScope, penServices);
    }
]);
//# sourceMappingURL=penTool.js.map
