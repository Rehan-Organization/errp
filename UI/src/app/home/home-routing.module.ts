import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFormComponent } from '../feedback/feedback-form/feedback-form.component';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'viewFeedback',
                loadChildren: () =>
                    import('../feedback/feedback-list/feedback-list.module').then(
                        (m) => m.FeedbackListModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
