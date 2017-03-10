import { Component, Injector } from '@angular/core';

@Component({
    selector: 'thing-comp',
    template: `<p>ThingComponent: {{ thing }}</p>`        
})
export class ThingComponent {    
    thing = 0;

    constructor(private injector: Injector) {
        // Increase count on each load
        this.thing = this.getRandomInt(0, 10);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}