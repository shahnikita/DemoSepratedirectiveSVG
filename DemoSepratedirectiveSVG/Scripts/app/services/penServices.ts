/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />



// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file

interface IpenServices {
    mouseDown: (evt) => void;
    mouseUp: (evt, element) => void;
    mouseMove: (evt, shape) => void;
    setSVGRoot:(element)=>void;

}

class penServices implements IpenServices {
    static serviceId: string = "penServices";
    // private svgElement;


    constructor(private svgElement) {
        this.svgElement = svgElement;
        
    }


    // public functions

    //mouse events

    mouseDown(evt) {

        var x = evt.pageX - this.svgElement.offsetX;
        var y = evt.pageY - this.svgElement.offsetY;
        this.svgElement.started = true;

        this.svgElement.d_attr = "M" + x + " " + y + " ";
        var createdElement=this.svgElement.addSvgElementFromJson({
            "element": "path",
            "Attr": {
                "d": this.svgElement.d_attr,
                "id": this.svgElement.getId(),
                "fill": this.svgElement.current_fill,
                "stroke": this.svgElement.current_stroke,
                "stroke-width": this.svgElement.current_stroke_width,
                "opacity": 0.5
            }

        });
        
        return createdElement;

    }
    mouseUp(evt,element) {
      
        if (this.svgElement.started) {

            this.svgElement.started = false;
            //var element = this.svgElement.svgdoc.getElementById(this.svgElement.getId());
          
            if (element.getAttribute("d").indexOf("L") == -1 && this.svgElement.obj_num > 0) {
                element.remove();
            }
            else {
                this.svgElement.d_attr = 0;
                this.svgElement.obj_num++;
                element.setAttribute("opacity", this.svgElement.current_opacity);

            }      
        }


    }
    mouseMove(evt,shape) {

        if (this.svgElement.started) {

            var x = evt.pageX - this.svgElement.offsetX;
            var y = evt.pageY - this.svgElement.offsetY;
            //var shape = this.svgElement.svgdoc.getElementById(this.svgElement.getId());
          
            this.svgElement.d_attr = this.svgElement.d_attr + "L" + x + " " + y + " ";
            shape.setAttributeNS(null, "d", this.svgElement.d_attr);            
        }//if
    }

    setSVGRoot(element) {
        this.svgElement.svgroot = element;
    }


}

// Update the app1 variable name to be that of your module variable
app.factory(penServices.serviceId, ['svgElement', (svgElement) =>
    new penServices(svgElement)
]);
