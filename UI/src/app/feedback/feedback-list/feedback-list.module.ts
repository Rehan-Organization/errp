import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListComponent } from './feedback-list.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MomentModule } from 'ngx-moment';

@NgModule({
    declarations: [FeedbackListComponent, FeedbackFormComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        RouterModule.forChild([
            { path: '', component: FeedbackListComponent },
            { path: 'add', component: FeedbackFormComponent },
            { path: 'update/:id', component: FeedbackFormComponent },
        ]),
    ],
})
export class FeedbackListModule {}
