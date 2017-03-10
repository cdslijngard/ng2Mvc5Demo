///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';
import { ThingComponent } from './thing.component';
import DynamicComponent from './dynamic-component'

@NgModule({
    imports: [BrowserModule ],
    declarations: [AppComponent, ThingComponent, DynamicComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }