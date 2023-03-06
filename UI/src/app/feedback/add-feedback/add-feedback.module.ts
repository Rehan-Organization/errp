import { RouterModule } from '@angular/router';
import { AddFeedbackComponent } from './add-feedback.component';
import { IonicModule } from '@ionic/angular';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AddFeedbackComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [AddFeedbackComponent,ReactiveFormsModule,FormsModule,BrowserModule]
})
export class AddFeedbackModule { }
