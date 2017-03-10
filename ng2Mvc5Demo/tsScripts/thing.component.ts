import { Component, Injector, Input } from '@angular/core';

@Component({
    selector: 'thing-comp',
    templateUrl: './tsScripts/thing.component.html'
    //template: `<p>ThingComponent: {{ thing }}</p>`        
})
export class ThingComponent {        
    thing: number;

    constructor(private injector: Injector) {
        // Increase count on each load
        this.thing = this.injector.get('thing');
    }

    closeComponent() {
       
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}