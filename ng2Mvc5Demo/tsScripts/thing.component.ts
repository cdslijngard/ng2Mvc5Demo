import { Component, Injector } from '@angular/core';

@Component({
    selector: 'thing-comp',
    template: `<p>ThingComponent: {{ thing }}</p>`        
})
export class ThingComponent {    
    thing = 8;    

    constructor(private injector: Injector) {
        // Increase count on each load
        this.thing = this.thing + 1;
    }
}