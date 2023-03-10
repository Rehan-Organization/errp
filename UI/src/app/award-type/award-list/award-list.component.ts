import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwardType } from '../award-type-model/award-type';
import { AwardTypeService } from '../award-type-providers/award-type.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/errp-service/toast.service';

@Component({
    selector: 'app-view-award',
    templateUrl: './award-list.component.html',
    styleUrls: ['./award-list.component.scss'],
})
export class AwardListComponent implements OnInit {
    constructor(
        private router: Router,
        private awardTypeService: AwardTypeService,
        private alertController: AlertController,
        private toasterService: ToastService
    ) {}

    awardTypeList: AwardType[] = [];

    ngOnInit() {
        this.getAllAwards();
    }

    getAllAwards() {
        this.awardTypeService.getAwardTypeList().subscribe(
            (awardTypeList) => {
                this.awardTypeList = awardTypeList.reverse();
            },
            (err) => {
               this.toasterService.showErrorToast('Unable to get awards list')
            }
        );
    }

    createAward() {
        this.router.navigate(['/home/awardTypes/create']);
    }

    updateAward(award: AwardType) {
        this.alertController
            .create({
                header: 'Are you sure?',
                message: 'deactivate this award?',
                buttons: [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: () => {
                            award.awardStatus = 0;
                            this.awardTypeService.updateAwardType(award.awardId, award).subscribe(
                                (data) => {
                                    this.toasterService.showSuccessToast('Award disabled successfully')
                                },
                                (err) => {
                                   this.toasterService.showErrorToast('Failed to disabled award')
                                }
                            );
                        },
                    },
                ],
            })
            .then((res) => {
                res.present();
            });
    }
}
