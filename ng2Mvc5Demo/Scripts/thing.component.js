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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ThingComponent = (function () {
    function ThingComponent(injector) {
        this.injector = injector;
        // Increase count on each load
        this.thing = this.injector.get('thing');
    }
    ThingComponent.prototype.closeComponent = function () {
    };
    ThingComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return ThingComponent;
}());
ThingComponent = __decorate([
    core_1.Component({
        selector: 'thing-comp',
        templateUrl: './tsScripts/thing.component.html'
        //template: `<p>ThingComponent: {{ thing }}</p>`        
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], ThingComponent);
exports.ThingComponent = ThingComponent;
