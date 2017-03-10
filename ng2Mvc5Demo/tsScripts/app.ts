import { Component } from '@angular/core';
import { ThingComponent } from './thing.component';

@Component({
    selector: 'my-app',
    templateUrl: './tsScripts/app.html'
  //  template: `    
  //  <h2>My favorite skill is: {{myskills}}</h2>
  //  <p>Skill:</p>
  //  <ul>
  //    <li *ngFor="let skl of skills">
  //      {{ skl }}
  //    </li>
  //  </ul>

  //  <button (click)="createThingComponent()">Create Things!</button>
  //  <dynamic-component [componentData]="componentData"></dynamic-component>
  //`
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[1];

    static thing = 0;
    componentData = null;

    createThingComponent() {
        AppComponent.thing++;
        this.componentData = {
            component: ThingComponent,
            inputs: {
                thing: AppComponent.thing
            }
        };
    }
}