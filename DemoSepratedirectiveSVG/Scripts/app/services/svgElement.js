/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />

var svgElement = (function () {
    function svgElement(resource) {
        this.resource = resource;
        this.idprefix = "svg_";
        this.svgdoc = document;
        this.svgns = "http://www.w3.org/2000/svg";
        this.svgroot = null;
        this.d_attr = null;
        this.started = false;
        this.obj_num = 1;
        this.current_mode = null;
        this.current_fill = "none";
        this.current_stroke = "black";
        this.current_stroke_width = 1;
        this.current_stroke_style = "none";
        this.current_opacity = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.start_x = 0;
        this.start_y = 0;
        this.events = {};
        // private functions
        this.assignAttributes = function (node, attrs) {
            for (var i in attrs) {
                node.setAttributeNS(null, i, attrs[i]);
            }
        };
        this.cleanupElement = function (element) {
            if (element.getAttribute('fill-opacity') == '1')
                element.removeAttribute('fill-opacity');
            if (element.getAttribute('opacity') == '1')
                element.removeAttribute('opacity');
            if (element.getAttribute('stroke') == 'none')
                element.removeAttribute('stroke');
            if (element.getAttribute('stroke-dasharray') == 'none')
                element.removeAttribute('stroke-dasharray');
            if (element.getAttribute('stroke-opacity') == '1')
                element.removeAttribute('stroke-opacity');
            if (element.getAttribute('stroke-width') == '1')
                element.removeAttribute('stroke-width');
        };
        this.addSvgElementFromJson = function (data) {
            var shape = this.svgdoc.createElementNS(this.svgns, data.element);
            this.assignAttributes(shape, data.Attr);
            this.cleanupElement(shape);
            this.svgroot.append(shape);
            return shape;
        };
        this.getId = function () {
            if (this.events["getid"])
                return this.call("getid", this.obj_num);
            return this.idprefix + this.obj_num;
        };
        this.call = function (event, arg) {
            if (this.events[event]) {
                return this.events[event](this, arg);
            }
        };
        this.$resource = resource;
    }
    // public functions
    svgElement.prototype.setMode = function (name) {
        this.current_mode = name;
    };

    svgElement.prototype.setStrokeColor = function (color) {
        if (color != null || color != undefined)
            this.current_stroke = color;
    };

    //not needed for path
    svgElement.prototype.setFillColor = function (color) {
        this.current_fill = color;
    };

    svgElement.prototype.setStrokeWidth = function (val) {
        if (val != null || val != undefined)
            this.current_stroke_width = val;
    };

    svgElement.prototype.setOffsetsForCanvas = function (x, y) {
        this.offsetX = x;
        this.offsetY = y;
    };

    svgElement.prototype.bind = function (event, f) {
        this.events[event] = f;
    };

    svgElement.prototype.setIdPrefix = function (p) {
        this.idprefix = p;
    };
    svgElement.serviceId = "svgElement";
    return svgElement;
})();

// Update the app1 variable name to be that of your module variable
app.factory(svgElement.serviceId, [
    '$resource', function ($resource) {
        return new svgElement($resource);
    }
]);
//# sourceMappingURL=svgElement.js.map
