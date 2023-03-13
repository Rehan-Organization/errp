import { FeedbackFormComponent } from './feedback-form.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: '', component: FeedbackFormComponent }]),
    ],
    exports: [BrowserModule],
})
export class AddFeedbackModule {}
