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
                path: 'Achievement',
                loadChildren: () =>
                    import('../Achievement/achievement-list/achievement-list.module').then(
                        (m) => m.AchievementListModule
                    ),
            },
            {
                path: 'Awards',
                loadChildren: () =>
                    import('../Awards/award-list/award-list.module').then((m) => m.AwardListModule),
            },
            {
                path: 'awardTypes',
                loadChildren: () =>
                    import('../award-type/award-list/award-list.module').then(
                        (m) => m.AwardListModule
                    ),
            },
            {
                path: 'leaderboard',
                loadChildren: () =>
                    import('../leaderboard/leaderboard/leaderboard.module').then(
                        (m) => m.LeaderboardModule
                    ),
            },
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
