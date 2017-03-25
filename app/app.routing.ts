/**
 * Created by Chanaka Fernando on 3/25/2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {WelcomeComponent} from "./component/welcome/welcome.component";
import {InfoComponent} from "./component/Info/info.component";

// add Route Configuration here
const appRoutes: Routes = [
    {
        path : '' ,
        component: WelcomeComponent
    },
    {
        path : 'info' ,
        component : InfoComponent
    },

];


export const WebRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
