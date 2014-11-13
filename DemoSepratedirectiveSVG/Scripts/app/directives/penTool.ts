/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />



// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface IpenTool extends ng.IDirective {
    
}

interface IpenToolScope extends ng.IScope {
  
}

class penTool implements IpenTool {
    static directiveId: string = "penTool";
    restrict: string = "AE";

    public createdElement: string;

    constructor(private $rootScope, private penServices) {
        
    }

    link = (scope, element, attrs) => {
        this.penServices.setSVGRoot(element);
        element.on('mousedown', (event) => {        
           this.createdElement=this.penServices.mouseDown(event);       
        });
        element.on('mouseup', (event) => {
          
            this.penServices.mouseUp(event,this.createdElement);
           
        });
        element.on('mousemove', (event) => {
         
            this.penServices.mouseMove(event, this.createdElement);
           
        });
               
    }
}

// Update the app1 variable name to be that of your module variable
app.directive(penTool.directiveId, ['$rootScope', 'penServices', ($rootScope, penServices)=>
    new penTool($rootScope, penServices)
]);
