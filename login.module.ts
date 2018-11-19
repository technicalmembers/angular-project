import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [FormsModule,CommonModule, LoginRoutingModule,HttpModule],
    declarations: [LoginComponent],
    bootstrap: [LoginComponent]
})
export class LoginModule {}

