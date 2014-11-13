/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />

var penServices = (function () {
    // private svgElement;
    function penServices(svgElement) {
        this.svgElement = svgElement;
        this.svgElement = svgElement;
    }
    // public functions
    //mouse events
    penServices.prototype.mouseDown = function (evt) {
        var x = evt.pageX - this.svgElement.offsetX;
        var y = evt.pageY - this.svgElement.offsetY;
        this.svgElement.started = true;

        this.svgElement.d_attr = "M" + x + " " + y + " ";
        var createdElement = this.svgElement.addSvgElementFromJson({
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
    };
    penServices.prototype.mouseUp = function (evt, element) {
        if (this.svgElement.started) {
            this.svgElement.started = false;

            //var element = this.svgElement.svgdoc.getElementById(this.svgElement.getId());
            if (element.getAttribute("d").indexOf("L") == -1 && this.svgElement.obj_num > 0) {
                element.remove();
            } else {
                this.svgElement.d_attr = 0;
                this.svgElement.obj_num++;
                element.setAttribute("opacity", this.svgElement.current_opacity);
            }
        }
    };
    penServices.prototype.mouseMove = function (evt, shape) {
        if (this.svgElement.started) {
            var x = evt.pageX - this.svgElement.offsetX;
            var y = evt.pageY - this.svgElement.offsetY;

            //var shape = this.svgElement.svgdoc.getElementById(this.svgElement.getId());
            this.svgElement.d_attr = this.svgElement.d_attr + "L" + x + " " + y + " ";
            shape.setAttributeNS(null, "d", this.svgElement.d_attr);
        }
    };

    penServices.prototype.setSVGRoot = function (element) {
        this.svgElement.svgroot = element;
    };
    penServices.serviceId = "penServices";
    return penServices;
})();

// Update the app1 variable name to be that of your module variable
app.factory(penServices.serviceId, [
    'svgElement', function (svgElement) {
        return new penServices(svgElement);
    }
]);
//# sourceMappingURL=penServices.js.map
