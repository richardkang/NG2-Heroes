"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.isOpen = false;
        this.title = "Hello, Hero";
        this.bgColor = "blue";
        this.imgSrc = "https://udemy-images.udemy.com/course/750x422/500628_a962.jpg";
        this.dropdownMenu = [
            { text: 'Dynamic 1', },
            { text: 'Dynamic 2' }];
    }
    AppComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    AppComponent.prototype.onClick = function () {
        alert("Hello, Hero");
    };
    AppComponent.prototype.getInputValue = function (ev) {
        console.log(ev, ev.target, ev.target.value);
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("init");
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styles: ["\n    .area{\n        width: 200px;\n        height: 100px;\n        display: inline-block;\n    }\n    h1{\n        color:red;\n    }\n    img,.square{\n        width: 200px;\n        height: 150px;\n    }\n    .isSpecial{\n        border:2px solid black;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map