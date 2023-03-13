import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BaseForm } from 'src/app/base-form/base-form.component';
import { ToastService } from 'src/app/errp-service/toast.service';
import { AwardType } from '../award-type-model/award-type';
import { AwardTypeService } from '../award-type-providers/award-type.service';

@Component({
    selector: 'app-create-award',
    templateUrl: './award-form.component.html',
    styleUrls: ['./award-form.component.scss'],
})
export class AwardFormComponent extends BaseForm implements OnInit {
    awardTypeList: AwardType[] = [];
    awardType: AwardType = {};
    errorMessage: string = '';
    isIdPresent : boolean;

    constructor(
        private router: Router,
        private awardTypeService: AwardTypeService,
        private route: ActivatedRoute,
        private alertController: AlertController,
        private toasterService: ToastService
    ) {
        super();
    }

    numericOnly(event: { key: string }): boolean {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }

    createAward() {
        const today = new Date();
        this.awardType.createdDate = today;
        this.awardType.updatedDate = today;
        console.log(today);

        if (this.validate()) {
            this.alertController
                .create({
                    header: 'Are you sure?',
                    message: 'Create new award?',
                    buttons: [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'Confirm',
                            handler: () => {
                                this.awardTypeService.saveAwardType(this.awardType).subscribe(
                                    (data) => {
                                        (this.awardType = data),
                                            this.toasterService.showSuccessToast(
                                                'New award created successfully'
                                            ),
                                            this.closeForm();
                                    },
                                    (err) => {

                                        if(err.status == 409)
                                        {
                                            this.toasterService.showErrorToast("Award name already exsists");
                                        }else{
                                            this.toasterService.showErrorToast("Failed to create award");
                                        }
                                        
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

    showAlert(message: string) {
        this.alertController
            .create({
                header: 'Alert',
                message: message,
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            })
            .then((res) => {
                res.present();
            });
    }

    updateAward() {
        const today = new Date();
        this.awardType.updatedDate = today;
        if (this.validate()) {
            this.alertController
                .create({
                    header: 'Are you sure',
                    message: 'Update award?',
                    buttons: [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'Confirm',
                            handler: () => {
                                this.awardTypeService
                                    .updateAwardType(this.awardType.awardId, this.awardType)
                                    .subscribe(
                                        (data) => {
                                            (this.awardType = data),
                                                this.toasterService.showSuccessToast(
                                                    'Award updated successfully'
                                                );
                                            this.closeForm();
                                        },
                                        (err) => {
                                            if(err.status == 409)
                                            {
                                                this.toasterService.showErrorToast("Award name already exsists");
                                            }else{
                                                this.toasterService.showErrorToast("Failed to update award");
                                            }
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

    validate(): boolean {
        if (!this.awardType.awardName?.trim()) {
            this.toasterService.showErrorToast('Award name cannot be empty!');
            return false;
        } else if (this.awardType.awardPoints == null) {
            this.toasterService.showErrorToast('Award points cannot be empty!');
            return false;
        } else if (!this.awardType.description?.trim()) {
            this.toasterService.showErrorToast('Award description cannot be empty!');
            return false;
        }
        return true;
    }

    ngOnInit() {
         this.isIdPresent = this.route.snapshot.paramMap.has('awardId');
        if (this.isIdPresent) {
            const award = this.route.snapshot.paramMap.get('awardId');
            this.awardTypeService.getAwardType(award).subscribe(
                (data) => {
                    this.awardType = data;
                },
                (err) => {
                    this.toasterService.showErrorToast('Unable to get data');
                }
            );
        }
    }
}
