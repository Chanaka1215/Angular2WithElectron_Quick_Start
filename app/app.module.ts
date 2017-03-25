/**
 * Created by Chanaka Fernando on 3/25/2017.
 */
import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';
import { AppComponent }  	from './app.component';
import 'hammerjs';
import {WelcomeComponent} from "./welcome/welcome.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        WelcomeComponent
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }