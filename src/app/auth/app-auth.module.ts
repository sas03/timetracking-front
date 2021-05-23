import { NgModule } from "@angular/core";

import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';  
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from "../app-routing.module";
import { AuthenticationPageComponent } from './components/authentication-page/authentication-page.component';



@NgModule({
    declarations:[AuthenticationPageComponent],
    imports:[AppRoutingModule,MatButtonModule,CommonModule,MatCheckboxModule,MatFormFieldModule,ReactiveFormsModule],
    exports:[AuthenticationPageComponent]
})
export class AppAuthModule{}