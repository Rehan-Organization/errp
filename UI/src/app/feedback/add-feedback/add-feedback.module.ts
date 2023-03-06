import { AddFeedbackComponent } from './add-feedback.component';
import { IonicModule } from '@ionic/angular';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    NgModule
],
  exports: [AddFeedbackComponent,BrowserModule,ReactiveFormsModule],
})
export class AddFeedbackModule { }
