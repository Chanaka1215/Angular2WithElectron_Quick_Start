/**
 * Created by Chanaka Fernando on 3/25/2017.
 */
import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';
import {HttpModule}         from "@angular/http";
import {WebRouting}         from "./app.routing";
import { AppComponent }  	from './app.component';
import 'hammerjs';


import {WelcomeComponent} from "./component/welcome/welcome.component";
import {InfoComponent} from "./component/Info/info.component";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        WebRouting,
        HttpModule
],
    declarations:[
        AppComponent,
        WelcomeComponent,
        InfoComponent
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }